// src/components/content/ContentPlatformSection.tsx
'use client';

import type { ContentItem } from '@/types';
import { ContentCard } from './ContentCard';

interface ContentPlatformSectionProps {
  title: string;
  icon?: React.ReactNode;
  items: ContentItem[];
  displayLimit?: number;
}

export function ContentPlatformSection({ title, icon, items, displayLimit = 3 }: ContentPlatformSectionProps) {
  // Para a página inicial, sempre passaremos `isSaved=false` e uma função vazia para `onToggleSave`
  // já que o foco não é o gerenciamento de itens salvos aqui.
  const handleToggleSavePlaceholder = (itemId: string) => {
    console.log("Toggle save for item:", itemId, " (Placeholder for homepage)");
  };

  const itemsToDisplay = items.slice(0, displayLimit);

  if (itemsToDisplay.length === 0) {
    return null; // Não renderiza a seção se não houver itens
  }

  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex items-center mb-6 md:mb-8">
          {icon && <span className="mr-3 text-primary">{icon}</span>}
          <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {itemsToDisplay.map((item) => (
            <ContentCard
              key={item.id}
              item={item}
              isSaved={false} // Placeholder
              onToggleSave={handleToggleSavePlaceholder} // Placeholder
            />
          ))}
        </div>
      </div>
    </section>
  );
}
