# Laksha WCF Landing Page

This repository contains the frontend application and infrastructure-as-code for the Laksha WCF landing page. 

It is built with **Vite, React, TypeScript, and Tailwind CSS**. High-availability hosting is configured on AWS using **S3 and CloudFront**, managed entirely via **Terraform** and deployed via **GitHub Actions**.

---

## 🏗 Repository Structure

- `frontend/` - Contains the React application (Vite framework).
- `terraform/` - Contains all AWS infrastructure configurations.
  - `bootstrap/` - One-time setup for the Terraform state bucket and OIDC role.
  - `environments/` - Environment-specific configuration files (`.tfvars`).
- `.github/workflows/` - Contains the CI/CD deployment pipeline.

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

## 🚀 CI/CD & Environments

Deployments are entirely automated using GitHub Actions. We use **GitHub OIDC** (OpenID Connect) to authenticate to AWS, meaning there are **no long-lived AWS secret keys stored in GitHub**.

### The Environments Explained (For Newcomers)
In modern software development, we use a process called "Release Management" to make sure broken code never reaches the live site. We do this by passing work through different stages:

1. **🛠 Dev (Development)** — *The Sandbox*
   *   **What it is:** A safe place to test new code in a real cloud environment.
   *   **Rule of thumb:** It’s okay if things break here. When you finish a new feature or fix a bug, push it to the `dev` branch to see how it looks on a real server, not just your local machine.
   *   **URL:** [https://dev.lakshawcfhospitals.in](https://dev.lakshawcfhospitals.in)

2. **🎭 Staging** — *The Dress Rehearsal*
   *   **What it is:** An exact, identical clone of Production. 
   *   **Rule of thumb:** This is the final checkpoint. You, the team, or clients review the site here to verify it works perfectly before the public sees it. If a bug makes it here, we fix it *before* pushing to Prod.
   *   **URL:** [https://staging.lakshawcfhospitals.in](https://staging.lakshawcfhospitals.in)

3. **🌟 Prod (Production)** — *The Live Show*
   *   **What it is:** The real, live website that real patients and customers interact with.
   *   **Rule of thumb:** This must be 100% stable. Only code that has survived Dev and Staging gets pushed to the `main` branch.
   *   **URL:** [https://lakshawcfhospitals.in](https://lakshawcfhospitals.in) (and www)

### Branches & Automatic Deployment
Deployments are mapped automatically based on the branch you push to:
- Push to **`dev`** branch ➔ Deploys to the **`dev`** environment (`dev.lakshawcfhospitals.in`).
- Push to **`staging`** branch ➔ Deploys to the **`staging`** environment (`staging.lakshawcfhospitals.in`).
- Push to **`main`** branch ➔ Deploys to the **`prod`** environment (`lakshawcfhospitals.in` and `www.lakshawcfhospitals.in`).

> **Note:** You can also trigger a deployment manually using the "Run workflow" button in the GitHub Actions tab (via `workflow_dispatch`).

### The Deployment Pipeline
When a deployment triggers, it goes through 3 stages:
1. **Plan:** Terraform calculates what infrastructure needs to change and saves the plan. The plan is published in the GitHub Actions Job Summary for you to review.
2. **Apply (Requires Approval):** Before making changes, GitHub pauses. A repository maintainer must click the **Approve** button in the GitHub UI for the target environment. Once approved, Terraform applies the infrastructure changes.
3. **Deploy:** The frontend application is built (`npm run build`) and the static assets in `frontend/dist/` are synced securely to the AWS S3 bucket. Finally, the CloudFront cache is invalidated to serve the fresh website.

---

## 🌐 Infrastructure Management (Terraform)

The AWS infrastructure consists of:
- A private **S3 Bucket** to store the built frontend assets.
- A **CloudFront Distribution** that acts as a CDN, providing fast global caching, HTTPS encryption, and SPA (Single Page Application) routing (safely routing 4xx errors back to `index.html`).
- **ACM Certificates** for secure SSL/HTTPS on our domains.
- **Route 53** records pointing the domains directly to CloudFront.

State is kept remotely in S3 with native file locking (`use_lockfile = true`) allowing multiple developers to collaborate safely without colliding.

### Bootstrapping (One-Time Setup context)
If you ever need to deploy this repository to an entirely new AWS account, a manual bootstrap process is required *first* to set up the remote backend:

```bash
cd terraform/bootstrap
terraform init
terraform apply 
```
After bootstrapping runs, take the resulting `AWS_ROLE_ARN` output and add it as a repository variable in GitHub (`Settings -> Secrets and variables -> Actions -> Variables`). Also, configure the "Required reviewers" in the repository Environments tab.
