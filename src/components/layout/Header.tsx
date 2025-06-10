'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FeedTimeLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-8 w-8">
    <rect width="32" height="32" rx="4" fill="hsl(var(--primary))"/>
    <path d="M11 8H22V12H15V16H21V20H15V26H11V8Z" fill="hsl(var(--primary-foreground))"/>
  </svg>
);

const navItems = [
  { name: 'Início', href: '/' },
  { name: 'Últimas Notícias', href: '/latest-news' },
  { name: 'YouTube', href: '/youtube' },
  { name: 'TikTok', href: '/tiktok' },
  { name: 'X (Twitter)', href: '/twitter' },
  { name: 'Instagram', href: '/instagram' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background py-3 border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between max-w-screen-xl">
        <Link href="/" className="flex items-center no-underline">
          <FeedTimeLogo />
          <h1 className="text-3xl font-headline text-foreground">FeedTime</h1>
        </Link>
        <nav>
          <ul className="flex items-center space-x-1 sm:space-x-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors
                    ${
                      pathname === item.href
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
