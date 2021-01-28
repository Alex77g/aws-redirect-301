# Redirect from zone to zone with https

## Install

serverless deploy --stage=prod

## Permissions

IAM is available after deploying the lambda function

goto: https://console.aws.amazon.com/iam/home?region=eu-central-1#/roles/aws-redirect-301-prod-us-east-1-lambdaRole?section=trust

Add this role under the Trust Relationship tab in IAM (do not add it under the Permissions tab).
At the Role aws-redirect-301-prod-us-east-1-lambdaRole

```bash
{
   "Version": "2012-10-17",
   "Statement": [
      {
         "Effect": "Allow",
         "Principal": {
            "Service": [
               "lambda.amazonaws.com",
               "edgelambda.amazonaws.com"
            ]
         },
         "Action": "sts:AssumeRole"
      }
   ]
}
```

## Cloudfront

add the lambda in behavior tab of the desired distribution

then goto *Lambda Function Associations*

add *CloudFront Event* - *viewer request* - and arn with a version number and do not include body

example arn: arn:aws:lambda:us-east-1:</your-aws-arn-id/>:function:aws-redirect-301-prod-index:<version(1/2/3...)>

## region

edgelambda region must be us-east-1

## event

origin must be the rediricting bucket url  
example: s3://</origin-bucket/>.s3-website.</bucket-region/>.amazonaws.com
