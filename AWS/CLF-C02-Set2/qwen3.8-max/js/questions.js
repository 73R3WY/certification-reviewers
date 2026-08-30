const QUESTIONS = [
  // ======================== DOMAIN 1: Cloud Concepts (24%) — 31 questions ========================
  {
    id: 1,
    domain: "Domain 1: Cloud Concepts",
    question: "According to AWS, cloud computing is the on-demand delivery of IT resources via the Internet with which pricing model?",
    options: ["Pay-as-you-go pricing", "Fixed annual hardware lease", "One-time perpetual license", "Per-seat subscription only"],
    correct: 0,
    explanation: "AWS defines cloud computing as the on-demand delivery of compute, storage, and applications via the Internet with pay-as-you-go pricing."
  },
  {
    id: 2,
    domain: "Domain 1: Cloud Concepts",
    question: "A key financial benefit of migrating systems from an on-premises data center to AWS is that it:",
    options: ["Replaces upfront capital expenses (CAPEX) with low variable operational expenses (OPEX)", "Requires purchasing dedicated hardware", "Eliminates all operational expenses", "Increases upfront capital expenses"],
    correct: 0,
    explanation: "Migrating to AWS replaces upfront CAPEX with low variable OPEX, reducing the Total Cost of Ownership (TCO)."
  },
  {
    id: 3,
    domain: "Domain 1: Cloud Concepts",
    question: "Capital expenditures (CAPEX) are best described as:",
    options: ["Variable expenses for continuing operations", "Long-term asset acquisition and one-off purchases to establish business operations", "Recurring payables for running resources", "Monthly cloud subscription fees"],
    correct: 1,
    explanation: "CAPEX refers to long-term asset acquisition or one-off purchases incurred to establish business operations, typical of on-premises environments."
  },
  {
    id: 4,
    domain: "Domain 1: Cloud Concepts",
    question: "Operating expenses (OPEX) are best described as:",
    options: ["Recurring payables for running the resources necessary to operate the business", "Fixed hardware depreciation only", "One-off purchases of physical servers", "Long-term asset acquisition"],
    correct: 0,
    explanation: "OPEX are the recurring, variable expenses for running resources necessary to operate the business, which the cloud model emphasizes."
  },
  {
    id: 5,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following is one of the six advantages of cloud computing described by AWS?",
    options: ["Reduce speed and agility", "Stop guessing capacity", "Increase capital expenditure", "Maintain your own data centers"],
    correct: 1,
    explanation: "The six advantages include trading fixed for variable expense, benefiting from economies of scale, stopping guessing capacity, increasing speed and agility, stopping spending on data centers, and going global in minutes."
  },
  {
    id: 6,
    domain: "Domain 1: Cloud Concepts",
    question: "The benefit from massive economies of scale in the cloud means that:",
    options: ["The operating cost is distributed to a larger customer base, making resources cheaper", "Goods are produced at smaller scale with higher costs", "Each customer pays for their own dedicated hardware", "Cloud resources cost more than on-premises"],
    correct: 0,
    explanation: "Economies of scale mean costs are distributed across a massive customer base, making virtual servers more affordable than small-scale on-premises operations."
  },
  {
    id: 7,
    domain: "Domain 1: Cloud Concepts",
    question: "The ability to 'stop guessing capacity' in the cloud allows you to:",
    options: ["Provision maximum capacity at all times", "Accurately match real usage patterns to computing capacity", "Avoid capacity planning entirely", "Rely solely on manual estimates"],
    correct: 1,
    explanation: "Cloud features let you match real usage patterns to capacity rather than relying on estimates, eliminating over- or under-provisioning."
  },
  {
    id: 8,
    domain: "Domain 1: Cloud Concepts",
    question: "Which cloud advantage describes the capability to launch services in more geographic regions to serve more customers?",
    options: ["Go global in minutes", "Benefit from economies of scale", "Stop guessing capacity", "Trade fixed for variable expense"],
    correct: 0,
    explanation: "'Go global in minutes' is the ability to deploy services across many geographic Regions quickly to serve customers worldwide."
  },
  {
    id: 9,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following is one of the four cloud architecture design principles in AWS?",
    options: ["Design for failure", "Use a single Availability Zone", "Avoid parallel processing", "Tightly couple components"],
    correct: 0,
    explanation: "The four design principles include designing for failure (decouple components, implement elasticity) and thinking parallel."
  },
  {
    id: 10,
    domain: "Domain 1: Cloud Concepts",
    question: "For a mission-critical workload in AWS that must be highly available, you should:",
    options: ["Use a single Availability Zone", "Disable Auto Scaling", "Avoid load balancing", "Use multiple Availability Zones"],
    correct: 3,
    explanation: "Using multiple Availability Zones provides high availability for mission-critical workloads by eliminating single points of failure."
  },
  {
    id: 11,
    domain: "Domain 1: Cloud Concepts",
    question: "The principle that 'a change or a failure in one component should not cascade to other components' is known as:",
    options: ["Consolidated billing", "Vertical scaling", "Loose coupling", "Tight coupling"],
    correct: 2,
    explanation: "Loose coupling decouples components so that a failure or change in one does not cascade to others."
  },
  {
    id: 12,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS service provides virtual servers (instances) that you can launch and manage in the cloud?",
    options: ["AWS Lambda", "Amazon S3", "Amazon EC2", "Amazon RDS"],
    correct: 2,
    explanation: "Amazon EC2 provides resizable virtual servers, called instances, in the cloud."
  },
  {
    id: 13,
    domain: "Domain 1: Cloud Concepts",
    question: "Which type of EC2 instance allows you to use your existing server-bound software licenses?",
    options: ["On-Demand Instance", "Reserved Instance", "Dedicated Host", "Spot Instance"],
    correct: 2,
    explanation: "Dedicated Hosts let you use existing server-bound software licenses on AWS, which can reduce licensing costs."
  },
  {
    id: 14,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS service runs code in response to events without requiring you to provision or manage servers?",
    options: ["Amazon EC2", "Amazon RDS", "AWS Batch", "AWS Lambda"],
    correct: 3,
    explanation: "AWS Lambda is a serverless compute service that runs code in response to events without managing servers."
  },
  {
    id: 15,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS service provides a platform to deploy and scale web applications without managing the underlying infrastructure?",
    options: ["AWS CloudTrail", "Amazon EC2", "Amazon S3", "AWS Elastic Beanstalk"],
    correct: 3,
    explanation: "AWS Elastic Beanstalk automatically handles deployment, capacity provisioning, load balancing, and scaling of web applications."
  },
  {
    id: 16,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS service is used to run and manage Docker containers at scale?",
    options: ["Amazon RDS", "AWS CodeBuild", "Amazon S3", "Amazon Elastic Container Service (ECS)"],
    correct: 3,
    explanation: "Amazon ECS is a highly scalable container orchestration service for running and managing Docker containers."
  },
  {
    id: 17,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS service lets you run batch computing workloads at any scale?",
    options: ["AWS Step Functions", "AWS Batch", "AWS Lambda", "Amazon EC2"],
    correct: 1,
    explanation: "AWS Batch dynamically provisions the right compute resources to efficiently run hundreds of thousands of batch jobs."
  },
  {
    id: 18,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS service is a fully managed container registry for storing Docker images?",
    options: ["Amazon EBS", "Amazon S3", "AWS CodePipeline", "Amazon Elastic Container Registry (ECR)"],
    correct: 3,
    explanation: "Amazon ECR is a fully managed Docker container registry that makes it easy to store, manage, and deploy container images."
  },
  {
    id: 19,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS pricing option provides a discount in exchange for a consistent amount of compute usage over a 1- or 3-year term across EC2, Fargate, and Lambda?",
    options: ["Dedicated Host", "Spot Instance", "On-Demand Instance", "AWS Savings Plan"],
    correct: 3,
    explanation: "AWS Savings Plans offer discounted rates for committing to a consistent amount of compute usage (measured in $/hour) over 1 or 3 years."
  },
  {
    id: 20,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS Well-Architected Framework pillar focuses on running and monitoring systems to deliver business value?",
    options: ["Sustainability", "Performance Efficiency", "Operational Excellence", "Cost Optimization"],
    correct: 2,
    explanation: "The Operational Excellence pillar focuses on running and monitoring systems to deliver business value and continually improving processes."
  },
  {
    id: 21,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS Well-Architected Framework pillar focuses on avoiding the unnecessary consumption of resources?",
    options: ["Cost Optimization", "Reliability", "Operational Excellence", "Security"],
    correct: 0,
    explanation: "The Cost Optimization pillar focuses on avoiding unnecessary costs and consumption of resources."
  },
  {
    id: 22,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS Well-Architected Framework pillar ensures a workload can recover from infrastructure or service disruptions?",
    options: ["Reliability", "Sustainability", "Cost Optimization", "Performance Efficiency"],
    correct: 0,
    explanation: "The Reliability pillar ensures a workload performs its required function correctly and can recover from disruptions."
  },
  {
    id: 23,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS Well-Architected Framework pillar focuses on minimizing the environmental impact of running cloud workloads?",
    options: ["Cost Optimization", "Security", "Sustainability", "Operational Excellence"],
    correct: 2,
    explanation: "The Sustainability pillar focuses on minimizing the environmental impact of running cloud workloads."
  },
  {
    id: 24,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS service helps you review and improve workloads against the Well-Architected Framework pillars?",
    options: ["Amazon CloudWatch", "AWS CloudTrail", "AWS X-Ray", "AWS Well-Architected Tool"],
    correct: 3,
    explanation: "The AWS Well-Architected Tool helps you review the state of your workloads against the Well-Architected Framework pillars."
  },
  {
    id: 25,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS service is a simple, lightsail-style offering for developers to launch and manage small virtual private servers?",
    options: ["AWS Snowmobile", "Amazon Lightsail", "Amazon EMR", "Amazon Redshift"],
    correct: 1,
    explanation: "Amazon Lightsail provides easy-to-use virtual private servers for developers and small workloads."
  },
  {
    id: 26,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS service enables you to run AWS services on-premises for a hybrid deployment?",
    options: ["AWS Snowmobile", "AWS Outposts", "Amazon CloudFront", "AWS Global Accelerator"],
    correct: 1,
    explanation: "AWS Outposts brings AWS infrastructure and services to on-premises environments for hybrid cloud deployments."
  },
  {
    id: 27,
    domain: "Domain 1: Cloud Concepts",
    question: "Which deployment model keeps all resources in AWS without any on-premises infrastructure?",
    options: ["Fully cloud-based (public cloud)", "On-premises only", "Hybrid", "Colocation"],
    correct: 0,
    explanation: "A fully cloud-based deployment runs all resources in AWS with no on-premises component."
  },
  {
    id: 28,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS service lets you launch resources with infrastructure-as-code templates?",
    options: ["AWS CloudFormation", "AWS X-Ray", "AWS CodeDeploy", "Amazon CloudWatch"],
    correct: 0,
    explanation: "AWS CloudFormation lets you create and deploy infrastructure-as-code templates to provision resources."
  },
  {
    id: 29,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following best describes elasticity in AWS?",
    options: ["Using a single large instance forever", "Avoiding Auto Scaling", "Automatically scaling capacity up and down to match demand", "Manually adding servers weekly"],
    correct: 2,
    explanation: "Elasticity is the ability to automatically scale resources to match changing demand."
  },
  {
    id: 30,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following best describes the difference between scalability and elasticity?",
    options: ["Elasticity only applies to storage", "Scalability reduces costs while elasticity increases them", "Scalability handles growth over time; elasticity responds to rapid changes in demand", "They are identical concepts"],
    correct: 2,
    explanation: "Scalability accommodates long-term growth, while elasticity rapidly adjusts capacity to short-term demand changes."
  },
  {
    id: 31,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS service is a serverless compute engine for containers, removing the need to manage servers?",
    options: ["AWS Batch", "Amazon Lightsail", "AWS Fargate", "Amazon EC2"],
    correct: 2,
    explanation: "AWS Fargate is a serverless compute engine for ECS and EKS that eliminates server management."
  },
  // ======================== DOMAIN 2: Security and Compliance (30%) — 39 questions ========================
  {
    id: 32,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service is a security management tool to configure your AWS WAF rules across your accounts?",
    options: ["AWS Firewall Manager", "AWS Shield", "Amazon Macie", "Amazon GuardDuty"],
    correct: 0,
    explanation: "AWS Firewall Manager centrally configures and manages AWS WAF rules across multiple accounts."
  },
  {
    id: 33,
    domain: "Domain 2: Security and Compliance",
    question: "A company needs to download compliance-related documents in AWS such as Service Organization Controls (SOC) reports. Which service should they use?",
    options: ["AWS Artifact", "Amazon GuardDuty", "AWS Shield", "Amazon Inspector"],
    correct: 0,
    explanation: "AWS Artifact provides on-demand access to AWS compliance reports such as SOC, PCI, and ISO reports."
  },
  {
    id: 34,
    domain: "Domain 2: Security and Compliance",
    question: "Which two measures improve the security of IAM users?",
    options: ["Share the root password and disable logging", "Use a single shared user and long-term keys", "Store credentials in plain text", "Enable Multi-Factor Authentication (MFA) and configure a strong password policy"],
    correct: 3,
    explanation: "Enabling MFA and configuring a strong password policy are key ways to improve IAM user security."
  },
  {
    id: 35,
    domain: "Domain 2: Security and Compliance",
    question: "Which IAM identity uses access keys to manage cloud resources via the AWS CLI?",
    options: ["IAM User", "IAM Role", "AWS Organizations", "IAM Group"],
    correct: 0,
    explanation: "An IAM User can be issued access keys to manage cloud resources programmatically via the AWS CLI."
  },
  {
    id: 36,
    domain: "Domain 2: Security and Compliance",
    question: "Which IAM entity is used to grant temporary access to your AWS resources?",
    options: ["IAM Role", "Root account", "Hard-coded credentials", "IAM User with long-term keys"],
    correct: 0,
    explanation: "IAM Roles grant temporary, automatically rotated credentials to access AWS resources."
  },
  {
    id: 37,
    domain: "Domain 2: Security and Compliance",
    question: "Which IAM construct lets you apply and easily manage common access permissions to a large number of IAM users?",
    options: ["IAM Role", "AWS Artifact", "IAM Policy Simulator", "IAM Group"],
    correct: 3,
    explanation: "IAM Groups let you apply common permissions to many IAM users at once."
  },
  {
    id: 38,
    domain: "Domain 2: Security and Compliance",
    question: "Which policies grant the required permissions to access your Amazon S3 resources?",
    options: ["Security Group and NACL", "Bucket Policy and User Policy", "Route 53 records", "AWS WAF rules"],
    correct: 1,
    explanation: "S3 access is controlled through Bucket Policies (resource-based) and User/IAM Policies (identity-based)."
  },
  {
    id: 39,
    domain: "Domain 2: Security and Compliance",
    question: "Which service provides temporary AWS credentials for users who have authenticated via their social media logins as well as for guest users?",
    options: ["Amazon Cognito Identity Pool", "AWS Directory Service", "AWS IAM Identity Center", "AWS Secrets Manager"],
    correct: 0,
    explanation: "Amazon Cognito Identity Pools provide temporary AWS credentials for authenticated (including social) and guest users."
  },
  {
    id: 40,
    domain: "Domain 2: Security and Compliance",
    question: "A startup needs to evaluate the newly created IAM policies. Which tool should they use?",
    options: ["Amazon CloudWatch", "AWS Trusted Advisor", "IAM Policy Simulator", "AWS Budgets"],
    correct: 2,
    explanation: "The IAM Policy Simulator lets you test and validate the effects of IAM policies before applying them."
  },
  {
    id: 41,
    domain: "Domain 2: Security and Compliance",
    question: "Which service discovers, classifies, and protects sensitive data such as personally identifiable information (PII) or intellectual property?",
    options: ["Amazon Macie", "Amazon GuardDuty", "Amazon Inspector", "AWS Shield"],
    correct: 0,
    explanation: "Amazon Macie uses machine learning to discover, classify, and protect sensitive data such as PII."
  },
  {
    id: 42,
    domain: "Domain 2: Security and Compliance",
    question: "Which is a threat detection service that continuously monitors for malicious activity to protect your AWS account?",
    options: ["AWS KMS", "Amazon Macie", "Amazon GuardDuty", "AWS WAF"],
    correct: 2,
    explanation: "Amazon GuardDuty continuously monitors for malicious or unauthorized behavior to protect your AWS accounts."
  },
  {
    id: 43,
    domain: "Domain 2: Security and Compliance",
    question: "Which measure helps prevent unauthorized deletion of Amazon S3 objects?",
    options: ["Enable Multi-Factor Authentication (MFA)", "Make the bucket public", "Disable bucket versioning", "Remove all bucket policies"],
    correct: 0,
    explanation: "Enabling MFA (e.g., MFA Delete) helps prevent unauthorized deletion of S3 objects."
  },
  {
    id: 44,
    domain: "Domain 2: Security and Compliance",
    question: "A company needs to control the traffic going in and out of their VPC subnets. Which should they use?",
    options: ["Network Access Control List (NACL)", "AWS Shield", "AWS WAF", "Security Group"],
    correct: 0,
    explanation: "Network ACLs control inbound and outbound traffic at the subnet level within a VPC."
  },
  {
    id: 45,
    domain: "Domain 2: Security and Compliance",
    question: "What acts as a virtual firewall in AWS that controls the traffic at the EC2 instance level?",
    options: ["AWS WAF", "Network ACL", "AWS Network Firewall", "Security Group"],
    correct: 3,
    explanation: "Security Groups act as virtual firewalls controlling traffic at the EC2 instance level."
  },
  {
    id: 46,
    domain: "Domain 2: Security and Compliance",
    question: "Which service provides an automated security assessment to improve the security and compliance of your applications?",
    options: ["Amazon Macie", "Amazon Inspector", "AWS Shield", "Amazon GuardDuty"],
    correct: 1,
    explanation: "Amazon Inspector performs automated security assessments to improve the security and compliance of applications."
  },
  {
    id: 47,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service protects against Distributed Denial of Service (DDoS) attacks?",
    options: ["AWS Certificate Manager", "Amazon Macie", "AWS Secrets Manager", "AWS Shield"],
    correct: 3,
    explanation: "AWS Shield provides managed DDoS protection; Shield Advanced adds enhanced, always-on protection."
  },
  {
    id: 48,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service helps you store, retrieve, and rotate secrets such as database credentials?",
    options: ["AWS Secrets Manager", "AWS KMS", "AWS CloudTrail", "Amazon S3"],
    correct: 0,
    explanation: "AWS Secrets Manager securely stores and rotates secrets such as database credentials and API keys."
  },
  {
    id: 49,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides centralized management of cryptographic keys for encryption?",
    options: ["AWS Key Management Service (KMS)", "AWS Artifact", "Amazon Cognito", "AWS Secrets Manager"],
    correct: 0,
    explanation: "AWS KMS lets you create and manage cryptographic keys used to encrypt data across AWS services."
  },
  {
    id: 50,
    domain: "Domain 2: Security and Compliance",
    question: "You have to encrypt the log data that is stored and managed by AWS CloudTrail. Which service should you use?",
    options: ["AWS Shield", "AWS Key Management Service (AWS KMS)", "Amazon GuardDuty", "AWS WAF"],
    correct: 1,
    explanation: "AWS KMS provides the encryption keys used to encrypt CloudTrail log data."
  },
  {
    id: 51,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service helps you investigate security findings by analyzing VPC flow logs, DNS logs, and CloudTrail events?",
    options: ["AWS Shield", "Amazon Macie", "Amazon Detective", "AWS WAF"],
    correct: 2,
    explanation: "Amazon Detective collects and analyzes security data to help investigate and identify the root cause of issues."
  },
  {
    id: 52,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides dedicated hardware security modules (HSMs) in the cloud?",
    options: ["AWS CloudHSM", "AWS Secrets Manager", "Amazon Macie", "AWS KMS"],
    correct: 0,
    explanation: "AWS CloudHSM provides dedicated, single-tenant hardware security modules for key management."
  },
  {
    id: 53,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides managed Microsoft Active Directory in the cloud?",
    options: ["AWS Directory Service", "AWS IAM Identity Center", "Amazon Cognito", "AWS Secrets Manager"],
    correct: 0,
    explanation: "AWS Directory Service provides managed directories, including Microsoft Active Directory."
  },
  {
    id: 54,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service centrally manages single sign-on (SSO) access across multiple AWS accounts and applications?",
    options: ["AWS Directory Service", "AWS IAM Identity Center (AWS Single Sign-On)", "Amazon Cognito", "AWS Organizations"],
    correct: 1,
    explanation: "AWS IAM Identity Center (formerly AWS SSO) centrally manages SSO access across AWS accounts and business applications."
  },
  {
    id: 55,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides network protection for your VPCs with stateful inspection and threat prevention?",
    options: ["AWS Shield", "AWS Network Firewall", "AWS WAF", "Amazon Macie"],
    correct: 1,
    explanation: "AWS Network Firewall provides managed network protection for VPCs with stateful inspection."
  },
  {
    id: 56,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service lets you securely share AWS resources across AWS accounts?",
    options: ["AWS Resource Access Manager (AWS RAM)", "AWS Organizations", "AWS IAM Identity Center", "Amazon Cognito"],
    correct: 0,
    explanation: "AWS RAM lets you securely share resources such as subnets and Transit Gateways across accounts."
  },
  {
    id: 57,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides a unified view of security findings and alerts across AWS accounts?",
    options: ["AWS Trusted Advisor", "AWS Config", "AWS Security Hub", "Amazon CloudWatch"],
    correct: 2,
    explanation: "AWS Security Hub aggregates and prioritizes security findings from multiple AWS services."
  },
  {
    id: 58,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service continuously audits your AWS usage to simplify risk assessment and compliance evidence collection?",
    options: ["AWS Audit Manager", "AWS Shield", "Amazon GuardDuty", "AWS Artifact"],
    correct: 0,
    explanation: "AWS Audit Manager automates evidence collection to help you audit AWS usage and assess risk."
  },
  {
    id: 59,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provisions, manages, and renews SSL/TLS certificates for AWS services?",
    options: ["Amazon Route 53", "AWS Certificate Manager (ACM)", "AWS KMS", "AWS Secrets Manager"],
    correct: 1,
    explanation: "AWS Certificate Manager (ACM) provisions, manages, and deploys SSL/TLS certificates."
  },
  {
    id: 60,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service protects web applications from common web exploits such as SQL injection?",
    options: ["AWS Network Firewall", "AWS WAF", "AWS Shield", "Amazon GuardDuty"],
    correct: 1,
    explanation: "AWS WAF is a web application firewall that filters malicious web traffic such as SQL injection and cross-site scripting."
  },
  {
    id: 61,
    domain: "Domain 2: Security and Compliance",
    question: "Under the AWS shared responsibility model, which of the following is a responsibility of AWS?",
    options: ["Patching customer operating systems", "Securing the underlying cloud infrastructure and data centers", "Encrypting customer data", "Managing customer IAM policies"],
    correct: 1,
    explanation: "AWS is responsible for security OF the cloud, including the underlying infrastructure and data centers."
  },
  {
    id: 62,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service continuously monitors and logs account activity such as user actions made from the AWS Management Console and AWS SDKs?",
    options: ["AWS CloudTrail", "Amazon Athena", "Amazon CloudWatch", "AWS X-Ray"],
    correct: 0,
    explanation: "AWS CloudTrail continuously monitors and logs account activity, including API calls from the console and SDKs."
  },
  {
    id: 63,
    domain: "Domain 2: Security and Compliance",
    question: "Which service is used to manage user access and permissions to AWS services and resources?",
    options: ["AWS Identity and Access Management (IAM)", "Amazon CloudWatch", "AWS CloudTrail", "Amazon SNS"],
    correct: 0,
    explanation: "AWS IAM manages users, groups, roles, and policies to control access to AWS resources."
  },
  {
    id: 64,
    domain: "Domain 2: Security and Compliance",
    question: "Which of the following best describes the AWS shared responsibility model?",
    options: ["AWS secures the cloud infrastructure; customers secure what they run in the cloud", "Security is not required in the cloud", "AWS secures customer applications and data", "Customers are responsible for all security"],
    correct: 0,
    explanation: "The shared responsibility model divides security OF the cloud (AWS) from security IN the cloud (customer)."
  },
  {
    id: 65,
    domain: "Domain 2: Security and Compliance",
    question: "Which service helps protect your Amazon VPC by acting as a virtual firewall at the instance level?",
    options: ["AWS KMS", "Amazon Macie", "AWS Artifact", "Security Group"],
    correct: 3,
    explanation: "Security Groups act as virtual firewalls controlling traffic at the EC2 instance level."
  },
  {
    id: 66,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service can protect your S3 buckets by detecting and alerting on unusual data access patterns?",
    options: ["AWS Shield", "Amazon Macie", "AWS WAF", "Amazon Polly"],
    correct: 1,
    explanation: "Amazon Macie uses machine learning to detect unusual data access patterns and protect sensitive data in S3."
  },
  {
    id: 67,
    domain: "Domain 2: Security and Compliance",
    question: "Which of the following is an IAM best practice for securing the AWS account root user?",
    options: ["Use root access keys for daily operations", "Disable root account entirely", "Share root credentials with all administrators", "Enable MFA on the root user and use it only for tasks that require it"],
    correct: 3,
    explanation: "Protect the root user with MFA and reserve it for tasks that specifically require root privileges."
  },
  {
    id: 68,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides a secure, private connection between your VPC and supported AWS services or your on-premises network?",
    options: ["AWS Global Accelerator", "AWS PrivateLink / VPC Endpoints", "Amazon Route 53", "Amazon CloudFront"],
    correct: 1,
    explanation: "AWS PrivateLink and VPC Endpoints enable private connectivity between your VPC and services without traversing the public Internet."
  },
  {
    id: 69,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service provides compliance validation against standards such as PCI DSS and HIPAA through downloadable reports?",
    options: ["Amazon Detective", "Amazon GuardDuty", "AWS Shield", "AWS Artifact"],
    correct: 3,
    explanation: "AWS Artifact provides on-demand access to compliance reports for standards such as PCI DSS and HIPAA."
  },
  {
    id: 70,
    domain: "Domain 2: Security and Compliance",
    question: "Which AWS service helps you centrally configure and manage security groups and WAF rules across your organization?",
    options: ["Amazon Macie", "Amazon GuardDuty", "AWS Shield", "AWS Firewall Manager"],
    correct: 3,
    explanation: "AWS Firewall Manager centrally manages firewall rules, including WAF rules and security groups, across accounts."
  },
  // ======================== DOMAIN 3: Cloud Technology and Services (34%) — 44 questions ========================
  {
    id: 71,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs to use the AWS global network to improve availability of deployed applications using an anycast static IP address. Which service should they use?",
    options: ["Amazon CloudFront", "AWS Global Accelerator", "Amazon Route 53", "AWS Direct Connect"],
    correct: 1,
    explanation: "AWS Global Accelerator uses the AWS global network and anycast static IP addresses to improve application availability and performance."
  },
  {
    id: 72,
    domain: "Domain 3: Cloud Technology and Services",
    question: "You need to securely transfer hundreds of petabytes of data into and out of the AWS Cloud. Which service should you use?",
    options: ["AWS Direct Connect", "AWS Snowball Edge", "AWS Global Accelerator", "Amazon S3 Transfer Acceleration"],
    correct: 1,
    explanation: "AWS Snowball Edge is a physical device for securely transferring large amounts (petabytes) of data into and out of AWS."
  },
  {
    id: 73,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a highly available and scalable cloud DNS web service in AWS?",
    options: ["Amazon Route 53", "Amazon VPC", "AWS Global Accelerator", "Amazon CloudFront"],
    correct: 0,
    explanation: "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service."
  },
  {
    id: 74,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which service should you use to store the results of I/O-intensive SQL database queries to improve application performance?",
    options: ["Amazon Redshift", "Amazon RDS", "Amazon ElastiCache", "Amazon DynamoDB"],
    correct: 2,
    explanation: "Amazon ElastiCache caches the results of database queries in memory to improve application performance."
  },
  {
    id: 75,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which combination of AWS services allows you to serve static files with the lowest possible latency?",
    options: ["Amazon EBS and Amazon EFS", "Amazon S3 and Amazon CloudFront", "Amazon RDS and Amazon DynamoDB", "AWS Direct Connect and AWS VPN"],
    correct: 1,
    explanation: "Amazon S3 stores the static files and Amazon CloudFront caches and delivers them with low latency."
  },
  {
    id: 76,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service automatically scales the capacity of a cloud resource based on incoming traffic to improve availability?",
    options: ["AWS Auto Scaling", "Amazon CloudWatch", "AWS X-Ray", "AWS CloudFormation"],
    correct: 0,
    explanation: "AWS Auto Scaling automatically adjusts resource capacity based on incoming traffic to improve availability and reduce cost."
  },
  {
    id: 77,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs to migrate an on-premises MySQL database to Amazon RDS. Which service should they use?",
    options: ["AWS Snowball", "AWS Database Migration Service (AWS DMS)", "Amazon S3 Transfer Acceleration", "AWS Direct Connect"],
    correct: 1,
    explanation: "AWS DMS migrates databases to AWS quickly and securely, including on-premises MySQL to Amazon RDS."
  },
  {
    id: 78,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which feature automatically transfers infrequently accessed data in an S3 bucket to a more cost-effective storage class?",
    options: ["S3 Versioning", "S3 Object Lock", "S3 Multipart Upload", "S3 Lifecycle Policy"],
    correct: 3,
    explanation: "S3 Lifecycle Policies automatically transition objects to more cost-effective storage classes based on rules."
  },
  {
    id: 79,
    domain: "Domain 3: Cloud Technology and Services",
    question: "You need to upload a single object as a set of parts to improve throughput and recover quickly from network issues. What should you use?",
    options: ["Use Multipart Upload API", "Use S3 Object Lock", "Use a single PUT request", "Use S3 Glacier Deep Archive"],
    correct: 0,
    explanation: "The S3 Multipart Upload API uploads an object as a set of parts to improve throughput and recovery from network issues."
  },
  {
    id: 80,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs to establish a dedicated connection between their on-premises network and their AWS VPC. Which service should they use?",
    options: ["AWS Global Accelerator", "Amazon CloudFront", "AWS Direct Connect", "Amazon Route 53"],
    correct: 2,
    explanation: "AWS Direct Connect establishes a dedicated private network connection between on-premises infrastructure and AWS."
  },
  {
    id: 81,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which Machine Learning service allows you to add a visual analysis feature to your applications?",
    options: ["Amazon Transcribe", "Amazon Textract", "Amazon Polly", "Amazon Rekognition"],
    correct: 3,
    explanation: "Amazon Rekognition provides image and video analysis capabilities for your applications."
  },
  {
    id: 82,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which service can trace user requests in your application to help debug and analyze performance?",
    options: ["AWS CloudTrail", "AWS X-Ray", "Amazon Athena", "Amazon CloudWatch"],
    correct: 1,
    explanation: "AWS X-Ray traces user requests as they travel through your application."
  },
  {
    id: 83,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs to retrieve the instance ID, public keys, and public IP address of their EC2 instance. What should they use?",
    options: ["AWS CloudTrail", "Instance metadata", "Amazon CloudWatch", "AWS X-Ray"],
    correct: 1,
    explanation: "EC2 instance metadata provides data about your instance such as instance ID, public keys, and public IP address."
  },
  {
    id: 84,
    domain: "Domain 3: Cloud Technology and Services",
    question: "You need to speed up the content delivery of static assets to your customers around the globe. Which service should you use?",
    options: ["Amazon CloudFront", "AWS Global Accelerator", "Amazon Route 53", "AWS Direct Connect"],
    correct: 0,
    explanation: "Amazon CloudFront is a CDN that speeds up global delivery of static and dynamic content."
  },
  {
    id: 85,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service lets you create and deploy infrastructure-as-code templates?",
    options: ["AWS CloudFormation", "AWS CodePipeline", "AWS X-Ray", "Amazon CloudWatch"],
    correct: 0,
    explanation: "AWS CloudFormation lets you model and provision infrastructure using declarative templates (IaC)."
  },
  {
    id: 86,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which database service can be used to store JSON documents?",
    options: ["Amazon Redshift", "Amazon DynamoDB", "Amazon Aurora", "Amazon RDS"],
    correct: 1,
    explanation: "Amazon DynamoDB is a NoSQL database that can store JSON documents."
  },
  {
    id: 87,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides a fully managed relational database that is MySQL- and PostgreSQL-compatible?",
    options: ["Amazon Redshift", "Amazon Aurora", "Amazon DynamoDB", "Amazon ElastiCache"],
    correct: 1,
    explanation: "Amazon Aurora is a MySQL- and PostgreSQL-compatible managed relational database."
  },
  {
    id: 88,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a fully managed, petabyte-scale data warehouse for analytics?",
    options: ["Amazon Redshift", "Amazon DynamoDB", "Amazon RDS", "Amazon ElastiCache"],
    correct: 0,
    explanation: "Amazon Redshift is a fully managed data warehouse for analytics workloads."
  },
  {
    id: 89,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is used to run interactive SQL queries against data stored in Amazon S3 without setting up infrastructure?",
    options: ["Amazon Athena", "Amazon Redshift", "Amazon RDS", "AWS Glue"],
    correct: 0,
    explanation: "Amazon Athena is a serverless query service for analyzing data in S3 using standard SQL."
  },
  {
    id: 90,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a serverless ETL service to prepare and load data for analytics?",
    options: ["Amazon Athena", "AWS Glue", "Amazon EMR", "AWS Data Pipeline"],
    correct: 1,
    explanation: "AWS Glue is a serverless ETL service that prepares and loads data for analytics."
  },
  {
    id: 91,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a managed big data platform for processing large datasets with Hadoop and Spark?",
    options: ["AWS Glue", "Amazon Athena", "Amazon EMR", "Amazon Kinesis"],
    correct: 2,
    explanation: "Amazon EMR is a managed platform for processing large datasets using frameworks like Hadoop and Spark."
  },
  {
    id: 92,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides real-time data streaming to collect and process logs and telemetry?",
    options: ["Amazon SQS", "Amazon Kinesis", "AWS Batch", "Amazon SNS"],
    correct: 1,
    explanation: "Amazon Kinesis collects, processes, and analyzes real-time streaming data."
  },
  {
    id: 93,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is used to load streaming data into data stores and analytics engines?",
    options: ["Amazon SQS", "Amazon SNS", "Amazon Data Firehose", "AWS Step Functions"],
    correct: 2,
    explanation: "Amazon Data Firehose reliably loads real-time streaming data into data stores and analytics services."
  },
  {
    id: 94,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides a fully managed Apache Kafka service?",
    options: ["Amazon SQS", "Amazon SNS", "Amazon Kinesis", "Amazon Managed Streaming for Apache Kafka (Amazon MSK)"],
    correct: 3,
    explanation: "Amazon MSK is a fully managed service for running Apache Kafka."
  },
  {
    id: 95,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a managed search and analytics engine for log analytics and full-text search?",
    options: ["Amazon Redshift", "Amazon OpenSearch Service", "Amazon Athena", "AWS Glue"],
    correct: 1,
    explanation: "Amazon OpenSearch Service is a managed search and analytics engine."
  },
  {
    id: 96,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a business intelligence tool for building visualizations and dashboards?",
    options: ["AWS Glue", "Amazon QuickSight", "Amazon Redshift", "Amazon Athena"],
    correct: 1,
    explanation: "Amazon QuickSight is a serverless business intelligence service for visualizations and dashboards."
  },
  {
    id: 97,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is used to build, train, and deploy machine learning models?",
    options: ["Amazon Polly", "Amazon Rekognition", "Amazon Comprehend", "Amazon SageMaker"],
    correct: 3,
    explanation: "Amazon SageMaker is a fully managed service for building, training, and deploying ML models."
  },
  {
    id: 98,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service extracts text and data from scanned documents?",
    options: ["Amazon Polly", "Amazon Transcribe", "Amazon Textract", "Amazon Rekognition"],
    correct: 2,
    explanation: "Amazon Textract uses machine learning to extract text, handwriting, and data from documents."
  },
  {
    id: 99,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is used to build conversational interfaces and chatbots?",
    options: ["Amazon Lex", "Amazon Polly", "Amazon Translate", "Amazon Comprehend"],
    correct: 0,
    explanation: "Amazon Lex lets you build conversational interfaces and chatbots using voice and text."
  },
  {
    id: 100,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides intelligent search capabilities for enterprise content?",
    options: ["Amazon Polly", "Amazon Comprehend", "Amazon Translate", "Amazon Kendra"],
    correct: 3,
    explanation: "Amazon Kendra is an intelligent enterprise search service powered by machine learning."
  },
  {
    id: 101,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service automatically converts speech into text?",
    options: ["Amazon Polly", "Amazon Transcribe", "Amazon Lex", "Amazon Translate"],
    correct: 1,
    explanation: "Amazon Transcribe is an automatic speech recognition service that converts speech to text."
  },
  {
    id: 102,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service converts text into lifelike speech?",
    options: ["Amazon Transcribe", "Amazon Rekognition", "Amazon Comprehend", "Amazon Polly"],
    correct: 3,
    explanation: "Amazon Polly converts text into lifelike speech."
  },
  {
    id: 103,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service translates text between languages?",
    options: ["Amazon Translate", "Amazon Transcribe", "Amazon Polly", "Amazon Comprehend"],
    correct: 0,
    explanation: "Amazon Translate is a neural machine translation service for translating text between languages."
  },
  {
    id: 104,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service analyzes text to extract insights and sentiment?",
    options: ["Amazon Comprehend", "Amazon Polly", "Amazon Translate", "Amazon Rekognition"],
    correct: 0,
    explanation: "Amazon Comprehend uses machine learning to uncover insights and sentiment in text."
  },
  {
    id: 105,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service automates application deployments to EC2 instances and on-premises servers?",
    options: ["AWS CodeDeploy", "AWS X-Ray", "AWS CloudFormation", "AWS CodeBuild"],
    correct: 0,
    explanation: "AWS CodeDeploy automates application deployments to a variety of compute services."
  },
  {
    id: 106,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service automates the build, test, and deploy phases of your release process?",
    options: ["AWS CodePipeline", "AWS CloudFormation", "AWS X-Ray", "Amazon EC2"],
    correct: 0,
    explanation: "AWS CodePipeline automates continuous delivery pipelines for fast and reliable updates."
  },
  {
    id: 107,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a fully managed build service that compiles code and runs tests?",
    options: ["AWS CodeBuild", "Amazon EC2", "AWS CodeDeploy", "AWS CodePipeline"],
    correct: 0,
    explanation: "AWS CodeBuild compiles source code, runs tests, and produces deployment-ready packages."
  },
  {
    id: 108,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a fully managed message queuing service for decoupling application components?",
    options: ["Amazon MQ", "Amazon SQS", "Amazon SNS", "AWS Step Functions"],
    correct: 1,
    explanation: "Amazon SQS is a fully managed message queuing service for decoupling and scaling microservices."
  },
  {
    id: 109,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a pub/sub messaging service for sending notifications to many subscribers?",
    options: ["Amazon SES", "Amazon SNS", "AWS Step Functions", "Amazon SQS"],
    correct: 1,
    explanation: "Amazon SNS is a fully managed pub/sub messaging service for notifications."
  },
  {
    id: 110,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service coordinates multiple AWS services into serverless workflows?",
    options: ["Amazon SQS", "AWS Step Functions", "Amazon SNS", "AWS Lambda"],
    correct: 1,
    explanation: "AWS Step Functions orchestrates AWS services into serverless workflows with visual state machines."
  },
  {
    id: 111,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a fully managed service for creating, publishing, and securing APIs at any scale?",
    options: ["AWS Lambda", "Amazon Route 53", "Amazon API Gateway", "Amazon EC2"],
    correct: 2,
    explanation: "Amazon API Gateway creates, publishes, maintains, monitors, and secures APIs at any scale."
  },
  {
    id: 112,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service distributes incoming application traffic across multiple targets such as EC2 instances?",
    options: ["AWS Elastic Load Balancing", "Amazon Route 53", "Amazon CloudFront", "AWS Global Accelerator"],
    correct: 0,
    explanation: "Elastic Load Balancing automatically distributes incoming application traffic across multiple targets."
  },
  {
    id: 113,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides an isolated virtual network where you can launch AWS resources?",
    options: ["AWS Organizations", "AWS Lambda", "Amazon CloudFront", "Amazon VPC"],
    correct: 3,
    explanation: "Amazon VPC provisions a logically isolated virtual network in the AWS cloud."
  },
  {
    id: 114,
    domain: "Domain 3: Cloud Technology and Services",
    question: "You need to enable your Amazon EC2 instances in a public subnet to connect to the public Internet. Which component should you use?",
    options: ["NAT Gateway", "Internet Gateway", "AWS Direct Connect", "VPC Peering"],
    correct: 1,
    explanation: "An Internet Gateway enables EC2 instances in a public subnet to connect to the public Internet."
  },
  // ======================== DOMAIN 4: Billing, Pricing and Support (12%) — 16 questions ========================
  {
    id: 115,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS role is a designated technical point of contact that maintains an operationally healthy AWS environment?",
    options: ["AWS Developer Advocate", "AWS Solutions Architect", "AWS Concierge", "Technical Account Manager (TAM)"],
    correct: 3,
    explanation: "The Technical Account Manager (TAM) is a dedicated technical point of contact, available with the Enterprise support plan."
  },
  {
    id: 116,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which tool inspects your AWS environment and makes recommendations that follow AWS best practices?",
    options: ["AWS Config", "AWS Trusted Advisor", "Amazon CloudWatch", "AWS CloudTrail"],
    correct: 1,
    explanation: "AWS Trusted Advisor inspects your environment and provides best-practice recommendations across cost, security, and performance."
  },
  {
    id: 117,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "A startup needs to estimate the costs of moving their application to AWS. Which tool should they use?",
    options: ["AWS Trusted Advisor", "AWS Budgets", "AWS Cost Explorer", "AWS Pricing Calculator"],
    correct: 3,
    explanation: "AWS Pricing Calculator helps estimate the cost of AWS services before deployment."
  },
  {
    id: 118,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS service lets you set coverage targets and receive alerts when your utilization drops?",
    options: ["AWS Pricing Calculator", "AWS Organizations", "AWS Cost Explorer", "AWS Budgets"],
    correct: 3,
    explanation: "AWS Budgets lets you set targets and receive alerts when cost or utilization thresholds are crossed."
  },
  {
    id: 119,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which type of Reserved Instance allows you to change its instance family, instance type, platform, scope, or tenancy?",
    options: ["Standard RI", "Scheduled RI", "Dedicated RI", "Convertible RI"],
    correct: 3,
    explanation: "Convertible Reserved Instances can be exchanged for another Convertible RI with different attributes."
  },
  {
    id: 120,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which EC2 purchasing option takes advantage of unused EC2 capacity in the AWS Cloud and provides up to a 90% discount?",
    options: ["Spot Instance", "Reserved Instance", "Dedicated Host", "On-Demand Instance"],
    correct: 0,
    explanation: "Spot Instances use spare EC2 capacity at up to a 90% discount but can be interrupted."
  },
  {
    id: 121,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "You need to centrally manage policies and consolidate billing across multiple AWS accounts. Which service should you use?",
    options: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Organizations"],
    correct: 3,
    explanation: "AWS Organizations centrally manages policies and consolidates billing across multiple AWS accounts."
  },
  {
    id: 122,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which is the most cost-efficient storage option for retaining database backups that allows occasional data retrieval in minutes?",
    options: ["Amazon EBS", "Amazon EFS", "Amazon Glacier (S3 Glacier)", "Amazon S3 Standard"],
    correct: 2,
    explanation: "Amazon Glacier is a low-cost archival storage option suitable for infrequently accessed backups."
  },
  {
    id: 123,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS service forecasts future costs and usage of your AWS resources based on your past consumption?",
    options: ["AWS Budgets", "AWS Cost Explorer", "AWS Pricing Calculator", "AWS Trusted Advisor"],
    correct: 1,
    explanation: "AWS Cost Explorer visualizes and forecasts your AWS costs and usage over time."
  },
  {
    id: 124,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which feature lets you categorize and track AWS costs on a detailed level?",
    options: ["AWS Trusted Advisor", "AWS Budgets", "Cost allocation tags", "AWS Pricing Calculator"],
    correct: 2,
    explanation: "Cost allocation tags categorize and track AWS costs at a detailed level."
  },
  {
    id: 125,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "A company launched a new VPC which is beyond the default service limit. What should they do?",
    options: ["Request a service limit increase in AWS Support Center", "Contact AWS Sales for a new account", "Use a different Region only", "Delete other VPCs"],
    correct: 0,
    explanation: "You can request a service limit increase via AWS Support Center when you exceed default limits."
  },
  {
    id: 126,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which is the most cost-effective payment option when you purchase a Reserved Instance for a 1-year term?",
    options: ["Partial Upfront", "No Upfront", "All Upfront", "Monthly installments only"],
    correct: 2,
    explanation: "All Upfront provides the largest discount for a Reserved Instance term."
  },
  {
    id: 127,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "You have to combine usage volume discounts of your multiple AWS accounts. Which feature should you use?",
    options: ["AWS Pricing Calculator", "Consolidated Billing", "AWS Budgets", "AWS Trusted Advisor"],
    correct: 1,
    explanation: "Consolidated Billing (via AWS Organizations) combines usage across accounts to receive volume discounts."
  },
  {
    id: 128,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "You want to sell your catalog of custom AMIs in AWS. Which service should you use?",
    options: ["Amazon S3", "AWS Marketplace", "AWS Lambda", "AWS CodeCommit"],
    correct: 1,
    explanation: "AWS Marketplace lets you sell your catalog of custom AMIs and software to other AWS customers."
  },
  {
    id: 129,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS support plan provides a dedicated Concierge Support Team for billing and account issues?",
    options: ["Developer", "None of the above", "Basic", "Enterprise"],
    correct: 3,
    explanation: "The Enterprise support plan provides access to the Concierge Support Team for billing and account assistance."
  },
  {
    id: 130,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS support plans include access to a Technical Account Manager (TAM)?",
    options: ["Basic and Developer", "All support plans", "Developer and Business", "Enterprise On-Ramp and Enterprise"],
    correct: 3,
    explanation: "The Enterprise On-Ramp and Enterprise support plans provide access to a Technical Account Manager (TAM)."
  }
];
