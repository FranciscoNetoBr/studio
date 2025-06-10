'use client';

import type { ContentItem } from '@/types';
import { ContentCard } from './ContentCard';

interface UnifiedStreamProps {
  items: ContentItem[];
  savedItemIds: Set<string>;
  onToggleSave: (itemId: string) => void;
}

export function UnifiedStream({ items, savedItemIds, onToggleSave }: UnifiedStreamProps) {
  if (items.length === 0) {
    return <p className="text-center text-muted-foreground py-10">No content matches your filters.</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <ContentCard 
          key={item.id} 
          item={item} 
          isSaved={savedItemIds.has(item.id)}
          onToggleSave={onToggleSave}
        />
      ))}
    </div>
  );
}
