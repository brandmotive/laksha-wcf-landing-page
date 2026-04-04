variable "aws_region" {
  description = "Primary AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "state_bucket_name" {
  description = "Name of the S3 bucket for Terraform state storage (must be globally unique)"
  type        = string
  default     = "brandmotive-tfstate-bucket"
}

variable "github_org" {
  description = "GitHub organization or username that owns the repository"
  type        = string
  default     = "brandmotive"
}

variable "github_repo" {
  description = "GitHub repository name"
  type        = string
  default     = "laksha-wcf-landing-page"
}

variable "domain_name" {
  description = "Root domain name for the website to issue shared certificates for"
  type        = string
  default     = "lakshawcfhospitals.in"
}
