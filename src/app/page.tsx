
'use client';

import { ContentPlatformSection } from '@/components/content/ContentPlatformSection';
import { mockItems } from '@/data/mock';
import type { ContentItem } from '@/types';

// Ícones para as seções (SVG inline)
const UltimasNoticiasIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="hsl(var(--primary))" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="24" height="24" rx="4"/>
  </svg>
);

const YouTubeIconSection = () => (
  <svg width="32" height="22" viewBox="0 0 28 20" fill="currentColor" aria-hidden="true">
    <path d="M27.3459 3.0074C27.0213 1.82821 26.0718 0.891968 24.8735 0.573968C22.6908 0 14 0 14 0C14 0 5.30919 0 3.12643 0.573968C1.92821 0.891968 0.978711 1.82821 0.654086 3.0074C0 5.16016 0 10.0001 0 10.0001C0 10.0001 0 14.8401 0.654086 16.9928C0.978711 18.1719 1.92821 19.1082 3.12643 19.4262C5.30919 20.0001 14 20.0001 14 20.0001C14 20.0001 22.6908 20.0001 24.8735 19.4262C26.0718 19.1082 27.0213 18.1719 27.3459 16.9928C28 14.8401 28 10.0001 28 10.0001C28 10.0001 28 5.16016 27.3459 3.0074ZM11.1993 14.2858V5.71445L18.4799 10.0001L11.1993 14.2858Z"/>
  </svg>
);

const XTwitterIconSection = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

const TikTokIconSection = () => (
  <svg width="28" height="32" viewBox="0 0 28 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M20.673 0.00012207C18.2666 -0.0988707 16.0815 1.21064 15.1003 3.30488C15.0217 3.47803 14.9633 3.65766 14.9233 3.83988V16.6084C14.9283 18.9163 14.0098 21.139 12.3708 22.7855C10.7318 24.4321 8.51469 25.3524 6.2099 25.3495C3.82835 25.3495 1.61983 24.3709 0 22.7118V27.4832C1.67081 29.2337 3.90559 30.2645 6.2423 30.2674H6.34681C10.0959 30.2674 13.4342 28.0051 14.7423 24.5895C14.8607 24.2988 14.9233 23.9758 14.9233 23.617V8.4015C14.9233 8.0175 15.0058 7.6485 15.1843 7.33075C15.9728 5.80363 17.6298 4.7175 19.4633 4.7175C20.218 4.7175 20.9378 4.89738 21.5618 5.22738V0.747878C21.2695 0.253378 20.9095 -0.00262221 20.673 0.00012207Z"/>
    <path d="M28.0001 10.5489C24.7629 10.5489 22.0774 13.2344 22.0774 16.4716C22.0774 19.7088 24.7629 22.3943 28.0001 22.3943V27.117C22.0646 27.117 17.3418 22.3943 17.3418 16.4588C17.3418 10.5362 22.0646 5.79956 28.0001 5.79956V10.5489Z"/>
  </svg>
);

const InstagramIconSection = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.268.058 2.15.247 2.908.542.844.318 1.496.77 2.058 1.332s1.013 1.214 1.332 2.058c.295.758.484 1.64.542 2.908.058 1.267.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.268-.247 2.15-.542 2.908-.318.844-.77 1.496-1.332 2.058s-1.214 1.013-2.058 1.332c-.758.295-1.64.484-2.908.542-1.267.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.268-.058-2.15-.247-2.908-.542-.844-.318-1.496-.77-2.058-1.332s-1.013-1.214-1.332-2.058c-.295-.758-.484-1.64-.542-2.908-.058-1.267-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.268.247-2.15.542-2.908.318-.844.77-1.496 1.332-2.058S4.76 3.221 5.604 2.903c.758-.295 1.64-.484 2.908-.542C9.783 2.175 10.144 2.163 12 2.163zm0 1.802c-3.116 0-3.476.011-4.69.068-1.17.053-1.846.228-2.362.423-.624.234-1.074.556-1.548 1.03-.474.473-.796.924-1.03 1.548-.195.516-.37 1.192-.423 2.362C2.011 8.524 2 8.884 2 12s.011 3.476.068 4.69c.053 1.17.228 1.846.423 2.362.234.624.556 1.074 1.03 1.548.473.474.924.796 1.548 1.03.516.195 1.192.37 2.362.423 1.214.057 1.574.068 4.69.068s3.476-.011 4.69-.068c1.17-.053 1.846-.228 2.362-.423.624-.234 1.074-.556 1.548-1.03.474-.473.796-.924 1.03-1.548.195-.516-.37-1.192-.423-2.362.057-1.214.068-1.574.068-4.69s-.011-3.476-.068-4.69c-.053-1.17-.228-1.846-.423-2.362-.234-.624-.556-1.074-1.03-1.548-.473-.474-.924-.796-1.548-1.03-.516-.195-1.192-.37-2.362-.423C15.476 3.976 15.116 3.965 12 3.965zm0 2.923c-2.761 0-5.001 2.24-5.001 5.001s2.24 5.001 5.001 5.001 5.001-2.24 5.001-5.001-2.24-5.001-5.001-5.001zm0 8.188c-1.758 0-3.188-1.43-3.188-3.188s1.43-3.188 3.188-3.188 3.188 1.43 3.188 3.188-1.43 3.188-3.188 3.188zm4.187-8.122a1.237 1.237 0 11-2.474 0 1.237 1.237 0 012.474 0z"/>
  </svg>
);


export default function Home() {
  // Itens para "Últimas Notícias" - os 3 mais recentes de todas as fontes
  const ultimasNoticiasItems = mockItems
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 3);

  // Configuração das seções da plataforma
  const platformSectionsConfig: { title: string; icon: React.ReactNode; filterSource?: string; items?: ContentItem[] }[] = [
    {
      title: 'Últimas Notícias',
      icon: <UltimasNoticiasIcon />,
      items: ultimasNoticiasItems, // Itens já filtrados e ordenados
    },
    {
      title: 'YouTube',
      icon: <YouTubeIconSection />,
      filterSource: 'YouTube',
    },
    {
      title: 'X (Twitter)',
      icon: <XTwitterIconSection />,
      filterSource: 'X (Twitter)',
    },
    {
      title: 'TikTok',
      icon: <TikTokIconSection />,
      filterSource: 'TikTok',
    },
    {
      title: 'Instagram',
      icon: <InstagramIconSection />,
      filterSource: 'Instagram',
    },
  ];

  // Prepara os itens para cada seção da plataforma
  const platformSections = platformSectionsConfig.map(section => {
    if (section.items) { // Se os itens já foram fornecidos (caso de Últimas Notícias)
      return section;
    }
    const filteredItems = mockItems
      .filter(item => item.source === section.filterSource)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 3); // Pega os 3 itens mais recentes para cada plataforma
    return { ...section, items: filteredItems };
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
      
      {/* Content Platform Sections */}
      {platformSections.map(section => (
        <ContentPlatformSection
          key={section.title}
          title={section.title}
          icon={section.icon}
          items={section.items || []} // Garante que items seja sempre um array
          displayLimit={3} // Todas as seções mostrarão até 3 itens
        />
      ))}
    </>
  );
}

    