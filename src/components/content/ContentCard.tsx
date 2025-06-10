'use client';

import type { ContentItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Badge } from '@/components/ui/badge'; // Removido pois não está sendo usado no design atual do card
import Image from 'next/image';
import { Wand2, Bookmark, ExternalLink, Globe, MessageSquare, Newspaper, Cpu, DollarSign, TrendingUp, CalendarDays, UserCircle, Youtube, Twitch, PlaySquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getSmartSummary } from '@/lib/actions';
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';


interface ContentCardProps {
  item: ContentItem;
  isSaved: boolean;
  onToggleSave: (itemId: string) => void;
}

const CategoryIcon: React.FC<{ category: string }> = ({ category }) => {
  switch (category.toLowerCase()) {
    case 'artificial intelligence':
    case 'tecnologia':
      return <Cpu className="h-4 w-4 mr-1" />;
    case 'automation':
      return <Wand2 className="h-4 w-4 mr-1" />;
    case 'finance':
    case 'finanças':
      return <DollarSign className="h-4 w-4 mr-1" />;
    case 'future of work':
      return <TrendingUp className="h-4 w-4 mr-1" />;
    case 'música':
      return <PlaySquare className="h-4 w-4 mr-1" />; // Ícone genérico para música
    case 'entretenimento':
      return <Twitch className="h-4 w-4 mr-1" />; // Ícone genérico para entretenimento
    case 'social media':
    case 'vídeos curtos':
    case 'microblogging':
    case 'desenvolvimento pessoal':
    case 'notícias': // Categoria genérica para notícias do Twitter
    case 'beleza': // Categoria para TikTok de maquiagem
      return <MessageSquare className="h-4 w-4 mr-1" />;
    default:
      return <Newspaper className="h-4 w-4 mr-1" />;
  }
};

