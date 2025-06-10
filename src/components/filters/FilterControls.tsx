'use client';

import type { Filters } from '@/types';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ListFilter } from 'lucide-react';

interface FilterControlsProps {
  categories: string[];
  sources: string[];
  currentFilters: Filters;
  onFilterChange: (newFilters: Filters) => void;
}

export function FilterControls({ categories, sources, currentFilters, onFilterChange }: FilterControlsProps) {
  
  const handleCategoryChange = (value: string) => {
    onFilterChange({ ...currentFilters, category: value });
  };

  const handleSourceChange = (value: string) => {
    onFilterChange({ ...currentFilters, source: value });
  };

  const handleSavedOnlyChange = (checked: boolean) => {
    onFilterChange({ ...currentFilters, savedOnly: checked });
  };

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-headline text-primary">
          <ListFilter className="mr-2 h-6 w-6" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="category-filter" className="text-base">Category</Label>
          <Select value={currentFilters.category} onValueChange={handleCategoryChange}>
            <SelectTrigger id="category-filter" className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="source-filter" className="text-base">Source</Label>
          <Select value={currentFilters.source} onValueChange={handleSourceChange}>
            <SelectTrigger id="source-filter" className="w-full">
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              {sources.map((source) => (
                <SelectItem key={source} value={source}>
                  {source}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2 pt-2">
          <Switch
            id="saved-only-filter"
            checked={currentFilters.savedOnly}
            onCheckedChange={handleSavedOnlyChange}
          />
          <Label htmlFor="saved-only-filter" className="text-base">Show Saved Only</Label>
        </div>
        
      </CardContent>
    </Card>
  );
}
