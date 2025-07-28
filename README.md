# ☁️ AWS Serverless Portfolio

A modern, responsive portfolio website demonstrating **full-stack serverless development** using AWS cloud services.

## Live Demo
- **Portfolio Website**: https://d6ilnbijb94mf.cloudfront.net
- **Contact Form API**: Serverless backend processing form submissions

## Architecture Overview

User Request → CloudFront (CDN) → S3 (Static Site) → API Gateway → Lambda → DynamoDB


**Frontend**: Modern HTML5/CSS3/JavaScript with responsive design  
**Backend**: Node.js Lambda functions processing contact forms  
**Database**: DynamoDB storing contact messages  
**CDN**: Global CloudFront distribution with HTTPS  

## Technologies Used

### AWS Cloud Services
- **S3** - Static website hosting
- **CloudFront** - Global CDN with HTTPS
- **API Gateway** - RESTful API with CORS
- **Lambda** - Serverless function processing  
- **DynamoDB** - NoSQL database storage
- **IAM** - Security and access management

### Development Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, AWS SDK
- **Deployment**: AWS CLI, Infrastructure as Code

## Key Features

- Responsive Design - Mobile-first approach
- Serverless Contact Form - Real-time processing
- CORS Configuration - Cross-origin request handling
- Error Handling - Graceful failure management
- Modern UI/UX - Professional animations
- Global Distribution - CloudFront edge locations

## Project Highlights

### Technical Challenges Solved
- **CORS Configuration**: Implemented proper preflight handling
- **Lambda Packaging**: Resolved Node.js 18.x aws-sdk dependencies
- **API Gateway Integration**: Configured METHOD and OPTIONS responses
- **Error Debugging**: Used CloudWatch logs for troubleshooting

### Business Value
- **Scalable**: Auto-scaling based on demand
- **Cost-Effective**: ~$1/month operational cost
- **Global**: <200ms response time worldwide
- **Secure**: HTTPS, IAM roles, input validation

## Project Structure

aws-serverless-portfolio/
├── frontend/ # Modern responsive website
├── backend/ # Serverless Lambda functions
├── docs/ # Documentation and diagrams
└── README.md # This file


## Quick Start

### Prerequisites
- AWS CLI configured
- Node.js 18.x installed

### Deployment
Clone repository
git clone https://github.com/rishi99138/aws-serverless-portfolio.git
cd aws-serverless-portfolio

Deploy frontend
aws s3 sync frontend/ s3://your-bucket-name/

Deploy Lambda function
cd backend/lambda
aws lambda update-function-code --function-name your-function --zip-file fileb://lambda-function.zip


## Development Journey

### Phase 1: Static Website
- Designed modern, responsive portfolio
- Implemented CSS Grid/Flexbox layouts
- Added smooth animations and interactions

### Phase 2: Cloud Infrastructure
- Set up S3 static hosting
- Configured CloudFront distribution
- Implemented HTTPS certificate

### Phase 3: Serverless Backend
- Developed Lambda contact form processor
- Created API Gateway with CORS
- Set up DynamoDB table structure

### Phase 4: Integration & Debugging
- Resolved CORS preflight issues
- Fixed Lambda Node.js 18.x dependencies
- Implemented comprehensive error handling

## Skills Demonstrated

### Cloud Architecture
- Serverless design patterns
- Cost optimization strategies
- Security best practices
- Performance optimization

### Development
- Full-stack development
- RESTful API design
- Database modeling
- Frontend frameworks

### DevOps
- Infrastructure as Code
- CI/CD pipeline concepts
- Monitoring and logging
- Debugging and troubleshooting

## Project Metrics

| Metric | Value |
|--------|-------|
| AWS Services | 6+ integrated |
| Response Time | <200ms globally |
| Uptime | 99.9% (AWS SLA) |
| Monthly Cost | <$1 for low traffic |
| Code Coverage | Frontend + Backend |

## Future Roadmap

- Email Notifications - SES integration for contact alerts
- Analytics Dashboard - CloudWatch metrics visualization  
- Admin Panel - Message management interface
- Blog Integration - Headless CMS with API
- Multi-language - i18n support

## Contact

- **Email**: rishimandal991138@gmail.com
- **LinkedIn**: [Rishi Mandal](https://www.linkedin.com/in/rishi-mandal-00965231b/)
- **Portfolio**: https://d6ilnbijb94mf.cloudfront.net

---

*Built with passion using AWS Serverless Technologies*
