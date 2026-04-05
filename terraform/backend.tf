terraform {
  backend "s3" {
    bucket       = "brandmotive-tfstate-bucket"
    region       = "ap-south-1"
    use_lockfile = true

    # key is injected at init time via:
    #   terraform init -backend-config="key=laksha-wcf-landing-page/prod/terraform.tfstate"
  }
}
