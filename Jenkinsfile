// =============================================================================
// Deploy: Terraform + Build + Deploy to S3/CloudFront
// =============================================================================
// Triggered automatically on push to main, staging, or dev branches
// via GitHub App webhook (Multibranch Pipeline).
//
// Flow: Init → Validate → Plan → (Approval) → Apply → Build → Deploy
//
// All tools run as Docker containers on the Jenkins agent:
//   - hashicorp/terraform   → Terraform stages
//   - node                  → Frontend build
//   - amazon/aws-cli        → S3 sync + CloudFront invalidation
//
// Integration:
//   - GitHub App + GitHub Checks plugin for PR/commit status reporting
//   - AWS Credentials plugin for IAM authentication
// =============================================================================

pipeline {
    agent any

    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '20'))
        disableConcurrentBuilds()
    }

    environment {
        AWS_REGION       = 'ap-south-1'
        ENVIRONMENT      = "${env.BRANCH_NAME == 'main' ? 'prod' : env.BRANCH_NAME}"
        TF_IN_AUTOMATION = 'true'
    }

    stages {
        // =====================================================================
        // Stage 1: Terraform Init + Validate + Format Check
        // =====================================================================
        stage('Terraform Init') {
            agent {
                docker {
                    image 'hashicorp/terraform:1.12.0'
                    reuseNode true
                }
            }
            steps {
                publishChecks(
                    name: 'Deploy Pipeline',
                    status: 'IN_PROGRESS',
                    title: "Terraform Init (${env.ENVIRONMENT})",
                    summary: 'Initializing Terraform and validating configuration...'
                )

                dir('terraform') {
                    withCredentials([[
                        $class: 'AmazonWebServicesCredentialsBinding',
                        credentialsId: 'aws-credentials-id'
                    ]]) {
                        sh """
                            terraform init \
                                -input=false \
                                -backend-config="key=laksha-wcf-landing-page/${env.ENVIRONMENT}/terraform.tfstate"
                        """
                        sh 'terraform validate'
                        sh 'terraform fmt -check -recursive'
                    }
                }
            }
        }

        // =====================================================================
        // Stage 2: Terraform Plan
        // =====================================================================
        stage('Terraform Plan') {
            agent {
                docker {
                    image 'hashicorp/terraform:1.12.0'
                    reuseNode true
                }
            }
            steps {
                publishChecks(
                    name: 'Deploy Pipeline',
                    status: 'IN_PROGRESS',
                    title: "Terraform Plan (${env.ENVIRONMENT})",
                    summary: 'Generating execution plan...'
                )

                dir('terraform') {
                    withCredentials([[
                        $class: 'AmazonWebServicesCredentialsBinding',
                        credentialsId: 'aws-credentials-id'
                    ]]) {
                        script {
                            def exitCode = sh(
                                script: """
                                    terraform plan \
                                        -var-file="environments/${env.ENVIRONMENT}.tfvars" \
                                        -out=tfplan \
                                        -detailed-exitcode \
                                        -input=false
                                """,
                                returnStatus: true
                            )

                            if (exitCode == 0) {
                                env.HAS_CHANGES = 'false'
                                echo 'No infrastructure changes detected.'
                            } else if (exitCode == 2) {
                                env.HAS_CHANGES = 'true'
                                echo 'Infrastructure changes detected.'
                            } else {
                                error('Terraform plan failed.')
                            }

                            // Generate human-readable plan output
                            sh 'terraform show -no-color tfplan > plan-output.txt'
                        }
                    }
                }
            }
        }

        // =====================================================================
        // Stage 3: Publish Plan Summary (GitHub Check + Console)
        // =====================================================================
        stage('Publish Plan') {
            steps {
                script {
                    def planText = readFile('terraform/plan-output.txt').trim()

                    // Truncate for GitHub Check API limit (~65535 chars)
                    if (planText.length() > 60000) {
                        planText = planText.substring(0, 60000) +
                            '\n\n... [truncated — see Jenkins console for full output]'
                    }

                    publishChecks(
                        name: 'Terraform Plan',
                        status: 'COMPLETED',
                        conclusion: 'NEUTRAL',
                        title: "Plan — ${env.ENVIRONMENT} (changes: ${env.HAS_CHANGES})",
                        summary: "Terraform plan for **${env.ENVIRONMENT}** completed. " +
                                 "Changes detected: **${env.HAS_CHANGES}**.",
                        text: "```hcl\n${planText}\n```"
                    )
                }
            }
        }

        // =====================================================================
        // Stage 4: Manual Approval (only when infra changes exist)
        // =====================================================================
        stage('Approval') {
            when {
                expression { env.HAS_CHANGES == 'true' }
            }
            steps {
                publishChecks(
                    name: 'Deploy Pipeline',
                    status: 'IN_PROGRESS',
                    title: "Awaiting Approval (${env.ENVIRONMENT})",
                    summary: 'Terraform plan has changes. Waiting for a maintainer to approve.'
                )

                timeout(time: 1, unit: 'HOURS') {
                    input(
                        message: "Apply Terraform changes to ${env.ENVIRONMENT}?",
                        ok: 'Apply'
                    )
                }
            }
        }

        // =====================================================================
        // Stage 5: Terraform Apply
        // =====================================================================
        stage('Terraform Apply') {
            when {
                expression { env.HAS_CHANGES == 'true' }
            }
            agent {
                docker {
                    image 'hashicorp/terraform:1.12.0'
                    reuseNode true
                }
            }
            steps {
                publishChecks(
                    name: 'Deploy Pipeline',
                    status: 'IN_PROGRESS',
                    title: "Terraform Apply (${env.ENVIRONMENT})",
                    summary: 'Applying infrastructure changes...'
                )

                dir('terraform') {
                    withCredentials([[
                        $class: 'AmazonWebServicesCredentialsBinding',
                        credentialsId: 'aws-credentials-id'
                    ]]) {
                        sh 'terraform apply -input=false -auto-approve tfplan'
                    }
                }
            }
        }

        // =====================================================================
        // Stage 6: Export Terraform Outputs
        // =====================================================================
        stage('Export Outputs') {
            agent {
                docker {
                    image 'hashicorp/terraform:1.12.0'
                    reuseNode true
                }
            }
            steps {
                dir('terraform') {
                    withCredentials([[
                        $class: 'AmazonWebServicesCredentialsBinding',
                        credentialsId: 'aws-credentials-id'
                    ]]) {
                        script {
                            def tfOut = sh(
                                script: 'terraform output -json 2>/dev/null || echo "{}"',
                                returnStdout: true
                            ).trim()

                            def outputs = readJSON text: tfOut
                            env.S3_BUCKET_NAME = outputs?.s3_bucket_name?.value ?: ''
                            env.CLOUDFRONT_DISTRIBUTION_ID = outputs?.cloudfront_distribution_id?.value ?: ''

                            if (!env.S3_BUCKET_NAME || !env.CLOUDFRONT_DISTRIBUTION_ID) {
                                error('Terraform outputs missing. Cannot deploy — has infrastructure been provisioned?')
                            }

                            echo "S3 Bucket: ${env.S3_BUCKET_NAME}"
                            echo "CloudFront Distribution: ${env.CLOUDFRONT_DISTRIBUTION_ID}"
                        }
                    }
                }
            }
        }

        // =====================================================================
        // Stage 7: Build Frontend
        // =====================================================================
        stage('Build Frontend') {
            agent {
                docker {
                    image 'node:24-alpine'
                    reuseNode true
                }
            }
            steps {
                publishChecks(
                    name: 'Deploy Pipeline',
                    status: 'IN_PROGRESS',
                    title: "Build Frontend (${env.ENVIRONMENT})",
                    summary: 'Installing dependencies and building the React application...'
                )

                dir('frontend') {
                    sh 'npm ci'
                    sh 'npm run build'
                }
            }
        }

        // =====================================================================
        // Stage 8: Deploy to S3 + Invalidate CloudFront
        // =====================================================================
        stage('Deploy') {
            agent {
                docker {
                    image 'amazon/aws-cli:latest'
                    reuseNode true
                    args '--entrypoint=""'
                }
            }
            steps {
                publishChecks(
                    name: 'Deploy Pipeline',
                    status: 'IN_PROGRESS',
                    title: "Deploy to S3 (${env.ENVIRONMENT})",
                    summary: 'Syncing build assets to S3 and invalidating CloudFront cache...'
                )

                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-credentials-id'
                ]]) {
                    sh """
                        aws s3 sync frontend/dist/ s3://${env.S3_BUCKET_NAME} \
                            --region ${env.AWS_REGION} \
                            --delete \
                            --cache-control "public, max-age=31536000, immutable" \
                            --exclude "index.html" \
                            --exclude "*.json"

                        aws s3 cp frontend/dist/index.html s3://${env.S3_BUCKET_NAME}/index.html \
                            --region ${env.AWS_REGION} \
                            --cache-control "public, max-age=0, must-revalidate"

                        aws s3 sync frontend/dist/ s3://${env.S3_BUCKET_NAME} \
                            --region ${env.AWS_REGION} \
                            --exclude "*" \
                            --include "*.json" \
                            --cache-control "public, max-age=0, must-revalidate"
                    """

                    sh """
                        aws cloudfront create-invalidation \
                            --region ${env.AWS_REGION} \
                            --distribution-id ${env.CLOUDFRONT_DISTRIBUTION_ID} \
                            --paths "/*"
                    """
                }
            }
        }
    }

    // =========================================================================
    // Post Actions — Final GitHub Check status
    // =========================================================================
    post {
        success {
            publishChecks(
                name: 'Deploy Pipeline',
                status: 'COMPLETED',
                conclusion: 'SUCCESS',
                title: "Deploy Succeeded (${env.ENVIRONMENT})",
                summary: "Infrastructure and frontend deployed successfully to **${env.ENVIRONMENT}**."
            )
        }
        failure {
            publishChecks(
                name: 'Deploy Pipeline',
                status: 'COMPLETED',
                conclusion: 'FAILURE',
                title: "Deploy Failed (${env.ENVIRONMENT})",
                summary: "Pipeline failed for **${env.ENVIRONMENT}**. Check Jenkins console output for details."
            )
        }
        aborted {
            publishChecks(
                name: 'Deploy Pipeline',
                status: 'COMPLETED',
                conclusion: 'CANCELED',
                title: "Deploy Cancelled (${env.ENVIRONMENT})",
                summary: "Pipeline was aborted for **${env.ENVIRONMENT}**."
            )
        }
        always {
            cleanWs()
        }
    }
}
