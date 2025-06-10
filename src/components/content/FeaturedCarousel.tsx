
"use client"

import * as React from "react"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { ChevronLeft, ChevronRight } from "lucide-react"

import type { ContentItem } from "@/types"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

interface FeaturedCarouselProps {
  items: ContentItem[]
}

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#E1306C]" // Cor aproximada do ícone do Instagram
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-2.624 0-2.95.012-3.984.058-.994.046-1.685.198-2.28.418A3.91 3.91 0 003.69 4.31a3.91 3.91 0 00-1.588 2.042c-.22.595-.372 1.286-.418 2.28C1.632 9.675 1.62 9.998 1.62 12.375s.012 2.7.058 3.734c.046.994.198 1.685.418 2.28A3.91 3.91 0 003.69 19.97a3.91 3.91 0 002.042 1.588c.595.22 1.286.372 2.28.418 1.033.046 1.357.058 3.983.058s2.95-.012 3.984-.058c.994-.046 1.685-.198 2.28-.418a3.91 3.91 0 001.588-2.042 3.91 3.91 0 002.042-1.588c.22-.595.372-1.286.418-2.28.046-1.033.058-1.357.058-3.983s-.012-2.95-.058-3.984c-.046-.994-.198-1.685-.418-2.28A3.91 3.91 0 0020.31 4.31a3.91 3.91 0 00-1.588-2.042c-.595-.22-1.286-.372-2.28-.418C15.402 1.632 15.078 1.62 12.375 1.62H12zm0 1.625c2.564 0 2.872.01 3.89.056.974.043 1.503.185 1.87.334.453.182.77.399 1.085.715.315.315.533.632.715 1.085.149.367.29.896.334 1.87.046 1.018.056 1.326.056 3.89s-.01 2.872-.056 3.89c-.043.974-.185 1.503-.334 1.87a2.289 2.289 0 01-.715 1.085 2.289 2.289 0 01-1.085.715c-.367.149-.896.29-1.87.334-1.018.046-1.326.056-3.89.056s-2.872-.01-3.89-.056c-.974-.043-1.503-.185-1.87-.334a2.289 2.289 0 01-1.085-.715 2.289 2.289 0 01-.715-1.085c-.149-.367-.29-.896-.334-1.87-.046-1.018-.056-1.326-.056-3.89s.01-2.872.056-3.89c.043-.974.185-1.503.334-1.87.182-.453.399-.77.715-1.085a2.289 2.289 0 011.085-.715c.367-.149.896.29 1.87-.334C9.128 3.885 9.436 3.875 12 3.875z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M12 7.125a4.875 4.875 0 100 9.75 4.875 4.875 0 000-9.75zM8.25 12a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z"
      clipRule="evenodd"
    />
    <path d="M17.625 7.312a.938.938 0 10-1.876.001.938.938 0 001.876 0z" />
  </svg>
)

const YouTubeIcon = () => (
 <svg width="20" height="20" viewBox="0 0 28 20" fill="currentColor" className="text-[#FF0000]" aria-hidden="true">
    <path d="M27.3459 3.0074C27.0213 1.82821 26.0718 0.891968 24.8735 0.573968C22.6908 0 14 0 14 0C14 0 5.30919 0 3.12643 0.573968C1.92821 0.891968 0.978711 1.82821 0.654086 3.0074C0 5.16016 0 10.0001 0 10.0001C0 10.0001 0 14.8401 0.654086 16.9928C0.978711 18.1719 1.92821 19.1082 3.12643 19.4262C5.30919 20.0001 14 20.0001 14 20.0001C14 20.0001 22.6908 20.0001 24.8735 19.4262C26.0718 19.1082 27.0213 18.1719 27.3459 16.9928C28 14.8401 28 10.0001 28 10.0001C28 10.0001 28 5.16016 27.3459 3.0074ZM11.1993 14.2858V5.71445L18.4799 10.0001L11.1993 14.2858Z"/>
  </svg>
)


const SourceIcon: React.FC<{ sourceName: string }> = ({ sourceName }) => {
  if (sourceName.toLowerCase().includes("instagram")) {
    return <InstagramIcon />
  }
  if (sourceName.toLowerCase().includes("youtube")) {
    return <YouTubeIcon />
  }
  // Adicionar outros ícones de fonte conforme necessário
  return null
}


export function FeaturedCarousel({ items }: FeaturedCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const featuredItems = React.useMemo(() => items.slice(0, 5), [items]);

  const [timeAgoStrings, setTimeAgoStrings] = React.useState<string[]>(() =>
    featuredItems.map(() => "")
  );

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  React.useEffect(() => {
    const calculatedTimeAges = featuredItems.map(item =>
      formatDistanceToNow(new Date(item.timestamp), {
        addSuffix: true,
        locale: ptBR,
      })
    );
    setTimeAgoStrings(calculatedTimeAges);
  }, [featuredItems]);

  if (featuredItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-screen-xl">
        <p className="text-center text-muted-foreground">Nenhum item em destaque no momento.</p>
      </div>
    )
  }

  const handleDotClick = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <Carousel setApi={setApi} className="relative" opts={{ loop: true }}>
          <CarouselContent>
            {featuredItems.map((item, index) => {
              const timeAgo = timeAgoStrings[index] || "";
              return (
                <CarouselItem key={item.id} className="md:basis-1/1 lg:basis-1/1">
                  <div className="h-[500px] min-h-[400px] rounded-lg relative overflow-hidden shadow-2xl group">
                    {item.imageUrl && (
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={item.category.split(' ')[0] || item.source.toLowerCase()}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    <div className="absolute top-6 left-6 z-10 flex items-center space-x-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <SourceIcon sourceName={item.source} />
                      <span className="text-white text-xs font-medium">
                        {item.source}
                      </span>
                      {timeAgo && <span className="text-neutral-400 text-xs">· {timeAgo}</span>}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 text-left">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-headline">
                        {item.title}
                      </h2>
                      <p className="text-neutral-300 text-sm md:text-base line-clamp-2">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white border-none h-10 w-10">
            <ChevronLeft size={24} />
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white border-none h-10 w-10">
            <ChevronRight size={24} />
          </CarouselNext>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {Array.from({ length: count }).map((_, index) => (
              <Button
                key={index}
                aria-label={`Ir para slide ${index + 1}`}
                onClick={() => handleDotClick(index)}
                className={`h-2 w-2 rounded-full p-0 transition-colors duration-300 ${
                  current === index ? "bg-primary" : "bg-muted-foreground/50 hover:bg-muted-foreground/80"
                }`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}

    
