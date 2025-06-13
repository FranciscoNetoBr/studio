import type { ContentItem } from '@/types';

// Define a fixed reference date to ensure consistent timestamps across server/client renders
const MOCK_REFERENCE_DATE = new Date('2024-07-15T10:00:00.000Z').getTime();

export const mockItems: ContentItem[] = [
  // Itens existentes ...
  {
    id: '1',
    type: 'news',
    title: 'AI Breakthrough: Neural Networks Achieve Human-Level Understanding',
    source: 'Tech Chronicle',
    category: 'Artificial Intelligence',
    content: 'In a landmark achievement, researchers today announced that a new generation of neural networks has demonstrated comprehension abilities on par with human adults in a series of complex language and reasoning tasks. The implications for various industries are vast, from automated customer service to advanced scientific research. This new model, dubbed "Cognito-5", was trained on an unprecedentedly large dataset and employs a novel architecture that mimics certain aspects of human brain function. Experts believe this could accelerate the development of Artificial General Intelligence (AGI). The full research paper is set to be published next month, but preliminary results have already sent ripples through the tech community. Cognito-5 was able to understand nuanced humor, complex metaphors, and even detect subtle emotional tones in text, tasks that have historically been challenging for AI systems. The training process for Cognito-5 took over six months and utilized a distributed network of over 10,000 GPUs, highlighting the immense computational resources required for such advancements. Further testing is planned to assess its capabilities in real-world applications.',
    imageUrl: 'https://placehold.co/1200x800/1A1A1A/FFFFFF.png?text=AI+News',
    timestamp: new Date(MOCK_REFERENCE_DATE - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago from reference
    url: '#',
    author: 'Dr. Ada Lovelace',
  },
  {
    id: '2',
    type: 'social',
    title: 'Destaques do Instagram Reels',
    source: 'Instagram',
    category: 'Social Media',
    content: 'Os melhores reels que estão bombando na plataforma. Fique por dentro das novidades e virais do momento.',
    imageUrl: 'https://placehold.co/1200x800/833AB4/FFFFFF.png?text=Instagram', 
    timestamp: new Date(MOCK_REFERENCE_DATE - 3 * 60 * 60 * 1000).toISOString(), 
    url: '#',
    author: 'Insta Feed',
    avatarUrl: 'https://placehold.co/48x48.png',
  },
  {
    id: '3',
    type: 'news',
    title: 'Tendências do YouTube Shorts',
    source: 'YouTube',
    category: 'Vídeos Curtos',
    content: 'Os YouTube Shorts e criadores em alta no momento. Conteúdo rápido e dinâmico para você não perder nada.',
    imageUrl: 'https://placehold.co/1200x800/FF0000/FFFFFF.png?text=YouTube', 
    timestamp: new Date(MOCK_REFERENCE_DATE - 2 * 60 * 60 * 1000).toISOString(), 
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
    timestamp: new Date(MOCK_REFERENCE_DATE - 10 * 60 * 60 * 1000).toISOString(), 
    url: '#',
    author: 'Jane Doe',
  },
  {
    id: '5',
    type: 'social',
    title: 'Últimas Threads do X (Twitter)',
    source: 'X (Twitter)',
    category: 'Microblogging',
    content: 'O que está bombando na rede social X. Threads, discussões e os assuntos mais comentados em tempo real.',
    imageUrl: 'https://placehold.co/1200x800/000000/FFFFFF.png?text=X+Twitter', 
    timestamp: new Date(MOCK_REFERENCE_DATE - 30 * 60 * 1000).toISOString(), 
    url: '#',
    author: 'Trend Spotter',
    avatarUrl: 'https://placehold.co/48x48.png',
  },
   {
    id: '6',
    type: 'social',
    title: 'Virais do TikTok',
    source: 'TikTok',
    category: 'Vídeos Curtos',
    content: 'As trends, desafios e vídeos virais que estão agitando o TikTok. Descubra os criadores em ascensão.',
    imageUrl: 'https://placehold.co/1200x800/FE2C55/FFFFFF.png?text=TikTok', 
    timestamp: new Date(MOCK_REFERENCE_DATE - 45 * 60 * 1000).toISOString(), 
    url: '#',
    author: 'TikToker News',
    avatarUrl: 'https://placehold.co/48x48.png',
  },
  // Novos itens para YouTube
  {
    id: 'yt1',
    type: 'news',
    title: 'Top 10 Músicas Mais Tocadas da Semana no YouTube',
    source: 'YouTube',
    category: 'Música',
    content: 'Descubra as músicas que estão dominando as paradas no YouTube esta semana. Inclui clipes e tendências.',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(MOCK_REFERENCE_DATE - 5 * 60 * 60 * 1000).toISOString(),
    url: '#',
    author: 'MusicVibes',
  },
  {
    id: 'yt2',
    type: 'news',
    title: 'Como Monetizar seu Canal no YouTube em 2024',
    source: 'YouTube',
    category: 'Finanças',
    content: 'Um guia completo com estratégias comprovadas para monetizar suas habilidades e presença online no YouTube.',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(MOCK_REFERENCE_DATE - 6 * 60 * 60 * 1000).toISOString(),
    url: '#',
    author: 'LifeHacks',
  },
  {
    id: 'yt3',
    type: 'news',
    title: 'Review Detalhado: Novo Smartphone XYZ no YouTube',
    source: 'YouTube',
    category: 'Tecnologia',
    content: 'Análise detalhada do mais recente lançamento de smartphone, cobrindo design, performance e câmeras.',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(MOCK_REFERENCE_DATE - 7 * 60 * 60 * 1000).toISOString(),
    url: '#',
    author: 'TechReviewBR',
  },
  // Novos itens para TikTok
  {
    id: 'tk1',
    type: 'social',
    title: 'Esquetes de Comédia Viralizam no TikTok',
    source: 'TikTok',
    category: 'Entretenimento',
    content: 'Vídeo curto e viral que está bombando na plataforma. Assista agora e divirta-se com o cotidiano.',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(MOCK_REFERENCE_DATE - 1 * 60 * 60 * 1000).toISOString(),
    url: '#',
    author: '@comedyking',
    avatarUrl: 'https://placehold.co/48x48.png'
  },
  {
    id: 'tk2',
    type: 'social',
    title: 'Nova Trend de Dança Conquista o TikTok',
    source: 'TikTok',
    category: 'Música',
    content: 'Nova dança e música que viralizaram. Aprenda os passos e participe da trend que conquistou o TikTok.',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(MOCK_REFERENCE_DATE - 2 * 60 * 60 * 1000).toISOString(),
    url: '#',
    author: '@dancemachine',
    avatarUrl: 'https://placehold.co/48x48.png'
  },
  {
    id: 'tk3',
    type: 'social',
    title: 'Transformação de Maquiagem Impressionante no TikTok',
    source: 'TikTok',
    category: 'Beleza',
    content: 'Assista a esta transformação surpreendente usando técnicas de maquiagem. O resultado é de tirar o fôlego!',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(MOCK_REFERENCE_DATE - 2 * 30 * 60 * 1000).toISOString(), 
    url: '#',
    author: '@makeupart',
    avatarUrl: 'https://placehold.co/48x48.png'
  },
  // Novos itens para X (Twitter)
  {
    id: 'tw1',
    type: 'social',
    title: 'Thread Essencial sobre Produtividade no X',
    source: 'X (Twitter)',
    category: 'Desenvolvimento Pessoal',
    content: 'Thread importante sobre assuntos relevantes e atuais. Confira a discussão completa e melhore sua rotina.',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(MOCK_REFERENCE_DATE - 40 * 60 * 1000).toISOString(),
    url: '#',
    author: '@produtividadeMaster',
    avatarUrl: 'https://placehold.co/48x48.png'
  },
  {
    id: 'tw2',
    type: 'social',
    title: 'Debate Político Intenso no X (Twitter)',
    source: 'X (Twitter)',
    category: 'Notícias',
    content: 'As últimas atualizações e discussões sobre o cenário político nacional e internacional no X (Twitter).',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(MOCK_REFERENCE_DATE - 1 * 60 * 60 * 1000).toISOString(),
    url: '#',
    author: '@politicatalks',
    avatarUrl: 'https://placehold.co/48x48.png'
  },
  {
    id: 'tw3',
    type: 'social',
    title: 'Inovações Tecnológicas em Destaque no X',
    source: 'X (Twitter)',
    category: 'Tecnologia',
    content: 'Acompanhe os tweets e discussões sobre as mais recentes inovações tecnológicas e startups promissoras.',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(MOCK_REFERENCE_DATE - 2 * 60 * 60 * 1000).toISOString(),
    url: '#',
    author: '@futuretech',
    avatarUrl: 'https://placehold.co/48x48.png'
  },
  // Novos itens para Instagram
  {
    id: 'ig1',
    type: 'social',
    title: 'Paisagens de Viagem Incríveis no Instagram',
    source: 'Instagram',
    category: 'Viagem',
    content: 'Explore destinos deslumbrantes através de fotos e stories inspiradores de viajantes no Instagram.',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(MOCK_REFERENCE_DATE - 3 * 60 * 60 * 1000).toISOString(),
    url: '#',
    author: '@travelgram',
    avatarUrl: 'https://placehold.co/48x48.png'
  },
  {
    id: 'ig2',
    type: 'social',
    title: 'Receitas Deliciosas e Fáceis no Instagram',
    source: 'Instagram',
    category: 'Culinária',
    content: 'Inspire-se com receitas rápidas, saudáveis e saborosas compartilhadas por food bloggers no Instagram.',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(MOCK_REFERENCE_DATE - 4 * 60 * 60 * 1000).toISOString(),
    url: '#',
    author: '@foodlover',
    avatarUrl: 'https://placehold.co/48x48.png'
  },
  {
    id: 'ig3',
    type: 'social',
    title: 'Moda e Estilo: Tendências do Instagram',
    source: 'Instagram',
    category: 'Moda',
    content: 'Fique por dentro das últimas tendências de moda, looks do dia e dicas de estilo dos influencers no Instagram.',
    imageUrl: 'https://placehold.co/600x400.png',
    timestamp: new Date(MOCK_REFERENCE_DATE - 5 * 60 * 60 * 1000).toISOString(),
    url: '#',
    author: '@styleicon',
    avatarUrl: 'https://placehold.co/48x48.png'
  }
];
