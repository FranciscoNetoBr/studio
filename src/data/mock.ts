import type { ContentItem } from '@/types';

export const mockItems: ContentItem[] = [
  {
    id: '1',
    type: 'news',
    title: 'AI Breakthrough: Neural Networks Achieve Human-Level Understanding',
    source: 'Tech Chronicle',
    category: 'Artificial Intelligence',
    content: 'In a landmark achievement, researchers today announced that a new generation of neural networks has demonstrated comprehension abilities on par with human adults in a series of complex language and reasoning tasks. The implications for various industries are vast, from automated customer service to advanced scientific research. This new model, dubbed "Cognito-5", was trained on an unprecedentedly large dataset and employs a novel architecture that mimics certain aspects of human brain function. Experts believe this could accelerate the development of Artificial General Intelligence (AGI). The full research paper is set to be published next month, but preliminary results have already sent ripples through the tech community. Cognito-5 was able to understand nuanced humor, complex metaphors, and even detect subtle emotional tones in text, tasks that have historically been challenging for AI systems. The training process for Cognito-5 took over six months and utilized a distributed network of over 10,000 GPUs, highlighting the immense computational resources required for such advancements. Further testing is planned to assess its capabilities in real-world applications.',
    imageUrl: 'https://placehold.co/1200x800/1A1A1A/FFFFFF.png?text=AI+News',
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
    url: '#',
    author: 'Dr. Ada Lovelace',
  },
  {
    id: '2',
    type: 'social',
    title: 'Destaques do Instagram',
    source: 'Instagram',
    category: 'Social Media',
    content: 'As melhores publicações, stories e reels que estão bombando na plataforma. Fique por dentro das novidades.',
    imageUrl: 'https://placehold.co/1200x800/833AB4/FFFFFF.png?text=Instagram', // Cor roxa do Instagram
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
    url: '#',
    author: 'Insta Feed',
    avatarUrl: 'https://placehold.co/48x48.png',
  },
  {
    id: '3',
    type: 'news',
    title: 'Notícias do YouTube',
    source: 'YouTube',
    category: 'Vídeos',
    content: 'Os vídeos e criadores em alta no momento. Conteúdo de diversas categorias para você não perder nada.',
    imageUrl: 'https://placehold.co/1200x800/FF0000/FFFFFF.png?text=YouTube', // Cor vermelha do YouTube
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    url: '#',
    author: 'Channel Surfer',
  },
  {
    id: '4',
    type: 'news',
    title: 'The Future of Remote Work: Hybrid Models Emerge as Standard',
    source: 'Workplace Weekly',
    category: 'Future of Work',
    content: 'As companies navigate the post-pandemic landscape, hybrid work models are rapidly becoming the new standard. This article explores the benefits and challenges of combining remote and in-office work, and how organizations can adapt to this evolving paradigm. Many employees report higher job satisfaction and better work-life balance with hybrid arrangements, while employers see potential for reduced overhead costs and access to a wider talent pool. However, effectively managing a distributed workforce requires new tools, communication strategies, and a shift in company culture. Key challenges include maintaining team cohesion, ensuring equitable opportunities for all employees regardless of location, and addressing cybersecurity concerns associated with remote access. Successful implementation often involves clear guidelines, flexible scheduling options, and investment in technology that supports seamless collaboration.',
    imageUrl: 'https://placehold.co/1200x800/3A3B3C/FFFFFF.png?text=Future+Work',
    timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(), // 10 hours ago
    url: '#',
    author: 'Jane Doe',
  },
  {
    id: '5',
    type: 'social',
    title: 'Últimas do X (Twitter)',
    source: 'X (Twitter)',
    category: 'Social Media',
    content: 'O que está bombando na rede social X. Threads, discussões e os assuntos mais comentados em tempo real.',
    imageUrl: 'https://placehold.co/1200x800/000000/FFFFFF.png?text=X+Twitter', // Cor preta do X
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutos ago
    url: '#',
    author: 'Trend Spotter',
    avatarUrl: 'https://placehold.co/48x48.png',
  },
   {
    id: '6',
    type: 'news',
    title: 'Novidades no TikTok',
    source: 'TikTok',
    category: 'Social Media',
    content: 'As trends, desafios e vídeos virais que estão agitando o TikTok. Descubra os criadores em ascensão.',
    imageUrl: 'https://placehold.co/1200x800/FE2C55/FFFFFF.png?text=TikTok', // Cor principal do TikTok
    timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(), // 45 minutos ago
    url: '#',
    author: 'TikToker News',
  },
];
