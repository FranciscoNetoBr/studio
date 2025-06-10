'use client';

import { FeaturedCarousel } from '@/components/content/FeaturedCarousel';
import { ContentPlatformSection } from '@/components/content/ContentPlatformSection';
import { mockItems } from '@/data/mock'; 
import type { ContentItem } from '@/types';

// Ícones para as seções (SVG inline)
const YouTubeIconSection = () => (
  <svg width="32" height="22" viewBox="0 0 28 20" fill="currentColor" aria-hidden="true">
    <path d="M27.3459 3.0074C27.0213 1.82821 26.0718 0.891968 24.8735 0.573968C22.6908 0 14 0 14 0C14 0 5.30919 0 3.12643 0.573968C1.92821 0.891968 0.978711 1.82821 0.654086 3.0074C0 5.16016 0 10.0001 0 10.0001C0 10.0001 0 14.8401 0.654086 16.9928C0.978711 18.1719 1.92821 19.1082 3.12643 19.4262C5.30919 20.0001 14 20.0001 14 20.0001C14 20.0001 22.6908 20.0001 24.8735 19.4262C26.0718 19.1082 27.0213 18.1719 27.3459 16.9928C28 14.8401 28 10.0001 28 10.0001C28 10.0001 28 5.16016 27.3459 3.0074ZM11.1993 14.2858V5.71445L18.4799 10.0001L11.1993 14.2858Z"/>
  </svg>
);

const TikTokIconSection = () => (
  <svg width="28" height="32" viewBox="0 0 28 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M20.673 0.00012207C18.2666 -0.0988707 16.0815 1.21064 15.1003 3.30488C15.0217 3.47803 14.9633 3.65766 14.9233 3.83988V16.6084C14.9283 18.9163 14.0098 21.139 12.3708 22.7855C10.7318 24.4321 8.51469 25.3524 6.2099 25.3495C3.82835 25.3495 1.61983 24.3709 0 22.7118V27.4832C1.67081 29.2337 3.90559 30.2645 6.2423 30.2674H6.34681C10.0959 30.2674 13.4342 28.0051 14.7423 24.5895C14.8607 24.2988 14.9233 23.9758 14.9233 23.617V8.4015C14.9233 8.0175 15.0058 7.6485 15.1843 7.33075C15.9728 5.80363 17.6298 4.7175 19.4633 4.7175C20.218 4.7175 20.9378 4.89738 21.5618 5.22738V0.747878C21.2695 0.253378 20.9095 -0.00262221 20.673 0.00012207Z"/>
    <path d="M28.0001 10.5489C24.7629 10.5489 22.0774 13.2344 22.0774 16.4716C22.0774 19.7088 24.7629 22.3943 28.0001 22.3943V27.117C22.0646 27.117 17.3418 22.3943 17.3418 16.4588C17.3418 10.5362 22.0646 5.79956 28.0001 5.79956V10.5489Z"/>
  </svg>
);

const XTwitterIconSection = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);


export default function Home() {
  const featuredNewsItems = mockItems
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 5);

  const platformSections: { title: string; icon: React.ReactNode; items: ContentItem[]; filterSource: string }[] = [
    {
      title: 'YouTube',
      icon: <YouTubeIconSection />,
      items: [],
      filterSource: 'YouTube',
    },
    {
      title: 'TikTok',
      icon: <TikTokIconSection />,
      items: [],
      filterSource: 'TikTok',
    },
    {
      title: 'X (Twitter)',
      icon: <XTwitterIconSection />,
      items: [],
      filterSource: 'X (Twitter)',
    },
  ];

  platformSections.forEach(section => {
    section.items = mockItems
      .filter(item => item.source === section.filterSource)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 3); // Pega os 3 itens mais recentes para cada plataforma
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-background text-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-6">
            Acompanhe as últimas tendências e notícias das principais plataformas em um só lugar.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Conteúdo sempre atualizado para você ficar por dentro de tudo!
          </p>
        </div>
      </section>

      {/* Featured Carousel Section */}
      <FeaturedCarousel items={featuredNewsItems} />
      
      {/* Content Platform Sections */}
      {platformSections.map(section => (
        <ContentPlatformSection
          key={section.title}
          title={section.title}
          icon={section.icon}
          items={section.items}
          displayLimit={3}
        />
      ))}
    </>
  );
}
