const QUESTIONS = [
  // ======================== DOMAIN 1: Cloud Concepts (24%) — 31 questions ========================
  {
    id: 1,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following best describes cloud computing?",
    options: ["The on-demand delivery of IT resources over the Internet with pay-as-you-go pricing", "A one-time license fee for software installed on-premises", "The purchase of physical servers for a company data center", "A fixed monthly contract for dedicated hardware"],
    correct: 0,
    explanation: "Cloud computing is the on-demand delivery of compute power, storage, applications, and other IT resources via the Internet with pay-as-you-go pricing."
  },
  {
    id: 2,
    domain: "Domain 1: Cloud Concepts",
    question: "Trading fixed expense for variable expense means that companies:",
    options: ["Must invest heavily in data centers up front", "Avoid using any cloud resources", "Pay only for the resources they actually consume", "Pay for resources before they are used"],
    correct: 2,
    explanation: "With the cloud, organizations replace upfront capital expense (CAPEX) with variable operating expense (OPEX), paying only for what they use."
  },
  {
    id: 3,
    domain: "Domain 1: Cloud Concepts",
    question: "Which is a financial benefit of migrating to AWS?",
    options: ["Higher fixed monthly hardware costs", "Increased capital expenditure on hardware", "Mandatory long-term hardware contracts", "Reduced Total Cost of Ownership (TCO)"],
    correct: 3,
    explanation: "Migrating to AWS replaces upfront CAPEX with variable OPEX and reduces the Total Cost of Ownership of running IT infrastructure."
  },
  {
    id: 4,
    domain: "Domain 1: Cloud Concepts",
    question: "Which term describes the ability to easily increase or decrease IT capacity as demand changes?",
    options: ["Elasticity", "Compliance", "Segmentation", "Durability"],
    correct: 0,
    explanation: "Elasticity is the ability to scale resources up and down automatically to match workload demand."
  },
  {
    id: 5,
    domain: "Domain 1: Cloud Concepts",
    question: "The ability to provision resources exactly when needed, without guessing capacity, primarily helps organizations:",
    options: ["Purchase more hardware", "Avoid over- or under-provisioning", "Increase data center rack space", "Reduce the number of developers"],
    correct: 1,
    explanation: "The cloud lets you match actual capacity to real usage, eliminating the need to guess and reducing idle or insufficient resources."
  },
  {
    id: 6,
    domain: "Domain 1: Cloud Concepts",
    question: "Which cloud deployment model runs workloads entirely on a company's own on-premises data center?",
    options: ["Hybrid cloud", "On-premises (private) deployment", "Public cloud", "Serverless"],
    correct: 1,
    explanation: "On-premises (private) deployment runs workloads in a company's own data center, often using virtualization and private cloud tooling."
  },
  {
    id: 7,
    domain: "Domain 1: Cloud Concepts",
    question: "A company wants to keep some data on-premises for regulatory reasons while running other workloads in AWS. Which model fits best?",
    options: ["Edge computing only", "Colocation only", "Public cloud only", "Hybrid cloud"],
    correct: 3,
    explanation: "A hybrid cloud connects on-premises infrastructure with the cloud, letting data and applications move between them."
  },
  {
    id: 8,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS service is best suited for running applications without provisioning or managing servers?",
    options: ["Amazon RDS", "Amazon EC2", "AWS Lambda", "Amazon Lightsail"],
    correct: 2,
    explanation: "AWS Lambda is a serverless compute service that runs code without requiring you to provision or manage servers."
  },
  {
    id: 9,
    domain: "Domain 1: Cloud Concepts",
    question: "Which pricing model is most appropriate for a steady-state workload that must run continuously for a year?",
    options: ["Reserved Instances", "On-Demand Instances", "Dedicated Hosts", "Spot Instances"],
    correct: 0,
    explanation: "Reserved Instances provide a significant discount compared to On-Demand in exchange for a 1- or 3-year commitment, ideal for steady-state workloads."
  },
  {
    id: 10,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following is a benefit of using AWS economies of scale?",
    options: ["No need for security controls", "Guaranteed per-customer hardware", "Lower costs due to massive aggregate usage across customers", "Higher pay-as-you-go rates than on-premises"],
    correct: 2,
    explanation: "AWS aggregates usage from hundreds of thousands of customers, achieving economies of scale that translate into lower prices."
  },
  {
    id: 11,
    domain: "Domain 1: Cloud Concepts",
    question: "Which design principle of the AWS Well-Architected Framework recommends preparing for failure?",
    options: ["Tightly couple components", "Avoid automation", "Design for failure", "Use a single Availability Zone"],
    correct: 2,
    explanation: "Designing for failure means architecting systems to continue operating even when individual components fail."
  },
  {
    id: 12,
    domain: "Domain 1: Cloud Concepts",
    question: "Loose coupling in a cloud architecture means that:",
    options: ["A change or failure in one component should not cascade to others", "All components must be deployed together", "Servers must be physically close together", "Components share a single database"],
    correct: 0,
    explanation: "Loose coupling decouples components so that a failure or change in one does not cascade to others."
  },
  {
    id: 13,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following is one of the six advantages of cloud computing?",
    options: ["Increase capital expenditure", "Guess capacity manually", "Spend money running and maintaining data centers", "Benefit from massive economies of scale"],
    correct: 3,
    explanation: "The six advantages include trading fixed for variable expense, benefiting from economies of scale, stopping guessing capacity, increasing speed and agility, not spending on data centers, and going global in minutes."
  },
  {
    id: 14,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS billing model allows you to stop paying for resources the moment you terminate them?",
    options: ["Annual upfront license", "Pay-as-you-go", "Flat monthly rate regardless of usage", "Perpetual hardware lease"],
    correct: 1,
    explanation: "Pay-as-you-go means you only pay for compute time or storage you actually consume and stop paying when resources are terminated."
  },
  {
    id: 15,
    domain: "Domain 1: Cloud Concepts",
    question: "What does 'going global in minutes' refer to in the context of AWS?",
    options: ["Registering a domain name only", "Signing a global support contract", "Physically shipping servers overseas", "Deploying applications in multiple Regions around the world quickly"],
    correct: 3,
    explanation: "AWS lets you deploy resources in many geographic Regions within minutes to serve customers worldwide with low latency."
  },
  {
    id: 16,
    domain: "Domain 1: Cloud Concepts",
    question: "Which deployment model allows an application to run code in response to events without managing any servers?",
    options: ["On-premises mainframe", "Colocation", "Dedicated Hosts", "Serverless"],
    correct: 3,
    explanation: "Serverless architectures, such as AWS Lambda, run code in response to events without provisioning or managing servers."
  },
  {
    id: 17,
    domain: "Domain 1: Cloud Concepts",
    question: "A startup needs to run an unpredictable workload and wants to avoid paying for idle capacity. Which pricing option is best?",
    options: ["3-year All Upfront Reserved Instances", "On-Demand Instances", "Dedicated Hosts", "Savings Plans with a high hourly commitment"],
    correct: 1,
    explanation: "On-Demand Instances have no long-term commitment and you pay only for running time, ideal for unpredictable or spiky workloads."
  },
  {
    id: 18,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following is an example of Infrastructure as Code (IaC)?",
    options: ["Writing emails to request servers", "AWS CloudFormation templates", "Using spreadsheets to track assets", "Manually clicking through the console"],
    correct: 1,
    explanation: "AWS CloudFormation lets you model and provision infrastructure using declarative templates, a form of Infrastructure as Code."
  },
  {
    id: 19,
    domain: "Domain 1: Cloud Concepts",
    question: "Which statement about the AWS global infrastructure is correct?",
    options: ["Edge locations only exist in the United States", "Regions are located within a single Availability Zone", "Regions cannot communicate with each other", "Availability Zones are isolated locations within a Region"],
    correct: 3,
    explanation: "A Region is a geographic area containing multiple isolated Availability Zones, each with independent power and networking."
  },
  {
    id: 20,
    domain: "Domain 1: Cloud Concepts",
    question: "High availability in the cloud is primarily achieved by:",
    options: ["Disabling backups", "Running everything on a single server", "Avoiding load balancing", "Using multiple Availability Zones"],
    correct: 3,
    explanation: "Deploying across multiple Availability Zones protects against the failure of any single data center and provides high availability."
  },
  {
    id: 21,
    domain: "Domain 1: Cloud Concepts",
    question: "Which scenario best illustrates horizontal scaling (scale out)?",
    options: ["Adding a bigger hard disk", "Increasing the memory of a single EC2 instance", "Upgrading to a larger instance type", "Adding more EC2 instances to handle increased traffic"],
    correct: 3,
    explanation: "Horizontal scaling adds more instances to distribute load, while vertical scaling increases the size of an existing instance."
  },
  {
    id: 22,
    domain: "Domain 1: Cloud Concepts",
    question: "Which is a characteristic of a fault-tolerant architecture?",
    options: ["It uses a single point of failure", "It requires manual intervention for every failure", "It continues to operate despite component failures", "It avoids replication"],
    correct: 2,
    explanation: "Fault-tolerant systems are designed to remain operational by eliminating single points of failure and using redundancy."
  },
  {
    id: 23,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS concept allows you to stop spending money running and maintaining your own data centers?",
    options: ["Hiring more facilities staff", "Building additional data centers", "Buying more on-premises servers", "Managed cloud services"],
    correct: 3,
    explanation: "AWS manages the underlying infrastructure, letting you avoid the cost and effort of running and maintaining your own data centers."
  },
  {
    id: 24,
    domain: "Domain 1: Cloud Concepts",
    question: "What is a primary benefit of using AWS Auto Scaling?",
    options: ["Guarantees zero latency", "Eliminates the need for backups", "Automatically adjusts capacity to maintain performance and reduce cost", "Replaces the need for security groups"],
    correct: 2,
    explanation: "Auto Scaling automatically adds or removes capacity based on demand, helping maintain performance and control costs."
  },
  {
    id: 25,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following is an example of a capital expenditure (CAPEX)?",
    options: ["Paying a monthly AWS bill", "Paying per Lambda request", "Paying for S3 storage used", "Purchasing physical servers for a data center"],
    correct: 3,
    explanation: "CAPEX involves upfront, long-term asset purchases such as physical servers, while cloud pay-as-you-go is OPEX."
  },
  {
    id: 26,
    domain: "Domain 1: Cloud Concepts",
    question: "Which statement best describes 'agility' in the cloud?",
    options: ["Developers cannot test new ideas", "All changes require weeks of procurement", "Capacity must be fixed for a year", "Resources can be provisioned and released quickly to experiment and innovate"],
    correct: 3,
    explanation: "Cloud agility lets organizations rapidly provision and release resources, enabling faster experimentation and innovation."
  },
  {
    id: 27,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following best describes the shared responsibility model?",
    options: ["Customers are responsible for all security", "AWS is responsible for all security including customer data", "AWS is responsible for security of the cloud, while the customer is responsible for security in the cloud", "Security is not needed in the cloud"],
    correct: 2,
    explanation: "Under the shared responsibility model, AWS secures the underlying infrastructure (security OF the cloud) while customers secure what they run (security IN the cloud)."
  },
  {
    id: 28,
    domain: "Domain 1: Cloud Concepts",
    question: "Which cloud computing benefit helps companies launch new services faster than building on-premises?",
    options: ["Increase speed and agility", "Slower resource delivery", "Higher procurement lead times", "Manual capacity planning"],
    correct: 0,
    explanation: "The cloud increases speed and agility, allowing resources to be provisioned in minutes instead of weeks."
  },
  {
    id: 29,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS service is a simple, fast way to launch and manage a small web application or website?",
    options: ["Amazon EMR", "AWS Snowmobile", "Amazon Lightsail", "AWS Outposts"],
    correct: 2,
    explanation: "Amazon Lightsail provides an easy-to-use platform with bundled compute, storage, and networking for small workloads and websites."
  },
  {
    id: 30,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following best describes reliability in the AWS Well-Architected Framework?",
    options: ["The number of developers on a team", "The lowest possible cost at all times", "The ability of a workload to perform its required function correctly and consistently", "The speed of the network"],
    correct: 2,
    explanation: "Reliability is the ability of a workload to perform its required function correctly and consistently, and to recover from failures."
  },
  {
    id: 31,
    domain: "Domain 1: Cloud Concepts",
    question: "Which is a core concept of 'stopping guessing about capacity'?",
    options: ["Always provision maximum capacity", "Guess capacity based on intuition", "Ignore capacity planning entirely", "Match actual usage to capacity instead of over-provisioning"],
    correct: 3,
    explanation: "The cloud allows you to observe real usage and right-size capacity accordingly, rather than guessing."
  },
  // ======================== DOMAIN 2: Security and Compliance (30%) — 39 questions ========================
  {
    id: 32,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service enables you to manage users, groups, and permissions for AWS resources?",
    options: ["AWS Identity and Access Management (IAM)", "AWS CloudTrail", "Amazon CloudWatch", "Amazon SNS"],
    correct: 0,
    explanation: "IAM lets you securely control access to AWS services and resources through users, groups, roles, and policies."
  },
  {
    id: 33,
    domain: "Domain 2: Security and Compliance",
    question: "Which IAM feature adds an extra layer of protection by requiring a second form of authentication?",
    options: ["Root account sharing", "Password reuse", "Multi-Factor Authentication (MFA)", "Access keys"],
    correct: 2,
    explanation: "MFA requires users to provide a second authentication factor, significantly improving account security."
  },
  {
    id: 34,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service lets you download compliance reports such as SOC and PCI reports?",
    options: ["Amazon Inspector", "AWS Artifact", "Amazon GuardDuty", "AWS Shield"],
    correct: 1,
    explanation: "AWS Artifact is the portal for on-demand access to AWS security and compliance reports such as SOC, PCI, and ISO reports."
  },
  {
    id: 35,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service is a threat detection service that continuously monitors for malicious activity?",
    options: ["AWS WAF", "Amazon Macie", "Amazon GuardDuty", "AWS KMS"],
    correct: 2,
    explanation: "Amazon GuardDuty is an intelligent threat detection service that continuously monitors for malicious or unauthorized behavior."
  },
  {
    id: 36,
    domain: "Domain 2: Security and Compliance",
    question: "Which service discovers, classifies, and protects sensitive data such as personally identifiable information (PII) in Amazon S3?",
    options: ["Amazon Detective", "Amazon Macie", "Amazon Inspector", "AWS Shield"],
    correct: 1,
    explanation: "Amazon Macie uses machine learning to automatically discover, classify, and protect sensitive data like PII in S3."
  },
  {
    id: 37,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service protects web applications from common web exploits such as SQL injection and cross-site scripting?",
    options: ["AWS WAF", "AWS Shield", "AWS Network Firewall", "Amazon GuardDuty"],
    correct: 0,
    explanation: "AWS WAF is a web application firewall that filters malicious web traffic such as SQL injection and cross-site scripting."
  },
  {
    id: 38,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides DDoS protection?",
    options: ["AWS Certificate Manager", "AWS Shield", "Amazon Macie", "AWS Secrets Manager"],
    correct: 1,
    explanation: "AWS Shield protects against Distributed Denial of Service (DDoS) attacks. Standard is included free; Advanced offers enhanced protection."
  },
  {
    id: 39,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides centralized management of encryption keys?",
    options: ["AWS Secrets Manager", "AWS IAM", "AWS Key Management Service (KMS)", "Amazon Cognito"],
    correct: 2,
    explanation: "AWS KMS lets you create and manage cryptographic keys used to encrypt data across AWS services."
  },
  {
    id: 40,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service helps you store and rotate database credentials securely?",
    options: ["Amazon SNS", "AWS Secrets Manager", "Amazon S3", "AWS CloudTrail"],
    correct: 1,
    explanation: "AWS Secrets Manager securely stores, retrieves, and rotates secrets such as database credentials and API keys."
  },
  {
    id: 41,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides a unified view of security findings across AWS accounts?",
    options: ["Amazon CloudWatch", "AWS Trusted Advisor", "AWS Config", "AWS Security Hub"],
    correct: 3,
    explanation: "AWS Security Hub aggregates and prioritizes security findings from multiple AWS services into a single view."
  },
  {
    id: 42,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service performs automated security assessments of EC2 instances for vulnerabilities?",
    options: ["Amazon Macie", "AWS Shield", "Amazon GuardDuty", "Amazon Inspector"],
    correct: 3,
    explanation: "Amazon Inspector automatically assesses applications for vulnerabilities and deviations from best practices."
  },
  {
    id: 43,
    domain: "Domain 2: Security and Compliance",
    question: "Which service records API calls and user activity across your AWS account for auditing?",
    options: ["Amazon Athena", "Amazon CloudWatch", "AWS X-Ray", "AWS CloudTrail"],
    correct: 3,
    explanation: "AWS CloudTrail logs and monitors account activity, including API calls, to support auditing and governance."
  },
  {
    id: 44,
    domain: "Domain 2: Security and Compliance",
    question: "Which of the following is the security principle of granting only the permissions required to perform a task?",
    options: ["Root access for everyone", "Defense in depth", "Shared responsibility", "Least privilege"],
    correct: 3,
    explanation: "Least privilege means granting only the minimum permissions necessary to perform a task, reducing risk."
  },
  {
    id: 45,
    domain: "Domain 2: Security and Compliance",
    question: "Which IAM entity is best for granting temporary access to an application running on an EC2 instance?",
    options: ["IAM User with long-term access keys", "IAM Role", "Root account credentials", "Hard-coded credentials"],
    correct: 1,
    explanation: "IAM Roles provide temporary, automatically rotated credentials and are the recommended way to grant access to applications on EC2."
  },
  {
    id: 46,
    domain: "Domain 2: Security and Compliance",
    question: "Which service helps protect your AWS account by providing a virtual firewall that controls traffic to EC2 instances?",
    options: ["Security Group", "AWS KMS", "Amazon Macie", "AWS Artifact"],
    correct: 0,
    explanation: "Security Groups act as virtual firewalls controlling inbound and outbound traffic at the EC2 instance level."
  },
  {
    id: 47,
    domain: "Domain 2: Security and Compliance",
    question: "Which service controls traffic at the subnet level within a VPC?",
    options: ["Security Group", "AWS Shield", "AWS WAF", "Network Access Control List (NACL)"],
    correct: 3,
    explanation: "Network ACLs are stateless and control inbound and outbound traffic at the subnet level within a VPC."
  },
  {
    id: 48,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides sign-on and access management for multiple AWS accounts and business applications?",
    options: ["AWS Organizations", "Amazon Cognito", "AWS IAM Identity Center (SSO)", "AWS Directory Service"],
    correct: 2,
    explanation: "AWS IAM Identity Center (formerly AWS SSO) centrally manages sign-on and access across multiple AWS accounts and applications."
  },
  {
    id: 49,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides temporary AWS credentials to users who authenticate via social media or guest access?",
    options: ["AWS IAM Identity Center", "AWS Secrets Manager", "AWS Directory Service", "Amazon Cognito"],
    correct: 3,
    explanation: "Amazon Cognito provides temporary AWS credentials for users authenticated through web identity providers or as guests."
  },
  {
    id: 50,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service helps you investigate security incidents by collecting and analyzing log data?",
    options: ["Amazon Polly", "Amazon Detective", "AWS Shield", "AWS WAF"],
    correct: 1,
    explanation: "Amazon Detective automatically collects and analyzes log data to help investigate and identify the root cause of security issues."
  },
  {
    id: 51,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides hardware-based key storage for regulatory compliance requiring dedicated HSMs?",
    options: ["AWS Secrets Manager", "AWS CloudHSM", "Amazon Macie", "AWS KMS"],
    correct: 1,
    explanation: "AWS CloudHSM provides dedicated Hardware Security Modules for workloads requiring FIPS-validated, single-tenant key control."
  },
  {
    id: 52,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provisions, manages, and renews SSL/TLS certificates?",
    options: ["AWS Certificate Manager (ACM)", "Amazon Route 53", "AWS Secrets Manager", "AWS KMS"],
    correct: 0,
    explanation: "AWS Certificate Manager (ACM) provisions, manages, and deploys SSL/TLS certificates for AWS services and websites."
  },
  {
    id: 53,
    domain: "Domain 2: Security and Compliance",
    question: "Which service centrally manages firewall rules across multiple AWS accounts?",
    options: ["AWS Firewall Manager", "AWS Network Firewall", "AWS WAF", "Amazon GuardDuty"],
    correct: 0,
    explanation: "AWS Firewall Manager lets you centrally configure and manage firewall rules across accounts and resources."
  },
  {
    id: 54,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides network-level protection for your VPCs with advanced threat prevention?",
    options: ["AWS WAF", "Amazon Macie", "AWS Network Firewall", "AWS Shield"],
    correct: 2,
    explanation: "AWS Network Firewall provides managed network protection for VPCs, including stateful inspection and threat prevention."
  },
  {
    id: 55,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service helps you share AWS resources securely across accounts?",
    options: ["Amazon Cognito", "AWS Organizations", "AWS Resource Access Manager (RAM)", "AWS IAM Identity Center"],
    correct: 2,
    explanation: "AWS Resource Access Manager (RAM) lets you securely share resources such as subnets and Transit Gateways across AWS accounts."
  },
  {
    id: 56,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service helps automate evidence collection for compliance audits?",
    options: ["AWS Audit Manager", "AWS Shield", "Amazon GuardDuty", "AWS Artifact"],
    correct: 0,
    explanation: "AWS Audit Manager continuously audits AWS usage to simplify risk assessment and automates evidence collection for compliance."
  },
  {
    id: 57,
    domain: "Domain 2: Security and Compliance",
    question: "Which of the following is a customer responsibility under the AWS shared responsibility model?",
    options: ["Patching the AWS hypervisor", "Securing AWS data centers", "Maintaining AWS network hardware", "Encrypting customer data"],
    correct: 3,
    explanation: "Customers are responsible for security IN the cloud, such as encrypting their data, while AWS secures the underlying infrastructure."
  },
  {
    id: 58,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides a managed Microsoft Active Directory in the cloud?",
    options: ["AWS Secrets Manager", "AWS IAM Identity Center", "Amazon Cognito", "AWS Directory Service"],
    correct: 3,
    explanation: "AWS Directory Service provides managed directories, including Microsoft Active Directory, for directory-aware workloads."
  },
  {
    id: 59,
    domain: "Domain 2: Security and Compliance",
    question: "Which is a best practice for securing the AWS root account?",
    options: ["Share the root password with all admins", "Disable all logging", "Use root access keys for applications", "Enable MFA and avoid using it for daily tasks"],
    correct: 3,
    explanation: "The root account should be protected with MFA and used only for tasks that specifically require it, not for day-to-day administration."
  },
  {
    id: 60,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service continuously monitors for unauthorized activity and unexpected behavior in your AWS environment?",
    options: ["Amazon GuardDuty", "Amazon QuickSight", "AWS Pricing Calculator", "AWS Trusted Advisor"],
    correct: 0,
    explanation: "Amazon GuardDuty uses machine learning and threat intelligence to detect unauthorized and malicious activity."
  },
  {
    id: 61,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service helps enforce compliance policies by evaluating resource configurations against rules?",
    options: ["AWS CloudTrail", "AWS X-Ray", "Amazon CloudWatch", "AWS Config"],
    correct: 3,
    explanation: "AWS Config assesses, audits, and evaluates configurations of AWS resources against defined rules to support compliance."
  },
  {
    id: 62,
    domain: "Domain 2: Security and Compliance",
    question: "Which of the following describes the principle of defense in depth?",
    options: ["Using one shared account for everyone", "Disabling encryption", "Relying on a single firewall", "Using multiple layers of security controls"],
    correct: 3,
    explanation: "Defense in depth uses multiple, layered security controls so that if one fails, others still provide protection."
  },
  {
    id: 63,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides a secure way to connect an on-premises network to AWS over a private connection?",
    options: ["Amazon Route 53", "Amazon CloudFront", "AWS Direct Connect", "AWS Global Accelerator"],
    correct: 2,
    explanation: "AWS Direct Connect establishes a dedicated private network connection between on-premises infrastructure and AWS."
  },
  {
    id: 64,
    domain: "Domain 2: Security and Compliance",
    question: "Which service provides encryption of data in transit between users and CloudFront distributions?",
    options: ["AWS Certificate Manager with HTTPS", "AWS CloudTrail", "AWS Batch", "Amazon Athena"],
    correct: 0,
    explanation: "Using ACM-provisioned certificates with HTTPS encrypts data in transit for CloudFront and other services."
  },
  {
    id: 65,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides a policy-based approach to prevent accidental deletion of S3 objects?",
    options: ["AWS WAF", "S3 Object Lock", "Amazon Macie", "AWS Shield"],
    correct: 1,
    explanation: "S3 Object Lock enforces write-once-read-many (WORM) protection to prevent objects from being deleted or overwritten."
  },
  {
    id: 66,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS tool helps evaluate the permissions of IAM policies before deploying them?",
    options: ["IAM Policy Simulator", "AWS Trusted Advisor", "Amazon CloudWatch", "AWS Budgets"],
    correct: 0,
    explanation: "The IAM Policy Simulator lets you test and validate the effects of IAM policies before applying them."
  },
  {
    id: 67,
    domain: "Domain 2: Security and Compliance",
    question: "Which of the following is an example of data at rest encryption?",
    options: ["Using HTTPS for a website", "Encrypting a VPN tunnel", "Using TLS for API calls", "Encrypting an EBS volume"],
    correct: 3,
    explanation: "Encrypting an EBS volume protects data at rest, while HTTPS/TLS protect data in transit."
  },
  {
    id: 68,
    domain: "Domain 2: Security and Compliance",
    question: "Which service provides compliance with the Payment Card Industry Data Security Standard (PCI DSS) documentation?",
    options: ["Amazon Detective", "AWS Shield", "Amazon GuardDuty", "AWS Artifact"],
    correct: 3,
    explanation: "AWS Artifact provides on-demand access to compliance documentation, including PCI DSS reports."
  },
  {
    id: 69,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service can protect your application endpoints from volumetric DDoS attacks with advanced, always-on protection?",
    options: ["Amazon Macie", "AWS Secrets Manager", "Amazon Inspector", "AWS Shield Advanced"],
    correct: 3,
    explanation: "AWS Shield Advanced provides enhanced, always-on DDoS protection with 24/7 access to the DDoS Response Team."
  },
  {
    id: 70,
    domain: "Domain 2: Security and Compliance",
    question: "Which of the following is a recommended IAM best practice?",
    options: ["Grant AdministratorAccess to all users", "Store passwords in plain text", "Share a single IAM user across all employees", "Use IAM roles instead of long-term access keys where possible"],
    correct: 3,
    explanation: "Using IAM roles with temporary credentials is preferred over embedding or distributing long-term access keys."
  },
  // ======================== DOMAIN 3: Cloud Technology and Services (34%) — 44 questions ========================
  {
    id: 71,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides resizable virtual servers in the cloud?",
    options: ["AWS Lambda", "Amazon S3", "Amazon EC2", "Amazon RDS"],
    correct: 2,
    explanation: "Amazon EC2 provides scalable virtual servers (instances) in the cloud."
  },
  {
    id: 72,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides highly durable object storage for the web?",
    options: ["Amazon EFS", "Amazon EBS", "Amazon S3", "Amazon RDS"],
    correct: 2,
    explanation: "Amazon S3 is a highly durable, scalable object storage service for storing and retrieving any amount of data."
  },
  {
    id: 73,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which service provides block storage volumes for use with EC2 instances?",
    options: ["Amazon EBS", "Amazon Glacier", "Amazon S3", "Amazon EFS"],
    correct: 0,
    explanation: "Amazon EBS provides persistent block-level storage volumes attached to EC2 instances."
  },
  {
    id: 74,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides a fully managed relational database?",
    options: ["Amazon DynamoDB", "Amazon Redshift", "Amazon ElastiCache", "Amazon RDS"],
    correct: 3,
    explanation: "Amazon RDS is a managed relational database service that automates setup, patching, and backups."
  },
  {
    id: 75,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a fully managed NoSQL database for fast, predictable performance?",
    options: ["Amazon Aurora", "Amazon RDS", "Amazon DynamoDB", "Amazon Redshift"],
    correct: 2,
    explanation: "Amazon DynamoDB is a fully managed NoSQL key-value and document database delivering single-digit millisecond performance."
  },
  {
    id: 76,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a content delivery network (CDN) that delivers data with low latency?",
    options: ["AWS Direct Connect", "Amazon CloudFront", "Amazon Route 53", "Amazon VPC"],
    correct: 1,
    explanation: "Amazon CloudFront is a CDN that delivers content, videos, and APIs to users with low latency and high transfer speeds."
  },
  {
    id: 77,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a highly available and scalable DNS web service?",
    options: ["Amazon VPC", "Amazon CloudFront", "Amazon Route 53", "AWS Global Accelerator"],
    correct: 2,
    explanation: "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service."
  },
  {
    id: 78,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which service provides an isolated, logically defined section of the AWS cloud where you can launch resources in a virtual network?",
    options: ["Amazon CloudFront", "AWS Organizations", "AWS Lambda", "Amazon VPC"],
    correct: 3,
    explanation: "Amazon VPC lets you provision a logically isolated virtual network where you can launch AWS resources."
  },
  {
    id: 79,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service distributes incoming application traffic across multiple EC2 instances?",
    options: ["Amazon CloudFront", "Amazon Route 53", "Elastic Load Balancing (ELB)", "AWS Global Accelerator"],
    correct: 2,
    explanation: "Elastic Load Balancing automatically distributes incoming traffic across multiple targets such as EC2 instances."
  },
  {
    id: 80,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is best for running containers without managing the underlying EC2 instances?",
    options: ["Amazon Lightsail", "AWS Batch", "Amazon EC2", "AWS Fargate"],
    correct: 3,
    explanation: "AWS Fargate is a serverless compute engine for containers that eliminates the need to manage servers."
  },
  {
    id: 81,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service orchestrates and runs batch computing workloads at any scale?",
    options: ["Amazon EC2", "AWS Lambda", "AWS Step Functions", "AWS Batch"],
    correct: 3,
    explanation: "AWS Batch dynamically provisions the right quantity and type of compute resources to run batch jobs at scale."
  },
  {
    id: 82,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which service is used to store and manage Docker container images?",
    options: ["Amazon S3", "Amazon EBS", "Amazon Elastic Container Registry (ECR)", "AWS CodeBuild"],
    correct: 2,
    explanation: "Amazon ECR is a fully managed container registry for storing, managing, and deploying Docker images."
  },
  {
    id: 83,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a managed platform for deploying and scaling web applications and APIs?",
    options: ["AWS CodePipeline", "Amazon EC2", "AWS Elastic Beanstalk", "AWS CloudFormation"],
    correct: 2,
    explanation: "AWS Elastic Beanstalk automates deployment, capacity provisioning, load balancing, and scaling of applications."
  },
  {
    id: 84,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which service provides a fully managed data warehouse for analytics?",
    options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon ElastiCache"],
    correct: 1,
    explanation: "Amazon Redshift is a fully managed, petabyte-scale data warehouse for analytics workloads."
  },
  {
    id: 85,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides an in-memory caching service to improve database performance?",
    options: ["Amazon ElastiCache", "Amazon Redshift", "Amazon RDS", "Amazon DynamoDB"],
    correct: 0,
    explanation: "Amazon ElastiCache provides managed in-memory caching (Redis and Memcached) to speed up application performance."
  },
  {
    id: 86,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides a fully managed relational database compatible with MySQL and PostgreSQL, with high performance and availability?",
    options: ["Amazon DynamoDB", "Amazon ElastiCache", "Amazon Redshift", "Amazon Aurora"],
    correct: 3,
    explanation: "Amazon Aurora is a MySQL- and PostgreSQL-compatible relational database offering high performance and availability."
  },
  {
    id: 87,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a fully managed message queuing service for decoupling application components?",
    options: ["Amazon SNS", "Amazon SQS", "Amazon MQ", "AWS Step Functions"],
    correct: 1,
    explanation: "Amazon SQS is a fully managed message queuing service that enables decoupling and scaling of microservices."
  },
  {
    id: 88,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a publish/subscribe messaging service for sending notifications?",
    options: ["Amazon SES", "Amazon SQS", "AWS Step Functions", "Amazon SNS"],
    correct: 3,
    explanation: "Amazon SNS is a fully managed pub/sub messaging service for application-to-application and application-to-person notifications."
  },
  {
    id: 89,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which service is used to run interactive SQL queries directly against data stored in Amazon S3?",
    options: ["Amazon Redshift", "Amazon Athena", "AWS Glue", "Amazon RDS"],
    correct: 1,
    explanation: "Amazon Athena is a serverless service that lets you query data in S3 using standard SQL."
  },
  {
    id: 90,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a fully managed ETL service for data integration and transformation?",
    options: ["Amazon EMR", "AWS Data Pipeline", "Amazon Athena", "AWS Glue"],
    correct: 3,
    explanation: "AWS Glue is a serverless ETL service that makes it easy to prepare and load data for analytics."
  },
  {
    id: 91,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a managed Hadoop framework for processing large datasets?",
    options: ["Amazon Kinesis", "Amazon Athena", "Amazon EMR", "AWS Glue"],
    correct: 2,
    explanation: "Amazon EMR is a managed big data platform for processing large datasets using Hadoop, Spark, and other frameworks."
  },
  {
    id: 92,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides real-time data streaming for analytics?",
    options: ["AWS Batch", "Amazon SNS", "Amazon Kinesis", "Amazon SQS"],
    correct: 2,
    explanation: "Amazon Kinesis lets you collect, process, and analyze real-time streaming data such as logs and telemetry."
  },
  {
    id: 93,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is used to build, train, and deploy machine learning models?",
    options: ["Amazon Rekognition", "Amazon Comprehend", "Amazon SageMaker", "Amazon Polly"],
    correct: 2,
    explanation: "Amazon SageMaker is a fully managed service for building, training, and deploying machine learning models."
  },
  {
    id: 94,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides image and video analysis using machine learning?",
    options: ["Amazon Polly", "Amazon Rekognition", "Amazon Transcribe", "Amazon Textract"],
    correct: 1,
    explanation: "Amazon Rekognition provides pre-trained computer vision capabilities to analyze images and videos."
  },
  {
    id: 95,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service automatically converts speech to text?",
    options: ["Amazon Polly", "Amazon Lex", "Amazon Transcribe", "Amazon Translate"],
    correct: 2,
    explanation: "Amazon Transcribe is an automatic speech recognition service that converts speech to text."
  },
  {
    id: 96,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service converts text into lifelike speech?",
    options: ["Amazon Comprehend", "Amazon Rekognition", "Amazon Transcribe", "Amazon Polly"],
    correct: 3,
    explanation: "Amazon Polly is a text-to-speech service that converts written text into natural-sounding speech."
  },
  {
    id: 97,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service performs natural language processing to analyze sentiment in text?",
    options: ["Amazon Translate", "Amazon Comprehend", "Amazon Polly", "Amazon Rekognition"],
    correct: 1,
    explanation: "Amazon Comprehend uses machine learning to uncover insights and sentiment in text."
  },
  {
    id: 98,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service automatically translates text between languages?",
    options: ["Amazon Transcribe", "Amazon Translate", "Amazon Polly", "Amazon Comprehend"],
    correct: 1,
    explanation: "Amazon Translate is a neural machine translation service for fast, high-quality language translation."
  },
  {
    id: 99,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service monitors AWS resources and applications with metrics, alarms, and dashboards?",
    options: ["Amazon Athena", "AWS CloudTrail", "AWS X-Ray", "Amazon CloudWatch"],
    correct: 3,
    explanation: "Amazon CloudWatch collects monitoring and operational data in the form of logs, metrics, and events."
  },
  {
    id: 100,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides application tracing to help debug and analyze distributed applications?",
    options: ["AWS CloudTrail", "AWS X-Ray", "Amazon CloudWatch", "AWS Config"],
    correct: 1,
    explanation: "AWS X-Ray traces user requests as they travel through your application to help identify performance issues."
  },
  {
    id: 101,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which service enables you to migrate databases to AWS with minimal downtime?",
    options: ["AWS Direct Connect", "AWS Snowball", "AWS Database Migration Service (DMS)", "Amazon S3 Transfer Acceleration"],
    correct: 2,
    explanation: "AWS DMS helps migrate databases to AWS quickly and securely while keeping the source database operational during migration."
  },
  {
    id: 102,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a physical data transport solution for moving large amounts of data into and out of AWS?",
    options: ["AWS Snowball Edge", "AWS Global Accelerator", "Amazon S3 Transfer Acceleration", "AWS Direct Connect"],
    correct: 0,
    explanation: "AWS Snowball Edge is a physical device for securely transferring large amounts of data into and out of AWS."
  },
  {
    id: 103,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is used for moving exabyte-scale data using a truck-towed storage unit?",
    options: ["Amazon S3 Glacier", "AWS Direct Connect", "AWS Snowball Edge", "AWS Snowmobile"],
    correct: 3,
    explanation: "AWS Snowmobile is an exabyte-scale data transfer service using a secure shipping container transported by truck."
  },
  {
    id: 104,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service improves availability of applications using anycast static IP addresses and the AWS global network?",
    options: ["AWS Direct Connect", "Amazon Route 53", "Amazon CloudFront", "AWS Global Accelerator"],
    correct: 3,
    explanation: "AWS Global Accelerator uses the AWS global network and anycast static IPs to improve application availability and performance."
  },
  {
    id: 105,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a fully managed service for creating and running APIs?",
    options: ["AWS Lambda", "Amazon EC2", "Amazon Route 53", "Amazon API Gateway"],
    correct: 3,
    explanation: "Amazon API Gateway lets you create, publish, maintain, and secure APIs at any scale."
  },
  {
    id: 106,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides continuous integration and delivery automation for application releases?",
    options: ["AWS X-Ray", "AWS CloudFormation", "AWS CodePipeline", "Amazon EC2"],
    correct: 2,
    explanation: "AWS CodePipeline automates the build, test, and deploy phases of your release process for continuous delivery."
  },
  {
    id: 107,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is used to deploy application updates to EC2 instances or on-premises servers?",
    options: ["AWS CloudFormation", "AWS X-Ray", "AWS CodeDeploy", "AWS CodeBuild"],
    correct: 2,
    explanation: "AWS CodeDeploy automates application deployments to EC2 instances, on-premises servers, or Lambda functions."
  },
  {
    id: 108,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which service provides a fully managed build service to compile source code and run tests?",
    options: ["AWS CodeDeploy", "AWS CodePipeline", "Amazon EC2", "AWS CodeBuild"],
    correct: 3,
    explanation: "AWS CodeBuild is a fully managed build service that compiles code, runs tests, and produces deployment-ready packages."
  },
  {
    id: 109,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides file storage that can be shared across multiple EC2 instances using NFS?",
    options: ["Amazon EFS", "Amazon EBS", "Amazon FSx", "Amazon S3"],
    correct: 0,
    explanation: "Amazon EFS provides scalable, shared file storage accessible by multiple EC2 instances via NFS."
  },
  {
    id: 110,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides fully managed Microsoft Windows file storage?",
    options: ["Amazon S3", "Amazon EFS", "Amazon EBS", "Amazon FSx for Windows File Server"],
    correct: 3,
    explanation: "Amazon FSx for Windows File Server provides fully managed file storage accessible via the SMB protocol."
  },
  {
    id: 111,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is used for hybrid cloud storage, providing on-premises access to cloud storage?",
    options: ["Amazon EFS", "Amazon S3", "AWS Direct Connect", "AWS Storage Gateway"],
    correct: 3,
    explanation: "AWS Storage Gateway is a hybrid storage service that connects on-premises environments to AWS cloud storage."
  },
  {
    id: 112,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides fully managed backups across AWS services and on-premises?",
    options: ["Amazon S3 Glacier", "AWS Storage Gateway", "Amazon EBS Snapshots", "AWS Backup"],
    correct: 3,
    explanation: "AWS Backup is a fully managed service that centralizes and automates backups across AWS services and on-premises."
  },
  {
    id: 113,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service orchestrates workflows of AWS services into a visual sequence of steps?",
    options: ["AWS Step Functions", "Amazon SNS", "AWS Lambda", "Amazon SQS"],
    correct: 0,
    explanation: "AWS Step Functions lets you coordinate multiple AWS services into serverless workflows with visual state machines."
  },
  {
    id: 114,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a business intelligence tool for creating interactive dashboards and visualizations?",
    options: ["Amazon Redshift", "Amazon QuickSight", "Amazon Athena", "AWS Glue"],
    correct: 1,
    explanation: "Amazon QuickSight is a scalable, serverless business intelligence service for building visualizations and dashboards."
  },
  // ======================== DOMAIN 4: Billing, Pricing and Support (12%) — 16 questions ========================
  {
    id: 115,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS tool helps you estimate the cost of AWS services before deploying them?",
    options: ["AWS Pricing Calculator", "AWS Cost Explorer", "AWS Billing Dashboard", "AWS Budgets"],
    correct: 0,
    explanation: "AWS Pricing Calculator lets you create cost estimates for using AWS services before you provision them."
  },
  {
    id: 116,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS service provides reports and visualizations to analyze historical AWS costs and usage?",
    options: ["AWS Budgets", "AWS Trusted Advisor", "AWS Cost Explorer", "AWS Pricing Calculator"],
    correct: 2,
    explanation: "AWS Cost Explorer visualizes, understands, and manages your AWS costs and usage over time."
  },
  {
    id: 117,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS service lets you set custom budgets and receive alerts when costs or usage exceed thresholds?",
    options: ["AWS Organizations", "AWS Budgets", "AWS Cost Explorer", "AWS Pricing Calculator"],
    correct: 1,
    explanation: "AWS Budgets lets you set custom cost and usage budgets and receive alerts when thresholds are exceeded."
  },
  {
    id: 118,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS service provides consolidated billing across multiple AWS accounts?",
    options: ["AWS Pricing Calculator", "AWS Organizations", "AWS Budgets", "AWS Cost Explorer"],
    correct: 1,
    explanation: "AWS Organizations enables consolidated billing, allowing you to combine usage across accounts to receive volume discounts."
  },
  {
    id: 119,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS support plan includes a dedicated Technical Account Manager (TAM)?",
    options: ["Basic", "Developer", "Enterprise", "Business"],
    correct: 2,
    explanation: "The Enterprise support plan provides a dedicated Technical Account Manager (TAM) for your account."
  },
  {
    id: 120,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS support plan is available to all AWS customers at no additional cost?",
    options: ["Basic", "Enterprise", "Business", "Developer"],
    correct: 0,
    explanation: "The Basic support plan is available to all AWS customers at no cost and includes documentation, forums, and support for account/billing issues."
  },
  {
    id: 121,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS tool inspects your environment and provides recommendations aligned with AWS best practices across cost, security, and performance?",
    options: ["AWS CloudTrail", "Amazon CloudWatch", "AWS Trusted Advisor", "AWS Config"],
    correct: 2,
    explanation: "AWS Trusted Advisor provides real-time guidance and recommendations across cost optimization, security, fault tolerance, and performance."
  },
  {
    id: 122,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS pricing option provides the largest discount for a 3-year commitment?",
    options: ["Reserved Instances", "Dedicated Hosts", "Spot Instances", "On-Demand Instances"],
    correct: 0,
    explanation: "Reserved Instances with a 3-year term provide the largest discount compared to On-Demand pricing."
  },
  {
    id: 123,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which EC2 purchasing option lets you bid on unused AWS capacity at steep discounts, with the risk of interruption?",
    options: ["Spot Instances", "On-Demand Instances", "Dedicated Hosts", "Reserved Instances"],
    correct: 0,
    explanation: "Spot Instances let you use spare EC2 capacity at up to a 90% discount, but they can be interrupted by AWS."
  },
  {
    id: 124,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS pricing option offers a flexible pricing model for consistent compute usage across EC2, Fargate, and Lambda?",
    options: ["Savings Plans", "On-Demand Instances", "Dedicated Hosts", "Spot Instances"],
    correct: 0,
    explanation: "Savings Plans provide discounted rates in exchange for a consistent amount of compute usage measured in dollars per hour."
  },
  {
    id: 125,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS service helps you track cost allocation by applying tags to resources?",
    options: ["Cost allocation tags", "AWS Budgets", "AWS Trusted Advisor", "AWS Pricing Calculator"],
    correct: 0,
    explanation: "Cost allocation tags categorize and track AWS costs at a detailed level, enabling cost allocation across teams or projects."
  },
  {
    id: 126,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS service provides a digital catalog of third-party software that runs on AWS?",
    options: ["AWS CodeCommit", "Amazon S3", "AWS Marketplace", "AWS Lambda"],
    correct: 2,
    explanation: "AWS Marketplace is a digital catalog of third-party software and services that run on AWS."
  },
  {
    id: 127,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which of the following is included in the AWS Free Tier?",
    options: ["Unlimited EC2 usage", "Limited free usage of select services for new customers", "Free Enterprise Support", "Free data transfer out of AWS"],
    correct: 1,
    explanation: "The AWS Free Tier provides limited free usage of select services for new customers to explore AWS."
  },
  {
    id: 128,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS service provides a personal dashboard to track and manage your AWS spending?",
    options: ["AWS X-Ray", "Amazon CloudWatch", "AWS Billing and Cost Management console", "AWS Config"],
    correct: 2,
    explanation: "The AWS Billing and Cost Management console provides dashboards, bills, and cost reports to manage spending."
  },
  {
    id: 129,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS support plan provides 24/7 access to Cloud Support Engineers via phone, chat, and email?",
    options: ["Developer", "Basic", "None of the above", "Business"],
    correct: 3,
    explanation: "The Business support plan provides 24/7 access to Cloud Support Engineers, as do Enterprise On-Ramp and Enterprise."
  },
  {
    id: 130,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS service helps you understand and control AWS costs by providing detailed cost and usage reports?",
    options: ["AWS Cost and Usage Report", "AWS Trusted Advisor", "AWS Budgets", "AWS Pricing Calculator"],
    correct: 0,
    explanation: "The AWS Cost and Usage Report provides the most comprehensive set of cost and usage data for detailed analysis."
  }
];
