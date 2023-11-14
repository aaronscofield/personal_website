provider "aws" {
  region = "us-east-1"
}

module "public_s3_bucket" {
  source      = "./.terraform/modules/s3_bucket"
  bucket_name = "usea1-scofield-website-public-assets"
}

module "dynamo_db_table" {
  source     = "./.terraform/modules/dynamodb_table"
  table_name = "cafe-tracker-dynamodb-table"
}