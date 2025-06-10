'use client';

export default function Home() {
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

      {/* Placeholder for Carousel/Featured Content Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center text-muted-foreground">
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 h-[500px] min-h-[400px]">
                <div className="flex-1 bg-card rounded-lg p-6 flex flex-col justify-end items-start 
                                relative overflow-hidden shadow-2xl 
                                bg-[url('https://placehold.co/800x600/1A1A1A/333333.png?text=Not%C3%ADcias+do+YouTube')] 
                                bg-cover bg-center"
                                data-ai-hint="youtube news">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                     <div className="relative z-10 text-left">
                        <h2 className="text-3xl font-bold text-white mb-2">Notícias do YouTube</h2>
                        <p className="text-neutral-300 text-sm">Os vídeos e criadores em alta no momento. Conteúdo de diversas categorias.</p>
                     </div>
                </div>
                <div className="flex-1 bg-card rounded-lg p-6 flex flex-col justify-end items-start 
                                relative overflow-hidden shadow-2xl 
                                bg-[url('https://placehold.co/800x600/4B0082/6A0DAD.png?text=Destaques+do+Instagram')] 
                                bg-cover bg-center"
                                data-ai-hint="instagram highlights">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <svg className="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2.25c-2.624 0-2.95.012-3.984.058-.994.046-1.685.198-2.28.418A3.91 3.91 0 003.69 4.31a3.91 3.91 0 00-1.588 2.042c-.22.595-.372 1.286-.418 2.28C1.632 9.675 1.62 9.998 1.62 12.375s.012 2.7.058 3.734c.046.994.198 1.685.418 2.28A3.91 3.91 0 003.69 19.97a3.91 3.91 0 002.042 1.588c.595.22 1.286.372 2.28.418 1.033.046 1.357.058 3.983.058s2.95-.012 3.984-.058c.994-.046 1.685-.198 2.28-.418a3.91 3.91 0 001.588-2.042 3.91 3.91 0 002.042-1.588c.22-.595.372-1.286.418-2.28.046-1.033.058-1.357.058-3.983s-.012-2.95-.058-3.984c-.046-.994-.198-1.685-.418-2.28A3.91 3.91 0 0020.31 4.31a3.91 3.91 0 00-1.588-2.042c-.595-.22-1.286-.372-2.28-.418C15.402 1.632 15.078 1.62 12.375 1.62H12zm0 1.625c2.564 0 2.872.01 3.89.056.974.043 1.503.185 1.87.334.453.182.77.399 1.085.715.315.315.533.632.715 1.085.149.367.29.896.334 1.87.046 1.018.056 1.326.056 3.89s-.01 2.872-.056 3.89c-.043.974-.185 1.503-.334 1.87a2.289 2.289 0 01-.715 1.085 2.289 2.289 0 01-1.085.715c-.367.149-.896.29-1.87.334-1.018.046-1.326.056-3.89.056s-2.872-.01-3.89-.056c-.974-.043-1.503-.185-1.87-.334a2.289 2.289 0 01-1.085-.715 2.289 2.289 0 01-.715-1.085c-.149-.367-.29-.896-.334-1.87-.046-1.018-.056-1.326-.056-3.89s.01-2.872.056-3.89c.043-.974.185-1.503.334-1.87.182-.453.399-.77.715-1.085a2.289 2.289 0 011.085-.715c.367-.149.896-.29 1.87-.334C9.128 3.885 9.436 3.875 12 3.875z" clipRule="evenodd"/><path fillRule="evenodd" d="M12 7.125a4.875 4.875 0 100 9.75 4.875 4.875 0 000-9.75zM8.25 12a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z" clipRule="evenodd"/><path d="M17.625 7.312a.938.938 0 10-1.876.001.938.938 0 001.876 0z"/></svg>
                        <span className="text-white text-xs font-medium">instagram</span>
                        <span className="text-neutral-400 text-xs">Há 5 minutos</span>
                    </div>
                    <div className="relative z-10 text-left">
                        <h2 className="text-3xl font-bold text-white mb-2">Destaques do Instagram</h2>
                        <p className="text-neutral-300 text-sm">As melhores publicações, stories e reels para você ficar por dentro das novidades.</p>
                    </div>
                </div>
            </div>
            <p className="mt-8 text-sm">Note: Full carousel functionality with navigation arrows is not implemented in this step.</p>
          </div>
        </div>
      </section>
    </>
  );
}
