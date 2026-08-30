const QUESTIONS = [
  {
    id: 1,
    domain: "Domain 1: Cloud Concepts",
    question: "What does the term 'elasticity' mean in AWS Cloud computing?",
    options: ["The ability to automatically increase or decrease compute resources to match demand","The ability to run workloads in multiple AWS Regions at the same time","The practice of paying a fixed monthly fee regardless of usage","The process of moving an on-premises application to the cloud without changes"],
    correct: 0,
    explanation: "Elasticity is the ability to scale resources up or down automatically as demand changes, so you only pay for what you use. Running in multiple Regions describes global reach, not elasticity, and a fixed monthly fee describes a fixed expense model."
  },
  {
    id: 2,
    domain: "Domain 1: Cloud Concepts",
    question: "A retail company traditionally purchased enough servers to handle its busiest shopping day of the year, leaving most servers idle the rest of the year. Which AWS Cloud benefit best addresses this issue?",
    options: ["Global reach","Stop guessing capacity","Increased security","Economies of scale"],
    correct: 1,
    explanation: "One of AWS's six advantages of cloud computing is that you no longer have to guess capacity needs in advance; you can scale resources up or down as needed. Economies of scale relates to cost savings from aggregated demand, not capacity guessing."
  },
  {
    id: 3,
    domain: "Domain 1: Cloud Concepts",
    question: "What is meant by 'agility' as a benefit of the AWS Cloud?",
    options: ["The ability to quickly provision new IT resources, reducing the time it takes to make them available to developers","The physical distance between AWS data centers and end users","The redundancy built into AWS Regions and Availability Zones","The discount AWS offers for long-term compute commitments"],
    correct: 0,
    explanation: "Agility refers to the increased speed and ease with which resources can be created, accessed, and dropped, lowering the cost of experimenting and innovating. The other options describe global reach, high availability, and Reserved Instance pricing."
  },
  {
    id: 4,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following is a benefit of using AWS instead of managing an on-premises data center?",
    options: ["A company can focus its IT staff on differentiating projects instead of maintaining physical infrastructure","A company must sign a multi-year contract to use compute resources","A company gains full physical access to the hardware running its workloads","A company is guaranteed a fixed, unchanging monthly bill"],
    correct: 0,
    explanation: "By using AWS, organizations stop spending money running and maintaining data centers and can instead focus resources on projects that differentiate their business. AWS uses a pay-as-you-go model with no long-term contracts required, and customers do not get physical access to hardware."
  },
  {
    id: 5,
    domain: "Domain 1: Cloud Concepts",
    question: "A startup wants to deploy its application to users in Europe, Asia, and North America with low latency, without building its own data centers in each location. Which AWS Cloud benefit enables this?",
    options: ["Elasticity","Global reach","Economies of scale","Fault tolerance"],
    correct: 1,
    explanation: "Global reach (often described as 'go global in minutes') allows customers to deploy applications to multiple AWS Regions around the world with just a few clicks, providing lower latency and a better experience for end users worldwide."
  },
  {
    id: 6,
    domain: "Domain 1: Cloud Concepts",
    question: "What does 'high availability' mean for a system running on AWS?",
    options: ["The system is designed to remain accessible and operational with minimal downtime","The system automatically converts capital expenses into operating expenses","The system can only run in a single Availability Zone","The system requires manual failover during a hardware failure"],
    correct: 0,
    explanation: "High availability means a system is designed to minimize downtime and remain operational, often by using redundant components across multiple Availability Zones. It does not refer to the cost model, and it typically involves automatic, not manual, failover."
  },
  {
    id: 7,
    domain: "Domain 1: Cloud Concepts",
    question: "A company needs to handle sudden spikes in web traffic by adding more EC2 instances behind a load balancer, rather than upgrading a single instance to a larger size. This is an example of which type of scaling?",
    options: ["Vertical scaling","Horizontal scaling","Elastic Load Balancing pricing","Total cost of ownership"],
    correct: 1,
    explanation: "Horizontal scaling (scaling out) means adding more instances to a system, such as behind a load balancer. Vertical scaling (scaling up) means increasing the size or power of a single instance."
  },
  {
    id: 8,
    domain: "Domain 1: Cloud Concepts",
    question: "How does AWS help customers achieve high availability and fault tolerance for their applications?",
    options: ["By offering multiple Availability Zones within a Region so workloads can be distributed across physically separate locations","By requiring customers to manage their own backup data centers","By charging a flat rate regardless of resource usage","By limiting deployments to a single Availability Zone for simplicity"],
    correct: 0,
    explanation: "AWS Regions contain multiple, isolated Availability Zones, allowing customers to architect applications that remain available even if one Availability Zone experiences an issue. Customers do not need to build and manage their own backup data centers."
  },
  {
    id: 9,
    domain: "Domain 1: Cloud Concepts",
    question: "What is the primary purpose of the AWS Well-Architected Framework?",
    options: ["To help cloud architects build secure, high-performing, resilient, and efficient infrastructure for their applications","To calculate the total cost of ownership of an on-premises data center","To provide a migration strategy for moving applications to the cloud","To define the pricing models available for AWS services"],
    correct: 0,
    explanation: "The AWS Well-Architected Framework provides a consistent set of best practices, organized into six pillars, to help customers design and operate reliable, secure, efficient, and cost-effective systems in the cloud. It is not a migration strategy or a pricing guide."
  },
  {
    id: 10,
    domain: "Domain 1: Cloud Concepts",
    question: "Which pillar of the AWS Well-Architected Framework focuses on running and monitoring systems to deliver business value and continually improving processes and procedures?",
    options: ["Performance Efficiency","Operational Excellence","Cost Optimization","Sustainability"],
    correct: 1,
    explanation: "Operational Excellence focuses on supporting development and running workloads effectively, gaining insight into operations, and continually improving processes. Performance Efficiency instead focuses on using computing resources efficiently."
  },
  {
    id: 11,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS Well-Architected Framework pillar focuses on protecting data, systems, and assets while delivering business value through risk assessments and mitigation strategies?",
    options: ["Reliability","Cost Optimization","Security","Performance Efficiency"],
    correct: 2,
    explanation: "The Security pillar covers protecting information, systems, and assets while delivering business value through risk assessment and mitigation strategies. Reliability instead focuses on a workload's ability to recover from disruptions."
  },
  {
    id: 12,
    domain: "Domain 1: Cloud Concepts",
    question: "A company wants its workload to automatically recover from an Availability Zone failure with minimal customer impact. Which Well-Architected Framework pillar addresses this concern?",
    options: ["Reliability","Sustainability","Cost Optimization","Operational Excellence"],
    correct: 0,
    explanation: "The Reliability pillar focuses on the ability of a workload to perform its intended function correctly and consistently, including recovering quickly from failures. Sustainability instead focuses on minimizing environmental impact."
  },
  {
    id: 13,
    domain: "Domain 1: Cloud Concepts",
    question: "Which Well-Architected Framework pillar focuses on using IT and computing resources efficiently and maintaining that efficiency as demand changes and technology evolves?",
    options: ["Performance Efficiency","Security","Reliability","Operational Excellence"],
    correct: 0,
    explanation: "Performance Efficiency focuses on using computing resources efficiently to meet requirements and maintaining efficiency as demand and technologies change, such as by selecting the right instance types or using serverless architectures."
  },
  {
    id: 14,
    domain: "Domain 1: Cloud Concepts",
    question: "A company reviews its AWS bill each month and terminates unused resources to avoid unnecessary spending. This practice aligns with which Well-Architected Framework pillar?",
    options: ["Cost Optimization","Reliability","Security","Sustainability"],
    correct: 0,
    explanation: "Cost Optimization focuses on avoiding unnecessary costs, such as by identifying and eliminating unused or idle resources. Sustainability instead focuses on minimizing environmental impact, though the two pillars can overlap in practice."
  },
  {
    id: 15,
    domain: "Domain 1: Cloud Concepts",
    question: "Which pillar was added to the AWS Well-Architected Framework to focus on minimizing the environmental impacts of running cloud workloads?",
    options: ["Sustainability","Reliability","Security","Performance Efficiency"],
    correct: 0,
    explanation: "Sustainability is the sixth pillar of the Well-Architected Framework, focused on minimizing the environmental impact of running cloud workloads, such as through energy efficiency and resource optimization."
  },
  {
    id: 16,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following is considered a general best practice design principle when architecting applications on AWS?",
    options: ["Design components so they are loosely coupled and can fail independently without affecting the entire system","Build all application components as a single, tightly coupled unit for simplicity","Rely on manual intervention to recover from every failure","Deploy all resources in a single Availability Zone to reduce complexity"],
    correct: 0,
    explanation: "A key cloud design principle is loose coupling, which allows components to fail independently and be scaled or updated without impacting the rest of the system. Tightly coupled, single-AZ designs increase risk and reduce resilience."
  },
  {
    id: 17,
    domain: "Domain 1: Cloud Concepts",
    question: "What is the purpose of the AWS Cloud Adoption Framework (AWS CAF)?",
    options: ["To provide guidance and best practices that help organizations develop an efficient and effective plan for their cloud adoption journey","To calculate the exact monthly bill for AWS services","To automatically migrate on-premises servers to AWS without human involvement","To replace the need for a Well-Architected review"],
    correct: 0,
    explanation: "The AWS Cloud Adoption Framework (CAF) provides guidance across several perspectives to help organizations plan and execute a successful cloud adoption strategy. It does not calculate bills or automate migrations by itself."
  },
  {
    id: 18,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS Cloud Adoption Framework (CAF) perspective focuses on helping stakeholders build a strong business case for cloud adoption and align cloud investments with business outcomes?",
    options: ["Business perspective","People perspective","Security perspective","Operations perspective"],
    correct: 0,
    explanation: "The Business perspective helps ensure IT aligns with business needs and helps stakeholders build a business case justifying investment in the cloud. The People perspective instead focuses on skills, training, and organizational change management."
  },
  {
    id: 19,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS CAF perspective focuses on the skills, processes, and organizational capabilities needed to manage risk and measure the business value achieved through cloud investments?",
    options: ["Governance perspective","Platform perspective","Security perspective","People perspective"],
    correct: 0,
    explanation: "The Governance perspective focuses on the people and processes required to manage risk, ensure compliance, and measure the value delivered by cloud investments. The Platform perspective instead focuses on describing and building the technical cloud environment."
  },
  {
    id: 20,
    domain: "Domain 1: Cloud Concepts",
    question: "A company decides to move its on-premises application to AWS using EC2 instances with minimal to no code changes, simply moving the servers 'as-is.' Which of the 6 R's migration strategies does this describe?",
    options: ["Rehost","Refactor","Retire","Repurchase"],
    correct: 0,
    explanation: "Rehost, often called 'lift and shift,' involves moving an application to the cloud with little or no modification. Refactor involves re-architecting the application to take advantage of cloud-native features."
  },
  {
    id: 21,
    domain: "Domain 1: Cloud Concepts",
    question: "A company migrates its on-premises database to Amazon RDS to take advantage of managed backups and patching, while making minor optimizations but keeping its core application architecture the same. Which migration strategy does this best describe?",
    options: ["Retain","Replatform","Retire","Rehost"],
    correct: 1,
    explanation: "Replatform (sometimes called 'lift, tinker, and shift') involves making a few cloud optimizations, such as moving to a managed database service, without changing the core application architecture. Rehost involves no modifications at all."
  },
  {
    id: 22,
    domain: "Domain 1: Cloud Concepts",
    question: "During a migration assessment, a company identifies several applications that are no longer used by the business. What is the recommended 6 R's strategy for these applications?",
    options: ["Repurchase","Refactor","Retire","Relocate"],
    correct: 2,
    explanation: "Retire is the strategy of decommissioning or removing applications that are no longer needed, reducing the overall migration scope and saving cost. Repurchase involves replacing an application with a different product, typically a SaaS solution."
  },
  {
    id: 23,
    domain: "Domain 1: Cloud Concepts",
    question: "A company wants to redesign its application to use serverless, cloud-native services in order to add new features and improve agility that would be difficult to achieve on-premises. Which of the 6 R's migration strategies does this describe?",
    options: ["Rehost","Refactor / Re-architect","Retain","Relocate"],
    correct: 1,
    explanation: "Refactor (or re-architect) involves changing how an application is designed and developed, typically using cloud-native features, to add capabilities that would be hard to achieve in the existing environment. Rehost involves no architectural changes."
  },
  {
    id: 24,
    domain: "Domain 1: Cloud Concepts",
    question: "Before migrating to AWS, why do organizations typically calculate the total cost of ownership (TCO) of their current on-premises environment?",
    options: ["To compare the full cost of running infrastructure on-premises against the cost of running it on AWS, helping justify the migration","To determine which AWS Region has the lowest network latency","To automatically convert existing applications to serverless architectures","To select which of the six Well-Architected pillars to prioritize"],
    correct: 0,
    explanation: "Calculating TCO allows an organization to compare the full costs of maintaining on-premises infrastructure (hardware, facilities, staff, etc.) with the costs of running equivalent workloads on AWS, helping build a business case for migration."
  },
  {
    id: 25,
    domain: "Domain 1: Cloud Concepts",
    question: "How does moving to AWS typically change a company's approach to purchasing IT infrastructure?",
    options: ["It shifts spending from capital expenditure (CapEx) to operational expenditure (OpEx)","It requires a larger upfront capital investment than on-premises infrastructure","It eliminates all IT-related expenses","It shifts spending from operational expenditure (OpEx) to capital expenditure (CapEx)"],
    correct: 0,
    explanation: "AWS allows companies to trade capital expenditure, such as buying servers upfront, for operational expenditure, paying only for what they use as they use it. This is the opposite of increasing upfront capital investment."
  },
  {
    id: 26,
    domain: "Domain 1: Cloud Concepts",
    question: "What does the AWS 'pay-as-you-go' pricing model mean for customers?",
    options: ["Customers pay a large upfront fee and then use resources for free","Customers pay only for the individual resources and services they actually consume, with no long-term contracts required","Customers must commit to a fixed three-year contract before using any AWS service","Customers pay a flat monthly fee regardless of how many resources they use"],
    correct: 1,
    explanation: "Pay-as-you-go pricing means customers pay only for the compute, storage, and other resources they actually use, without upfront investments or long-term commitments. AWS does offer optional discounted pricing for commitments, but this is not required."
  },
  {
    id: 27,
    domain: "Domain 1: Cloud Concepts",
    question: "A company replaces its owned physical servers, which required a large upfront purchase, with AWS resources that it pays for monthly based on actual usage. This is an example of which shift in expense type?",
    options: ["From variable expense to fixed expense","From fixed expense to variable expense","From operational expense to capital expense","From economies of scale to diseconomies of scale"],
    correct: 1,
    explanation: "Owning physical servers is a fixed expense because the upfront cost is set regardless of usage. Paying for AWS resources based on consumption is a variable expense, since costs change with actual usage."
  },
  {
    id: 28,
    domain: "Domain 1: Cloud Concepts",
    question: "What does 'total cost of ownership' (TCO) refer to when evaluating a technology solution?",
    options: ["The estimate of all direct and indirect costs associated with owning and operating a solution over its lifetime","The one-time purchase price of hardware only","The AWS service level agreement (SLA) percentage","The number of Availability Zones in a Region"],
    correct: 0,
    explanation: "Total cost of ownership (TCO) is a financial estimate that includes all direct and indirect costs of owning and operating a solution over time, such as hardware, power, staffing, and maintenance, not just the initial purchase price."
  },
  {
    id: 29,
    domain: "Domain 1: Cloud Concepts",
    question: "How does AWS's economies of scale typically benefit customers?",
    options: ["As AWS grows and serves more customers, it can achieve greater cost efficiencies, which are often passed on to customers as lower prices","It guarantees that every customer pays the exact same fixed price","It requires customers to purchase their own physical data centers to receive discounts","It eliminates the need for customers to pay for AWS services"],
    correct: 0,
    explanation: "Because AWS aggregates usage from a very large number of customers, it can achieve economies of scale and negotiate better pricing on hardware and infrastructure, and it passes many of those savings on to customers through reduced pricing over time."
  },
  {
    id: 30,
    domain: "Domain 1: Cloud Concepts",
    question: "A startup wants to launch a new application without spending money on physical servers before knowing if the product will succeed. Which AWS Cloud economic benefit most directly supports this goal?",
    options: ["The ability to pay for compute and storage resources only as they are used, without large upfront investments","The requirement to sign a multi-year hardware lease","The requirement to purchase capacity based on peak forecasted demand","The Well-Architected Framework's Security pillar"],
    correct: 0,
    explanation: "AWS lets customers avoid large upfront capital investments in hardware, instead paying for resources as they use them. This lowers the financial risk of trying new ideas, unlike traditional models that require upfront hardware purchases or capacity forecasting."
  },
  {
    id: 31,
    domain: "Domain 1: Cloud Concepts",
    question: "What is meant by 'undifferentiated heavy lifting' in the context of cloud computing?",
    options: ["The time and money organizations spend on tasks like managing data centers and hardware that do not directly differentiate their business from competitors","The process of lifting and shifting an application to the cloud with no changes","The additional cost incurred when scaling an application horizontally","The physical process of installing servers in a data center rack"],
    correct: 0,
    explanation: "Undifferentiated heavy lifting refers to routine tasks, such as procuring, racking, and maintaining hardware, that consume time and resources but don't help a business stand out from competitors. AWS handles this so customers can focus on activities that differentiate their business."
  },
  {
    id: 32,
    domain: "Domain 2: Security & Compliance",
    question: "In the AWS shared responsibility model, which of the following is AWS responsible for?",
    options: ["Configuring security group rules","Patching the guest operating system","Physical security of data centers","Managing IAM user permissions"],
    correct: 2,
    explanation: "AWS is responsible for the security \"of\" the cloud, including the physical security of data centers, hardware, and global infrastructure. Configuring security groups, patching the guest OS, and managing IAM permissions are customer responsibilities (\"in\" the cloud)."
  },
  {
    id: 33,
    domain: "Domain 2: Security & Compliance",
    question: "A company runs an application on Amazon EC2. Which task is the customer's responsibility under the shared responsibility model?",
    options: ["Maintaining the physical host hardware","Patching the operating system on the instance","Maintaining the underlying network infrastructure","Ensuring power and cooling to data centers"],
    correct: 1,
    explanation: "For EC2, an unmanaged (IaaS) service, the customer manages the guest OS, including patching, since this is an \"in the cloud\" responsibility. Physical hardware, network, and facilities remain AWS's job."
  },
  {
    id: 34,
    domain: "Domain 2: Security & Compliance",
    question: "Which security responsibility always remains with AWS, regardless of which service a customer uses?",
    options: ["Configuring IAM policies","Encrypting customer data","Security of the global infrastructure","Managing customer application code"],
    correct: 2,
    explanation: "AWS is always responsible for the security of the underlying global infrastructure, including regions, Availability Zones, and edge locations, no matter which service the customer uses."
  },
  {
    id: 35,
    domain: "Domain 2: Security & Compliance",
    question: "For Amazon RDS, a managed database service, who is responsible for patching the underlying database engine software?",
    options: ["The customer","AWS","A third-party vendor","Neither AWS nor the customer"],
    correct: 1,
    explanation: "Because RDS is a managed service, AWS takes on more operational responsibility, including patching the underlying OS and database engine. The customer still manages things like database-level access control and their data."
  },
  {
    id: 36,
    domain: "Domain 2: Security & Compliance",
    question: "Which task is always the customer's responsibility, regardless of which AWS service is used?",
    options: ["Classifying and protecting their own data","Decommissioning storage devices","Maintaining the physical network","Providing environmental controls in data centers"],
    correct: 0,
    explanation: "The customer is always responsible for their own content, including classifying data and configuring appropriate access controls. AWS handles infrastructure-level tasks like hardware decommissioning and facility environmental controls."
  },
  {
    id: 37,
    domain: "Domain 2: Security & Compliance",
    question: "A developer builds a serverless application using AWS Lambda. Which of the following is the customer's responsibility?",
    options: ["Provisioning and patching the underlying servers","Managing the function code and its IAM permissions","Maintaining the hypervisor","Scaling the physical compute capacity"],
    correct: 1,
    explanation: "With Lambda, AWS manages the underlying servers, hypervisor, and OS. The customer is responsible for the code they deploy and the IAM permissions assigned to their functions."
  },
  {
    id: 38,
    domain: "Domain 2: Security & Compliance",
    question: "Which statement about the AWS shared responsibility model is correct?",
    options: ["The customer is solely responsible for all security aspects","AWS is solely responsible for all security aspects","Responsibility is shared, and the split varies depending on the service used","Responsibility only applies to compute services"],
    correct: 2,
    explanation: "The shared responsibility model divides responsibility between AWS (security \"of\" the cloud) and the customer (security \"in\" the cloud), and the exact split shifts depending on how much of the stack AWS manages for a given service."
  },
  {
    id: 39,
    domain: "Domain 2: Security & Compliance",
    question: "For data stored in Amazon S3, who is responsible for configuring bucket policies and access permissions?",
    options: ["AWS","The customer","AWS Support","S3 configures this automatically"],
    correct: 1,
    explanation: "The customer configures bucket policies, ACLs, and access permissions for their S3 data as part of \"security in the cloud.\" AWS secures the underlying storage infrastructure."
  },
  {
    id: 40,
    domain: "Domain 2: Security & Compliance",
    question: "Which AWS service provides on-demand access to AWS's compliance reports and select online agreements?",
    options: ["AWS Artifact","AWS Audit Manager","AWS Trusted Advisor","AWS Config"],
    correct: 0,
    explanation: "AWS Artifact is a self-service portal for accessing AWS compliance reports (such as SOC and PCI DSS reports) and agreements like the Business Associate Addendum. Audit Manager helps assess controls rather than fetch existing reports."
  },
  {
    id: 41,
    domain: "Domain 2: Security & Compliance",
    question: "A company needs to continuously assess whether its AWS resource usage aligns with a specific compliance framework. Which service should it use?",
    options: ["AWS Artifact","AWS Audit Manager","Amazon Inspector","AWS Shield"],
    correct: 1,
    explanation: "AWS Audit Manager helps continuously audit AWS usage to simplify risk assessment and compliance with regulations and industry standards. AWS Artifact simply provides access to existing reports."
  },
  {
    id: 42,
    domain: "Domain 2: Security & Compliance",
    question: "What does \"encryption at rest\" refer to?",
    options: ["Protecting data as it travels across a network","Protecting stored data on disk or in a database","Protecting data only in transit between users","Preventing DDoS attacks on stored data"],
    correct: 1,
    explanation: "Encryption at rest protects data while it is stored, such as on EBS volumes, S3 objects, or RDS databases. Encryption in transit protects data while it moves across a network."
  },
  {
    id: 43,
    domain: "Domain 2: Security & Compliance",
    question: "Which term describes protecting data while it moves between a client and an AWS service?",
    options: ["Encryption at rest","Encryption in transit","Data residency","Data masking"],
    correct: 1,
    explanation: "Encryption in transit, typically via TLS/SSL, protects data as it moves over a network between endpoints, such as between a user's browser and an AWS service."
  },
  {
    id: 44,
    domain: "Domain 2: Security & Compliance",
    question: "Which AWS service is designed to provide protection against Distributed Denial of Service (DDoS) attacks?",
    options: ["AWS Shield","AWS WAF","AWS Config","Amazon GuardDuty"],
    correct: 0,
    explanation: "AWS Shield is purpose-built to protect against DDoS attacks. AWS WAF protects against web exploits like SQL injection, while GuardDuty is a threat detection service."
  },
  {
    id: 45,
    domain: "Domain 2: Security & Compliance",
    question: "Which level of AWS Shield is automatically included at no additional cost for all AWS customers?",
    options: ["Shield Advanced","Shield Standard","Shield Premium","Shield Enterprise"],
    correct: 1,
    explanation: "AWS Shield Standard is automatically enabled for all AWS customers at no extra cost and protects against common, frequently occurring network and transport layer DDoS attacks."
  },
  {
    id: 46,
    domain: "Domain 2: Security & Compliance",
    question: "A healthcare company wants to confirm that AWS services they plan to use are eligible for storing protected health information (PHI). Where can they find this information?",
    options: ["AWS Trusted Advisor","AWS Artifact","Amazon Macie","AWS Config"],
    correct: 1,
    explanation: "AWS Artifact provides access to AWS's compliance documentation, including information about HIPAA eligibility of AWS services, helping customers confirm which services are suitable for PHI."
  },
  {
    id: 47,
    domain: "Domain 2: Security & Compliance",
    question: "Which AWS Trusted Advisor category provides recommendations related to security configurations?",
    options: ["Cost Optimization","Security","Performance","Service Limits"],
    correct: 1,
    explanation: "Trusted Advisor's Security category checks configurations such as open security group ports, IAM usage, MFA on the root account, and S3 bucket permissions against AWS best practices."
  },
  {
    id: 48,
    domain: "Domain 2: Security & Compliance",
    question: "Under the AWS shared responsibility model, who maintains compliance certifications for the underlying cloud infrastructure, such as SOC 2 data center audits?",
    options: ["The customer","AWS","A third-party auditor hired by the customer","Both equally, with no distinction"],
    correct: 1,
    explanation: "AWS manages and maintains compliance certifications for its own infrastructure (\"of the cloud\"). Customers are responsible for ensuring their own use of AWS services complies with regulations applicable to their workloads."
  },
  {
    id: 49,
    domain: "Domain 2: Security & Compliance",
    question: "What is the primary purpose of AWS Identity and Access Management (IAM)?",
    options: ["Monitoring network traffic for threats","Securely controlling access to AWS services and resources","Encrypting data stored in S3","Detecting malware on EC2 instances"],
    correct: 1,
    explanation: "IAM lets you securely manage access to AWS services and resources by creating and managing users, groups, roles, and policies. It does not perform threat detection or encryption itself."
  },
  {
    id: 50,
    domain: "Domain 2: Security & Compliance",
    question: "What is the principle of least privilege?",
    options: ["Granting all users administrator access for convenience","Granting users only the permissions necessary to perform their tasks","Granting temporary root access to all employees","Disabling all IAM policies by default"],
    correct: 1,
    explanation: "The principle of least privilege means granting only the minimum permissions needed to perform a job function, reducing the risk of accidental or malicious misuse of permissions."
  },
  {
    id: 51,
    domain: "Domain 2: Security & Compliance",
    question: "Which security feature requires a user to provide a second form of verification, such as a code from a mobile app, in addition to a password?",
    options: ["IAM policy","Multi-Factor Authentication (MFA)","Security group","AWS Key Management Service"],
    correct: 1,
    explanation: "MFA adds an extra layer of security by requiring a second authentication factor beyond a username and password, such as a one-time code from an authenticator app or hardware device."
  },
  {
    id: 52,
    domain: "Domain 2: Security & Compliance",
    question: "A company wants to give employees centralized, single sign-on access to multiple AWS accounts and business applications. Which service should they use?",
    options: ["Amazon Cognito","AWS IAM Identity Center","AWS Directory Service","AWS Secrets Manager"],
    correct: 1,
    explanation: "AWS IAM Identity Center (formerly AWS SSO) provides centralized single sign-on access across multiple AWS accounts and integrated business applications. Cognito is for customer-facing app authentication, not workforce SSO."
  },
  {
    id: 53,
    domain: "Domain 2: Security & Compliance",
    question: "Which of the following is a recommended best practice for the AWS account root user?",
    options: ["Use it for daily administrative tasks","Share its credentials with all team members","Enable MFA and avoid using it for everyday tasks","Disable MFA to simplify access"],
    correct: 2,
    explanation: "Best practice is to enable MFA on the root user, use it only for tasks that specifically require it, and create individual IAM users or roles with least-privilege permissions for everyday work."
  },
  {
    id: 54,
    domain: "Domain 2: Security & Compliance",
    question: "What is the key difference between an IAM user and an IAM role?",
    options: ["An IAM role has a permanent password; an IAM user does not","An IAM role is intended to be assumed temporarily by trusted entities; an IAM user represents a persistent identity","IAM users can only be used by AWS services, not people","There is no difference; they are interchangeable"],
    correct: 1,
    explanation: "IAM roles provide temporary credentials that can be assumed by users, applications, or AWS services, whereas IAM users are persistent identities typically tied to a specific person or application with long-term credentials."
  },
  {
    id: 55,
    domain: "Domain 2: Security & Compliance",
    question: "Which AWS service enables developers to add user sign-up, sign-in, and access control to web and mobile applications?",
    options: ["AWS IAM Identity Center","Amazon Cognito","AWS Directory Service","AWS Organizations"],
    correct: 1,
    explanation: "Amazon Cognito provides authentication, authorization, and user management for web and mobile apps, supporting sign-up/sign-in and integration with social and enterprise identity providers."
  },
  {
    id: 56,
    domain: "Domain 2: Security & Compliance",
    question: "What is an IAM policy?",
    options: ["A physical security control at an AWS data center","A JSON document that defines permissions for users, groups, or roles","A billing alert configuration","A network firewall rule"],
    correct: 1,
    explanation: "An IAM policy is a JSON document that specifies what actions are allowed or denied on which AWS resources, and it is attached to IAM users, groups, or roles."
  },
  {
    id: 57,
    domain: "Domain 2: Security & Compliance",
    question: "A company wants multiple IAM users in the finance department to share the same set of permissions. What is the most efficient way to manage this?",
    options: ["Assign the same password to every user","Create an IAM group with the required permissions and add the users to it","Copy the policy manually into each user's settings","Give every user root account access"],
    correct: 1,
    explanation: "IAM groups let administrators attach a policy once to a group and manage permissions for many users simultaneously, which is more efficient and less error-prone than managing policies per user."
  },
  {
    id: 58,
    domain: "Domain 2: Security & Compliance",
    question: "Which AWS service uses machine learning to continuously analyze account activity and network traffic to detect malicious or unauthorized behavior?",
    options: ["Amazon GuardDuty","AWS WAF","Amazon Inspector","AWS Shield"],
    correct: 0,
    explanation: "Amazon GuardDuty is a threat detection service that uses machine learning and threat intelligence to continuously monitor for malicious activity and unauthorized behavior across AWS accounts."
  },
  {
    id: 59,
    domain: "Domain 2: Security & Compliance",
    question: "Which service helps protect web applications from common web exploits such as SQL injection and cross-site scripting (XSS)?",
    options: ["AWS Shield","AWS WAF","Amazon GuardDuty","AWS Firewall Manager"],
    correct: 1,
    explanation: "AWS WAF (Web Application Firewall) lets you create rules to filter and monitor HTTP/HTTPS traffic, protecting web applications against common exploits like SQL injection and XSS."
  },
  {
    id: 60,
    domain: "Domain 2: Security & Compliance",
    question: "A company wants enhanced, near-real-time DDoS attack visibility and access to a specialized 24/7 response team. Which offering should they use?",
    options: ["AWS Shield Standard","AWS Shield Advanced","AWS WAF","Amazon GuardDuty"],
    correct: 1,
    explanation: "AWS Shield Advanced provides enhanced DDoS protection, near-real-time visibility, and access to the AWS DDoS Response Team (DRT), beyond what Shield Standard offers automatically."
  },
  {
    id: 61,
    domain: "Domain 2: Security & Compliance",
    question: "Which AWS service automatically assesses applications for software vulnerabilities and unintended network exposure?",
    options: ["Amazon Inspector","Amazon Macie","AWS Config","AWS Trusted Advisor"],
    correct: 0,
    explanation: "Amazon Inspector performs automated security assessments of EC2 instances and container images to identify software vulnerabilities and deviations from best practices."
  },
  {
    id: 62,
    domain: "Domain 2: Security & Compliance",
    question: "Which AWS service uses machine learning to discover and protect sensitive data, such as personally identifiable information (PII), stored in Amazon S3?",
    options: ["Amazon Macie","Amazon GuardDuty","AWS Secrets Manager","AWS KMS"],
    correct: 0,
    explanation: "Amazon Macie uses machine learning and pattern matching to discover, classify, and help protect sensitive data such as PII stored in Amazon S3."
  },
  {
    id: 63,
    domain: "Domain 2: Security & Compliance",
    question: "Which service allows customers to create and manage cryptographic keys used to encrypt data across AWS services?",
    options: ["AWS Certificate Manager","AWS Key Management Service (KMS)","AWS Secrets Manager","AWS CloudHSM"],
    correct: 1,
    explanation: "AWS KMS lets customers create, manage, and control cryptographic keys used to encrypt data across a wide range of AWS services."
  },
  {
    id: 64,
    domain: "Domain 2: Security & Compliance",
    question: "A company needs to securely store, rotate, and retrieve database credentials used by an application. Which service is best suited for this?",
    options: ["AWS Secrets Manager","AWS Certificate Manager","AWS KMS","AWS Directory Service"],
    correct: 0,
    explanation: "AWS Secrets Manager helps store, retrieve, and automatically rotate secrets such as database credentials, API keys, and other sensitive information."
  },
  {
    id: 65,
    domain: "Domain 2: Security & Compliance",
    question: "Which AWS service simplifies provisioning, managing, and deploying public and private SSL/TLS certificates?",
    options: ["AWS Certificate Manager (ACM)","AWS CloudHSM","AWS KMS","AWS WAF"],
    correct: 0,
    explanation: "AWS Certificate Manager (ACM) makes it easy to provision, manage, and deploy SSL/TLS certificates for use with AWS services, enabling encrypted connections."
  },
  {
    id: 66,
    domain: "Domain 2: Security & Compliance",
    question: "Which service provides dedicated hardware security modules (HSMs) to meet strict compliance requirements for key management?",
    options: ["AWS KMS","AWS CloudHSM","AWS Secrets Manager","AWS Certificate Manager"],
    correct: 1,
    explanation: "AWS CloudHSM provides dedicated, single-tenant hardware security modules for customers who need to manage their own encryption keys and meet strict compliance or regulatory requirements."
  },
  {
    id: 67,
    domain: "Domain 2: Security & Compliance",
    question: "A company wants to allow employees to use their existing on-premises Microsoft Active Directory credentials with AWS applications. Which service enables this?",
    options: ["AWS Directory Service","Amazon Cognito","AWS IAM Identity Center","AWS Organizations"],
    correct: 0,
    explanation: "AWS Directory Service offers managed Microsoft Active Directory options and connectors, enabling AWS resources to use existing on-premises AD credentials."
  },
  {
    id: 68,
    domain: "Domain 2: Security & Compliance",
    question: "Which service allows an organization to centrally configure and manage security policies, such as WAF rules and security groups, across multiple AWS accounts?",
    options: ["AWS Firewall Manager","AWS Organizations","AWS Config","Amazon Detective"],
    correct: 0,
    explanation: "AWS Firewall Manager simplifies administration and maintenance of firewall rules, such as WAF rules, Shield Advanced protections, and security groups, across multiple accounts and resources from a single place."
  },
  {
    id: 69,
    domain: "Domain 2: Security & Compliance",
    question: "Which service aggregates and prioritizes security findings from services like GuardDuty, Inspector, and Macie into a single dashboard?",
    options: ["AWS Security Hub","Amazon Detective","AWS Config","AWS Trusted Advisor"],
    correct: 0,
    explanation: "AWS Security Hub provides a comprehensive view of security alerts and compliance status by aggregating, organizing, and prioritizing findings from multiple AWS security services."
  },
  {
    id: 70,
    domain: "Domain 2: Security & Compliance",
    question: "What is a key difference between a security group and a network ACL (NACL) in a VPC?",
    options: ["A security group is stateless and operates at the subnet level, while a NACL is stateful and operates at the instance level","A security group is stateful and operates at the instance level, while a NACL is stateless and operates at the subnet level","Both are stateful and operate at the same level","A NACL can only allow traffic, while a security group can only deny traffic"],
    correct: 1,
    explanation: "Security groups act as a stateful firewall at the instance (ENI) level, automatically allowing return traffic. Network ACLs are stateless and operate at the subnet level, requiring explicit rules for both inbound and outbound traffic."
  },
  {
    id: 71,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company runs a batch image-rendering job that can tolerate interruptions and wants to minimize compute costs. Which EC2 purchasing option should they use?",
    options: ["On-Demand Instances","Reserved Instances","Spot Instances","Savings Plans"],
    correct: 2,
    explanation: "Spot Instances offer the largest discount off On-Demand pricing for workloads that can withstand interruptions, such as flexible batch jobs. Reserved Instances and Savings Plans are better suited for steady, predictable workloads that cannot be interrupted."
  },
  {
    id: 72,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company plans to run a database server continuously for the next three years and wants to reduce costs compared to On-Demand pricing. Which EC2 purchasing option is the best fit?",
    options: ["Spot Instances","Reserved Instances","Dedicated Hosts","On-Demand Instances"],
    correct: 1,
    explanation: "Reserved Instances provide significant discounts for a 1- or 3-year commitment on steady-state workloads with predictable usage. Spot Instances are not ideal since interruptions could affect an always-on database."
  },
  {
    id: 73,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service lets a developer run code in response to events without provisioning or managing servers?",
    options: ["AWS Lambda","Amazon EC2","AWS Elastic Beanstalk","Amazon Lightsail"],
    correct: 0,
    explanation: "AWS Lambda is a serverless compute service that automatically runs code in response to events and scales automatically, with no server management required."
  },
  {
    id: 74,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A development team wants to quickly deploy and manage a web application without manually configuring the underlying EC2 instances, load balancers, or scaling settings. Which service should they use?",
    options: ["AWS Elastic Beanstalk","Amazon ECS","AWS Batch","AWS Lambda"],
    correct: 0,
    explanation: "AWS Elastic Beanstalk is a Platform as a Service that automatically handles deployment, capacity provisioning, load balancing, and scaling for web applications, letting developers focus on code."
  },
  {
    id: 75,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is used to run and manage Docker containers at scale?",
    options: ["Amazon ECS","AWS Batch","AWS Elastic Beanstalk","Amazon Lightsail"],
    correct: 0,
    explanation: "Amazon Elastic Container Service (ECS) is a fully managed container orchestration service for deploying, managing, and scaling containerized applications."
  },
  {
    id: 76,
    domain: "Domain 3: Cloud Technology and Services",
    question: "What is the primary function of a Security Group in Amazon EC2?",
    options: ["It encrypts data stored on EBS volumes","It acts as a virtual firewall controlling inbound and outbound traffic at the instance level","It routes traffic between subnets in a VPC","It provides DNS resolution for EC2 instances"],
    correct: 1,
    explanation: "A Security Group acts as a stateful virtual firewall that controls inbound and outbound traffic at the instance level. It does not handle encryption, subnet routing, or DNS."
  },
  {
    id: 77,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A small business owner wants to quickly launch a simple website with a pre-configured virtual server, storage, and networking bundled at a low, predictable monthly price. Which service is the best fit?",
    options: ["Amazon Lightsail","Amazon EC2","AWS Elastic Beanstalk","AWS Batch"],
    correct: 0,
    explanation: "Amazon Lightsail is designed for simple workloads, offering easy-to-use virtual private servers with bundled compute, storage, and networking at predictable pricing, ideal for simple websites and applications."
  },
  {
    id: 78,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company has data that is accessed infrequently but requires rapid access when needed. Which S3 storage class is most cost-effective for this use case?",
    options: ["S3 Standard","S3 Standard-Infrequent Access (S3 Standard-IA)","S3 Glacier Deep Archive","S3 One Zone-IA"],
    correct: 1,
    explanation: "S3 Standard-IA is designed for data that is accessed less frequently but requires millisecond access when needed, at a lower storage cost than S3 Standard."
  },
  {
    id: 79,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs to store compliance archives for 10 years, will rarely retrieve them, and can tolerate retrieval times of several hours. Which storage option minimizes cost?",
    options: ["S3 Standard","S3 Intelligent-Tiering","S3 Glacier Deep Archive","Amazon EBS"],
    correct: 2,
    explanation: "S3 Glacier Deep Archive offers the lowest-cost storage in S3, designed for long-term data archiving that is rarely accessed and can tolerate retrieval times of hours."
  },
  {
    id: 80,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company has data with unknown or changing access patterns and wants AWS to automatically move objects between access tiers to optimize cost. Which S3 storage class should they choose?",
    options: ["S3 Standard","S3 Intelligent-Tiering","S3 One Zone-IA","S3 Glacier Instant Retrieval"],
    correct: 1,
    explanation: "S3 Intelligent-Tiering automatically moves objects between access tiers based on changing access patterns, without performance impact or operational overhead, making it ideal for unpredictable workloads."
  },
  {
    id: 81,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS storage service provides persistent block-level storage volumes for use with Amazon EC2 instances?",
    options: ["Amazon EFS","Amazon EBS","Amazon S3","AWS Storage Gateway"],
    correct: 1,
    explanation: "Amazon Elastic Block Store (EBS) provides persistent block storage volumes that attach to EC2 instances, commonly used for operating systems and databases. Amazon EFS provides file storage, not block storage."
  },
  {
    id: 82,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs a scalable file system that can be concurrently mounted by hundreds of Linux-based EC2 instances across multiple Availability Zones. Which service should they use?",
    options: ["Amazon EBS","Amazon EFS","Amazon FSx for Windows File Server","Amazon S3"],
    correct: 1,
    explanation: "Amazon EFS is a fully managed, scalable file storage service that can be concurrently accessed by multiple EC2 instances across Availability Zones. EBS volumes generally attach to only a single instance at a time."
  },
  {
    id: 83,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to extend its on-premises storage to the cloud while keeping low-latency access to frequently used data locally. Which AWS service provides this hybrid storage connection?",
    options: ["AWS Storage Gateway","Amazon FSx","AWS Direct Connect","Amazon S3 Transfer Acceleration"],
    correct: 0,
    explanation: "AWS Storage Gateway is a hybrid cloud storage service that connects on-premises environments to AWS storage, caching frequently accessed data locally for low-latency access."
  },
  {
    id: 84,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service provides a centralized way to automate and manage backups across multiple AWS services such as EBS, RDS, and DynamoDB?",
    options: ["AWS Backup","AWS Storage Gateway","Amazon S3 Glacier","AWS Elastic Disaster Recovery"],
    correct: 0,
    explanation: "AWS Backup is a fully managed service that centralizes and automates data protection across AWS services, including EBS, RDS, and DynamoDB, from a single console."
  },
  {
    id: 85,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants a managed relational database service that handles patching, backups, and hardware provisioning for engines like MySQL and PostgreSQL. Which service should they use?",
    options: ["Amazon DynamoDB","Amazon RDS","Amazon Redshift","Amazon ElastiCache"],
    correct: 1,
    explanation: "Amazon RDS is a managed relational database service that automates administrative tasks such as patching, backups, and provisioning for engines including MySQL and PostgreSQL."
  },
  {
    id: 86,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs a MySQL- and PostgreSQL-compatible relational database with higher performance and availability than standard RDS engines. Which service should they choose?",
    options: ["Amazon Aurora","Amazon DynamoDB","Amazon Redshift","Amazon ElastiCache"],
    correct: 0,
    explanation: "Amazon Aurora is a MySQL- and PostgreSQL-compatible relational database built for the cloud, offering higher throughput and greater availability than standard RDS engines."
  },
  {
    id: 87,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS database service is a fully managed NoSQL database that delivers single-digit millisecond performance at any scale?",
    options: ["Amazon RDS","Amazon Aurora","Amazon DynamoDB","Amazon Redshift"],
    correct: 2,
    explanation: "Amazon DynamoDB is a fully managed, serverless NoSQL key-value and document database designed for high performance at any scale."
  },
  {
    id: 88,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to improve application performance by caching frequently requested data in memory to reduce load on its database. Which service should it use?",
    options: ["Amazon ElastiCache","Amazon Redshift","Amazon RDS","AWS Storage Gateway"],
    correct: 0,
    explanation: "Amazon ElastiCache is a managed in-memory caching service, supporting Redis and Memcached, that reduces database load and improves application response times."
  },
  {
    id: 89,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs to run complex analytical queries across petabytes of structured data for business intelligence reporting. Which AWS service is purpose-built for this?",
    options: ["Amazon RDS","Amazon DynamoDB","Amazon Redshift","Amazon ElastiCache"],
    correct: 2,
    explanation: "Amazon Redshift is a fully managed data warehouse service optimized for running complex analytical queries across large volumes of structured data."
  },
  {
    id: 90,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants its production RDS database to automatically fail over to a standby instance in a different Availability Zone if the primary instance becomes unavailable. Which RDS feature provides this?",
    options: ["Read Replicas","Multi-AZ deployment","Multi-Region deployment","DynamoDB Global Tables"],
    correct: 1,
    explanation: "RDS Multi-AZ deployments maintain a synchronously replicated standby instance in a different Availability Zone and automatically fail over to it during an outage, providing high availability."
  },
  {
    id: 91,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A gaming company needs a database to store player session data with a flexible schema that can scale to millions of requests per second with consistent low-latency performance. Which database type is most appropriate?",
    options: ["Amazon RDS","Amazon Redshift","Amazon DynamoDB","Amazon Aurora"],
    correct: 2,
    explanation: "Amazon DynamoDB is a NoSQL database designed for flexible schemas and consistent, single-digit millisecond performance at massive scale, making it ideal for high-throughput use cases like gaming session data."
  },
  {
    id: 92,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service allows a company to provision a logically isolated section of the AWS Cloud where it can launch resources in a virtual network that it defines?",
    options: ["Amazon VPC","Amazon Route 53","AWS Direct Connect","Amazon CloudFront"],
    correct: 0,
    explanation: "Amazon Virtual Private Cloud (VPC) lets customers provision an isolated virtual network within AWS, with full control over IP address ranges, subnets, route tables, and gateways."
  },
  {
    id: 93,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a scalable Domain Name System (DNS) web service used to route end users to internet applications?",
    options: ["Amazon CloudFront","Amazon Route 53","AWS Global Accelerator","Elastic Load Balancing"],
    correct: 1,
    explanation: "Amazon Route 53 is a highly available and scalable DNS web service that translates domain names into IP addresses and routes end-user requests to applications."
  },
  {
    id: 94,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to reduce latency for users worldwide accessing static website content by caching copies of the content at edge locations close to users. Which service should it use?",
    options: ["Amazon CloudFront","AWS Direct Connect","Amazon Route 53","AWS Site-to-Site VPN"],
    correct: 0,
    explanation: "Amazon CloudFront is a content delivery network (CDN) service that caches content at edge locations around the world to reduce latency for end users."
  },
  {
    id: 95,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service automatically distributes incoming application traffic across multiple EC2 instances to improve fault tolerance and availability?",
    options: ["Amazon Route 53","Elastic Load Balancing","AWS Global Accelerator","Amazon API Gateway"],
    correct: 1,
    explanation: "Elastic Load Balancing (ELB) automatically distributes incoming traffic across multiple targets, such as EC2 instances, increasing the fault tolerance and availability of applications."
  },
  {
    id: 96,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service allows developers to create, publish, and manage APIs at any scale, including handling authorization, throttling, and monitoring?",
    options: ["Amazon API Gateway","AWS Lambda","Elastic Load Balancing","Amazon CloudFront"],
    correct: 0,
    explanation: "Amazon API Gateway is a fully managed service for creating, publishing, maintaining, monitoring, and securing APIs at any scale."
  },
  {
    id: 97,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants a dedicated, private network connection between its on-premises data center and AWS to achieve more consistent network performance than a typical internet connection. Which service should it use?",
    options: ["AWS Site-to-Site VPN","AWS Direct Connect","AWS Global Accelerator","Amazon CloudFront"],
    correct: 1,
    explanation: "AWS Direct Connect establishes a dedicated private network connection between an on-premises data center and AWS, offering more consistent network performance than a standard internet-based connection like VPN."
  },
  {
    id: 98,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs to quickly and securely establish an encrypted connection between its on-premises network and its AWS VPC over the public internet, without provisioning dedicated physical network circuits. Which service should it use?",
    options: ["AWS Direct Connect","AWS Site-to-Site VPN","AWS Global Accelerator","Amazon Route 53"],
    correct: 1,
    explanation: "AWS Site-to-Site VPN creates a secure, encrypted connection over the public internet between an on-premises network and an AWS VPC, and can typically be set up faster than Direct Connect, which requires physical circuit provisioning."
  },
  {
    id: 99,
    domain: "Domain 3: Cloud Technology and Services",
    question: "What is an AWS Availability Zone?",
    options: ["A single physical data center located within a Region","One or more discrete data centers with redundant power, networking, and connectivity within a Region","A collection of edge locations that cache content for CloudFront","A virtual private network connecting two Regions"],
    correct: 1,
    explanation: "An Availability Zone (AZ) consists of one or more discrete data centers with redundant power, networking, and connectivity, housed in separate facilities within a Region. AZs are not single data centers, and they are distinct from edge locations, which CloudFront uses for content caching."
  },
  {
    id: 100,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A media company is building a 5G mobile application that requires ultra-low-latency access to compute resources at the edge of telecommunications providers' networks. Which AWS infrastructure offering should they use?",
    options: ["AWS Local Zones","Amazon CloudFront edge locations","AWS Wavelength","AWS Outposts"],
    correct: 2,
    explanation: "AWS Wavelength embeds AWS compute and storage services within telecommunications providers' 5G networks, minimizing latency for mobile and connected devices. Local Zones place resources near large population centers but are not embedded inside telecom networks, and CloudFront edge locations are used for content caching, not compute."
  },
  {
    id: 101,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which method of interacting with AWS allows a user to manage AWS resources by typing commands directly into a terminal on their local machine or in a script?",
    options: ["AWS Management Console","AWS CLI","AWS SDK","AWS CloudFormation"],
    correct: 1,
    explanation: "The AWS Command Line Interface (CLI) lets users control AWS services using text commands in a terminal, enabling scripting and automation. The Management Console is a graphical web interface, SDKs are used within application code, and CloudFormation defines infrastructure through templates rather than individual commands."
  },
  {
    id: 102,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to define its AWS infrastructure, such as VPCs, EC2 instances, and security groups, in text-based templates that can be stored in version control and used to consistently redeploy identical environments. Which AWS service should they use?",
    options: ["AWS Config","AWS Service Catalog","AWS Systems Manager","AWS CloudFormation"],
    correct: 3,
    explanation: "AWS CloudFormation lets users model and provision infrastructure as code using JSON or YAML templates, enabling repeatable, version-controlled deployments. AWS Config tracks resource configuration compliance rather than provisioning resources, and Service Catalog manages approved product catalogs rather than defining raw infrastructure templates."
  },
  {
    id: 103,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs to migrate several petabytes of data from its on-premises data center to AWS but has very limited network bandwidth available. Which AWS service provides physical devices to transfer large amounts of data offline?",
    options: ["AWS Transfer Family","AWS Snow Family","AWS DataSync","AWS Database Migration Service"],
    correct: 1,
    explanation: "The AWS Snow Family (Snowball, Snowball Edge, Snowmobile) provides physical devices for transporting large volumes of data to AWS without relying on network connectivity. AWS Transfer Family is for managed file transfers over standard protocols like SFTP, not bulk offline data transport."
  },
  {
    id: 104,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service automates the lift-and-shift migration of physical, virtual, and cloud-based servers to AWS with minimal downtime and minimal changes to the source environment?",
    options: ["AWS Application Discovery Service","AWS Migration Hub","AWS Application Migration Service (MGN)","AWS Database Migration Service"],
    correct: 2,
    explanation: "AWS Application Migration Service (MGN) is the recommended service for lift-and-shift (rehost) migrations of servers into AWS. Application Discovery Service only gathers information about on-premises servers to help plan migrations, and Database Migration Service is specifically for migrating databases."
  },
  {
    id: 105,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service records and logs API calls made within an AWS account, providing a history of activity for governance, compliance, and auditing purposes?",
    options: ["Amazon CloudWatch","AWS Config","AWS CloudTrail","AWS Systems Manager"],
    correct: 2,
    explanation: "AWS CloudTrail logs and monitors account activity, including API calls made through the Console, CLI, and SDKs, supporting auditing and compliance. CloudWatch instead focuses on monitoring performance metrics and logs, not on tracking who made which API call."
  },
  {
    id: 106,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company manages multiple AWS accounts for different departments and wants to consolidate billing and centrally apply policies across all the accounts. Which AWS service should they use?",
    options: ["AWS Control Tower","AWS Organizations","AWS Service Catalog","AWS Systems Manager"],
    correct: 1,
    explanation: "AWS Organizations allows centralized management of multiple AWS accounts, including consolidated billing and service control policies (SCPs). AWS Control Tower builds on top of Organizations to automate multi-account setup with guardrails, but Organizations itself is the core service for account management and policy control."
  },
  {
    id: 107,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to run standard SQL queries directly against data stored in Amazon S3 without provisioning or managing any servers. Which AWS service should they use?",
    options: ["Amazon Redshift","Amazon EMR","Amazon Athena","AWS Glue"],
    correct: 2,
    explanation: "Amazon Athena is a serverless, interactive query service that lets users analyze data directly in Amazon S3 using standard SQL. Amazon Redshift is a data warehouse that requires loading data into managed clusters, unlike Athena's serverless, in-place querying."
  },
  {
    id: 108,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a fully managed extract, transform, and load (ETL) service that discovers, prepares, and combines data for analytics?",
    options: ["Amazon Kinesis","AWS Glue","Amazon QuickSight","Amazon OpenSearch Service"],
    correct: 1,
    explanation: "AWS Glue is a serverless ETL service that crawls, catalogs, and transforms data to prepare it for analytics. Amazon Kinesis is used for ingesting and processing real-time streaming data, not for batch ETL preparation."
  },
  {
    id: 109,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to build, train, and deploy custom machine learning models at scale without managing the underlying infrastructure. Which AWS service should they use?",
    options: ["Amazon Rekognition","Amazon Comprehend","Amazon SageMaker","Amazon Lex"],
    correct: 2,
    explanation: "Amazon SageMaker is a fully managed service that provides the tools needed to build, train, and deploy custom machine learning models. Rekognition and Comprehend are pre-built AI services for image/video analysis and natural language processing, not general-purpose model-building platforms."
  },
  {
    id: 110,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service uses machine learning to convert written text into natural-sounding, lifelike speech?",
    options: ["Amazon Transcribe","Amazon Translate","Amazon Lex","Amazon Polly"],
    correct: 3,
    explanation: "Amazon Polly turns text into lifelike speech (text-to-speech). Amazon Transcribe does the opposite by converting speech to text, and Amazon Translate performs language translation rather than speech synthesis."
  },
  {
    id: 111,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a fully managed message queuing service that decouples and scales microservices, distributed systems, and serverless applications?",
    options: ["Amazon SNS","Amazon EventBridge","Amazon SQS","AWS Step Functions"],
    correct: 2,
    explanation: "Amazon Simple Queue Service (SQS) is a message queuing service that decouples application components by temporarily storing messages until they are processed. Amazon SNS is a pub/sub notification service that pushes messages to multiple subscribers rather than queuing them for later processing."
  },
  {
    id: 112,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to coordinate multiple AWS Lambda functions into a visual workflow that includes sequential steps, parallel branches, and built-in error handling and retries. Which AWS service should they use?",
    options: ["Amazon SNS","AWS Step Functions","Amazon SQS","Amazon EventBridge"],
    correct: 1,
    explanation: "AWS Step Functions lets developers build visual workflows (state machines) that orchestrate multiple AWS services, such as Lambda functions, with built-in error handling and retry logic. Amazon EventBridge routes events between services based on rules but does not provide the sequential and parallel workflow orchestration that Step Functions offers."
  },
  {
    id: 113,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS developer tool is a fully managed build service that compiles source code, runs tests, and produces software packages ready for deployment?",
    options: ["AWS CodePipeline","AWS CodeDeploy","AWS CodeBuild","AWS CloudShell"],
    correct: 2,
    explanation: "AWS CodeBuild compiles source code, runs unit tests, and produces deployable artifacts. AWS CodePipeline instead orchestrates the overall release workflow across build, test, and deploy stages, while CodeDeploy automates deploying application code to compute services."
  },
  {
    id: 114,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A development team wants to analyze and debug a distributed application by tracing requests as they travel through multiple microservices to identify performance bottlenecks. Which AWS service should they use?",
    options: ["Amazon CloudWatch","AWS X-Ray","AWS CodePipeline","AWS CloudShell"],
    correct: 1,
    explanation: "AWS X-Ray provides distributed tracing, allowing developers to visualize and debug requests as they pass through multiple microservices to pinpoint bottlenecks and errors. Amazon CloudWatch monitors metrics, logs, and alarms but does not provide the end-to-end request tracing across services that X-Ray offers."
  },
  {
    id: 115,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "A startup needs to run compute workloads for an unpredictable, short-term project and does not want to commit to any contract or make an upfront payment. Which AWS EC2 pricing model should the company use?",
    options: ["On-Demand Instances","Reserved Instances","Savings Plans","Dedicated Hosts"],
    correct: 0,
    explanation: "On-Demand lets you pay for compute by the second or hour with no long-term commitment, which is ideal for unpredictable, short-term workloads. Reserved Instances and Savings Plans both require a 1- or 3-year commitment in exchange for a lower rate."
  },
  {
    id: 116,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS pricing model allows a customer to commit to a consistent amount of compute usage (measured in $/hour) for a 1- or 3-year term, while still being able to change instance family, size, OS, or Region and automatically receive the discounted rate?",
    options: ["Savings Plans","Reserved Instances","Spot Instances","On-Demand Instances"],
    correct: 0,
    explanation: "Savings Plans offer pricing flexibility across instance families and Regions in exchange for a committed hourly spend, unlike Reserved Instances, which are tied to a specific instance configuration."
  },
  {
    id: 117,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "A company runs a batch image-rendering job that can be paused and resumed at any time without affecting the final output. Which EC2 purchasing option would reduce costs the most for this workload?",
    options: ["Spot Instances","On-Demand Instances","Reserved Instances","Savings Plans"],
    correct: 0,
    explanation: "Spot Instances offer the deepest discounts, up to 90% off On-Demand pricing, for fault-tolerant, flexible workloads that can tolerate interruption, such as batch rendering jobs."
  },
  {
    id: 118,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which statement about the AWS Free Tier is correct?",
    options: ["It includes offers that are always free, offers free for 12 months after account creation, and short-term trial offers","It provides unlimited free usage of all AWS services for the first year","It only applies to Amazon EC2 and Amazon S3","It requires a signed contract with AWS before it can be used"],
    correct: 0,
    explanation: "The AWS Free Tier consists of three offer types: always-free offers, 12-months-free offers (starting from account creation), and short-term trials, and it spans many services rather than just EC2 and S3."
  },
  {
    id: 119,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "A company has multiple AWS accounts for different departments and wants to combine usage across all accounts to qualify for volume pricing discounts while receiving a single bill. Which AWS feature should the company use?",
    options: ["Consolidated billing in AWS Organizations","AWS Budgets","AWS Cost Explorer","AWS Billing Conductor"],
    correct: 0,
    explanation: "Consolidated billing, a feature of AWS Organizations, combines usage from multiple accounts to share volume pricing discounts and produces a single bill for the entire organization."
  },
  {
    id: 120,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS tool provides a visual interface to analyze historical AWS spending patterns and forecast future costs?",
    options: ["AWS Cost Explorer","AWS Budgets","AWS Cost and Usage Report","AWS Trusted Advisor"],
    correct: 0,
    explanation: "AWS Cost Explorer lets users visualize, understand, and forecast spending trends over time using built-in reports and custom filters."
  },
  {
    id: 121,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "A company wants to receive an automatic alert when its AWS costs are forecasted to exceed a specific dollar amount for the month. Which service should it use?",
    options: ["AWS Budgets","AWS Cost Explorer","AWS Cost and Usage Report","AWS Pricing Calculator"],
    correct: 0,
    explanation: "AWS Budgets lets users set custom cost and usage budgets that trigger alerts when actual or forecasted costs exceed defined thresholds."
  },
  {
    id: 122,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS resource provides the most comprehensive and granular set of AWS cost and usage data, including hourly line-item details that can be delivered to an Amazon S3 bucket for further analysis?",
    options: ["AWS Cost and Usage Report","AWS Cost Explorer","AWS Budgets","AWS Trusted Advisor"],
    correct: 0,
    explanation: "The AWS Cost and Usage Report (CUR) is the most detailed billing report available, providing granular line-item data that can be delivered to Amazon S3 for use with analytics tools."
  },
  {
    id: 123,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Before deploying any resources, a solutions architect wants to estimate the monthly cost of a proposed AWS architecture. Which tool should be used?",
    options: ["AWS Pricing Calculator","AWS Cost Explorer","AWS Budgets","AWS Cost and Usage Report"],
    correct: 0,
    explanation: "AWS Pricing Calculator lets users model and estimate the cost of AWS services before deployment, without needing an AWS account. Cost Explorer, Budgets, and CUR instead analyze costs from usage that has already occurred."
  },
  {
    id: 124,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "A company wants to find and deploy pre-configured, third-party software from independent software vendors directly onto AWS, with charges appearing on its existing AWS bill. Which service should the company use?",
    options: ["AWS Marketplace","AWS Billing Conductor","AWS Cost Explorer","AWS Pricing Calculator"],
    correct: 0,
    explanation: "AWS Marketplace is a digital catalog of third-party software listings that can be deployed on AWS, with charges consolidated into the customer's AWS bill."
  },
  {
    id: 125,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which is the minimum AWS Support plan that provides access to a Technical Account Manager (TAM)?",
    options: ["Enterprise On-Ramp","Business","Developer","Basic"],
    correct: 0,
    explanation: "Enterprise On-Ramp is the lowest-tier plan that includes access to a pool of Technical Account Managers. Business Support does not include a TAM, while full Enterprise Support provides a dedicated TAM."
  },
  {
    id: 126,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS service inspects an AWS account and provides recommendations across categories such as cost optimization, security, fault tolerance, performance, and service limits?",
    options: ["AWS Trusted Advisor","AWS Health Dashboard","AWS Cost Explorer","AWS re:Post"],
    correct: 0,
    explanation: "AWS Trusted Advisor analyzes an account against AWS best practices in five categories: cost optimization, performance, security, fault tolerance, and service limits."
  },
  {
    id: 127,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "A company using the AWS Business Support plan experiences a production system down issue. What is the maximum response time it can expect from AWS Support?",
    options: ["Less than 1 hour","Less than 15 minutes","Less than 4 hours","Less than 12 hours"],
    correct: 0,
    explanation: "Under Business Support, a production system down case has a guaranteed response time of under 1 hour. Enterprise Support offers a faster, under-15-minute response for business-critical system down cases."
  },
  {
    id: 128,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS resource is a free, community-driven question-and-answer service where customers and AWS experts share knowledge and troubleshoot issues?",
    options: ["AWS re:Post","AWS Knowledge Center","AWS IQ","AWS Professional Services"],
    correct: 0,
    explanation: "AWS re:Post is a community-driven Q&A platform where customers, partners, and AWS employees answer questions. AWS Knowledge Center instead provides short, pre-written articles authored by AWS Support engineers."
  },
  {
    id: 129,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS resource gives a personalized view of AWS events, such as scheduled maintenance or service issues, that may affect the specific resources in a customer's account?",
    options: ["AWS Health Dashboard","AWS Trusted Advisor","AWS Cost Explorer","AWS Knowledge Center"],
    correct: 0,
    explanation: "The AWS Health Dashboard provides personalized alerts and guidance about events affecting a customer's specific AWS resources, unlike the general Service Health Dashboard, which shows overall service status for all customers."
  },
  {
    id: 130,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "A company wants to hire independent, on-demand experts for a short-term project to help configure an AWS service, without engaging AWS's own consulting organization. Which offering is designed for this purpose?",
    options: ["AWS IQ","AWS Professional Services","AWS Partner Network","AWS Support Basic Plan"],
    correct: 0,
    explanation: "AWS IQ connects customers directly with independent, third-party AWS-certified experts for on-demand project work, whereas AWS Professional Services is AWS's own consulting organization."
  }
];
