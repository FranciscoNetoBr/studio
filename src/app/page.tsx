'use client';

import { useState, useMemo, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { FilterControls } from '@/components/filters/FilterControls';
import { UnifiedStream } from '@/components/content/UnifiedStream';
import { mockItems } from '@/data/mock';
import type { ContentItem, Filters } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [allItems, setAllItems] = useState<ContentItem[]>([]);
  
  const [filters, setFilters] = useState<Filters>({
    category: 'all',
    source: 'all',
    savedOnly: false,
  });
  const [savedItemIds, setSavedItemIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setAllItems(mockItems);
      setIsLoading(false);
    }, 500); // Simulate network delay
  }, []);
  
  const uniqueCategories = useMemo(() => {
    if (isLoading) return [];
    return [...new Set(allItems.map(item => item.category))];
  }, [allItems, isLoading]);

  const uniqueSources = useMemo(() => {
    if (isLoading) return [];
    return [...new Set(allItems.map(item => item.source))];
  }, [allItems, isLoading]);

  const filteredItems = useMemo(() => {
    if (isLoading) return [];
    return allItems.filter(item => {
      const categoryMatch = filters.category === 'all' || item.category === filters.category;
      const sourceMatch = filters.source === 'all' || item.source === filters.source;
      const savedMatch = !filters.savedOnly || savedItemIds.has(item.id);
      return categoryMatch && sourceMatch && savedMatch;
    });
  }, [allItems, filters, savedItemIds, isLoading]);

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const handleToggleSave = (itemId: string) => {
    setSavedItemIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const PageSkeleton = () => (
    <div className="flex flex-col md:flex-row gap-6">
      <aside className="w-full md:w-1/4 lg:w-1/5">
        <CardSkeleton />
      </aside>
      <section className="flex-1 space-y-6">
        <ContentCardSkeleton />
        <ContentCardSkeleton />
        <ContentCardSkeleton />
      </section>
    </div>
  );

  const CardSkeleton = () => (
    <div className="p-4 space-y-4 border rounded-lg shadow-sm bg-card">
      <Skeleton className="h-8 w-1/2" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <div className="flex items-center space-x-2 pt-2">
        <Skeleton className="h-6 w-10" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  );

  const ContentCardSkeleton = () => (
     <div className="p-4 space-y-3 border rounded-lg shadow-sm bg-card">
        <div className="flex items-center space-x-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-1">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-20" />
            </div>
        </div>
        <Skeleton className="h-6 w-3/4" />
        <div className="flex space-x-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-40 w-full rounded-md" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex space-x-2 pt-2">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-28" />
        </div>
    </div>
  );


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {isLoading ? (
          <PageSkeleton />
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-72 lg:w-80 md:sticky md:top-8 self-start">
              <FilterControls
                categories={uniqueCategories}
                sources={uniqueSources}
                currentFilters={filters}
                onFilterChange={handleFilterChange}
              />
            </aside>
            <section className="flex-1 min-w-0"> {/* Added min-w-0 for flex child overflow */}
              <UnifiedStream 
                items={filteredItems} 
                savedItemIds={savedItemIds}
                onToggleSave={handleToggleSave}
              />
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
