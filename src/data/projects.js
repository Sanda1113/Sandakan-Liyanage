// Each project renders a "View Code" button plus, when set:
//   screenshots  → a cover image on the card and a "Screenshots" gallery modal
//                  (first entry is the cover; `contain: true` shows it uncropped)
//   reportUrl    → a "View Report" button that opens the PDF in a new tab
//                  (PDFs live in /public/reports so browsers render them inline)
//   architecture → a "View Architecture" case-study modal
// Image paths are relative to /public.
export const projects = [
  {
    title: 'Nestlé Finance Command Center',
    role: 'Full Stack Developer, Scrum Master & QA',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase PostgreSQL', 'Mindee OCR', 'Socket.IO', 'Docker'],
    description:
      'AI-powered Procure-to-Pay platform with supplier, finance and warehouse portals. AI document extraction feeds true 3-way matching (Invoice = PO = Goods Received), with smart-tolerance auto-approval, a drag-and-drop treasury payout calendar, dynamic discounting for early payouts and real-time in-app chat and alerts.',
    result: 'Invoices that match within the configured tolerance are approved automatically, without manual review.',
    repoUrl: 'https://github.com/Sanda1113/nestle-finance-command',
    screenshots: [
      { src: '/images/projects/nestle/nestle-01.jpg', caption: 'Supplier portal: upload a BOQ and the AI extracts vendor, PO, line items and totals automatically' },
      { src: '/images/projects/nestle/nestle-08.jpg', caption: 'Finance Procurement Dashboard: review extracted quotes and dispatch official POs with one click' },
      { src: '/images/projects/nestle/nestle-04.jpg', caption: 'Finance Review Queue: 3-way document context (BOQ, PO, invoice), lifecycle timeline, variance detection and live chat' },
      { src: '/images/projects/nestle/nestle-03.jpg', caption: 'Supplier payout calendar with real-time liquidity forecast, reminders and early-payout offers' },
      { src: '/images/projects/nestle/nestle-02.jpg', caption: 'Active shipments: download the official PO, mark delivered and chat with the finance team' },
      { src: '/images/projects/nestle/nestle-09.jpg', caption: 'Warehouse Dock Logistics: pending and completed shipments with trust scores and an offline queue' },
      { src: '/images/projects/nestle/nestle-05.jpg', caption: 'Blind receiving: ordered quantities are hidden so dock staff must physically count before signing the GRN' },
      { src: '/images/projects/nestle/nestle-07.jpg', caption: 'Supplier Support Hub: real-time chat with Finance, Warehouse and Procurement plus an AI assistant' },
      { src: '/images/projects/nestle/nestle-06.jpg', caption: 'Built-in guided onboarding tour (30 steps) walks new suppliers through every tab' },
    ],
  },
  {
    title: 'NexaCart — Enterprise Cloud Migration on AWS',
    role: 'Cloud Architect · Individual assignment',
    tech: ['AWS VPC', 'EC2 Auto Scaling', 'ALB', 'RDS', 'S3', 'CloudFormation', 'Route 53'],
    description:
      'Migration of an on-premises e-commerce platform to a highly available 3-tier AWS architecture across two Availability Zones. The core stack (24 resources: VPC, ALB, Auto Scaling group, RDS, S3, tiered security groups) was deployed with CloudFormation. Cross-region warm-standby disaster recovery is designed for Mumbai → Singapore with Route 53 DNS failover.',
    result: 'Designed for RTO 15–30 minutes and RPO under 1 hour.',
    repoUrl: 'https://github.com/Sanda1113/nexacart-aws-cloud-migration',
    reportUrl: '/reports/NexaCart-AWS-Cloud-Migration-Report.pdf',
    screenshots: [
      { src: '/images/projects/nexacart/nexacart-architecture.webp', contain: true, caption: 'Target architecture: Route 53 → ALB → Auto Scaling web tier across two AZs, Multi-AZ RDS in private subnets and an S3 media bucket' },
      { src: '/images/projects/nexacart/nexacart-01-live-site.jpg', caption: 'Load balancing proof: the live site served through the ALB by an auto-scaled web server' },
      { src: '/images/projects/nexacart/nexacart-08-asg.jpg', caption: 'Elasticity proof: NexaCart-Web-ASG running 2 instances with scaling limits 2–4' },
      { src: '/images/projects/nexacart/nexacart-07-launch-template.jpg', caption: 'Launch template NexaCartWebLT: Amazon Linux 2023 AMI resolved via SSM, t2.micro, web security group' },
      { src: '/images/projects/nexacart/nexacart-02-cfn-1.jpg', caption: 'Infrastructure proof: CloudFormation stack NexaCart-Advanced-ASG with 24 resources — ALB listener, target group and security groups' },
      { src: '/images/projects/nexacart/nexacart-03-cfn-2.jpg', caption: 'CloudFormation resources: DB subnets, DB subnet group, Internet Gateway attachment and S3 media bucket' },
      { src: '/images/projects/nexacart/nexacart-04-cfn-3.jpg', caption: 'CloudFormation resources: NexaALB, NexaDB (RDS), NexaIGW, NexaVPC and the public route' },
      { src: '/images/projects/nexacart/nexacart-05-cfn-4.jpg', caption: 'CloudFormation resources: public subnets, route table associations, WebASG and the launch template' },
      { src: '/images/projects/nexacart/nexacart-06-cfn-5.jpg', caption: 'CloudFormation resources: every resource in CREATE_COMPLETE, including the web security group' },
    ],
    architecture: {
      image: '/images/projects/nexacart/nexacart-architecture.webp',
      alt: 'NexaCart 3-tier AWS architecture diagram across two Availability Zones with ALB, Auto Scaling, RDS and S3',
      sections: [
        { heading: 'Problem', body: 'An on-premises e-commerce platform with single points of failure, manual scaling and no tested disaster-recovery plan needed to move to the cloud without downtime risk during peak traffic.' },
        { heading: 'Architecture', body: 'Three tiers inside a custom VPC: a public web tier behind an Application Load Balancer, a private application tier in an Auto Scaling group, and a private database tier on Amazon RDS. Static assets live in S3.' },
        { heading: 'High Availability', body: 'Every tier spans two Availability Zones. The ALB health-checks instances, Auto Scaling replaces unhealthy nodes and scales on demand, and RDS runs Multi-AZ with automatic failover.' },
        { heading: 'Infrastructure as Code', body: 'The core stack — VPC, subnets, route tables, ALB, launch template, Auto Scaling group, RDS, S3 and tiered security groups (24 resources) — is defined in a single CloudFormation template so the environment is repeatable and reviewable.' },
        { heading: 'Disaster Recovery', body: 'A cross-region warm standby in Singapore mirrors the Mumbai primary with a scaled-down footprint and replicated data. Route 53 health checks trigger DNS failover to the standby region.' },
        { heading: 'Security', body: 'Tiered security groups allow only the traffic each layer needs (internet → ALB → app → DB). The database sits in private subnets with no public route, and IAM roles replace long-lived credentials.' },
        { heading: 'Results', body: 'Designed and validated for a recovery time objective of 15–30 minutes and a recovery point objective under 1 hour, with no single Availability Zone as a point of failure.' },
      ],
    },
  },
  {
    title: 'FreshMart — Hybrid Polyglot Cloud Architecture on AWS',
    role: 'Cloud Engineer · Hands-on lab build',
    tech: ['AWS VPC', 'EC2', 'S3', 'DynamoDB', 'NAT Gateway', 'IAM', 'Apache/PHP'],
    description:
      'Cloud platform for a Sri Lankan organic food SME. Built by hand: a custom VPC across two Availability Zones with public and private subnets, an Internet Gateway and a NAT Gateway; an EC2 Apache/PHP backend configured automatically by a User Data script; an S3-hosted storefront; and a DynamoDB orders table. RDS, CloudFront and Route 53 are part of the target design.',
    result: 'The storefront and backend were both live and verified in the AWS lab.',
    repoUrl: 'https://github.com/Sanda1113/freshmart-aws-hybrid-architecture',
    reportUrl: '/reports/FreshMart-AWS-Report.pdf',
    screenshots: [
      { src: '/images/projects/freshmart/freshmart-architecture.webp', contain: true, caption: 'Target architecture: Route 53, WAF and CloudFront in front of an ALB, web servers and NAT gateways across two AZs, RDS primary/standby and S3 assets' },
      { src: '/images/projects/freshmart/freshmart-fig21.jpg', caption: 'Live storefront verified on the S3 static website endpoint' },
      { src: '/images/projects/freshmart/freshmart-fig17.jpg', caption: 'Backend verification: the EC2 Apache/PHP server responding with its instance ID' },
      { src: '/images/projects/freshmart/freshmart-fig22.jpg', caption: 'DynamoDB table FreshMart_Orders active with OrderID and CustomerEmail keys' },
      { src: '/images/projects/freshmart/freshmart-fig05.jpg', caption: 'FreshMart VPC configuration details' },
      { src: '/images/projects/freshmart/freshmart-fig06.jpg', caption: 'Public and private subnets across two Availability Zones' },
      { src: '/images/projects/freshmart/freshmart-fig07.jpg', caption: 'Internet Gateway attached to the FreshMart VPC' },
      { src: '/images/projects/freshmart/freshmart-fig08.jpg', caption: 'Public route table with the default route to the Internet Gateway' },
      { src: '/images/projects/freshmart/freshmart-fig09.jpg', caption: 'Public NAT Gateway so private instances can reach the internet for updates' },
      { src: '/images/projects/freshmart/freshmart-fig10.jpg', caption: 'Elastic IP allocated to the NAT Gateway' },
      { src: '/images/projects/freshmart/freshmart-fig11.jpg', caption: 'Security group inbound rules scoped to the ports each tier needs' },
      { src: '/images/projects/freshmart/freshmart-fig12.jpg', caption: 'IAM LabRole configuration and ARN used by the EC2 instance' },
      { src: '/images/projects/freshmart/freshmart-fig13.jpg', caption: 'AWS managed policies attached to the instance role' },
      { src: '/images/projects/freshmart/freshmart-fig14.jpg', caption: 'EC2 instance launch: general configuration' },
      { src: '/images/projects/freshmart/freshmart-fig15.jpg', caption: 'EC2 instance networking configuration inside the FreshMart VPC' },
      { src: '/images/projects/freshmart/freshmart-fig16.jpg', caption: 'EC2 instance security configuration' },
      { src: '/images/projects/freshmart/freshmart-fig18.jpg', caption: 'S3 bucket created for the static storefront' },
      { src: '/images/projects/freshmart/freshmart-fig19.jpg', caption: 'Website content uploaded to the S3 bucket' },
      { src: '/images/projects/freshmart/freshmart-fig20.jpg', caption: 'Public-read bucket policy enabling static website hosting' },
    ],
    architecture: {
      image: '/images/projects/freshmart/freshmart-architecture.webp',
      alt: 'FreshMart target AWS architecture: Route 53, WAF, CloudFront and an ALB in front of web servers across two Availability Zones with NAT gateways, RDS primary and standby, a bastion host and an S3 assets bucket',
      sections: [
        { heading: 'Problem', body: 'A small organic-food business needed an online storefront and order backend that is cheap to run, secure by default and able to grow without re-architecting.' },
        { heading: 'Architecture', body: 'A custom VPC across two Availability Zones with public and private subnets, an Internet Gateway for inbound traffic and a NAT Gateway so private instances can reach the internet for updates without being exposed.' },
        { heading: 'Frontend', body: 'The storefront is a static site hosted on S3 with static website hosting, served directly to customers with no servers to patch.' },
        { heading: 'Backend', body: 'An EC2 instance runs Apache and PHP. A User Data script installs and configures the stack on first boot so a replacement instance comes up identically with no manual steps.' },
        { heading: 'Data', body: 'Orders are stored in a DynamoDB table for a serverless, pay-per-request data layer. Amazon RDS is specified in the target design for relational reporting.' },
        { heading: 'Security', body: 'Compute runs in private subnets, security groups restrict traffic per tier and the EC2 instance reaches DynamoDB through an IAM role rather than stored access keys.' },
        { heading: 'Lab vs target design', body: 'The lab build delivered the VPC, EC2 backend, S3 storefront and DynamoDB table end to end. CloudFront, Route 53 and RDS are documented in the target architecture for production hardening.' },
      ],
    },
  },
  {
    title: 'Aegis — Offline-First Disaster Response System',
    role: 'Hackathon team project',
    tech: ['PWA', 'JavaScript', 'Tailwind CSS', 'PHP', 'MySQL', 'Leaflet.js', 'Service Workers'],
    description:
      'A Progressive Web App that lets first responders log incidents (landslides, floods, medical emergencies) with no internet connection. Reports are saved on the device and synced to HQ automatically when the network returns, with an SMS fallback that includes GPS coordinates. The command dashboard has live map clustering, resource forecasting and geofenced hazard alerts.',
    result: 'Works with zero connectivity; photos are compressed from ~5 MB to under 50 KB so they send over 2G.',
    repoUrl: 'https://github.com/TitanOfTime/Aegis',
    screenshots: [
      { src: '/images/projects/aegis/aegis-03.jpg', caption: 'Command dashboard: live incident feed, clustered map markers, geofenced hazard zone and one-tap broadcast alerts' },
      { src: '/images/projects/aegis/aegis-02.jpg', caption: 'Field responder app: incident type, severity, assistance needed and photo evidence, with an SMS fallback when offline' },
      { src: '/images/projects/aegis/aegis-01.jpg', caption: 'Disaster Analytics: incident types, status distribution, estimated logistics and an affected-areas map' },
      { src: '/images/projects/aegis/aegis-04.jpg', caption: 'Geofenced emergency alert pushed to every device inside the hazard zone' },
    ],
  },
]
