export interface ContentItem {
  id: string;
  type: 'news' | 'social';
  title: string;
  source: string;
  category: string;
  content: string;
  summary?: string | null;
  imageUrl?: string;
  timestamp: string; // ISO date string
  url: string;
  author?: string;
  avatarUrl?: string;
}

export interface Filters {
  category: string;
  source: string;
  savedOnly: boolean;
}
