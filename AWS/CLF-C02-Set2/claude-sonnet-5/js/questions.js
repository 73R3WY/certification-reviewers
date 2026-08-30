const QUESTIONS = [
  {
    id: 1,
    domain: "Domain 1: Cloud Concepts",
    question: "What is the primary benefit of trading a fixed expense for a variable expense when moving to AWS Cloud?",
    options: ["You pay lower upfront capital expenses and instead pay variable operating expenses based on actual usage","You eliminate all operating expenses entirely","You lock in a fixed monthly fee regardless of usage","You must purchase hardware only once every five years"],
    correct: 0,
    explanation: "Trading 'fixed expense' for 'variable expense' means gaining flexibility in paying for IT resources: the traditional on-premises model has fixed, high upfront costs (CAPEX), while the cloud has variable monthly expenses with lower upfront fees (OPEX)."
  },
  {
    id: 2,
    domain: "Domain 1: Cloud Concepts",
    question: "A bakery sells donuts at $1.50 each individually but offers a dozen for $12 instead of $18. Which cloud computing benefit does this scenario best illustrate?",
    options: ["Economies of scale","Stop guessing capacity","Increase speed and agility","Go global in minutes"],
    correct: 0,
    explanation: "The guide uses the donut bulk-discount example to illustrate economies of scale: as the scale of output increases, unit costs decrease, letting cloud providers pass savings on to customers just like large-scale producers can sell goods cheaper."
  },
  {
    id: 3,
    domain: "Domain 1: Cloud Concepts",
    question: "Which advantage of cloud computing allows a company to accurately match its computing resources to actual usage patterns instead of estimating requirements before deploying an application?",
    options: ["Stop guessing capacity","Trade fixed expense for variable expense","Go global in minutes","Economies of scale"],
    correct: 0,
    explanation: "The guide explains that historically, IT firms had to guess capacity through load testing and rough estimates, leading to under- or over-utilized servers. Cloud computing lets companies stop guessing capacity and scale up or down at a moment's notice to match real usage patterns."
  },
  {
    id: 4,
    domain: "Domain 1: Cloud Concepts",
    question: "A company can launch new servers, storage, and networking resources in the cloud up to a hundred times faster than in an on-premises data center. Which benefit of cloud computing does this describe?",
    options: ["Increase speed and agility","Stop spending money on running and maintaining data centers","Stop guessing capacity","Trade fixed expense for variable expense"],
    correct: 0,
    explanation: "The speed of launching servers, storage, and network devices is a hundred times faster in the cloud than on-premises, which increases speed and agility for product delivery, system upgrades, and expansion."
  },
  {
    id: 5,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following is NOT one of the costs typically associated with running a physical, on-premises data center?",
    options: ["Payroll for security staff and engineers","Property expenses and legal compliance costs","Pay-as-you-go compute billed by the second","Insurance and security equipment"],
    correct: 2,
    explanation: "The guide's 'Costs of Running a Data Center' list includes property expenses, legal requirements, insurance, security equipment, payroll, IT assets, maintenance, and data replication. Pay-as-you-go billing by the second is a cloud pricing characteristic, not an on-premises data center cost."
  },
  {
    id: 6,
    domain: "Domain 1: Cloud Concepts",
    question: "A company wants to deliver high-resolution images stored on a server in California to customers across Asia with minimal load time. Which AWS Cloud benefit and underlying capability addresses this need?",
    options: ["Go global in minutes, by caching content at edge locations closer to end users","Stop guessing capacity, by using Auto Scaling","Economies of scale, by purchasing resources in bulk","Trade fixed expense for variable expense, by using pay-as-you-go pricing"],
    correct: 0,
    explanation: "The guide's edge locations example shows an image cached from California to an edge location near Asian customers, cutting load time from 5 seconds to 1 second. This is the 'go global in minutes' benefit, achieved through the CDN of edge locations and regional edge caches."
  },
  {
    id: 7,
    domain: "Domain 1: Cloud Concepts",
    question: "What is an Availability Zone (AZ) in the AWS Global Infrastructure?",
    options: ["One or more discrete data centers with redundant power, networking, and connectivity, typically within 100 kilometers of each other","A single physical data center located in a country without an existing AWS Region","A network of edge locations that cache content close to end users","A geographic area consisting of multiple AWS Regions"],
    correct: 0,
    explanation: "The guide defines an Availability Zone as a cluster of one or more interconnected data centers, each with redundant power, networking, and connectivity, typically within 100 kilometers or 60 miles of each other, forming the building block of an AWS Region."
  },
  {
    id: 8,
    domain: "Domain 1: Cloud Concepts",
    question: "What is the main purpose of an AWS Local Zone?",
    options: ["To bring select AWS compute, storage, database, and other services closer to a specific location that has no existing AWS Region","To replace an entire AWS Region with additional Availability Zones","To serve exclusively as a disaster recovery site for another Region","To provide a global network of points of presence solely for caching static content"],
    correct: 0,
    explanation: "The guide describes an AWS Local Zone as a type of region composed of just a single data center, with less redundancy than a regular Region, whose main purpose is bringing select AWS services closer to a country or geographical location where there is no existing AWS Region."
  },
  {
    id: 9,
    domain: "Domain 1: Cloud Concepts",
    question: "Which document describes the key concepts, design principles, and architectural best practices for designing and running efficient workloads in AWS?",
    options: ["The AWS Well-Architected Framework","The AWS Cloud Adoption Framework","The AWS Shared Responsibility Model","An AWS Trusted Advisor report"],
    correct: 0,
    explanation: "The guide defines the AWS Well-Architected Framework as a body of knowledge describing key concepts, design principles, and architectural best practices for designing and running efficient workloads in AWS, available as a document you must manually check your architecture against."
  },
  {
    id: 10,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following correctly lists the six pillars of the AWS Well-Architected Framework?",
    options: ["Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability","Business, People, Governance, Platform, Security, Operations","Scalability, Automation, Loose Coupling, Caching, Databases, Elasticity","Envision, Align, Launch, Scale, Optimize, Sustain"],
    correct: 0,
    explanation: "The six pillars of the AWS Well-Architected Framework are Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability, each with its own design principles and best practice areas."
  },
  {
    id: 11,
    domain: "Domain 1: Cloud Concepts",
    question: "A company wants a free, self-service tool in the AWS Management Console to check its cloud architecture against AWS best practices without manually reading through the entire Well-Architected Framework document. Which tool should it use?",
    options: ["AWS Well-Architected Tool","AWS Cost Explorer","AWS Trusted Advisor","AWS Config"],
    correct: 0,
    explanation: "The guide explains that the AWS Well-Architected Tool (WA Tool) is a self-service console, available at no charge, that lets you check your cloud architectures against the AWS Well-Architected Framework and can integrate with AWS Trusted Advisor, Compute Optimizer, and Service Catalog."
  },
  {
    id: 12,
    domain: "Domain 1: Cloud Concepts",
    question: "Which pillar of the AWS Well-Architected Framework focuses on a system's ability to work correctly and consistently, recover from disruptions, and dynamically acquire computing resources to meet demand?",
    options: ["Reliability","Performance Efficiency","Operational Excellence","Cost Optimization"],
    correct: 0,
    explanation: "The guide states that the keyword for the Reliability pillar is 'recovery' — systems must recover easily from service disruptions, natural disasters, and application failures, using design principles like 'automatically recover from failure' and 'stop guessing capacity.'"
  },
  {
    id: 13,
    domain: "Domain 1: Cloud Concepts",
    question: "Which design principle under the Security pillar of the AWS Well-Architected Framework involves reducing or eliminating the need for direct human access to data?",
    options: ["Keep people away from data","Enable traceability","Automate security best practices","Prepare for security events"],
    correct: 0,
    explanation: "The Security pillar's design principles listed in the guide include 'Keep people away from data,' alongside implementing a strong identity foundation, enabling traceability, applying security at all layers, and protecting data in transit and at rest."
  },
  {
    id: 14,
    domain: "Domain 1: Cloud Concepts",
    question: "A company is replacing all of its physical, on-premises servers with AWS serverless compute services to achieve lower costs and higher scalability. Which pillar of the AWS Well-Architected Framework does this best demonstrate?",
    options: ["Performance Efficiency","Reliability","Operational Excellence","Cost Optimization"],
    correct: 0,
    explanation: "This example falls under the Performance Efficiency pillar: a company replacing physical servers with AWS serverless compute services shows it is aiming for performance efficiency by taking advantage of advanced technologies available in AWS."
  },
  {
    id: 15,
    domain: "Domain 1: Cloud Concepts",
    question: "Under the shared responsibility model applied to the Sustainability pillar, what is AWS responsible for?",
    options: ["Optimizing the sustainability of the cloud infrastructure itself, such as efficient shared infrastructure, water stewardship, and renewable power sourcing","Minimizing the total resources a customer's own workload requires","Selecting the most efficient software architecture for the customer's application","Establishing the customer's own sustainability goals"],
    correct: 0,
    explanation: "The guide explains that the Sustainability pillar works like the Shared Responsibility Model but focused on sustainability instead of security: AWS is responsible for sustainability 'of' the cloud (efficient shared infrastructure, water stewardship, renewable power), while customers are responsible for sustainability 'in' the cloud by optimizing workloads and resource utilization."
  },
  {
    id: 16,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following best describes 'adopting a consumption model' as a design principle of the Cost Optimization pillar?",
    options: ["Paying only for the computing resources you actually consume rather than relying on upfront forecasting","Purchasing large amounts of reserved hardware capacity years in advance","Signing a long-term contract to lock in a fixed monthly data center cost","Estimating future capacity needs solely through load testing before deployment"],
    correct: 0,
    explanation: "The guide states that Cost Optimization can be achieved by adopting a consumption model where companies only pay for resources they actually consume, removing reliance on elaborate and often inaccurate forecasting of expected compute usage."
  },
  {
    id: 17,
    domain: "Domain 1: Cloud Concepts",
    question: "In the AWS Well-Architected Framework's general design principles, what is the difference between scaling vertically and scaling horizontally?",
    options: ["Vertical scaling increases the specifications of an individual resource, while horizontal scaling increases the number of resources","Vertical scaling adds more Availability Zones, while horizontal scaling adds more Regions","Vertical scaling only applies to serverless architectures, while horizontal scaling applies only to EC2 instances","Vertical scaling reduces cost, while horizontal scaling only improves reliability"],
    correct: 0,
    explanation: "The guide defines scaling vertically as an increase in the specifications of an individual resource (e.g., upgrading an EC2 instance type) and scaling horizontally as an increase in the number of resources (e.g., adding more EC2 instances or read replicas)."
  },
  {
    id: 18,
    domain: "Domain 1: Cloud Concepts",
    question: "What is the primary purpose of the AWS Cloud Adoption Framework (AWS CAF)?",
    options: ["To provide a structured approach that helps organizations align people, processes, and technology to transition successfully to the cloud","To describe the physical security responsibilities of AWS data centers","To list the purchasing options available for AWS compute services","To define the six pillars used to review the architecture of a single workload"],
    correct: 0,
    explanation: "The guide describes AWS CAF as a structured approach used to help organizations digitally transform and accelerate business outcomes through AWS, identifying organizational capabilities addressed through different perspectives focused on key areas necessary for successful cloud migration."
  },
  {
    id: 19,
    domain: "Domain 1: Cloud Concepts",
    question: "The AWS Cloud Adoption Framework organizes cloud readiness guidance into six perspectives. Which of the following correctly lists them?",
    options: ["Business, People, Governance, Platform, Security, Operations","Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability","Envision, Align, Launch, Scale, Optimize, Sustain","Strategy, Portfolio, Innovation, Product, Partnership, Insights"],
    correct: 0,
    explanation: "AWS CAF provides six perspectives: Business, People, Governance, Platform, Security, and Operations, each focused on a specific key area of readiness for cloud transformation."
  },
  {
    id: 20,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS CAF perspective ensures that cloud investments propel digital transformation goals and business results, with common stakeholders including the CEO, COO, CFO, and CIO?",
    options: ["Business Perspective","Governance Perspective","Platform Perspective","People Perspective"],
    correct: 0,
    explanation: "The guide states the Business Perspective ensures cloud investments propel digital transformation and business results, with stakeholders such as CEO, COO, CIO, CFO, and CTO, covering areas like Strategy Management, Portfolio Management, and Innovation Management."
  },
  {
    id: 21,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS CAF perspective acts as a bridge between technology and business, focusing on organizational culture, leadership, and workforce transformation to help the organization evolve into a culture of continuous growth and learning?",
    options: ["People Perspective","Governance Perspective","Operations Perspective","Security Perspective"],
    correct: 0,
    explanation: "The guide describes the People Perspective as acting as a bridge between technology and business, speeding up the cloud journey by focusing on organizational structure, leadership, workforce, and culture, with key areas like Culture Evolution and Workforce Transformation."
  },
  {
    id: 22,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS CAF perspective helps an organization orchestrate its cloud initiatives while maximizing organizational benefits and minimizing transformation risks, with key areas such as Program & Project Management and Cloud Financial Management?",
    options: ["Governance Perspective","Platform Perspective","Business Perspective","Operations Perspective"],
    correct: 0,
    explanation: "The guide states the Governance Perspective helps orchestrate cloud initiatives while maximizing benefits and minimizing risks, with stakeholders like the CIO, CTO, CFO, and CRO, and key areas including Program & Project Management, Risk Management, and Cloud Financial Management."
  },
  {
    id: 23,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS CAF perspective focuses on building an enterprise-grade, scalable, hybrid cloud platform and modernizing existing workloads, with stakeholders such as the CTO, technology leaders, architects, and engineers?",
    options: ["Platform Perspective","Governance Perspective","People Perspective","Security Perspective"],
    correct: 0,
    explanation: "The guide describes the Platform Perspective as helping build an enterprise-grade, scalable, hybrid cloud platform, modernize existing workloads, and implement new cloud-native solutions, with key areas like Platform Architecture and Modern Application Development."
  },
  {
    id: 24,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS CAF perspective focuses on achieving the confidentiality, integrity, and availability of data and cloud workloads, with key areas such as Identity & Access Management and Incident Response?",
    options: ["Security Perspective","Governance Perspective","Operations Perspective","Business Perspective"],
    correct: 0,
    explanation: "The guide states the Security Perspective helps attain confidentiality, integrity, and availability of data and cloud workloads, with key areas including Security Governance, Identity & Access Management, Threat Detection, and Incident Response."
  },
  {
    id: 25,
    domain: "Domain 1: Cloud Concepts",
    question: "Which AWS CAF perspective ensures cloud services are delivered at a level that satisfies business stakeholders, with key areas including Observability, Change & Release Management, and Availability & Continuity Management?",
    options: ["Operations Perspective","Platform Perspective","People Perspective","Governance Perspective"],
    correct: 0,
    explanation: "The guide describes the Operations Perspective as ensuring cloud services are delivered at a level that satisfies business stakeholder needs, with common stakeholders like site reliability engineers, and key areas such as Observability, Event Management, and Availability & Continuity Management."
  },
  {
    id: 26,
    domain: "Domain 1: Cloud Concepts",
    question: "The AWS Cloud Adoption Framework describes four Cloud Transformation Phases. Which sequence correctly reflects these phases?",
    options: ["Envision, Align, Launch, Scale","Plan, Build, Test, Deploy","Discover, Design, Implement, Operate","Strategy, Portfolio, Program, Product"],
    correct: 0,
    explanation: "The guide lists the four Cloud Transformation Phases in AWS CAF as Envision (identify transformation opportunities), Align (identify capability gaps), Launch (deliver pilots in production), and Scale (expand pilots and business value)."
  },
  {
    id: 27,
    domain: "Domain 1: Cloud Concepts",
    question: "What term describes the long-term, usually costly, one-off asset purchases a company incurs to establish its business operations, such as buying rack servers for a data center?",
    options: ["Capital expenditure (CAPEX)","Operating expense (OPEX)","Total cost of ownership (TCO)","Economies of scale"],
    correct: 0,
    explanation: "The guide defines CAPEX (capital expenditures) as the long-term asset acquisition or one-off purchases incurred by a company to establish its business operations, contrasted with OPEX, the recurring payables for continuing operations."
  },
  {
    id: 28,
    domain: "Domain 1: Cloud Concepts",
    question: "What term describes the recurring payables required to run and maintain the resources necessary to operate a business, such as a monthly cloud computing bill?",
    options: ["Operating expense (OPEX)","Capital expenditure (CAPEX)","Fixed expense","Colocation fee"],
    correct: 0,
    explanation: "The guide defines OPEX (operating expenses) as the recurring payables for maintaining assets and continuing business operations, which in the cloud vary month to month based on actual resource consumption."
  },
  {
    id: 29,
    domain: "Domain 1: Cloud Concepts",
    question: "A company runs 10 on-premises servers billed at a fixed monthly rate. Utilization is 80% Monday, 50% Tuesday and Wednesday, 20% Thursday and Friday, and 0% on weekends. What does this scenario illustrate about traditional on-premises data centers?",
    options: ["Companies pay the same fixed fee even when computing capacity is underutilized or completely idle","Companies only pay for the exact percentage of CPU they use each day","On-premises data centers automatically scale down billing on weekends","Fixed expenses only apply to cloud computing, not on-premises infrastructure"],
    correct: 0,
    explanation: "The guide's server utilization example shows a constant $10,000 per month bill regardless of whether utilization is 80%, 20%, or 0%, illustrating that on-premises fixed expenses lack the flexibility of the cloud's variable, consumption-based OPEX model."
  },
  {
    id: 30,
    domain: "Domain 1: Cloud Concepts",
    question: "A large facility offers shared data center space so that multiple companies can lower the large upfront investment required to build a dedicated facility. What is this type of shared facility called?",
    options: ["Colocation facility","Availability Zone","Edge location","Local Zone"],
    correct: 0,
    explanation: "The guide explains that because building a dedicated data center is too costly for small companies, bigger corporations offer shared facilities so one location can be shared by more customers — this is referred to as a colocation facility."
  },
  {
    id: 31,
    domain: "Domain 1: Cloud Concepts",
    question: "Which of the following best explains why cloud computing generally offers a lower total cost of ownership (TCO) compared to running an on-premises data center or colocation facility?",
    options: ["It removes the large upfront capital investment and many of the recurring costs of property, staffing, and maintenance associated with running physical data centers","It requires companies to purchase servers in bulk at a wholesale discount","It guarantees a fixed monthly bill that never changes regardless of usage","It eliminates the need for any operating expenses whatsoever"],
    correct: 0,
    explanation: "The guide states that the cloud provides a lower total cost of ownership compared with running an infrastructure environment on-premises or in a colocation facility, since companies stop spending money on the large capital investment and recurring costs of running and maintaining data centers."
  },
  {
    id: 32,
    domain: "Domain 2: Security & Compliance",
    question: "In the AWS Shared Responsibility Model, which phrase describes AWS's responsibility for protecting the global infrastructure, including the hardware, software, networking, and facilities that run AWS services?",
    options: ["Security IN the cloud","Security OF the cloud","Customer-specific controls","Zone Security"],
    correct: 1,
    explanation: "AWS is responsible for the 'security OF the cloud,' meaning it protects the entire physical infrastructure including hardware, software, networking, and facilities that run AWS Cloud services. The customer, by contrast, is responsible for 'security IN the cloud.'"
  },
  {
    id: 33,
    domain: "Domain 2: Security & Compliance",
    question: "Who is responsible for applying security patches to the guest operating system of an Amazon EC2 instance?",
    options: ["AWS","The customer","AWS Support","A third-party managed service provider"],
    correct: 1,
    explanation: "The guide states this task 'clearly falls on the shoulders of the customer since we are talking about guest operating systems.' AWS only patches the host operating system and hypervisor, not the guest OS the customer configures."
  },
  {
    id: 34,
    domain: "Domain 2: Security & Compliance",
    question: "Who is responsible for running the host operating system and the virtualization layer (hypervisor) that powers Amazon EC2 instances?",
    options: ["The customer","AWS","Shared 50/50 between AWS and the customer","A third-party managed service provider"],
    correct: 1,
    explanation: "AWS has the obligation of maintaining the host operating system and the virtualization layer, also known as the hypervisor, that generates and runs EC2 virtual machines. This is part of AWS's 'security OF the cloud' responsibility."
  },
  {
    id: 35,
    domain: "Domain 2: Security & Compliance",
    question: "A company stores customer data in Amazon S3. Under the Shared Responsibility Model, which of the following remains the customer's responsibility?",
    options: ["Maintaining the underlying storage hardware","Patching the S3 service software","Configuring encryption and access permissions for the data","Providing physical security for the data center"],
    correct: 2,
    explanation: "For abstracted services like Amazon S3, AWS handles nearly everything in the infrastructure, OS, and software layers, but customers can still further secure their data by using encryption features, configuring endpoints, and crafting IAM policies for fine-grained permissions."
  },
  {
    id: 36,
    domain: "Domain 2: Security & Compliance",
    question: "For an abstracted service like Amazon DynamoDB, how does AWS's share of responsibility compare to an IaaS offering like Amazon EC2?",
    options: ["It is identical, since both are AWS services","AWS takes on more responsibility, managing the infrastructure, OS, and software layers, leaving the customer to secure data and set IAM permissions","The customer must patch the operating system running DynamoDB","AWS has no responsibility for DynamoDB"],
    correct: 1,
    explanation: "The guide notes that for abstracted services such as DynamoDB, AWS handles almost everything from the infrastructure layer, operating system, and software, unlike IaaS such as EC2 where the customer configures and secures more of the stack themselves."
  },
  {
    id: 37,
    domain: "Domain 2: Security & Compliance",
    question: "Under the AWS Shared Responsibility Model's IT controls framework, which type of control does a customer fully inherit from AWS?",
    options: ["Configuration management controls","Physical and environmental controls of the data centers","Zone Security controls","Awareness and training controls"],
    correct: 1,
    explanation: "The guide defines inherited controls as those the customer fully inherits from AWS, such as the physical and environmental controls of the data centers and their related assets."
  },
  {
    id: 38,
    domain: "Domain 2: Security & Compliance",
    question: "Who is responsible for managing IAM user access and secret keys in an AWS account?",
    options: ["AWS, since IAM is an AWS-managed service","The customer, since this falls under security IN the cloud","AWS Support","Shared equally since IAM spans both layers"],
    correct: 1,
    explanation: "The guide clarifies that IAM refers to Identity and Access Management, which is part of the security 'in' the cloud, and managing the identity and access of cloud resources is within the scope of what the customer manages."
  },
  {
    id: 39,
    domain: "Domain 2: Security & Compliance",
    question: "Which of the following is an example of a customer-specific control under the AWS Shared Responsibility Model?",
    options: ["Physical security of AWS data centers","Patch management of the host OS","Configuring routes and filtering traffic within a customer's own VPC (Zone Security)","Firmware updates on AWS networking hardware"],
    correct: 2,
    explanation: "Customer-specific controls are tasks solely the responsibility of the customer, covering Zone Security, where customers can manually modify routes or filter traffic to better control access to their own resources and data."
  },
  {
    id: 40,
    domain: "Domain 2: Security & Compliance",
    question: "Which AWS service acts as a self-service central repository for AWS's security and compliance reports, such as ISO certifications, SOC reports, and PCI reports?",
    options: ["AWS Audit Manager","AWS Artifact","AWS Security Hub","Amazon Inspector"],
    correct: 1,
    explanation: "AWS Artifact is described as a self-service central repository of AWS's security and compliance reports and select online agreements, including ISO, SOC, and PCI reports."
  },
  {
    id: 41,
    domain: "Domain 2: Security & Compliance",
    question: "A healthcare company wants its AWS account officially designated for use with protected health information (PHI). Which AWS Artifact agreement should it accept?",
    options: ["Nondisclosure Agreement (NDA)","Business Associate Addendum (BAA)","AWS Australian Notifiable Data Breach Addendum","A Service Organization Control (SOC) report"],
    correct: 1,
    explanation: "Upon accepting the AWS BAA in AWS Artifact Agreements, an account is instantly designated for use in connection with protected health information (PHI) and HIPAA."
  },
  {
    id: 42,
    domain: "Domain 2: Security & Compliance",
    question: "Which service automates evidence collection from AWS accounts and maps it to compliance frameworks like GDPR, PCI DSS, HIPAA, and SOC 2 to simplify audit preparation?",
    options: ["AWS Artifact","AWS Audit Manager","AWS Config","AWS Trusted Advisor"],
    correct: 1,
    explanation: "AWS Audit Manager offers prebuilt frameworks for standards like PCI DSS, GDPR, HIPAA, and SOC 2, and automatically collects audit-friendly evidence from AWS accounts, associating it with relevant compliance controls."
  },
  {
    id: 43,
    domain: "Domain 2: Security & Compliance",
    question: "Which service consolidates findings from Amazon GuardDuty, Amazon Inspector, and Amazon Macie into a single view and checks account configurations against standards like CIS and PCI DSS?",
    options: ["Amazon Detective","AWS Security Hub","AWS Firewall Manager","AWS Config"],
    correct: 1,
    explanation: "AWS Security Hub aggregates security data from multiple AWS services, consolidating findings from sources like Amazon GuardDuty, Amazon Inspector, and Amazon Macie, and continuously checks account configurations against standards such as CIS, PCI DSS, and NIST."
  },
  {
    id: 44,
    domain: "Domain 2: Security & Compliance",
    question: "What is an 'audit artifact' in AWS Artifact?",
    options: ["A downloadable IAM policy template","A piece of evidence that demonstrates an organization is following a documented process or meeting a specific requirement","A CloudTrail event log entry","A Security Hub automation rule"],
    correct: 1,
    explanation: "The guide defines an audit artifact as a piece of evidence that demonstrates an organization is following a documented process or meeting a specific requirement, i.e., that it is business compliant."
  },
  {
    id: 45,
    domain: "Domain 2: Security & Compliance",
    question: "Which set of compliance standards does AWS Security Hub check your account configuration against?",
    options: ["AWS Foundational Security Best Practices (FSBP), CIS, PCI DSS, and NIST","Only ISO 27001","Only regional data residency laws","Only AWS internal service-level agreements"],
    correct: 0,
    explanation: "AWS Security Hub supports various compliance standards, including AWS Foundational Security Best Practices (FSBP), the Center for Internet Security (CIS), Payment Card Industry Data Security Standard (PCI DSS), and the National Institute of Standards and Technology (NIST)."
  },
  {
    id: 46,
    domain: "Domain 2: Security & Compliance",
    question: "What is the AWS account root user?",
    options: ["An IAM role used only by applications","A single sign-in identity that has complete access to all AWS services and resources in the account","A federated identity from a third-party provider","A default IAM group with limited permissions"],
    correct: 1,
    explanation: "The root user is defined as a single sign-in identity that has complete access to all AWS services and resources in the account, and it is the account's first principal."
  },
  {
    id: 47,
    domain: "Domain 2: Security & Compliance",
    question: "By default, what permissions does a brand-new IAM user have?",
    options: ["Full administrator access","Read-only access to all services","No permissions","Access limited to the IAM console only"],
    correct: 2,
    explanation: "The guide states plainly that by default, a brand new IAM user has NO permissions to do anything; permissions must be explicitly granted through policies."
  },
  {
    id: 48,
    domain: "Domain 2: Security & Compliance",
    question: "Which of the following is considered an IAM principal?",
    options: ["An S3 bucket policy","A user, role, federated user, or application that can request an action on an AWS resource","A CloudTrail log entry","A VPC subnet"],
    correct: 1,
    explanation: "The guide defines a principal as an entity that can make a request for an action or operation on an AWS resource, stating that users, roles, federated users, and applications are all AWS principals."
  },
  {
    id: 49,
    domain: "Domain 2: Security & Compliance",
    question: "According to IAM policy evaluation logic, what is the default outcome when a request has no matching allow or deny statement?",
    options: ["The request is allowed by default","The request is denied by default","The request is queued for manual review","The request inherits the root user's permissions"],
    correct: 1,
    explanation: "IAM evaluation logic states that by default, all requests are denied, and only an explicit allow in a permissions policy overrides this default."
  },
  {
    id: 50,
    domain: "Domain 2: Security & Compliance",
    question: "A developer is building an application that will run on an Amazon EC2 instance and needs to make API calls to other AWS services. What should be used to grant it permissions?",
    options: ["An IAM user with a long-term access key","An IAM role","An IAM group","The AWS account root user credentials"],
    correct: 1,
    explanation: "The 'When to Create an IAM Role' table in the guide specifically lists creating an application that runs on an Amazon EC2 instance and makes requests to AWS as a case for using an IAM role rather than an IAM user."
  },
  {
    id: 51,
    domain: "Domain 2: Security & Compliance",
    question: "Which AWS STS operation returns temporary credentials for users who have been authenticated by a mobile or web identity provider such as Facebook, Amazon, or Google?",
    options: ["AssumeRole","AssumeRoleWithSAML","AssumeRoleWithWebIdentity","GetFederationToken"],
    correct: 2,
    explanation: "AssumeRoleWithWebIdentity returns temporary security credentials for users authenticated in a mobile or web application with a web identity provider, with example providers including Amazon, Login with Amazon, Facebook, Google, or any OpenID Connect-compatible provider."
  },
  {
    id: 52,
    domain: "Domain 2: Security & Compliance",
    question: "What is the key difference between a managed policy and an inline policy in IAM?",
    options: ["A managed policy is standalone and can be attached to multiple users, groups, and roles, while an inline policy is embedded directly into a single user, group, or role","Inline policies can only be attached to resources, not identities","Managed policies must always be resource-based","There is no functional difference between the two"],
    correct: 0,
    explanation: "The guide states managed policies are standalone policies that you can attach to multiple users, groups, and roles, while inline policies are created and managed as embedded directly into a single user, group, or role."
  },
  {
    id: 53,
    domain: "Domain 2: Security & Compliance",
    question: "Which IAM feature continuously monitors resource policies for S3 buckets, KMS keys, SQS queues, IAM roles, and Secrets Manager secrets to proactively flag overly permissive access?",
    options: ["IAM Access Analyzer","AWS Config","AWS Trusted Advisor","AWS CloudTrail"],
    correct: 0,
    explanation: "IAM Access Analyzer provides policy checks that analyze policies and report errors, warnings, and suggestions, and it continuously monitors for new or updated resource policies and permissions granted for S3 buckets, KMS keys, SQS queues, IAM roles, and Secrets Manager secrets."
  },
  {
    id: 54,
    domain: "Domain 2: Security & Compliance",
    question: "A company wants employees who are already authenticated on the corporate network to access AWS without signing in again. Which IAM concept enables this?",
    options: ["Creating individual IAM users for everyone","Federating identities into AWS using a role","Sharing the root user credentials","Creating an IAM group with no attached policies"],
    correct: 1,
    explanation: "The guide's 'When to Create an IAM Role' guidance covers exactly this scenario: users authenticated in a corporate network who want to access AWS without signing in again should be federated into AWS rather than given individual IAM users."
  },
  {
    id: 55,
    domain: "Domain 2: Security & Compliance",
    question: "A company wants to filter incoming web traffic and block common exploits like SQL injection and cross-site scripting on its web application. Which service should it use?",
    options: ["AWS Shield","AWS WAF","Amazon Inspector","AWS Firewall Manager"],
    correct: 1,
    explanation: "AWS WAF is a web application firewall that lets you configure rules to allow, block, or monitor web requests, and it can also create rules that block common web exploits such as SQL injection and cross-site scripting."
  },
  {
    id: 56,
    domain: "Domain 2: Security & Compliance",
    question: "Which service uses machine learning to automatically discover, classify, and protect sensitive data such as personally identifiable information (PII) stored in AWS?",
    options: ["Amazon Macie","Amazon Inspector","Amazon GuardDuty","AWS Audit Manager"],
    correct: 0,
    explanation: "Amazon Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS, recognizing data types like PII and intellectual property."
  },
  {
    id: 57,
    domain: "Domain 2: Security & Compliance",
    question: "A company needs 24/7 access to the AWS DDoS Response Team and enhanced detection for layer 3, 4, and 7 attacks against its CloudFront distribution. Which service tier should it subscribe to?",
    options: ["AWS Shield Standard","AWS Shield Advanced","AWS WAF","AWS Firewall Manager"],
    correct: 1,
    explanation: "Shield Advanced provides enhanced detection and handles the majority of DDoS protection and mitigation for layer 3, 4, and 7 attacks, and gives customers 24x7 access to the AWS DDoS Response Team, unlike the free Shield Standard tier."
  },
  {
    id: 58,
    domain: "Domain 2: Security & Compliance",
    question: "Which service performs automated security assessments to test the network accessibility of Amazon EC2 instances and check the security state of the applications running on them?",
    options: ["Amazon Inspector","Amazon GuardDuty","Amazon Detective","AWS Security Hub"],
    correct: 0,
    explanation: "Amazon Inspector is described as an automated security assessment service that helps you test the network accessibility of your EC2 instances and the security state of applications running on them, using an optional agent."
  },
  {
    id: 59,
    domain: "Domain 2: Security & Compliance",
    question: "Which service provides user sign-up, sign-in, and access control for web and mobile applications through user pools and identity pools?",
    options: ["AWS IAM Identity Center","Amazon Cognito","AWS Directory Service","AWS STS"],
    correct: 1,
    explanation: "Amazon Cognito is an identity service that lets you add user sign-up, sign-in, and access control to web or mobile apps, launching two components: user pools for registration and login, and identity pools for granting temporary AWS credentials."
  },
  {
    id: 60,
    domain: "Domain 2: Security & Compliance",
    question: "Which service automatically gathers log data from AWS resources and uses machine learning to build a connected dataset that helps analysts identify the root cause of a security finding?",
    options: ["Amazon Detective","Amazon GuardDuty","AWS Security Hub","AWS Audit Manager"],
    correct: 0,
    explanation: "Amazon Detective automatically gathers log data from AWS resources and uses machine learning and data analysis to create a connected dataset, helping speed up security investigations by identifying the root causes of findings."
  },
  {
    id: 61,
    domain: "Domain 2: Security & Compliance",
    question: "Which managed threat detection service uses threat intelligence feeds and machine learning to identify compromised credentials, cryptomining, and malware across an AWS environment?",
    options: ["Amazon Inspector","Amazon GuardDuty","AWS Shield","AWS WAF"],
    correct: 1,
    explanation: "Amazon GuardDuty is a managed threat detection service that provides continuous monitoring, utilizing threat intelligence feeds like malicious IPs and domains along with machine learning to detect scenarios such as compromised credentials, cryptomining, and malware."
  },
  {
    id: 62,
    domain: "Domain 2: Security & Compliance",
    question: "Which service lets you manage, retrieve, and automatically rotate database credentials, API keys, and OAuth tokens so they don't have to be hard-coded into application code?",
    options: ["AWS KMS","AWS Secrets Manager","AWS CloudHSM","AWS Certificate Manager"],
    correct: 1,
    explanation: "AWS Secrets Manager enables you to manage, retrieve, and rotate sensitive information including database credentials, API keys, and OAuth tokens, and it facilitates automated rotation of secrets so applications no longer need hard-coded credentials."
  },
  {
    id: 63,
    domain: "Domain 2: Security & Compliance",
    question: "Which service simplifies creating, managing, and renewing SSL/TLS certificates for use with services like Elastic Load Balancing and Amazon CloudFront?",
    options: ["AWS Certificate Manager (ACM)","AWS CloudHSM","AWS KMS","AWS Secrets Manager"],
    correct: 0,
    explanation: "AWS Certificate Manager simplifies the process of creating, managing, and renewing SSL/TLS X.509 certificates, and easily provisions certificates for AWS services like Elastic Load Balancing, CloudFront, and API Gateway."
  },
  {
    id: 64,
    domain: "Domain 2: Security & Compliance",
    question: "A company must maintain full control over its cryptographic keys using single-tenant hardware devices validated for FIPS 140-2 and FIPS 140-3 Level 3. Which service should it use?",
    options: ["AWS KMS","AWS CloudHSM","AWS Secrets Manager","AWS Certificate Manager"],
    correct: 1,
    explanation: "AWS CloudHSM provides single-tenant, general-purpose hardware security modules validated for FIPS 140-2 and FIPS 140-3 Level 3, giving users full control over cryptographic keys with low-latency access."
  },
  {
    id: 65,
    domain: "Domain 2: Security & Compliance",
    question: "Which service lets an organization run a fully managed Microsoft Active Directory in AWS or connect to an existing on-premises AD without managing directory infrastructure?",
    options: ["AWS Directory Service","AWS IAM Identity Center","Amazon Cognito","AWS Organizations"],
    correct: 0,
    explanation: "AWS Directory Service allows users to leverage Microsoft Active Directory in the cloud, offering directory types such as AWS Managed Microsoft AD and AD Connector, the latter ideal for connecting existing on-premises AD without managing infrastructure in the cloud."
  },
  {
    id: 66,
    domain: "Domain 2: Security & Compliance",
    question: "Which service centrally configures and manages AWS WAF rules, AWS Shield Advanced protections, and security groups across all accounts in an AWS Organization?",
    options: ["AWS Firewall Manager","AWS Network Firewall","AWS Security Hub","AWS Config"],
    correct: 0,
    explanation: "AWS Firewall Manager centralizes security administration for services like AWS WAF, AWS Shield Advanced, and Amazon VPC security groups, letting organizations create and apply protection policies across all accounts in an AWS Organization."
  },
  {
    id: 67,
    domain: "Domain 2: Security & Compliance",
    question: "Which service provides workforce users a single AWS access portal to sign in once and access multiple AWS accounts and applications like Amazon QuickSight and Amazon Redshift?",
    options: ["AWS IAM Identity Center","AWS STS","Amazon Cognito","AWS Directory Service"],
    correct: 0,
    explanation: "AWS IAM Identity Center (AWS Single Sign-On) provides a centralized way to manage access for workforce users, letting them log in through the AWS access portal for seamless access to assigned applications like Amazon QuickSight and Redshift, and AWS accounts."
  },
  {
    id: 68,
    domain: "Domain 2: Security & Compliance",
    question: "Which service allows you to create, manage, and control encryption keys, with the root keys never leaving the service unencrypted and protected by FIPS 140-2 validated HSMs?",
    options: ["AWS Certificate Manager","AWS Key Management Service (KMS)","AWS Secrets Manager","AWS CloudHSM"],
    correct: 1,
    explanation: "AWS KMS keys are safeguarded by FIPS 140-2 validated hardware security modules, and the guide specifically notes that root keys never leave AWS KMS unencrypted, with all keys managed entirely within the service."
  },
  {
    id: 69,
    domain: "Domain 2: Security & Compliance",
    question: "Which stateful, managed firewall service for Amazon VPC uses the open-source Suricata engine to inspect network packets and detect intrusion attempts?",
    options: ["AWS WAF","AWS Network Firewall","AWS Shield","AWS Firewall Manager"],
    correct: 1,
    explanation: "AWS Network Firewall is a stateful, managed firewall and intrusion detection/prevention service for VPC environments that uses Suricata, an open-source intrusion prevention system, to inspect traffic and detect threats."
  },
  {
    id: 70,
    domain: "Domain 2: Security & Compliance",
    question: "Which service allows an organization to securely share resources such as VPC subnets, Route 53 rules, and AWS License Manager settings across multiple AWS accounts without duplicating them?",
    options: ["AWS Resource Access Manager (RAM)","AWS Organizations","AWS Firewall Manager","AWS Directory Service"],
    correct: 0,
    explanation: "AWS Resource Access Manager (RAM) enables secure sharing of AWS resources between multiple accounts or within AWS Organizations, working with resources like VPC subnets, Route 53 rules, and AWS License Manager settings, removing the need to duplicate infrastructure."
  },
  {
    id: 71,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS component is responsible for managing the host operating system and the virtualization layer (hypervisor) for Amazon EC2 instances?",
    options: ["The customer","AWS","A third-party managed service provider","The EC2 instance itself"],
    correct: 1,
    explanation: "In the EC2 shared responsibility model described in the guide, AWS manages the data centers, physical facilities, hardware components, host operating system, and virtualization layer, while the customer is responsible for the guest operating system, patches, and security configuration."
  },
  {
    id: 72,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company runs a fault-tolerant batch processing workload that can withstand interruptions and wants to minimize its EC2 costs as much as possible. Which EC2 purchasing option should it use?",
    options: ["On-Demand Instances","Spot Instances","Dedicated Hosts","Reserved Instances"],
    correct: 1,
    explanation: "The guide describes Spot Instances as unused EC2 instances available at a discounted 'Spot price' that can reduce costs significantly, but they may be stopped or terminated after a two-minute warning, so they should only be used for workloads that can be interrupted."
  },
  {
    id: 73,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which EC2 Placement Group strategy places instances close together within a single Availability Zone to achieve low latency and high network throughput?",
    options: ["Spread","Partition","Cluster","Capacity Reservation"],
    correct: 2,
    explanation: "According to the guide, a Cluster placement group 'places your instances close together inside an Availability Zone' and 'enables workloads to achieve low-latency, high network throughput network performance,' and it cannot span multiple Availability Zones."
  },
  {
    id: 74,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs a firewall that operates at the subnet level of its VPC and supports both allow and deny rules evaluated in a specific order. Which feature meets this requirement?",
    options: ["Security groups","Network ACLs","IAM policies","Elastic IP addresses"],
    correct: 1,
    explanation: "The guide explains that network ACLs 'operate on the subnet layer' and 'you can create allow rules and deny rules' evaluated starting with the lowest numbered rule, whereas security groups operate at the instance level and only support allow rules."
  },
  {
    id: 75,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A development team wants to quickly deploy and manage a web application without provisioning or configuring the underlying EC2 instances, load balancer, or Auto Scaling themselves. Which AWS service should they use?",
    options: ["AWS Lambda","AWS Elastic Beanstalk","Amazon ECS","AWS Batch"],
    correct: 1,
    explanation: "The guide describes AWS Elastic Beanstalk as a Platform-as-a-Service that 'allows you to quickly deploy and manage applications in the AWS Cloud without worrying about the infrastructure' and 'automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring.'"
  },
  {
    id: 76,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS compute service lets developers run code without provisioning or managing any servers, automatically scaling and charging based on the number of requests and the code's execution duration?",
    options: ["Amazon EC2","AWS Lambda","AWS Elastic Beanstalk","Amazon Lightsail"],
    correct: 1,
    explanation: "Per the guide, AWS Lambda is 'a serverless compute service' that 'executes your code only when needed and scales automatically,' and pricing is 'based on the total number of requests for your functions and the duration...it takes for your code to execute.'"
  },
  {
    id: 77,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to run Docker containers in AWS without provisioning, configuring, or scaling any EC2 instances or clusters of virtual machines. Which combination of services meets this requirement?",
    options: ["Amazon ECS with the EC2 launch type","Amazon ECS with AWS Fargate","Amazon EC2 with Auto Scaling","AWS Batch with EC2 instances"],
    correct: 1,
    explanation: "The guide states that 'you can use Fargate with ECS to run containers without having to manage servers or clusters of EC2 instances' and that with Fargate 'you no longer have to provision, configure, or scale clusters of virtual machines to run containers.'"
  },
  {
    id: 78,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company has infrequently accessed data that does not need to be resilient to the loss of an entire Availability Zone, and it wants the lowest-cost storage option for this access tier. Which Amazon S3 storage class should it use?",
    options: ["S3 Standard-IA","S3 One Zone-IA","S3 Intelligent-Tiering","S3 Standard"],
    correct: 1,
    explanation: "The guide notes that S3 One Zone-IA 'stores the object data in only one AZ' and is 'less expensive than STANDARD_IA, but data is not resilient to the physical loss of the AZ,' making it the cheapest infrequent-access option when AZ resilience is not required."
  },
  {
    id: 79,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs to retrieve a large amount of archived data, even petabytes, as inexpensively as possible and can wait up to 12 hours. Which S3 Glacier retrieval option should it choose?",
    options: ["Expedited","Standard","Bulk","Instant Retrieval"],
    correct: 2,
    explanation: "According to the guide, Bulk retrieval is 'Glacier's lowest-cost retrieval option, enabling you to retrieve large amounts, even petabytes, of data inexpensively in a day,' with typical completion within 5-12 hours."
  },
  {
    id: 80,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which Amazon EBS volume type is described as a low-cost HDD designed for frequently accessed, throughput-intensive workloads such as big data and log processing?",
    options: ["General Purpose SSD (gp3)","Provisioned IOPS SSD (io1)","Throughput Optimized HDD (st1)","Cold HDD (sc1)"],
    correct: 2,
    explanation: "The guide's EBS volume table describes Throughput Optimized HDD (st1) as a 'low cost HDD volume designed for frequently accessed, throughput-intensive workloads' with use cases including 'big data, data warehouses, log processing.'"
  },
  {
    id: 81,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs a fully managed file system that can be mounted concurrently by thousands of EC2 instances spanning multiple Availability Zones. Which AWS service should it use?",
    options: ["Amazon EBS","Amazon EFS","Amazon S3","Amazon FSx for Lustre"],
    correct: 1,
    explanation: "The guide states that Amazon EFS is a fully-managed file storage service supporting the NFS protocol, and in the EFS-vs-EBS comparison, EFS allows 'up to thousands of EC2 instances from multiple AZs' to connect concurrently, while an EBS volume connects to only a single instance in a single AZ."
  },
  {
    id: 82,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company is migrating a legacy Windows application that requires a file system supporting the Server Message Block (SMB) protocol. Which AWS service should it use?",
    options: ["Amazon FSx for Windows File Server","Amazon FSx for Lustre","Amazon EFS","Amazon EBS"],
    correct: 0,
    explanation: "Per the guide, Amazon FSx for Windows File Server is 'for MS Windows File Service and Windows applications' and 'supports Windows-based features such as Server Message Block (SMB),' whereas FSx for Lustre is tailored for compute-intensive workloads like machine learning and HPC."
  },
  {
    id: 83,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to give its on-premises applications a file interface to Amazon S3 using the NFS or SMB protocol while keeping a local cache of frequently accessed data. Which AWS Storage Gateway type should it use?",
    options: ["Tape Gateway","Volume Gateway","File Gateway","Direct Connect Gateway"],
    correct: 2,
    explanation: "The guide describes File Gateway as a solution that 'supports a file interface into S3' by combining a service with a software appliance deployed on-premises, and it lets you 'store and retrieve files directly using the NFS' or 'SMB file system' protocol."
  },
  {
    id: 84,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs a fully managed service to centralize and automate backup of its AWS resources, including support for immutable backups and air-gapped vaults for ransomware protection. Which service should it use?",
    options: ["AWS Backup","AWS Elastic Disaster Recovery","Amazon S3 Glacier","AWS Storage Gateway"],
    correct: 0,
    explanation: "The guide describes AWS Backup as 'a fully managed backup service that automates your server and database backup processes' and lists 'Ransomware Protection' as a benefit, achieved by implementing 'immutable backups and air-gapped vaults as part of a multi-layered security strategy.'"
  },
  {
    id: 85,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs a relational database engine compatible with MySQL and PostgreSQL whose underlying storage automatically scales up to 128 terabytes as needed. Which AWS service should it use?",
    options: ["Amazon RDS for SQL Server","Amazon Aurora","Amazon DynamoDB","Amazon Redshift"],
    correct: 1,
    explanation: "The guide states that Amazon Aurora is 'a fully managed relational database engine that's compatible with MySQL and PostgreSQL' and that 'the underlying storage grows automatically as needed, up to 128 terabytes.'"
  },
  {
    id: 86,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants its RDS database to automatically fail over to a synchronously replicated standby instance in a different Availability Zone during an outage. Which feature should it configure?",
    options: ["Read Replica","Multi-AZ deployment","S3 Cross-Region Replication","DynamoDB Global Tables"],
    correct: 1,
    explanation: "Per the guide, a Multi-AZ deployment synchronously replicates the primary DB instance to a standby instance in another AZ 'to provide data redundancy, failover support...and minimize latency spikes,' with automatic failover if the primary instance fails."
  },
  {
    id: 87,
    domain: "Domain 3: Cloud Technology and Services",
    question: "An Amazon RDS database is experiencing heavy read traffic that is degrading performance on the primary instance. Which feature can help offload read queries?",
    options: ["Multi-AZ deployment","Read Replica","DB Security Group","RDS encryption"],
    correct: 1,
    explanation: "The guide explains that 'you can reduce the load on your source DB instance by routing read queries from your applications to the Read Replica,' which receives updates asynchronously copied from the source DB instance."
  },
  {
    id: 88,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company is building a high-traffic e-commerce application and needs a fully managed NoSQL database that provides fast, predictable performance with seamless scalability. Which AWS service should it use?",
    options: ["Amazon RDS","Amazon DynamoDB","Amazon Redshift","Amazon Aurora"],
    correct: 1,
    explanation: "The guide describes Amazon DynamoDB as a 'NoSQL database service that provides fast and predictable performance with seamless scalability,' with data automatically replicated across multiple Availability Zones for high availability."
  },
  {
    id: 89,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs the simplest possible in-memory caching model, wants to run large nodes with multiple cores, and needs to scale out and in as demand changes. Which ElastiCache engine best fits these needs?",
    options: ["Redis (cluster mode enabled)","Redis (cluster mode disabled)","Memcached","Amazon Aurora"],
    correct: 2,
    explanation: "Per the guide's Redis-vs-Memcached comparison, Memcached 'is designed for simplicity,' and its listed use case is when 'you need the simplest model possible' and 'the ability to scale out and in,' whereas Redis offers a richer feature set such as persistence and pub/sub."
  },
  {
    id: 90,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs to run analytic queries against petabytes of structured data using a fully managed data warehouse that uses columnar storage and massively parallel processing. Which AWS service should it use?",
    options: ["Amazon RDS","Amazon DynamoDB","Amazon Redshift","Amazon ElastiCache"],
    correct: 2,
    explanation: "The guide describes Amazon Redshift as 'a fully managed, petabyte-scale data warehouse service' that 'uses columnar storage, data compression, and zone maps' and 'a massively parallel processing data warehouse architecture to parallelize and distribute SQL operations.'"
  },
  {
    id: 91,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Compared to standard MySQL Read Replicas, what is a key advantage of Amazon Aurora Replicas according to AWS documentation?",
    options: ["They support up to 5 replicas with high performance impact on the primary","They support up to 15 replicas with low performance impact on the primary and automated failover","They require manual failover to be configured","They cause potentially minutes of data loss on failover"],
    correct: 1,
    explanation: "The guide's comparison table shows Aurora Replicas support 'Up to 15' replicas with 'Low' performance impact on the primary and 'Automated Failover' support, while MySQL Replicas support only up to 5, have 'High' performance impact, and lack automated failover."
  },
  {
    id: 92,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to create, publish, and secure RESTful APIs that expose backend Lambda functions to third-party developers, including setting usage plans and throttling rules. Which AWS service should it use?",
    options: ["Amazon CloudFront","Amazon API Gateway","AWS Elastic Load Balancing","Amazon Route 53"],
    correct: 1,
    explanation: "The guide states that Amazon API Gateway 'enables developers to create, publish, maintain, monitor, and secure APIs at any scale,' and it 'helps you define plans that meter and restrict third-party developer access to your APIs' along with request throttling rules."
  },
  {
    id: 93,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service speeds up the distribution of static and dynamic web content to users by caching content at a worldwide network of edge locations?",
    options: ["Amazon CloudFront","AWS Elastic Load Balancing","Amazon VPC","AWS Storage Gateway"],
    correct: 0,
    explanation: "Per the guide, Amazon CloudFront is a CDN service that 'delivers your content through a worldwide network of data centers called edge locations,' routing each user to the edge location that provides the lowest latency."
  },
  {
    id: 94,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs a load balancer that operates at Layer 7 of the OSI model and can route requests based on the URL path or HTTP host header. Which type of Elastic Load Balancer should it use?",
    options: ["Network Load Balancer","Gateway Load Balancer","Application Load Balancer","Classic Load Balancer"],
    correct: 2,
    explanation: "The guide states the Application Load Balancer 'functions at the application layer, the seventh layer of the Open Systems Interconnection (OSI) model,' and the feature summary shows only the Application Load Balancer supports path-based and host-based routing."
  },
  {
    id: 95,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company runs a latency-sensitive TCP application and needs a load balancer that can handle millions of requests per second while preserving a static IP address. Which type of load balancer is most appropriate?",
    options: ["Application Load Balancer","Network Load Balancer","Gateway Load Balancer","Classic Load Balancer"],
    correct: 1,
    explanation: "Per the guide, the Network Load Balancer 'functions at the fourth layer of the OSI model' and 'uses TCP and UDP connections,' and the feature summary table shows only the Network Load Balancer supports a Static IP and Elastic IP address."
  },
  {
    id: 96,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs to deploy, scale, and manage third-party virtual security appliances, such as firewalls and intrusion detection systems, transparently in front of its application servers. Which type of load balancer is designed for this?",
    options: ["Application Load Balancer","Network Load Balancer","Gateway Load Balancer","Classic Load Balancer"],
    correct: 2,
    explanation: "The guide describes the Gateway Load Balancer as enabling companies to 'deploy, scale, and manage virtual appliances, such as firewalls, intrusion detection and prevention systems, and deep packet inspection systems,' operating at the network layer (Layer 3) of the OSI model."
  },
  {
    id: 97,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is a highly available and scalable DNS web service used for domain registration, DNS routing, and health checking of application endpoints?",
    options: ["Amazon CloudFront","Amazon VPC","Amazon Route 53","Amazon API Gateway"],
    correct: 2,
    explanation: "The guide defines Amazon Route 53 as 'a highly available and scalable Domain Name System (DNS) web service used for domain registration, DNS routing, and health checking,' with key features including Domain Registration, DNS Failover, and Health Checks and Monitoring."
  },
  {
    id: 98,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to launch AWS resources into a logically isolated virtual network where it can define its own IP address range, subnets, route tables, and gateways. Which AWS service provides this capability?",
    options: ["Amazon Route 53","Amazon VPC","AWS Direct Connect","Amazon CloudFront"],
    correct: 1,
    explanation: "The guide states that 'a virtual private cloud (VPC) allows you to specify an IP address range for the VPC, add subnets, associate security groups, and configure route tables,' and describes Amazon VPC as 'the networking layer of Amazon EC2.'"
  },
  {
    id: 99,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to build a highly available application by running it across a cluster of data centers in the same geographic area, each with redundant power, networking, and connectivity, typically within 100 kilometers of each other. Which AWS Global Infrastructure component is this?",
    options: ["Region","Availability Zone","Edge Location","Local Zone"],
    correct: 1,
    explanation: "An Availability Zone (AZ) consists of one or more data centers, each with redundant power, networking, and connectivity, with the data centers of a single AZ typically within 100 kilometers or 60 miles of each other. This clustering is what enables high availability for applications deployed within it."
  },
  {
    id: 100,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs to run select AWS compute, storage, and database services closer to a country where there is no existing AWS Region, using a single data center that complements an existing Region. Which AWS Global Infrastructure offering should they use?",
    options: ["AWS Region","AWS Local Zone","Availability Zone","Edge Location"],
    correct: 1,
    explanation: "According to the guide, this localized single-data-center offering is designed to complement an existing AWS Region and make compute, storage, database, and other selected services available closer to a country or location where there is no existing AWS Region, and it has less redundancy than a full Region since it consists of only a single data center."
  },
  {
    id: 101,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to perform a highly automated lift-and-shift migration of its physical, virtual, and cloud servers into AWS with continuous data replication and minimal downtime. Which AWS service should they use?",
    options: ["AWS Application Migration Service","AWS Database Migration Service","AWS Migration Hub","AWS Snowball Edge"],
    correct: 0,
    explanation: "AWS Application Migration Service (AWS MGN) enables highly automated lift-and-shift migrations, supporting physical, virtual, or cloud servers with minimal disruption. Its features include continuous data replication, automated non-disruptive testing, and orchestrated launch and conversion of source servers."
  },
  {
    id: 102,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service continuously monitors migration tasks, manages errors, and automatically restarts processes to help migrate databases to AWS quickly and securely with minimal downtime?",
    options: ["AWS Database Migration Service","AWS Application Migration Service","AWS Migration Hub","AWS DataSync"],
    correct: 0,
    explanation: "AWS Database Migration Service (AWS DMS) helps migrate databases to AWS quickly and securely with minimal downtime. Its automated migration feature continuously monitors migration tasks, manages errors, and automatically restarts processes in case they fail, achieving successful migration with the least administrative effort."
  },
  {
    id: 103,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs to transfer an exabyte-scale amount of data, up to 100PB, from its data center to AWS using a truck-sized device that includes GPS tracking, 24/7 video surveillance, and an optional security escort during transit. Which AWS service should they use?",
    options: ["AWS Snowball Edge","AWS Snowmobile","AWS Database Migration Service","AWS Migration Hub"],
    correct: 1,
    explanation: "AWS Snowmobile is described in the guide as an exabyte-scale data transfer service that can move up to 100PB per Snowmobile, using multiple layers of security including GPS tracking, alarm monitoring, 24/7 video surveillance, and an optional escort security vehicle while in transit."
  },
  {
    id: 104,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company's application experiences high resource use during regular business hours and low use overnight. Which AWS service lets them configure automatic scaling quickly through a scaling plan that uses dynamic and predictive scaling?",
    options: ["AWS Auto Scaling","AWS CloudFormation","Amazon CloudWatch","AWS Trusted Advisor"],
    correct: 0,
    explanation: "The guide states that AWS Auto Scaling lets you configure automatic scaling for AWS resources quickly through a scaling plan that uses dynamic scaling and predictive scaling, and it is specifically called out as useful for cyclical traffic patterns such as high use during business hours and low use overnight."
  },
  {
    id: 105,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A development team wants to model their entire infrastructure as a JSON or YAML text file and provision the AWS resources it describes in an orderly, predictable manner as a single manageable unit. Which AWS service should they use?",
    options: ["AWS CloudFormation","AWS Config","AWS Elastic Beanstalk","AWS Systems Manager"],
    correct: 0,
    explanation: "AWS CloudFormation allows you to model your entire infrastructure in a text file called a template, written in JSON or YAML, and automates the provisioning and updating of that infrastructure. The guide notes that CloudFormation manages the resulting related resources as a single unit called a stack, defined by the stack's template."
  },
  {
    id: 106,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A security team needs to record and audit actions taken by users, roles, and AWS services across the AWS Management Console, CLI, and SDKs as a history of API activity. Which AWS service should they use?",
    options: ["AWS CloudTrail","Amazon CloudWatch","AWS Config","AWS Trusted Advisor"],
    correct: 0,
    explanation: "AWS CloudTrail records actions taken by a user, role, or AWS service as events, and the guide states that CloudTrail focuses on auditing API activity. It is enabled automatically when you create your AWS account, and you can view up to 90 days of recent activity in Event History."
  },
  {
    id: 107,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A data analyst wants to run standard SQL queries against data stored in Amazon S3 without setting up or managing any servers. Which AWS service should they use?",
    options: ["Amazon Athena","Amazon Redshift","AWS Glue","Amazon EMR"],
    correct: 0,
    explanation: "Amazon Athena is a serverless query service that lets users analyze data in Amazon S3 using standard SQL without managing infrastructure. It also provides cost-effective analytics with no upfront infrastructure costs, since you only pay for what you use."
  },
  {
    id: 108,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company needs a serverless service with a centralized data catalog that can discover, prepare, and integrate data from more than 70 different data sources to build ETL pipelines. Which AWS service should they use?",
    options: ["AWS Glue","Amazon EMR","Amazon Kinesis","Amazon Athena"],
    correct: 0,
    explanation: "AWS Glue is a serverless data integration service used for discovering, preparing, and integrating data from multiple sources, with the guide highlighting a centralized data catalog and the ability to discover and connect to more than 70 data sources for building ETL pipelines."
  },
  {
    id: 109,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A retail company needs a fully managed data warehouse for petabyte-scale datasets that automatically scales compute resources and, in its serverless mode, avoids costs when the warehouse is idle. Which AWS service should they use?",
    options: ["Amazon Redshift","Amazon Athena","Amazon QuickSight","Amazon OpenSearch Service"],
    correct: 0,
    explanation: "Amazon Redshift is a fully managed cloud data warehouse service designed for petabyte-scale datasets that automatically scales compute resources based on workload. The guide notes that with Redshift Serverless, resources are automatically provisioned and scaled, and you avoid costs when your data warehouse is idle."
  },
  {
    id: 110,
    domain: "Domain 3: Cloud Technology and Services",
    question: "Which AWS service is described as the full-fledged machine learning platform that lets you quickly build, train, and deploy machine learning models at scale, and includes a feature called SageMaker Autopilot that automatically explores different solutions to find the best model?",
    options: ["Amazon SageMaker","Amazon Rekognition","Amazon Comprehend","Amazon Kendra"],
    correct: 0,
    explanation: "The guide describes Amazon SageMaker as the full-fledged machine learning platform in AWS, allowing users to quickly develop, train, and implement machine learning models at scale, and specifically lists SageMaker Autopilot as a feature that automatically explores different solutions to find the best model based on a tabular dataset."
  },
  {
    id: 111,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A media company wants to automatically recognize labels, objects, and scenes inside images and videos to build a searchable media library, without needing any machine learning expertise. Which AWS service should they use?",
    options: ["Amazon Rekognition","Amazon Textract","Amazon Comprehend","Amazon Kendra"],
    correct: 0,
    explanation: "Amazon Rekognition simplifies the integration of advanced visual analysis using deep learning technology and requires no machine learning expertise. Its Image and Video Analysis use case specifically covers recognizing labels, objects, and scenes inside images and videos to make it easier to build searchable media libraries."
  },
  {
    id: 112,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A finance team needs to extract structured text, forms, and tables from scanned invoices and receipts, including processing them through a dedicated AnalyzeExpense API. Which AWS service should they use?",
    options: ["Amazon Textract","Amazon Comprehend","Amazon Rekognition","Amazon Kendra"],
    correct: 0,
    explanation: "Amazon Textract is used to extract text from scanned documents, and the guide lists Invoice and Receipt Processing as a key feature that processes invoices and receipts through the AnalyzeExpense API, distinguishing it from services like Comprehend and Rekognition."
  },
  {
    id: 113,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to decouple the components of a distributed system using a hosted message queue where consumers retrieve messages by polling rather than having them pushed. Which AWS service should they use?",
    options: ["Amazon SQS","Amazon SNS","AWS Step Functions","Amazon EventBridge"],
    correct: 0,
    explanation: "The guide describes Amazon SQS as a hosted queue that lets you integrate and decouple distributed software systems and components, and explicitly notes that SQS uses pull-based (polling) delivery rather than push-based delivery, unlike SNS which pushes notifications to subscribers."
  },
  {
    id: 114,
    domain: "Domain 3: Cloud Technology and Services",
    question: "A company wants to coordinate the components of a distributed application and its microservices using visual workflows defined as state machines, with built-in error handling and retries. Which AWS service should they use?",
    options: ["AWS Step Functions","Amazon SNS","Amazon SQS","AWS CodePipeline"],
    correct: 0,
    explanation: "AWS Step Functions provides serverless orchestration that enables you to coordinate the components of distributed applications and microservices using visual workflows, letting you define workflows as state machines. The guide also notes it automatically handles errors and exceptions with built-in try/catch and retry logic."
  },
  {
    id: 115,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "For how many months after creating an AWS account are you automatically enrolled in the AWS Free Tier?",
    options: ["6 months","12 months","18 months","24 months"],
    correct: 1,
    explanation: "The guide states that when you create an AWS account, you're automatically signed up for the free tier for 12 months, letting you use many AWS services for free as long as you stay within the allocated usage limits."
  },
  {
    id: 116,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "When does AWS close the billing period for an account each month?",
    options: ["At midnight on the first day of the following month","At midnight on the last day of each month","At noon on the 15th of each month","Only when the customer manually requests a bill"],
    correct: 1,
    explanation: "Per the guide, AWS Billing and Cost Management closes the billing period at midnight on the last day of each month and then calculates your bill."
  },
  {
    id: 117,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "In what format does AWS deliver your invoice after charging the credit card on file at the end of a billing cycle?",
    options: ["A downloadable PDF file","An editable Excel spreadsheet","A printed paper invoice mailed to you","An email listing only the total amount due"],
    correct: 0,
    explanation: "The guide notes that at the end of a billing cycle (or when a one-time fee is incurred), AWS charges the card on file and issues the invoice as a downloadable PDF file."
  },
  {
    id: 118,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS service should you use to set a billing alarm that notifies you as soon as your usage starts exceeding the AWS Free Tier limits?",
    options: ["AWS Cost Explorer","AWS Budgets","AWS Cost and Usage Report","AWS Trusted Advisor"],
    correct: 1,
    explanation: "The guide states that to help you stay within Free Tier limits, you can track your free tier usage and set a billing alarm with AWS Budgets."
  },
  {
    id: 119,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "AWS provides two types of cost allocation tags to help you track your AWS costs at a detailed level. What are they?",
    options: ["Reserved tags and On-Demand tags","AWS-generated tags and user-defined tags","Public tags and private tags","Billing tags and usage tags"],
    correct: 1,
    explanation: "The guide explains that cost allocation tags track AWS costs on a detailed level, and AWS provides two types: an AWS-generated tag and a user-defined tag."
  },
  {
    id: 120,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS Billing and Cost Management tool tracks and analyzes your AWS usage and is free to use for all accounts?",
    options: ["AWS Cost and Usage Report","AWS Cost Explorer","AWS Budgets","AWS Trusted Advisor"],
    correct: 1,
    explanation: "Per the guide, Cost Explorer tracks and analyzes your AWS usage, and it is free for all accounts."
  },
  {
    id: 121,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Cost Explorer's default report gives you a detailed cost and usage breakdown centered on how many of your top cost-accruing AWS services?",
    options: ["Top 3","Top 5","Top 10","All services equally"],
    correct: 1,
    explanation: "The guide states that Cost Explorer includes a default report that helps you visualize the costs and usage associated with your TOP FIVE cost-accruing AWS services."
  },
  {
    id: 122,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "In AWS Cost Explorer, how many months into the future can you forecast how much you're likely to spend?",
    options: ["1 month","3 months","6 months","12 months"],
    correct: 1,
    explanation: "The guide notes that in Cost Explorer you can view data for up to the last 12 months and forecast how much you're likely to spend for the next three months."
  },
  {
    id: 123,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Who must you be in order to enable AWS Cost Explorer for an AWS account?",
    options: ["Any IAM user with billing permissions","The owner of the account, signed in with root credentials","A Cloud Support Engineer","The designated Technical Account Manager"],
    correct: 1,
    explanation: "The guide states that Cost Explorer must be enabled before use, and you can only enable it if you're the owner of the AWS account and signed in with your root credentials."
  },
  {
    id: 124,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "The AWS Cost and Usage Report (CUR) is delivered as what type of file, and where is it stored?",
    options: ["A JSON file stored in DynamoDB","A .csv file (or collection of .csv files) stored in an S3 bucket","A PDF stored in Amazon WorkDocs","An XML file stored in CloudWatch Logs"],
    correct: 1,
    explanation: "According to the guide, the AWS Cost and Usage Report is a .csv file or a collection of .csv files that is stored in an S3 bucket, and anyone with permissions to that bucket can view it."
  },
  {
    id: 125,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "AWS Cost and Usage Reports can be automatically uploaded into which two AWS services for further analysis?",
    options: ["Amazon Redshift and/or Amazon QuickSight","Amazon EC2 and Amazon RDS","AWS Lambda and Amazon SNS","Amazon Athena and Amazon EMR only"],
    correct: 0,
    explanation: "The guide states that Cost and Usage Reports can be automatically uploaded into AWS Redshift and/or AWS QuickSight for analysis."
  },
  {
    id: 126,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS Support plan is the minimum required to get a designated Technical Account Manager (TAM)?",
    options: ["Business","Enterprise On-Ramp","Enterprise","Developer"],
    correct: 2,
    explanation: "Per the comparison table, Enterprise On-Ramp only provides a group of TAMs, while the Enterprise plan gives you a designated Technical Account Manager that you can count on rather than a pool of TAMs that may change over time."
  },
  {
    id: 127,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Under the Business support plan, what is the maximum response time for a 'production system down' case?",
    options: ["< 30 minutes","< 1 hour","< 4 hours","< 12 hours"],
    correct: 1,
    explanation: "The Technical Support Response Times table shows the Business plan guarantees a response of less than 1 hour for a production system down case."
  },
  {
    id: 128,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Which AWS Support plan offers the fastest guaranteed response time for a 'business-critical system down' case, at under 15 minutes?",
    options: ["Business","Enterprise On-Ramp","Enterprise","Developer"],
    correct: 2,
    explanation: "The guide states the Enterprise Support plan has the quickest response time for mission-critical workloads at 15 minutes, faster than the 30-minute target of the Enterprise On-Ramp plan."
  },
  {
    id: 129,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Under the Enterprise On-Ramp support plan, which team serves as your primary point of contact for AWS billing and support concerns?",
    options: ["Cloud Support Associates","AWS Managed Services team","AWS Concierge Support Team","The pool of Technical Account Managers"],
    correct: 2,
    explanation: "The guide explains that Enterprise On-Ramp provides priority access to the AWS Concierge Support Team, which is your primary contact for AWS Billing and AWS Support concerns."
  },
  {
    id: 130,
    domain: "Domain 4: Billing, Pricing and Support",
    question: "Under the Developer support plan, how can you reach a Cloud Support Associate, and how many primary contacts can raise cases?",
    options: ["Phone only, with unlimited contacts","Web only, with 1 primary contact","Phone and chat, with unlimited contacts","Email only, with 2 primary contacts"],
    correct: 1,
    explanation: "The guide notes that on the Developer plan you can raise unlimited support cases but only through 1 primary contact (the root user), and you can only reach Cloud Support Associates via the web, excluding any phone or chat interactions."
  }
];
