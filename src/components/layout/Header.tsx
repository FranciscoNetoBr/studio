import { Newspaper } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <Newspaper className="h-8 w-8 text-primary mr-3" />
        <h1 className="text-3xl font-headline text-primary">PulseStream Portal</h1>
      </div>
    </header>
  );
}
