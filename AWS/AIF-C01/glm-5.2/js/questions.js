const QUESTIONS = [
  // ======================== DOMAIN 1: Fundamentals of AI and ML (20%) — 26 questions ========================
  {
    id: 1,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "Which type of machine learning involves training a model on labeled data where the target outcome is known?",
    options: ["Unsupervised learning", "Reinforcement learning", "Supervised learning", "Semi-supervised learning"],
    correct: 2,
    explanation: "Supervised learning uses labeled data (input-output pairs) to train a model to predict outcomes for new, unseen data."
  },
  {
    id: 2,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "A company wants to group customers into segments based on purchasing behavior without knowing the segments in advance. Which ML approach should they use?",
    options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Transfer learning"],
    correct: 1,
    explanation: "Unsupervised learning identifies hidden patterns and groupings (clusters) in data without predefined labels, making it ideal for customer segmentation."
  },
  {
    id: 3,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "Which AWS service provides a managed environment for the entire ML lifecycle including data labeling, model training, and deployment?",
    options: ["Amazon Comprehend", "Amazon SageMaker", "Amazon Rekognition", "Amazon Bedrock"],
    correct: 1,
    explanation: "Amazon SageMaker is a fully managed service that covers the complete ML workflow: data preparation, labeling (Ground Truth), training, tuning, and deployment."
  },
  {
    id: 4,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "What is the primary difference between artificial intelligence (AI) and machine learning (ML)?",
    options: ["AI is a subset of ML", "ML is a subset of AI that enables systems to learn from data", "They are the same thing", "AI requires labeled data but ML does not"],
    correct: 1,
    explanation: "ML is a subset of AI. AI is the broad concept of machines simulating human intelligence, while ML is the specific approach of learning patterns from data."
  },
  {
    id: 5,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "Which type of analytics answers the question 'What is likely to happen?' by using historical data to forecast future outcomes?",
    options: ["Descriptive analytics", "Diagnostic analytics", "Predictive analytics", "Prescriptive analytics"],
    correct: 2,
    explanation: "Predictive analytics uses historical data and statistical/ML models to forecast future events and trends."
  },
  {
    id: 6,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "A data scientist needs to build a model that predicts house prices based on features like square footage and location. What type of ML problem is this?",
    options: ["Classification", "Regression", "Clustering", "Reinforcement learning"],
    correct: 1,
    explanation: "Regression predicts a continuous numerical value (price), as opposed to classification which predicts discrete categories."
  },
  {
    id: 7,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "Which of the following is a common evaluation metric for classification problems?",
    options: ["Root Mean Square Error (RMSE)", "R-squared", "F1 score", "Mean Absolute Error (MAE)"],
    correct: 2,
    explanation: "F1 score is the harmonic mean of precision and recall, used to evaluate classification models. RMSE, R-squared, and MAE are regression metrics."
  },
  {
    id: 8,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "What is overfitting in machine learning?",
    options: ["The model performs poorly on both training and test data", "The model memorizes training data but generalizes poorly to new data", "The model is too simple to capture patterns", "The model has too little training data"],
    correct: 1,
    explanation: "Overfitting occurs when a model learns the training data too closely (including noise) and fails to generalize to unseen data."
  },
  {
    id: 9,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "Which AWS service is best suited for adding pre-trained capabilities like image and video analysis without building custom models?",
    options: ["Amazon SageMaker", "Amazon Rekognition", "AWS Lambda", "Amazon EMR"],
    correct: 1,
    explanation: "Amazon Rekognition provides pre-trained computer vision APIs for image and video analysis without requiring custom ML model development."
  },
  {
    id: 10,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "In reinforcement learning, what is the agent's objective?",
    options: ["Minimize the loss function", "Maximize cumulative reward over time", "Cluster similar data points", "Predict a continuous value"],
    correct: 1,
    explanation: "Reinforcement learning agents learn by interacting with an environment to maximize cumulative rewards through trial and error."
  },
  {
    id: 11,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "Which AWS feature helps with creating high-quality training datasets by using human workers to label data?",
    options: ["Amazon Augmented AI (A2I)", "SageMaker Ground Truth", "Amazon Mechanical Turk Direct", "SageMaker Model Monitor"],
    correct: 1,
    explanation: "SageMaker Ground Truth provides data labeling by combining human annotators with ML-assisted auto-labeling to build high-quality training datasets."
  },
  {
    id: 12,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "What does the term 'inference' refer to in the machine learning lifecycle?",
    options: ["The process of cleaning raw data", "The process of using a trained model to make predictions on new data", "The process of splitting data into train and test sets", "The process of selecting features"],
    correct: 1,
    explanation: "Inference is the deployment phase where a trained model is used to generate predictions on new, unseen data."
  },
  {
    id: 13,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "Which of the following best describes a neural network?",
    options: ["A tree-based model that splits data recursively", "A statistical method for linear relationships only", "A series of interconnected nodes organized in layers that process information", "A rule-based system with if-then conditions"],
    correct: 2,
    explanation: "A neural network is composed of interconnected nodes (neurons) arranged in layers (input, hidden, output) that process information inspired by the human brain."
  },
  {
    id: 14,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "A company wants to detect anomalies in its IoT sensor data streams in real time. Which AWS service is most appropriate?",
    options: ["Amazon Lookout for Equipment", "Amazon Polly", "Amazon Translate", "Amazon Kendra"],
    correct: 0,
    explanation: "Amazon Lookout for Equipment analyzes sensor data to detect abnormal equipment behavior, making it ideal for IoT anomaly detection."
  },
  {
    id: 15,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "What is the purpose of a confusion matrix?",
    options: ["To visualize the loss curve during training", "To summarize classification results showing true/false positives and negatives", "To reduce the dimensionality of features", "To normalize input data"],
    correct: 1,
    explanation: "A confusion matrix is a table that shows the counts of true positives, true negatives, false positives, and false negatives, providing a complete picture of classification performance."
  },
  {
    id: 16,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "Which machine learning task involves assigning input data to one of two categories?",
    options: ["Multi-class classification", "Binary classification", "Regression", "Clustering"],
    correct: 1,
    explanation: "Binary classification assigns data to one of exactly two classes (e.g., spam or not spam), while multi-class involves more than two classes."
  },
  {
    id: 17,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "Which of the following is NOT a stage in the standard ML lifecycle?",
    options: ["Data collection and preparation", "Model training", "Model deployment", "Database replication"],
    correct: 3,
    explanation: "Database replication is an infrastructure/data engineering concern, not a stage in the ML development lifecycle."
  },
  {
    id: 18,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "What is 'feature engineering' in the context of machine learning?",
    options: ["Deploying models to production", "The process of selecting, transforming, and creating input variables to improve model performance", "Evaluating model accuracy", "Labeling raw data"],
    correct: 1,
    explanation: "Feature engineering involves creating, selecting, and transforming input features from raw data to help ML models learn more effectively."
  },
  {
    id: 19,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "Which AWS service provides recommendations for optimizing ML models and selecting the best algorithm without writing code?",
    options: ["Amazon SageMaker Autopilot", "Amazon Lex", "Amazon Personalize", "AWS Glue"],
    correct: 0,
    explanation: "SageMaker Autopilot (now part of SageMaker Canvas) automatically explores data, selects algorithms, and trains candidate models to find the best one."
  },
  {
    id: 20,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "What does 'training data' refer to in machine learning?",
    options: ["Data used to test a deployed model", "Data used to teach a model patterns and relationships", "Data generated by the model during inference", "Data used for monitoring model drift"],
    correct: 1,
    explanation: "Training data is the dataset used to teach the model by exposing it to examples, allowing it to learn patterns and relationships."
  },
  {
    id: 21,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "Which AWS service would you use to build a recommendation system without needing deep ML expertise?",
    options: ["Amazon Personalize", "Amazon SageMaker Ground Truth", "Amazon Comprehend", "Amazon Macie"],
    correct: 0,
    explanation: "Amazon Personalize is a managed service that lets developers build real-time personalized recommendations using the same technology as Amazon.com."
  },
  {
    id: 22,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "What is the difference between correlation and causation?",
    options: ["They are identical concepts", "Correlation means variables are related; causation means one variable directly causes changes in another", "Causation is a type of correlation metric", "Corlation requires labeled data"],
    correct: 1,
    explanation: "Correlation indicates a statistical relationship between variables, while causation means one variable directly influences another. Correlation does not imply causation."
  },
  {
    id: 23,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "Which metric measures the proportion of actual positives that are correctly identified by a classifier?",
    options: ["Precision", "Recall", "Accuracy", "Specificity"],
    correct: 1,
    explanation: "Recall (also called sensitivity or true positive rate) measures the proportion of actual positives correctly identified: TP / (TP + FN)."
  },
  {
    id: 24,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "What does Amazon SageMaker Model Monitor do?",
    options: ["Labels training data automatically", "Monitors deployed models for data drift and quality issues in production", "Encrypts model artifacts at rest", "Manages EC2 instances for training"],
    correct: 1,
    explanation: "SageMaker Model Monitor continuously monitors the quality of ML models in production, detecting data drift, model quality degradation, and feature attribution drift."
  },
  {
    id: 25,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "A company wants to extract text and data from scanned documents like invoices and receipts. Which AWS service should they use?",
    options: ["Amazon Textract", "Amazon Rekognition", "Amazon Transcribe", "Amazon Polly"],
    correct: 0,
    explanation: "Amazon Textract uses ML to extract text, handwriting, layout elements, and structured data from scanned documents automatically."
  },
  {
    id: 26,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "What is the difference between batch inference and real-time inference?",
    options: ["Batch inference is faster than real-time", "Batch inference processes large datasets offline; real-time inference provides predictions on demand with low latency", "Real-time inference is always cheaper", "Batch inference requires more memory"],
    correct: 1,
    explanation: "Batch inference processes large volumes of data at scheduled intervals without real-time requirements, while real-time inference provides immediate, low-latency predictions for individual requests."
  },

  // ======================== DOMAIN 2: Fundamentals of Generative AI (24%) — 31 questions ========================
  {
    id: 27,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "Which AWS service provides access to foundation models (FMs) from leading AI companies through a unified API?",
    options: ["Amazon SageMaker", "Amazon Bedrock", "Amazon Lex", "AWS Lambda"],
    correct: 1,
    explanation: "Amazon Bedrock is a fully managed service that offers foundation models from AI21 Labs, Anthropic, Cohere, Meta, Mistral AI, Stability AI, and Amazon via a single API."
  },
  {
    id: 28,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is a foundation model (FM)?",
    options: ["A small model trained for a single specific task", "A large model pre-trained on vast amounts of data that can be adapted for many downstream tasks", "A model used only for image classification", "A rule-based system for decision making"],
    correct: 1,
    explanation: "A foundation model is a large ML model pre-trained on broad data that can be fine-tuned or prompted for a wide variety of downstream tasks."
  },
  {
    id: 29,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is a Large Language Model (LLM)?",
    options: ["A model that processes only numeric data", "A type of deep learning model trained on massive text data to understand and generate human language", "A model used exclusively for translation", "A traditional rule-based chatbot engine"],
    correct: 1,
    explanation: "An LLM is a deep neural network (typically a transformer) trained on massive text corpora to understand, generate, and manipulate human language."
  },
  {
    id: 30,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "Which architecture is the foundation of most modern Large Language Models?",
    options: ["Recurrent Neural Networks (RNN)", "Convolutional Neural Networks (CNN)", "Transformer architecture", "Support Vector Machines"],
    correct: 2,
    explanation: "The Transformer architecture, introduced in 2017, uses self-attention mechanisms and is the basis for modern LLMs like GPT, BERT, Claude, and Llama."
  },
  {
    id: 31,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is a 'token' in the context of Large Language Models?",
    options: ["A security credential for API access", "A chunk of text (word or subword) that the model processes as a unit", "A type of model parameter", "A unit of compute cost"],
    correct: 1,
    explanation: "A token is a piece of text — typically a word or subword — that the model tokenizes, processes, and generates. Tokenization determines how text is split into input units."
  },
  {
    id: 32,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What does 'prompt engineering' involve?",
    options: ["Writing code to train new foundation models", "Crafting effective input prompts to guide an FM to produce desired outputs", "Encrypting prompts for security", "Fine-tuning model weights"],
    correct: 1,
    explanation: "Prompt engineering is the practice of designing and refining input prompts to elicit the best possible responses from generative AI models."
  },
  {
    id: 33,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is the key advantage of Retrieval-Augmented Generation (RAG)?",
    options: ["It eliminates the need for any model", "It grounds model responses in external knowledge sources, reducing hallucinations", "It reduces the model size", "It replaces the need for training data"],
    correct: 1,
    explanation: "RAG augments a generative model with relevant information retrieved from a knowledge base, grounding responses in factual data and reducing hallucinations."
  },
  {
    id: 34,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "Which AWS service is commonly used as a vector store for RAG applications?",
    options: ["Amazon Neptune", "Amazon OpenSearch Service (with k-NN)", "Amazon DynamoDB Streams", "AWS CloudTrail"],
    correct: 1,
    explanation: "Amazon OpenSearch Service supports k-nearest neighbor (k-NN) vector search, making it a popular choice for storing and retrieving embeddings in RAG pipelines. Amazon Kendra is also commonly used for intelligent search."
  },
  {
    id: 35,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What are 'embeddings' in generative AI?",
    options: ["Security tokens embedded in model weights", "Numerical vector representations of data (like text) that capture semantic meaning", "Hardware accelerators for model training", "Encrypted prompts"],
    correct: 1,
    explanation: "Embeddings are dense numerical vectors that represent the semantic meaning of data, enabling similarity comparisons between texts, images, or other content."
  },
  {
    id: 36,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is 'few-shot prompting'?",
    options: ["Providing zero examples in the prompt", "Providing a few examples within the prompt to guide the model's output format and style", "Training a model with a few data points", "A type of reinforcement learning"],
    correct: 1,
    explanation: "Few-shot prompting includes a small number of example input-output pairs in the prompt to demonstrate the desired pattern, helping the model understand the task without fine-tuning."
  },
  {
    id: 37,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is the difference between fine-tuning and prompt engineering?",
    options: ["They are the same thing", "Fine-tuning adjusts model weights on new data; prompt engineering changes inputs without modifying weights", "Fine-tuning is always faster", "Prompt engineering requires GPU resources"],
    correct: 1,
    explanation: "Fine-tuning updates the model's internal weights using a labeled dataset, while prompt engineering modifies only the input text to influence outputs without changing model parameters."
  },
  {
    id: 38,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is 'temperature' in the context of LLM generation?",
    options: ["The hardware temperature of GPUs", "A parameter that controls the randomness and creativity of model outputs", "The size of the training dataset", "The number of tokens generated"],
    correct: 1,
    explanation: "Temperature controls randomness: lower values produce more deterministic, focused outputs; higher values produce more diverse, creative outputs."
  },
  {
    id: 39,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is a 'hallucination' in generative AI?",
    options: ["A security vulnerability in the model", "When a model generates plausible-sounding but factually incorrect or fabricated information", "A type of prompt injection attack", "A GPU memory overflow error"],
    correct: 1,
    explanation: "Hallucination occurs when a generative model produces confident but factually wrong or fabricated content. RAG, grounding, and guardrails help mitigate it."
  },
  {
    id: 40,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "Which of the following describes 'instruction fine-tuning'?",
    options: ["Training a model to follow natural language instructions by using instruction-response pairs", "Giving verbal instructions to a model via voice", "Training a model only on images", "Writing documentation for a model"],
    correct: 0,
    explanation: "Instruction fine-tuning trains a model on input-output pairs where inputs are natural language instructions and outputs are desired responses, teaching the model to follow human instructions."
  },
  {
    id: 41,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "Which type of generative AI model is best suited for creating images from text descriptions?",
    options: ["LLM", "Diffusion model", "Gradient Boosted Tree", "K-Means clustering model"],
    correct: 1,
    explanation: "Diffusion models (like Stable Diffusion) are designed to generate high-quality images from text prompts through an iterative denoising process."
  },
  {
    id: 42,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is 'RLHF' in the context of training foundation models?",
    options: ["Reinforcement Learning from Human Feedback", "Random Layer Hidden Functions", "Recurrent Language Hashing Framework", "Remote Learning Hardware Framework"],
    correct: 0,
    explanation: "RLHF (Reinforcement Learning from Human Feedback) aligns model outputs with human preferences by using human ratings to train a reward model that guides reinforcement learning."
  },
  {
    id: 43,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "Which Amazon Bedrock feature allows developers to customize a foundation model using their own data without managing infrastructure?",
    options: ["Bedrock Guardrails", "Bedrock Model Customization (Fine-tuning)", "Bedrock Agents", "Bedrock Knowledge Bases only"],
    correct: 1,
    explanation: "Amazon Bedrock Model Customization (fine-tuning) lets developers fine-tune foundation models with their own data via a managed interface without provisioning infrastructure."
  },
  {
    id: 44,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is the purpose of Amazon Bedrock Knowledge Bases?",
    options: ["To train new foundation models from scratch", "To connect FMs to private data sources for RAG-based retrieval without writing custom code", "To encrypt model endpoints", "To monitor GPU utilization"],
    correct: 1,
    explanation: "Bedrock Knowledge Bases provides a managed RAG solution that ingests, chunks, and embeds private data, then retrieves relevant content to ground FM responses."
  },
  {
    id: 45,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What does the 'Top-P' (nucleus sampling) parameter control in LLM generation?",
    options: ["The maximum number of tokens", "The cumulative probability threshold for token selection, controlling output diversity", "The number of training epochs", "The learning rate"],
    correct: 1,
    explanation: "Top-P (nucleus sampling) selects tokens from the smallest set whose cumulative probability exceeds P, balancing diversity and coherence in generation."
  },
  {
    id: 46,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "Which of the following best describes 'zero-shot prompting'?",
    options: ["Providing many examples in the prompt", "Asking the model to perform a task without any examples in the prompt", "Training the model with zero data", "Running the model on zero input"],
    correct: 1,
    explanation: "Zero-shot prompting asks the model to perform a task without providing any examples, relying entirely on the model's pre-trained knowledge."
  },
  {
    id: 47,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is 'chain-of-thought prompting'?",
    options: ["Linking multiple models together", "Prompting the model to show its reasoning steps before arriving at an answer", "Chaining API calls sequentially", "A type of neural network architecture"],
    correct: 1,
    explanation: "Chain-of-thought prompting encourages the model to break down problems step by step, showing intermediate reasoning, which often improves accuracy on complex tasks."
  },
  {
    id: 48,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What does a 'context window' refer to in LLMs?",
    options: ["The GPU memory limit", "The maximum number of tokens (input + output) the model can process in a single request", "The number of layers in the model", "The size of the training corpus"],
    correct: 1,
    explanation: "The context window is the maximum number of tokens a model can accept as input and generate as output in a single interaction, limiting how much text it can consider at once."
  },
  {
    id: 49,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "Which AWS service provides pre-trained foundation models for text-to-image generation?",
    options: ["Amazon Bedrock (with Stability AI models)", "Amazon Comprehend", "Amazon Lex", "Amazon Polly"],
    correct: 0,
    explanation: "Amazon Bedrock provides access to Stability AI's image generation models (like Stable Diffusion) through its unified API for text-to-image tasks."
  },
  {
    id: 50,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is 'parameter-efficient fine-tuning' (PEFT) and which popular technique falls under it?",
    options: ["Training all model parameters; LoRA", "Fine-tuning a small number of parameters; LoRA (Low-Rank Adaptation)", "Removing parameters; Pruning", "Quantizing parameters; INT4"],
    correct: 1,
    explanation: "PEFT methods like LoRA fine-tune only a small set of additional parameters, reducing compute and storage costs while achieving performance close to full fine-tuning."
  },
  {
    id: 51,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "Which of the following is a key difference between traditional ML models and foundation models?",
    options: ["Foundation models can only do classification", "Foundation models are pre-trained on broad data and can perform multiple tasks with minimal adaptation", "Traditional ML models require less data", "Foundation models cannot be deployed on AWS"],
    correct: 1,
    explanation: "Foundation models are pre-trained on massive, diverse datasets and can perform many different tasks with minimal task-specific adaptation, unlike traditional ML models which are typically trained for a single task."
  },
  {
    id: 52,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is the purpose of 'chunking' in a RAG pipeline?",
    options: ["To compress the model weights", "To break large documents into smaller pieces for embedding and retrieval", "To split training data into batches", "To divide GPU resources among users"],
    correct: 1,
    explanation: "Chunking splits large documents into manageable pieces that can be embedded and retrieved individually, improving the relevance and granularity of RAG results."
  },
  {
    id: 53,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is a 'multimodal' foundation model?",
    options: ["A model that can only process text", "A model that can process and generate multiple types of data (e.g., text, images, audio)", "A model with multiple GPUs", "A model trained by multiple companies"],
    correct: 1,
    explanation: "A multimodal model can accept and/or produce multiple data modalities — such as text, images, and audio — within a single model."
  },
  {
    id: 54,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is 'quantization' in the context of deploying LLMs?",
    options: ["Measuring model quality metrics", "Reducing the precision of model weights (e.g., FP16 to INT8) to decrease memory and speed up inference", "Counting the number of parameters", "Splitting the model across servers"],
    correct: 1,
    explanation: "Quantization reduces the numerical precision of model weights, lowering memory footprint and accelerating inference with minimal accuracy loss."
  },
  {
    id: 55,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "Which of the following is a benefit of using Amazon Bedrock over self-hosting open-source foundation models?",
    options: ["Bedrock gives full access to model source code for modification", "Bedrock provides managed, serverless access without infrastructure management", "Bedrock is always free", "Bedrock trains models from scratch automatically"],
    correct: 1,
    explanation: "Amazon Bedrock provides serverless, managed access to multiple foundation models, eliminating infrastructure management, scaling, and security overhead."
  },
  {
    id: 56,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is 'semantic search' and how does it differ from keyword search?",
    options: ["Semantic search only finds exact word matches", "Semantic search uses embeddings to find results based on meaning and intent, not just keyword matches", "Semantic search is slower than keyword search", "There is no difference"],
    correct: 1,
    explanation: "Semantic search leverages embeddings to match queries to content by meaning and context, returning relevant results even when exact keywords are absent."
  },
  {
    id: 57,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "Which embedding model category does Amazon Titan Text Embeddings belong to?",
    options: ["Image embeddings", "Text embeddings", "Audio embeddings", "Video embeddings"],
    correct: 1,
    explanation: "Amazon Titan Text Embeddings generates numerical vector representations of text, enabling semantic search, recommendation, and RAG applications."
  },

  // ======================== DOMAIN 3: Applications of Foundation Models (28%) — 37 questions ========================
  {
    id: 58,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A company wants to build a conversational AI assistant that can perform multi-step tasks by calling external APIs. Which Amazon Bedrock feature should they use?",
    options: ["Bedrock Knowledge Bases", "Bedrock Agents", "Bedrock Guardrails", "Bedrock Model Customization"],
    correct: 1,
    explanation: "Bedrock Agents orchestrate multi-step tasks by automatically breaking down user requests, calling the appropriate APIs/action groups, and returning responses."
  },
  {
    id: 59,
    domain: "Domain 3: Applications of Foundation Models",
    question: "When choosing a foundation model for a task, which factor is most important for a latency-sensitive chatbot application?",
    options: ["Model parameter count only", "Inference speed and response latency", "Training data size", "Number of training epochs"],
    correct: 1,
    explanation: "For latency-sensitive applications like chatbots, inference speed and response latency are critical. Smaller, faster models or optimized deployments may be preferred."
  },
  {
    id: 60,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A developer wants to ensure an FM produces responses in a consistent JSON format. Which technique should they use?",
    options: ["Increase the temperature", "Use prompt engineering with explicit format instructions and output parsing", "Decrease the context window", "Use only zero-shot prompting"],
    correct: 1,
    explanation: "Explicit format instructions in the prompt (e.g., 'Respond only in valid JSON with these fields') combined with output parsing/validators ensures structured, consistent output."
  },
  {
    id: 61,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is the purpose of 'prompt templates' in generative AI applications?",
    options: ["To encrypt prompts", "To create reusable prompt structures with variable placeholders for consistency and maintainability", "To train foundation models", "To compress model outputs"],
    correct: 1,
    explanation: "Prompt templates provide reusable structures with placeholders for variables, ensuring consistency, reducing errors, and making prompt management easier across an application."
  },
  {
    id: 62,
    domain: "Domain 3: Applications of Foundation Models",
    question: "Which of the following is a best practice for building an effective RAG pipeline?",
    options: ["Use the entire document as a single embedding", "Use appropriate chunk size and overlap to preserve context", "Skip embedding and send raw text to the model", "Store all data in a relational database"],
    correct: 1,
    explanation: "Choosing appropriate chunk size and overlap preserves semantic context, improves retrieval relevance, and ensures the model receives coherent information."
  },
  {
    id: 63,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A company needs to summarize long customer support call transcripts. Which approach is most cost-effective using foundation models?",
    options: ["Fine-tune a model from scratch", "Use an existing FM via Bedrock with a summarization prompt", "Build a custom RNN", "Manually summarize each transcript"],
    correct: 1,
    explanation: "Using an existing FM with a well-crafted summarization prompt is the most cost-effective approach, avoiding the expense of custom model training."
  },
  {
    id: 64,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is the role of an 'orchestration' layer in a RAG application?",
    options: ["It trains the embedding model", "It coordinates the flow: query → embedding → retrieval → prompt construction → FM generation", "It encrypts the vector database", "It manages IAM permissions"],
    correct: 1,
    explanation: "The orchestration layer coordinates the RAG pipeline: embedding the user query, retrieving relevant chunks, augmenting the prompt, and invoking the FM to generate a grounded response."
  },
  {
    id: 65,
    domain: "Domain 3: Applications of Foundation Models",
    question: "Which Amazon Bedrock feature helps protect against harmful content and undesirable model outputs?",
    options: ["Bedrock Agents", "Bedrock Guardrails", "Bedrock Knowledge Bases", "Bedrock Provisioned Throughput"],
    correct: 1,
    explanation: "Bedrock Guardrails allows you to set content filters, deny topics, filter sensitive information (PII), and block harmful content across all models on Bedrock."
  },
  {
    id: 66,
    domain: "Domain 3: Applications of Foundation Models",
    question: "When would you choose fine-tuning over prompt engineering for an FM?",
    options: ["When the task changes frequently", "When you need consistent, specialized behavior on a specific task that prompting cannot achieve, and you have quality labeled data", "When you have no labeled data", "When cost is the primary concern"],
    correct: 1,
    explanation: "Fine-tuning is appropriate when prompt engineering is insufficient for achieving the desired performance on a specific task, and you have quality labeled training data. It requires more effort and cost."
  },
  {
    id: 67,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is 'retrieval relevance' in a RAG system, and how is it typically improved?",
    options: ["It measures GPU utilization; improved by adding more GPUs", "It measures how well retrieved chunks answer the query; improved by better chunking, embeddings, and hybrid search", "It measures model training time; improved with more epochs", "It measures cost; improved by reducing tokens"],
    correct: 1,
    explanation: "Retrieval relevance measures how accurately retrieved content matches the user's information need. It is improved through better chunking, higher-quality embeddings, and hybrid (keyword + semantic) search."
  },
  {
    id: 68,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A company wants to translate user reviews into multiple languages in real time. Which AWS service should they use?",
    options: ["Amazon Comprehend", "Amazon Translate", "Amazon Lex", "Amazon Polly"],
    correct: 1,
    explanation: "Amazon Translate is a neural machine translation service that provides real-time, high-quality translation across many languages."
  },
  {
    id: 69,
    domain: "Domain 3: Applications of Foundation Models",
    question: "Which service provides pre-trained text analysis for sentiment analysis, entity recognition, and key phrase extraction?",
    options: ["Amazon Comprehend", "Amazon Rekognition", "Amazon Transcribe", "Amazon Textract"],
    correct: 0,
    explanation: "Amazon Comprehend is a natural language processing (NLP) service that provides sentiment analysis, entity recognition, key phrase extraction, and topic modeling."
  },
  {
    id: 70,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is the benefit of using Amazon Bedrock Agents over directly calling foundation model APIs?",
    options: ["Agents are always cheaper", "Agents can break down complex tasks, call external APIs, chain steps, and maintain context automatically", "Agents remove the need for any prompts", "Agents guarantee zero hallucinations"],
    correct: 1,
    explanation: "Bedrock Agents autonomously decompose user requests into steps, call external tools/APIs via action groups, manage conversation context, and synthesize final responses."
  },
  {
    id: 71,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A company wants to generate code suggestions for their developers. Which AWS offering is designed for this use case?",
    options: ["Amazon CodeGuru", "Amazon Q Developer", "AWS CodeDeploy", "Amazon CloudWatch"],
    correct: 1,
    explanation: "Amazon Q Developer (formerly CodeWhisperer) is an AI-powered coding companion that provides real-time code suggestions, security scans, and code explanations."
  },
  {
    id: 72,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is 'streaming' in the context of LLM API responses?",
    options: ["Streaming training data to the model", "Returning the model's output incrementally in real-time chunks as it is generated, rather than waiting for the full response", "Streaming video output from the model", "Streaming model weights to the client"],
    correct: 1,
    explanation: "Streaming returns generated tokens incrementally as they are produced, improving perceived latency and user experience for chat and interactive applications."
  },
  {
    id: 73,
    domain: "Domain 3: Applications of Foundation Models",
    question: "Which evaluation approach is best for assessing an FM's output quality on a summarization task?",
    options: ["RMSE", "Human evaluation using rubrics like relevance, coherence, and faithfulness", "Only checking code execution time", "Counting the number of tokens"],
    correct: 1,
    explanation: "Human evaluation using rubrics (relevance, coherence, faithfulness, completeness) remains the gold standard for assessing generative output quality for tasks like summarization."
  },
  {
    id: 74,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is 'ROUGE' score used for?",
    options: ["Evaluating image quality", "Evaluating text summarization by comparing overlap of n-grams between generated and reference summaries", "Measuring model latency", "Counting GPU usage"],
    correct: 1,
    explanation: "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) measures the overlap of n-grams between generated and reference summaries, commonly used for summarization evaluation."
  },
  {
    id: 75,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is 'BLEU' score commonly used to evaluate?",
    options: ["Image generation quality", "Machine translation quality by comparing generated text to reference translations", "Model training speed", "Data privacy compliance"],
    correct: 1,
    explanation: "BLEU (Bilingual Evaluation Understudy) compares generated translations against reference translations using n-gram precision, widely used for translation quality evaluation."
  },
  {
    id: 76,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A developer needs to convert spoken audio into text for downstream processing. Which AWS service should they use?",
    options: ["Amazon Polly", "Amazon Transcribe", "Amazon Lex", "Amazon Comprehend"],
    correct: 1,
    explanation: "Amazon Transcribe converts speech to text using automatic speech recognition (ASR), supporting real-time streaming and batch transcription."
  },
  {
    id: 77,
    domain: "Domain 3: Applications of Foundation Models",
    question: "Which AWS service converts text into lifelike speech?",
    options: ["Amazon Transcribe", "Amazon Polly", "Amazon Comprehend", "Amazon Rekognition"],
    correct: 1,
    explanation: "Amazon Polly is a text-to-speech service that uses deep learning to synthesize natural-sounding human speech in multiple languages and voices."
  },
  {
    id: 78,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A company wants to build a search experience for their internal documents that understands natural language queries. Which AWS service is most appropriate?",
    options: ["Amazon RDS", "Amazon Kendra", "Amazon S3 Select", "AWS CloudSearch"],
    correct: 1,
    explanation: "Amazon Kendra is an intelligent enterprise search service powered by ML that understands natural language queries and returns precise answers from enterprise content."
  },
  {
    id: 79,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is the primary purpose of Amazon Bedrock Provisioned Throughput?",
    options: ["To encrypt model endpoints", "To reserve dedicated model capacity for predictable high-volume inference workloads", "To train models faster", "To monitor model performance"],
    correct: 1,
    explanation: "Provisioned Throughput reserves dedicated model processing capacity, ensuring consistent performance and availability for high-volume or latency-sensitive production workloads."
  },
  {
    id: 80,
    domain: "Domain 3: Applications of Foundation Models",
    question: "Which of the following is a valid approach to reduce costs when using foundation models?",
    options: ["Always use the largest available model", "Select the smallest model that meets accuracy requirements and use prompt caching", "Disable all logging", "Use only real-time inference"],
    correct: 1,
    explanation: "Selecting the smallest model that meets your accuracy/performance needs reduces token costs. Prompt caching, batching, and caching responses further reduce expenses."
  },
  {
    id: 81,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is 'grounding' in the context of generative AI?",
    options: ["Connecting a model to an electrical ground", "Providing the model with factual context or external data sources to base its responses on", "Setting the temperature to zero", "Stopping model training early"],
    correct: 1,
    explanation: "Grounding anchors model responses in verified external data sources (via RAG or search), improving factual accuracy and reducing hallucinations."
  },
  {
    id: 82,
    domain: "Domain 3: Applications of Foundation Models",
    question: "Which AWS service provides an interactive chat interface and generative AI assistant for AWS services and your own enterprise data?",
    options: ["Amazon Q", "Amazon Chime", "AWS Chatbot", "Amazon Connect"],
    correct: 0,
    explanation: "Amazon Q is a generative AI-powered assistant that helps with AWS questions, coding, business intelligence, and enterprise data — available in multiple forms (Q Developer, Q Business)."
  },
  {
    id: 83,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is a 'system prompt' and how is it used?",
    options: ["A prompt used by the operating system", "An initial instruction that sets the model's role, behavior, and constraints for all subsequent interactions", "A prompt that trains the model", "A prompt used only for debugging"],
    correct: 1,
    explanation: "A system prompt defines the model's persona, role, rules, and constraints, guiding its behavior across all user interactions within a session."
  },
  {
    id: 84,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A company wants to detect and redact personally identifiable information (PII) in model responses. Which Bedrock Guardrails feature supports this?",
    options: ["Content filters only", "PII filters with redaction", "Topic denial only", "Word filters only"],
    correct: 1,
    explanation: "Bedrock Guardrails PII filters automatically detect and redact sensitive information (like SSNs, names, emails) in both inputs and outputs."
  },
  {
    id: 85,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is the benefit of using 'hybrid search' in a RAG pipeline?",
    options: ["It uses two different LLMs", "It combines semantic (vector) and keyword (lexical) search to improve retrieval accuracy", "It splits data across two databases", "It uses two different embedding models"],
    correct: 1,
    explanation: "Hybrid search combines semantic vector search (meaning-based) with keyword/BM25 search (exact term matching), improving retrieval quality by leveraging both approaches."
  },
  {
    id: 86,
    domain: "Domain 3: Applications of Foundation Models",
    question: "Which of the following best describes 'model distillation'?",
    options: ["Removing a model from production", "Training a smaller, faster 'student' model to mimic a larger 'teacher' model's behavior", "Encrypting model weights", "Splitting a model across multiple GPUs"],
    correct: 1,
    explanation: "Model distillation trains a compact student model to replicate the outputs of a larger teacher model, reducing inference cost and latency while retaining much of the performance."
  },
  {
    id: 87,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A company needs to classify support tickets by urgency (low, medium, high) using a foundation model. Which approach is most efficient?",
    options: ["Fine-tune a new model from scratch", "Use an FM with a classification prompt and few-shot examples", "Build a custom CNN", "Use Amazon Rekognition"],
    correct: 1,
    explanation: "Using an existing FM with a well-designed classification prompt and few-shot examples is the most efficient approach, requiring no model training."
  },
  {
    id: 88,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is 'prompt injection' and how can it be mitigated?",
    options: ["A hardware injection attack; mitigated by replacing GPUs", "Malicious input designed to override system instructions; mitigated by input validation, guardrails, and separating instructions from user data", "A way to speed up prompts; mitigated by adding more tokens", "A training technique; mitigated by more data"],
    correct: 1,
    explanation: "Prompt injection is an attack where malicious input overrides system instructions. Mitigations include input sanitization, guardrails, separating system/user context, and output validation."
  },
  {
    id: 89,
    domain: "Domain 3: Applications of Foundation Models",
    question: "Which technique helps an FM maintain context across a multi-turn conversation?",
    options: ["Re-training the model each turn", "Passing conversation history (previous messages) as context in each request", "Increasing GPU count", "Lowering the temperature to absolute zero"],
    correct: 1,
    explanation: "Passing the conversation history (previous user and assistant messages) as context in each request allows the FM to maintain conversational continuity and context."
  },
  {
    id: 90,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is the purpose of 'citations' or 'source attribution' in a RAG application?",
    options: ["To reduce token count", "To provide references to the source documents used, enabling verification and trust", "To speed up inference", "To compress responses"],
    correct: 1,
    explanation: "Citations reference the source documents that informed a response, enabling users to verify accuracy, building trust, and supporting transparency."
  },
  {
    id: 91,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A company wants to fine-tune a Bedrock foundation model. What type of data do they need to prepare?",
    options: ["Unstructured raw text only", "A labeled dataset of input-output pairs specific to their task, formatted per Bedrock requirements", "Image files only", "SQL queries"],
    correct: 1,
    explanation: "Fine-tuning requires a curated dataset of input-output pairs (e.g., prompt-completion pairs) formatted according to Bedrock's requirements, specific to the target task."
  },
  {
    id: 92,
    domain: "Domain 3: Applications of Foundation Models",
    question: "Which of the following describes 'continued pre-training' (domain adaptation)?",
    options: ["Stopping training early", "Further training a pre-trained FM on domain-specific unlabeled data to adapt it to a specialized field", "Only using the model for inference", "Reducing model parameters"],
    correct: 1,
    explanation: "Continued pre-training (domain adaptation) continues training a pre-trained FM on additional domain-specific data, helping it understand specialized vocabulary and concepts."
  },
  {
    id: 93,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is 'output parsing' and why is it important in FM applications?",
    options: ["Parsing error logs from the model", "Extracting and validating structured data (like JSON) from the model's text output for downstream use", "Compressing the model output", "Counting output tokens"],
    correct: 1,
    explanation: "Output parsing extracts structured data from FM text responses and validates it against expected schemas, ensuring reliable integration with downstream systems and APIs."
  },
  {
    id: 94,
    domain: "Domain 3: Applications of Foundation Models",
    question: "Which AWS service provides enterprise-grade generative AI assistance for analyzing company data, writing, and task automation?",
    options: ["Amazon Q Business", "Amazon Macie", "AWS Shield", "Amazon Detective"],
    correct: 0,
    explanation: "Amazon Q Business connects to enterprise data sources to provide a generative AI assistant that can answer questions, summarize content, and perform tasks based on company data."
  },

  // ======================== DOMAIN 4: Guidelines for Responsible AI (14%) — 18 questions ========================
  {
    id: 95,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "What is 'bias' in the context of AI and machine learning?",
    options: ["A statistical sampling technique", "Systematic and unfair discrimination in model outputs against certain groups or individuals", "A type of neural network layer", "A data compression method"],
    correct: 1,
    explanation: "AI bias occurs when a model systematically produces unfair or prejudiced outcomes that disadvantage particular groups, often due to biased training data or flawed design."
  },
  {
    id: 96,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "Which of the following is an effective strategy to detect and mitigate bias in an ML model?",
    options: ["Ignoring model evaluation", "Using diverse, representative training data and evaluating performance across demographic groups", "Increasing model complexity", "Removing all evaluation metrics"],
    correct: 1,
    explanation: "Using diverse, representative data and evaluating model performance across different demographic subgroups helps identify and address bias in AI systems."
  },
  {
    id: 97,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "What is 'explainability' in AI and why is it important?",
    options: ["The ability to export model weights", "The ability to understand and interpret how a model arrives at its decisions, crucial for trust and accountability", "The speed of model inference", "The model's accuracy percentage"],
    correct: 1,
    explanation: "Explainability means users and stakeholders can understand the reasoning behind model decisions, which is essential for trust, regulatory compliance, debugging, and accountability."
  },
  {
    id: 98,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "Which AWS service helps identify and reduce bias in ML models and provides explainability?",
    options: ["Amazon SageMaker Clarify", "Amazon Macie", "AWS Artifact", "Amazon Inspector"],
    correct: 0,
    explanation: "Amazon SageMaker Clarify detects potential bias in datasets and models, provides explainability through SHAP values, and helps monitor bias in production."
  },
  {
    id: 99,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "What is 'transparency' in responsible AI?",
    options: ["Making model source code public", "Clearly communicating to users when they are interacting with AI and how their data is used", "Showing all model weights to users", "Publishing training datasets publicly"],
    correct: 1,
    explanation: "Transparency involves openly communicating about AI system capabilities, limitations, when AI is being used, and how user data is collected, used, and protected."
  },
  {
    id: 100,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "What is 'fairness' in the context of responsible AI?",
    options: ["All models must achieve 100% accuracy", "Ensuring AI systems treat all individuals and groups equitably without unjustified discrimination", "Making all AI services free", "Ensuring equal GPU access"],
    correct: 1,
    explanation: "Fairness means AI systems produce equitable outcomes across different groups and individuals, avoiding unjustified discrimination or disparate impact."
  },
  {
    id: 101,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "Which of the following is a key principle of responsible AI?",
    options: ["Maximizing profit regardless of impact", "Veracity — ensuring AI outputs are accurate, truthful, and reliable", "Deploying models without testing", "Using the largest model always"],
    correct: 1,
    explanation: "Veracity (truthfulness/accuracy) is a core responsible AI principle, ensuring AI systems produce reliable, accurate, and truthful outputs."
  },
  {
    id: 102,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "What is the 'human-in-the-loop' (HITL) approach in AI systems?",
    options: ["Removing humans from the process entirely", "Involving human review, oversight, and decision-making in AI workflows for critical or low-confidence cases", "Having humans replace the AI model", "Using humans only for data entry"],
    correct: 1,
    explanation: "HITL integrates human judgment into AI workflows, especially for critical decisions, low-confidence predictions, or edge cases, ensuring appropriate human oversight."
  },
  {
    id: 103,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "Which AWS service enables human review of ML predictions for low-confidence cases?",
    options: ["Amazon Augmented AI (A2I)", "Amazon Rekognition", "AWS Lambda", "Amazon ECS"],
    correct: 0,
    explanation: "Amazon Augmented AI (A2I) provides built-in workflows for human review of ML predictions, sending low-confidence cases to human reviewers for validation."
  },
  {
    id: 104,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "What is 'robustness' in the context of AI systems?",
    options: ["The physical strength of servers", "The ability of an AI system to handle unexpected inputs, edge cases, and adversarial conditions without failing", "The number of parameters in a model", "The training dataset size"],
    correct: 1,
    explanation: "Robustness refers to an AI system's resilience to unexpected inputs, distribution shifts, and adversarial attacks, maintaining reliable performance in real-world conditions."
  },
  {
    id: 105,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "Which of the following is an example of how generative AI can introduce harmful bias?",
    options: ["Generating outputs faster than expected", "Producing content that reflects stereotypical or discriminatory patterns learned from biased training data", "Reducing inference cost", "Compressing model size"],
    correct: 1,
    explanation: "If training data contains biased patterns, generative AI can amplify and reproduce stereotypes, producing discriminatory content that perpetuates harmful biases."
  },
  {
    id: 106,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "What is 'inclusivity' as a principle of responsible AI?",
    options: ["Including all AWS services in the project", "Designing AI systems that are accessible to and serve diverse populations, including those with disabilities", "Including maximum parameters in a model", "Including all available data sources"],
    correct: 1,
    explanation: "Inclusivity means designing AI systems that are accessible, fair, and beneficial to diverse user groups, including underserved populations and people with disabilities."
  },
  {
    id: 107,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "Which AWS tool provides a responsible AI framework and self-assessment checklist for ML projects?",
    options: ["AWS Well-Architected Tool with Machine Learning Lens", "AWS CloudFormation", "AWS CodePipeline", "Amazon API Gateway"],
    correct: 0,
    explanation: "The AWS Well-Architected Framework's Machine Learning Lens includes responsible AI considerations and best practices. AWS also provides the AWS Responsible AI framework with self-assessment tools."
  },
  {
    id: 108,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "What is 'toxicity detection' in generative AI and how can it be implemented on AWS?",
    options: ["Detecting toxic chemicals in data centers; Amazon Inspector", "Detecting harmful, offensive, or abusive content in AI outputs; Amazon Bedrock Guardrails", "Detecting model errors; SageMaker Debugger", "Detecting data corruption; S3 lifecycle"],
    correct: 1,
    explanation: "Toxicity detection identifies harmful or offensive content in model outputs. Bedrock Guardrails provides configurable content filters to block toxic, violent, or hateful content."
  },
  {
    id: 109,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "Why is 'data provenance' (tracking data lineage) important for responsible AI?",
    options: ["It speeds up model training", "It ensures accountability by tracking where data came from, how it was collected, and whether consent was obtained", "It compresses data", "It encrypts data at rest"],
    correct: 1,
    explanation: "Data provenance tracks data origins, collection methods, consent, and transformations, supporting accountability, compliance, bias detection, and data quality."
  },
  {
    id: 110,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "What should a company do if they discover their deployed AI model exhibits significant bias against a demographic group?",
    options: ["Ignore it since the model is deployed", "Investigate the root cause, retrain with balanced data, and potentially pause the model if harm is occurring", "Delete all evaluation data", "Deploy the model to more regions"],
    correct: 1,
    explanation: "When significant bias is found, the company should investigate the root cause, remediate the data/model, potentially pause the model to prevent harm, and implement monitoring to prevent recurrence."
  },
  {
    id: 111,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "What is the concept of 'accountability' in responsible AI?",
    options: ["No one is responsible for AI outputs", "Clear ownership and responsibility for AI system outcomes, decisions, and impacts, with mechanisms for redress", "Only the AI model is accountable", "Accountability only applies to data engineers"],
    correct: 1,
    explanation: "Accountability means organizations and individuals take clear responsibility for AI system outcomes, with defined governance, oversight mechanisms, and processes for addressing harms."
  },
  {
    id: 112,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "Which responsible AI practice involves regularly monitoring a deployed model for performance degradation and emerging bias?",
    options: ["Data labeling", "Continuous monitoring and model evaluation in production", "Feature selection", "Hyperparameter tuning"],
    correct: 1,
    explanation: "Continuous monitoring (using tools like SageMaker Model Monitor and Clarify) tracks model performance, data drift, and bias in production, enabling timely intervention."
  },

  // ======================== DOMAIN 5: Security, Compliance, and Governance of AI Solutions (14%) — 18 questions ========================
  {
    id: 113,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "Which AWS service is used to manage access control and permissions for users and services interacting with AI workloads?",
    options: ["Amazon Macie", "AWS Identity and Access Management (IAM)", "AWS WAF", "Amazon Cognito only"],
    correct: 1,
    explanation: "AWS IAM manages authentication and authorization, controlling who can access AI services, models, and data through fine-grained permission policies."
  },
  {
    id: 114,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "How does Amazon Bedrock ensure that customer data used for inference is NOT used to train foundation models?",
    options: ["It cannot prevent this", "By default, customer inputs and outputs are not used to improve base models or shared with model providers", "By encrypting all data", "By deleting data after each request"],
    correct: 1,
    explanation: "Amazon Bedrock does not use customer prompts or outputs to train or improve the base foundation models by default, and customer data is not shared with third-party model providers."
  },
  {
    id: 115,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "What is a critical data security consideration when building RAG applications with proprietary company data?",
    options: ["Store all data in public S3 buckets", "Ensure proper access controls on the vector database and source documents so users only see data they are authorized to access", "Share all data with model providers", "Disable all logging"],
    correct: 1,
    explanation: "RAG applications must enforce proper access controls on source documents and the vector store, ensuring users can only retrieve and see data they are authorized to access (data-level authorization)."
  },
  {
    id: 116,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "Which AWS service helps discover, classify, and protect sensitive data like PII stored in AWS?",
    options: ["Amazon Macie", "Amazon Comprehend only", "AWS Shield", "Amazon GuardDuty"],
    correct: 0,
    explanation: "Amazon Macie uses ML to automatically discover, classify, and protect sensitive data (PII, financial data) stored in Amazon S3, alerting on unauthorized access or exposure."
  },
  {
    id: 117,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "What is 'data encryption at rest' and which AWS service manages encryption keys?",
    options: ["Encrypting data in transit; AWS WAF", "Encrypting stored data; AWS KMS (Key Management Service)", "Hashing passwords; IAM", "Compressing data; S3 Transfer Acceleration"],
    correct: 1,
    explanation: "Data encryption at rest protects stored data. AWS KMS (Key Management Service) creates and manages cryptographic keys used to encrypt data across AWS services."
  },
  {
    id: 118,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "Which AWS service provides threat detection by monitoring for malicious activity and unauthorized behavior in AWS accounts?",
    options: ["Amazon GuardDuty", "Amazon Polly", "Amazon Textract", "AWS Elastic Beanstalk"],
    correct: 0,
    explanation: "Amazon GuardDuty is a threat detection service that uses ML and threat intelligence to identify unauthorized behavior, malicious activity, and security risks in AWS accounts."
  },
  {
    id: 119,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "What is 'prompt injection' in the context of AI security?",
    options: ["A performance optimization technique", "An attack where malicious input is crafted to manipulate an FM into ignoring its instructions or revealing sensitive information", "A method to improve prompt quality", "A type of model training"],
    correct: 1,
    explanation: "Prompt injection attacks craft malicious inputs to override system instructions, manipulate model behavior, or extract sensitive data. Mitigations include input validation and guardrails."
  },
  {
    id: 120,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "Which compliance framework provides AWS customers with reports about AWS security and compliance controls?",
    options: ["AWS Artifact", "Amazon Inspector", "AWS CloudFormation", "Amazon EMR"],
    correct: 0,
    explanation: "AWS Artifact is a central resource for compliance-related information, providing on-demand access to AWS security and compliance reports (SOC, ISO, PCI DSS, HIPAA)."
  },
  {
    id: 121,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "What is 'data lineage' and why is it important for AI governance?",
    options: ["The visual design of data dashboards", "The tracking of data from origin through transformations to final use, ensuring traceability and compliance", "The speed of data processing", "The storage cost of data"],
    correct: 1,
    explanation: "Data lineage tracks data's journey from source to consumption, enabling auditability, compliance, quality monitoring, and accountability in AI systems."
  },
  {
    id: 122,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "When fine-tuning a foundation model with proprietary data on Amazon Bedrock, where is the training data stored and how is it protected?",
    options: ["On the model provider's public servers", "In the customer's AWS account with encryption, and the fine-tuned model is private to the customer", "In a shared public repository", "On local developer machines only"],
    correct: 1,
    explanation: "Fine-tuning data stays in the customer's AWS account with encryption. The resulting fine-tuned model weights are private and accessible only by the customer, never shared publicly."
  },
  {
    id: 123,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "Which AWS service enables centralized governance, compliance, and auditing of AWS resources across multiple accounts?",
    options: ["AWS Organizations with AWS CloudTrail", "Amazon Lex", "Amazon Rekognition", "Amazon SageMaker Studio"],
    correct: 0,
    explanation: "AWS Organizations manages multiple accounts centrally, while AWS CloudTrail logs all API calls for auditing. Together they provide governance and compliance across accounts."
  },
  {
    id: 124,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "What is the principle of 'least privilege' and how does it apply to AI workloads on AWS?",
    options: ["Give all users full admin access", "Grant only the minimum permissions needed to perform a task, applied to IAM roles for AI services and data access", "Use a single shared credential for all services", "Disable IAM entirely"],
    correct: 1,
    explanation: "Least privilege grants only the minimum required permissions, reducing the attack surface. For AI workloads, this means restricting access to models, training data, and inference endpoints."
  },
  {
    id: 125,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "Which AWS service provides a virtual private cloud (VPC) to isolate AI/ML workloads from the public internet?",
    options: ["Amazon VPC", "Amazon Route 53", "Amazon API Gateway", "Amazon CloudFront"],
    correct: 0,
    explanation: "Amazon VPC lets you provision a logically isolated section of AWS where you can launch AI/ML resources in a private network, controlling inbound/outbound traffic with security groups and NACLs."
  },
  {
    id: 126,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "What is 'model governance' and why is it important for organizations deploying AI?",
    options: ["Managing the number of model parameters", "Establishing policies, processes, and oversight for the development, deployment, and monitoring of AI models to manage risk", "Controlling GPU pricing", "Selecting the largest model available"],
    correct: 1,
    explanation: "Model governance establishes policies for model development, approval, deployment, monitoring, and retirement, ensuring accountability, compliance, and risk management."
  },
  {
    id: 127,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "How can a company prevent sensitive customer data from being sent to third-party foundation models?",
    options: ["There is no way to prevent this", "Use Amazon Bedrock (which does not share data with providers), apply data redaction, and use Bedrock Guardrails PII filters", "Send all data unencrypted", "Use only the largest model"],
    correct: 1,
    explanation: "Amazon Bedrock keeps customer data private and does not share it with model providers. Additionally, PII filters in Guardrails and data redaction prevent sensitive information from being processed."
  },
  {
    id: 128,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "Which of the following is a best practice for securing SageMaker notebook instances used in ML development?",
    options: ["Leave them publicly accessible for convenience", "Use VPC endpoints, IAM roles with least privilege, encryption, and disable internet access when not needed", "Share root credentials with all team members", "Disable all security groups"],
    correct: 1,
    explanation: "Best practices include placing notebooks in private VPC subnets, using IAM roles with least privilege, enabling encryption, restricting internet access, and using VPC endpoints for AWS services."
  },
  {
    id: 129,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "What is an 'audit trail' in the context of AI governance and which AWS service provides it?",
    options: ["A trail for hiking; Amazon Rekognition", "A chronological record of system activities for accountability and compliance; AWS CloudTrail", "A debugging log; SageMaker Debugger", "A training metric; Model Monitor"],
    correct: 1,
    explanation: "An audit trail is a chronological record of API calls and system activities for accountability and compliance. AWS CloudTrail logs all API activity in the account."
  },
  {
    id: 130,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "A healthcare company wants to use generative AI while ensuring HIPAA compliance. Which approach on AWS best supports this requirement?",
    options: ["Use any public API without restrictions", "Use Amazon Bedrock (which supports HIPAA-eligible use cases), configure BAA agreements, encrypt data, and implement access controls and audit logging", "Avoid using any cloud services", "Only use on-premises servers"],
    correct: 1,
    explanation: "For HIPAA compliance, the company should use HIPAA-eligible services like Amazon Bedrock, establish a BAA with AWS, encrypt all data (KMS), enforce strict IAM access controls, and maintain CloudTrail audit logs."
  }
];