// Ícones específicos para fontes, usados no cabeçalho do card ou perto do nome da fonte
const SourceIconInternal: React.FC<{ sourceName: string, type: 'news' | 'social' }> = ({ sourceName, type }) => {
  const lowerSourceName = sourceName.toLowerCase();
  if (lowerSourceName.includes('x (twitter)')) {
     return <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>;
  }
  if (lowerSourceName.includes('youtube')) {
    return <Youtube className="h-4 w-4 mr-1 text-red-600" />;
  }
  if (lowerSourceName.includes('tiktok')) {
    // Usando um ícone genérico de vídeo/social para TikTok por enquanto, ou pode-se adicionar um SVG específico
    return <PlaySquare className="h-4 w-4 mr-1" />; // Ou MessageSquare
  }
  if (type === 'social') {
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
    if (item.timestamp) {
      setTimeAgo(formatDistanceToNow(new Date(item.timestamp), { addSuffix: true, locale: ptBR }));
    }
  }, [item.timestamp]);

  const handleSummarize = async () => {
    if (!item.content) return;
    // Se já temos um sumário customizado (diferente do conteúdo original),
    // e o usuário clica de novo, ele quer ver o original.
    if (currentSummary && currentSummary !== item.content) {
        setCurrentSummary(item.content); // Mostra o conteúdo original
        setShowFullContent(false); // Reseta a visualização do "Show More"
        toast({ title: "Exibindo conteúdo original", description: "O resumo foi removido." });
        return;
    }

    setIsSummarizing(true);
    setCurrentSummary(null); 
    try {
      const result = await getSmartSummary(item.content);
      if (result.wasSummarized) {
        setCurrentSummary(result.summary);
        toast({ title: "Resumo Gerado", description: "IA resumiu este artigo para você." });
      } else {
        setCurrentSummary(item.content); 
        toast({ title: "Artigo Não Resumido", description: "IA determinou que este artigo já é conciso." });
      }
    } catch (error) {
      console.error("Falha ao resumir:", error);
      setCurrentSummary(item.content); 
      toast({ variant: "destructive", title: "Erro ao Resumir", description: "Não foi possível gerar o resumo." });
    } finally {
      setIsSummarizing(false);
    }
  };

  const displayContent = currentSummary || item.content;
  const canBeTruncated = displayContent && displayContent.length > 200; // Ajustado para 200 caracteres
  const truncatedContent = canBeTruncated && !showFullContent ? `${displayContent.substring(0, 200)}...` : displayContent;

  return (
    <Card className="flex flex-col h-full bg-card rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300 overflow-hidden">
      <CardHeader className="pb-3 pt-5 px-5">
        {item.type === 'social' && item.author && (
          <div className="flex items-center mb-3">
            <Avatar className="h-9 w-9 mr-2.5">
              <AvatarImage src={item.avatarUrl || `https://placehold.co/48x48.png?text=${item.author.charAt(0)}`} alt={item.author} data-ai-hint="profile person" />
              <AvatarFallback>{item.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm text-foreground leading-tight">{item.author}</p>
              <p className="text-xs text-muted-foreground leading-tight flex items-center">
                <SourceIconInternal sourceName={item.source} type={item.type} /> 
                {item.source}
              </p>
            </div>
          </div>
        )}
        <CardTitle className="font-headline text-xl lg:text-lg text-primary leading-snug">
          {item.title}
        </CardTitle>
        {item.type === 'news' && (
           <CardDescription className="text-xs text-muted-foreground pt-1 flex items-center">
             <SourceIconInternal sourceName={item.source} type={item.type}/> {item.source}
             {item.author && <span className="mx-1.5">•</span>}
             {item.author && <span className="flex items-center"><UserCircle className="h-3 w-3 mr-0.5" /> {item.author}</span>}
           </CardDescription>
        )}
      </CardHeader>
      {item.imageUrl && (
        <div className="px-5">
          <div className="aspect-[16/9] relative overflow-hidden rounded-md">
            <Image 
              src={item.imageUrl} 
              alt={item.title} 
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={`${item.category.split(' ')[0] || 'news'} ${item.type}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      )}
      <CardContent className="pt-4 px-5 flex-grow">
        <p className="text-foreground/80 text-sm leading-relaxed whitespace-pre-line line-clamp-3">
          {/* Prioriza currentSummary (que pode ser o resumo AI ou o conteúdo original se AI não resumiu) 
              ou o conteúdo original do item. Não usamos mais truncatedContent diretamente aqui 
              pois o line-clamp-3 fará o truncamento visual. */}
          {currentSummary || item.content}
        </p>
        {/* O botão Show More/Less não é mais necessário se usarmos line-clamp e o resumo for mostrado diretamente */}
      </CardContent>
      <CardFooter className="px-5 pb-4 pt-3 mt-auto flex flex-col items-start space-y-2">
        <div className="w-full flex flex-wrap gap-2 justify-start items-center">
            {item.type === 'news' && item.content && item.content.length > 100 && ( // Só mostra se houver conteúdo substancial
            <Button onClick={handleSummarize} disabled={isSummarizing} variant="outline" size="sm" className="text-xs px-2 py-1 h-auto">
                <Wand2 className="mr-1.5 h-3.5 w-3.5" />
                {isSummarizing ? 'Resumindo...' : (currentSummary && currentSummary !== item.content ? 'Ver Original' : 'Resumo IA')}
            </Button>
            )}
            <Button onClick={() => onToggleSave(item.id)} variant={isSaved ? "default" : "outline"} size="sm" className="text-xs px-2 py-1 h-auto">
            <Bookmark className={`mr-1.5 h-3.5 w-3.5 ${isSaved ? 'fill-current' : ''}`} />
            {isSaved ? 'Salvo' : 'Salvar'}
            </Button>
            <Button asChild variant="outline" size="sm" className="text-xs px-2 py-1 h-auto">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Ver Original
            </a>
            </Button>
        </div>
        <div className="w-full flex justify-between items-center text-xs text-muted-foreground">
            <span className="flex items-center"><CategoryIcon category={item.category} /> {item.category}</span>
            {timeAgo && <span className="flex items-center"><CalendarDays className="h-3.5 w-3.5 mr-1" /> {timeAgo}</span>}
        </div>
      </CardFooter>
    </Card>
  );
}
