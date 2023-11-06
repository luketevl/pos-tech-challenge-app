resource "aws_ecr_repository" "this" {
  name                 = "restaurante-service"
  image_tag_mutability = "IMMUTABLE"
  image_scanning_configuration {
    scan_on_push = true
  }
  tags = local.common_tags
}
