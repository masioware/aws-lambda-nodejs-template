# Serverless AWS Lambda Template Project

This is a simple Node.js AWS Lambda project deployed using the Serverless Framework. It provides a basic function as a starting point for your serverless applications.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (Node.js 18.x)
- [Serverless Framework](https://www.serverless.com/)
- [AWS CLI](https://aws.amazon.com/cli/)

## Setup

1. Configure AWS CLI with your AWS credentials:

   ```bash
   aws configure
   ```

2. Install Serverless Framework:

   ```bash
   npm install -g serverless
   ```

3. Deploy the project to AWS Lambda:
   ```bash
   npm run deploy
   ```

## Usage

1. To invoke the deployed Lambda function, use the following command:
   ```bash
   npm run invoke
   ```

## Clean Up

1. To remove the deployed resources from AWS, you can use the following command:
   ```bash
   npm run remove
   ```
