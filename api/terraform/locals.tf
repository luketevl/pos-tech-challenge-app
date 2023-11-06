locals {
  common_tags = {
    Project   = "Api with Terraform"
    CreatedAt = formatdate("YYYY-MM-DD", timestamp())
    ManagedBy = "Terraform"
    Owner     = "luketevl"
  }
}