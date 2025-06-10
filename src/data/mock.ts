import type { ContentItem } from '@/types';

export const mockItems: ContentItem[] = [
  {
    id: '1',
    type: 'news',
    title: 'AI Breakthrough: Neural Networks Achieve Human-Level Understanding',
    source: 'Tech Chronicle',
    category: 'Artificial Intelligence',
    content: 'In a landmark achievement, researchers today announced that a new generation of neural networks has demonstrated comprehension abilities on par with human adults in a series of complex language and reasoning tasks. The implications for various industries are vast, from automated customer service to advanced scientific research. This new model, dubbed "Cognito-5", was trained on an unprecedentedly large dataset and employs a novel architecture that mimics certain aspects of human brain function. Experts believe this could accelerate the development of Artificial General Intelligence (AGI). The full research paper is set to be published next month, but preliminary results have already sent ripples through the tech community. Cognito-5 was able to understand nuanced humor, complex metaphors, and even detect subtle emotional tones in text, tasks that have historically been challenging for AI systems. The training process for Cognito-5 took over six months and utilized a distributed network of over 10,000 GPUs, highlighting the immense computational resources required for such advancements. Further testing is planned to assess its capabilities in real-world applications.',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
    url: '#',
    author: 'Dr. Ada Lovelace',
  },
  {
    id: '2',
    type: 'social',
    title: 'Just launched my new project #N8NAutomate! Check it out for seamless workflow automation.',
    source: 'Twitter',
    category: 'Automation',
    content: 'So excited to finally share #N8NAutomate with the world! Built with N8N, it helps you connect apps and automate tasks like never before. Link in bio! #Productivity #NoCode',
    imageUrl: 'https://placehold.co/1200x675.png',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
    url: '#',
    author: 'Dev Guru',
    avatarUrl: 'https://placehold.co/48x48.png',
  },
  {
    id: '3',
    type: 'news',
    title: 'Global Markets React to New Economic Policies',
    source: 'Financial Times',
    category: 'Finance',
    content: 'Stock markets worldwide experienced significant volatility today following the announcement of new trade and fiscal policies by several major economies. Investors are carefully watching for long-term impacts. The policies include adjustments to import tariffs and new government spending initiatives aimed at boosting domestic growth. However, concerns remain about potential inflationary pressures and disruptions to global supply chains. Currency markets also saw sharp movements, with the US dollar strengthening against a basket of other major currencies. Economists are divided on the overall outlook, with some predicting a robust recovery and others warning of a possible slowdown if international trade relations become strained. The energy sector was particularly affected, with oil prices surging due to geopolitical uncertainties and anticipated changes in demand.',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    url: '#',
    author: 'John Maynard Keynes Jr.',
  },
  {
    id: '4',
    type: 'news',
    title: 'The Future of Remote Work: Hybrid Models Emerge as Standard',
    source: 'Workplace Weekly',
    category: 'Future of Work',
    content: 'As companies navigate the post-pandemic landscape, hybrid work models are rapidly becoming the new standard. This article explores the benefits and challenges of combining remote and in-office work, and how organizations can adapt to this evolving paradigm. Many employees report higher job satisfaction and better work-life balance with hybrid arrangements, while employers see potential for reduced overhead costs and access to a wider talent pool. However, effectively managing a distributed workforce requires new tools, communication strategies, and a shift in company culture. Key challenges include maintaining team cohesion, ensuring equitable opportunities for all employees regardless of location, and addressing cybersecurity concerns associated with remote access. Successful implementation often involves clear guidelines, flexible scheduling options, and investment in technology that supports seamless collaboration.',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(), // 10 hours ago
    url: '#',
    author: 'Jane Doe',
  },
  {
    id: '5',
    type: 'social',
    title: 'Exploring the latest AI trends at #AIConference2024. Mind blown by the keynote!',
    source: 'LinkedIn',
    category: 'Artificial Intelligence',
    content: 'Day 1 at #AIConference2024 has been incredible! The keynote on generative AI and its ethical implications was particularly thought-provoking. Looking forward to more sessions tomorrow. #AI #MachineLearning #TechEvent',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    url: '#',
    author: 'AI Enthusiast',
    avatarUrl: 'https://placehold.co/48x48.png',
  },
];
