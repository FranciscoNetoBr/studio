'use client';

import { FeaturedCarousel } from '@/components/content/FeaturedCarousel';
import { mockItems } from '@/data/mock'; // Certifique-se que o mockItems está sendo importado

export default function Home() {
  // Simula o carregamento dos últimos 5 itens para o carrossel.
  // Em uma aplicação real, você buscaria esses dados de uma API.
  const featuredNewsItems = mockItems
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 5);

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
      
      {/* Placeholder for other content sections if needed */}
      {/* 
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-center mb-10">Mais Notícias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockItems.slice(0,3).map(item => (
              <div key={item.id} className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.source} - {item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
    </>
  );
}
