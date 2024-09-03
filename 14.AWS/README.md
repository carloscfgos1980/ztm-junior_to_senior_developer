## Chapter 14.AWS

# Lesson 1. Bruno's Request

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12662332

# Lesson 2. Section Overview

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12662338

# Lesson 3. Amazon Web Services

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12662334

EC2 => Basic service you can run
S3 => Object Storage Service. Load any file or folder. Size limit of 5 Gbs
Lambda => You can run code for any kind of application of backend service
Cloudfront => Speeds up distribution of our client files
DynamoDB => NoSQL database

- Check <flow charts> diagram

# Lesson 4. Monolithic vs Micro Services

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12662331

# Lesson 5. Amazon Lambda

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12662335

# Lesson 6. Amazon Lambda Dashboard

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12662333

# Lesson 7. Serverless

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12662343

1. Install serverless. It helps to deploy from CLI
   sudo npm install -g serverless

2. Run the command for serverless. It shows all the features
   serverless

3. sls create -t aws-nodejs
   sls = serverless
   -t = --template

4. Create a folder "rankly" and place the recently created files:
   .gitignore
   handler.js
   serverless.yml

# Lesson 8. Serverless 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12662340

mkdir rankly
cd rankly

# Lesson 9. IAM

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12662341

- Data from my AWS profile after creating a new user

URL:
https://058739584817.signin.aws.amazon.com/console

User name: rankly-lambda

pwd: #a+oN2N@

CLI:
sls config credentials --provider aws --key [key] --secret [secret]

- This probably already changed. If I need to use it. I will have to learn this by my self

# Lesson 10. Deploying A Function

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12662347

Run lambda function in AWS:
sls deploy

sls invoke --function rank

- Before in the .yml file I need to change the name of the function from "hello" to "rank"

# Lesson 11. Deploying A Function 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12662336

# Lesson 12. Deploying A Function 3

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12662339

# Lesson 13. Quick Bug Fix

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12662342

# Lesson 14. Section Summary

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12662345

- Added Amazon Lambda function for ranking system
