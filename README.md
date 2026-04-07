# Laksha WCF Landing Page

This repository contains the frontend application and infrastructure-as-code for the Laksha WCF landing page. 

It is built with **Vite, React, TypeScript, and Tailwind CSS**. High-availability hosting is configured on AWS using **S3 and CloudFront**, managed entirely via **Terraform** and deployed via **Jenkins**.

---

## 🏗 Repository Structure

- `frontend/` - Contains the React application (Vite framework).
- `terraform/` - Contains all AWS infrastructure configurations.
  - `bootstrap/` - One-time setup for the Terraform state bucket and OIDC role.
  - `environments/` - Environment-specific configuration files (`.tfvars`).
- `Jenkinsfile` - The declarative CI/CD deploy pipeline.
- `Jenkinsfile.destroy` - The declarative CI/CD destroy pipeline (manual trigger only).
- `.github/workflows/` - (Legacy) GitHub Actions workflows — superseded by Jenkins.

---

## 💻 Local Development (Frontend)

To run the React application on your local machine:

**Pre-requisites:**
- Node.js (v20+)
- npm (v10+)

**Setup:**
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. To build for production locally:
   ```bash
   npm run build
   ```

---

## 🚀 CI/CD — Jenkins

Deployments are automated using **Jenkins** with a **Multibranch Pipeline**. Jenkins integrates with GitHub via a **GitHub App** and uses the **GitHub Checks plugin** to report pipeline status directly on commits and pull requests.

The Jenkins agent (EC2 slave) has only **Docker** installed. All tools — Terraform, Node.js, and AWS CLI — run as Docker containers per stage.

### Docker Images Used

| Stage | Image | Purpose |
|-------|-------|---------|
| Terraform Init / Plan / Apply | `hashicorp/terraform:1.12.0` | Infrastructure management |
| Build Frontend | `node:24-alpine` | `npm ci` + `npm run build` |
| Deploy to S3 | `amazon/aws-cli:latest` | S3 sync + CloudFront invalidation |

### The Environments

1. **🛠 Dev (Development)** — *The Sandbox*
   *   **URL:** [https://dev.lakshawcfhospitals.in](https://dev.lakshawcfhospitals.in)

2. **🎭 Staging** — *The Dress Rehearsal*
   *   **URL:** [https://staging.lakshawcfhospitals.in](https://staging.lakshawcfhospitals.in)

3. **🌟 Prod (Production)** — *The Live Show*
   *   **URL:** [https://lakshawcfhospitals.in](https://lakshawcfhospitals.in) (and www)

### Branches & Automatic Deployment
Deployments are mapped automatically based on the branch you push to:
- Push to **`dev`** branch ➔ Deploys to the **`dev`** environment.
- Push to **`staging`** branch ➔ Deploys to the **`staging`** environment.
- Push to **`main`** branch ➔ Deploys to the **`prod`** environment.

### The Deploy Pipeline (`Jenkinsfile`)

When a push triggers the pipeline, it goes through these stages:

1. **Terraform Init** — Initializes Terraform with the correct backend key for the environment. Also runs `validate` and `fmt -check`.
2. **Terraform Plan** — Calculates what infrastructure needs to change and saves the plan.
3. **Publish Plan** — Posts the plan summary as a GitHub Check on the commit for review.
4. **Approval** — Pipeline pauses. A maintainer must click **"Apply"** in the Jenkins UI. _(Only if changes exist; times out after 1 hour.)_
5. **Terraform Apply** — Applies the approved infrastructure changes.
6. **Export Outputs** — Reads S3 bucket name and CloudFront distribution ID from Terraform state.
7. **Build Frontend** — Runs `npm ci && npm run build` in the `frontend/` directory.
8. **Deploy** — Syncs `frontend/dist/` to S3 and invalidates the CloudFront cache.

### The Destroy Pipeline (`Jenkinsfile.destroy`)

Triggered **manually only** from the Jenkins UI with an **ENVIRONMENT** parameter:

1. **Terraform Init** → **Plan Destroy** → **Approval** → **Apply Destroy**

> ⚠️ This will **permanently delete** all AWS resources for the selected environment.

---

## 🔌 Jenkins Setup Prerequisites

### Required Plugins

| Plugin | Purpose |
|--------|---------|
| **GitHub Branch Source** | Multibranch pipeline scanning via GitHub App |
| **GitHub Checks** | `publishChecks()` for commit/PR status |
| **Checks API** | Dependency of GitHub Checks |
| **Pipeline** | Declarative pipeline support |
| **Pipeline Utility Steps** | `readJSON`, `readFile` in pipeline scripts |
| **Docker Pipeline** | Docker container agents (`agent { docker { ... } }`) |
| **AWS Credentials** | AWS Access Key injection via `withCredentials` |
| **AnsiColor** | Colored Terraform output in build logs |
| **Timestamper** | Timestamps in build logs |

### GitHub App Configuration

1. Create a GitHub App in `brandmotive` org → **Developer settings → GitHub Apps → New**
2. Set the following permissions:
   - **Checks:** Read & Write
   - **Commit statuses:** Read & write
   - **Contents:** Read-only
   - **Metadata:** Read-only
   - **Pull Requests:** Read-only
3. Subscribe to events: **Push**, **Pull Request**, **Check Run**, **Check Suite**
4. Set Webhook URL to: `https://<your-jenkins-url>/github-webhook/`
5. Generate a private key and convert to PKCS8:
   ```bash
   openssl pkcs8 -topk8 -inform PEM -outform PEM -in your-key.pem -out converted-key.pem -nocrypt
   ```
6. Install the app on the `laksha-wcf-landing-page` repository.

### Jenkins Credentials

Add these credentials in **Manage Jenkins → Credentials → System → Global**:

| ID | Kind | Description |
|----|------|-------------|
| `github-app-creds` | GitHub App | App ID + converted PKCS8 private key |
| `aws-credentials-id` | AWS Credentials | Access Key ID + Secret Access Key for the CI IAM user |

### Jenkins Jobs

1. **Multibranch Pipeline** (Deploy)
   - Source: GitHub, credential: `github-app-creds`
   - Discover branches: `main`, `staging`, `dev`
   - Build Configuration: by Jenkinsfile → `Jenkinsfile`

2. **Pipeline Job** (Destroy)
   - Source: Pipeline from SCM → `Jenkinsfile.destroy`
   - Parameterized: `ENVIRONMENT` (choice: dev / staging / prod)
   - Trigger: Manual only

---

## 🌐 Infrastructure Management (Terraform)

The AWS infrastructure consists of:
- A private **S3 Bucket** to store the built frontend assets.
- A **CloudFront Distribution** that acts as a CDN, providing fast global caching, HTTPS encryption, and SPA routing.
- **ACM Certificates** for secure SSL/HTTPS on our domains.
- **Route 53** records pointing the domains directly to CloudFront.

State is kept remotely in S3 with native file locking (`use_lockfile = true`).

### Bootstrapping (One-Time Setup)
If deploying to an entirely new AWS account, a manual bootstrap process is required *first* to set up the remote backend:

```bash
cd terraform/bootstrap
terraform init
terraform apply
```

After bootstrapping, take the resulting `AWS_ROLE_ARN` output and configure your Jenkins AWS credentials to assume that role (if using role-based access). Also, configure the GitHub App and install it on the repository.
