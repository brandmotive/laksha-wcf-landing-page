variable "aws_region" {
  description = "Primary AWS region for S3 and Route 53"
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
  default     = "laksha-wcf-landing-page"
}

variable "environment" {
  description = "Environment identifier (dev, staging, prod)"
  type        = string
  default     = "prod"

  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be one of: dev, staging, prod."
  }
}

variable "domain_name" {
  description = "Root domain name for the website"
  type        = string
  default     = "lakshawcfhospitals.in"
}
