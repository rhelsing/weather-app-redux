#!/bin/bash
#aws s3 mb s3://bucket-name
#aws s3 ls
npm run build
aws s3 cp bundle.js s3://rhelsing-weather/bundle.js
aws s3 cp style/style.css s3://rhelsing-weather/style/style.css
aws s3 cp index.html s3://rhelsing-weather/index.html

#enable hosting at index.html
# {
#   "Id": "Policy1501686215124",
#   "Version": "2012-10-17",
#   "Statement": [
#     {
#       "Sid": "Stmt1501686212513",
#       "Action": [
#         "s3:GetObject"
#       ],
#       "Effect": "Allow",
#       "Resource": "arn:aws:s3:::rhelsing-weather/*",
#       "Principal": "*"
#     }
#   ]
# }
