'use client';

import type { ContentItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Wand2, Bookmark, ExternalLink, Globe, MessageSquare, Newspaper, Cpu, DollarSign, TrendingUp, CalendarDays, UserCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getSmartSummary } from '@/lib/actions';
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from 'date-fns';


interface ContentCardProps {
  item: ContentItem;
  isSaved: boolean;
  onToggleSave: (itemId: string) => void;
}

const CategoryIcon: React.FC<{ category: string }> = ({ category }) => {
  switch (category.toLowerCase()) {
    case 'artificial intelligence':
      return <Cpu className="h-4 w-4 mr-1" />;
    case 'automation':
      return <Wand2 className="h-4 w-4 mr-1" />;
    case 'finance':
      return <DollarSign className="h-4 w-4 mr-1" />;
    case 'future of work':
      return <TrendingUp className="h-4 w-4 mr-1" />;
    default:
      return <Newspaper className="h-4 w-4 mr-1" />;
  }
};

const SourceIcon: React.FC<{ type: 'news' | 'social', sourceName: string }> = ({ type, sourceName }) => {
  if (type === 'social') {
    if (sourceName.toLowerCase().includes('twitter')) {
       return <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>;
    }
    return <MessageSquare className="h-4 w-4 mr-1" />;
  }
  return <Globe className="h-4 w-4 mr-1" />;
};


export function ContentCard({ item, isSaved, onToggleSave }: ContentCardProps) {
  const { toast } = useToast();
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [currentSummary, setCurrentSummary] = useState<string | null>(item.summary || null);
  const [showFullContent, setShowFullContent] = useState(false);
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    setTimeAgo(formatDistanceToNow(new Date(item.timestamp), { addSuffix: true }));
  }, [item.timestamp]);

  const handleSummarize = async () => {
    if (!item.content) return;
    setIsSummarizing(true);
    setCurrentSummary(null); 
    try {
      const result = await getSmartSummary(item.content);
      if (result.wasSummarized) {
        setCurrentSummary(result.summary);
        toast({ title: "Summary Generated", description: "AI has summarized this article for you." });
      } else {
        setCurrentSummary(item.content); // Show original if not summarized
        toast({ title: "Article Not Summarized", description: "AI determined this article is already concise or summarization is not beneficial." });
      }
    } catch (error) {
      console.error("Failed to summarize:", error);
      setCurrentSummary(item.content); // Show original on error
      toast({ variant: "destructive", title: "Summarization Error", description: "Could not generate summary." });
    } finally {
      setIsSummarizing(false);
    }
  };

  const displayContent = currentSummary || item.content;
  const canBeTruncated = displayContent.length > 300;
  const truncatedContent = canBeTruncated && !showFullContent ? `${displayContent.substring(0, 300)}...` : displayContent;

  return (
    <Card className="mb-6 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
      <CardHeader>
        {item.type === 'social' && item.author && (
          <div className="flex items-center mb-2">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={item.avatarUrl || `https://placehold.co/48x48.png?text=${item.author.charAt(0)}`} alt={item.author} data-ai-hint="profile person" />
              <AvatarFallback>{item.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">{item.author}</p>
              <p className="text-xs text-muted-foreground">{item.source}</p>
            </div>
          </div>
        )}
        <CardTitle className="font-headline text-2xl text-primary">{item.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground pt-1 flex flex-wrap gap-x-4 gap-y-2">
          {item.type === 'news' && (
            <span className="flex items-center"><SourceIcon type={item.type} sourceName={item.source}/> {item.source}</span>
          )}
          <span className="flex items-center"><CategoryIcon category={item.category} /> {item.category}</span>
          <span className="flex items-center"><CalendarDays className="h-4 w-4 mr-1" /> {timeAgo}</span>
          {item.type === 'news' && item.author && (
            <span className="flex items-center"><UserCircle className="h-4 w-4 mr-1" /> {item.author}</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {item.imageUrl && (
          <div className="mb-4 overflow-hidden rounded-md">
            <Image 
              src={item.imageUrl} 
              alt={item.title} 
              width={600} 
              height={300} 
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint={`${item.category.split(' ')[0] || 'news'} ${item.type}`}
            />
          </div>
        )}
        <p className="text-foreground/90 leading-relaxed whitespace-pre-line">{truncatedContent}</p>
        {canBeTruncated && (
          <Button variant="link" onClick={() => setShowFullContent(!showFullContent)} className="px-0 text-primary">
            {showFullContent ? 'Show Less' : 'Show More'}
          </Button>
        )}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 justify-start">
        {item.type === 'news' && (
          <Button onClick={handleSummarize} disabled={isSummarizing} variant="outline" size="sm">
            <Wand2 className="mr-2 h-4 w-4" />
            {isSummarizing ? 'Summarizing...' : (currentSummary && currentSummary !== item.content ? 'View Original' : 'AI Summary')}
          </Button>
        )}
        <Button onClick={() => onToggleSave(item.id)} variant={isSaved ? "default" : "outline"} size="sm">
          <Bookmark className={`mr-2 h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
          {isSaved ? 'Saved' : 'Save'}
        </Button>
        <Button asChild variant="outline" size="sm">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Original
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
