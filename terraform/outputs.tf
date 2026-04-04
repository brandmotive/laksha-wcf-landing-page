output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.website.domain_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (used for cache invalidation)"
  value       = aws_cloudfront_distribution.website.id
}

output "s3_bucket_name" {
  description = "S3 bucket name for website assets"
  value       = aws_s3_bucket.website.id
}

output "website_url" {
  description = "Primary website URL"
  value       = "https://${var.domain_name}"
}

output "route53_nameservers" {
  description = "Route 53 nameservers — update your domain registrar to use these"
  value       = data.aws_route53_zone.main.name_servers
}
