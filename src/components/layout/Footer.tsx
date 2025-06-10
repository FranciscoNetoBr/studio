
'use client';

import Link from 'next/link';
import { Youtube, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';

const FeedTimeLogoFooter = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-7 w-7">
    <rect width="32" height="32" rx="4" fill="hsl(var(--primary))"/>
    <path d="M11 8H22V12H15V16H21V20H15V26H11V8Z" fill="hsl(var(--primary-foreground))"/>
  </svg>
);

const XTwitterIconFooter = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Últimas Notícias', href: '/latest-news' },
  { name: 'YouTube', href: '/youtube' },
  { name: 'TikTok', href: '/tiktok' },
  { name: 'X (Twitter)', href: '/twitter' },
  { name: 'Instagram', href: '/instagram' },
];

const empresaLinks = [
  { name: 'Sobre Nós', href: '/about' },
  { name: 'Contato', href: '/contact' },
  { name: 'Parcerias', href: '/partnerships' },
  { name: 'Imprensa', href: '/press' },
];

const legalLinks = [
  { name: 'Termos de Uso', href: '/terms' },
  { name: 'Política de Privacidade', href: '/privacy' },
  { name: 'Cookies', href: '/cookies' },
  { name: 'LGPD', href: '/lgpd' },
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-t border-border text-foreground">
      <div className="container mx-auto px-4 py-10 md:py-16 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Coluna 1: Logo, Descrição, Social, Contato */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center text-2xl font-headline text-foreground hover:text-primary transition-colors">
              <FeedTimeLogoFooter />
              FeedTime
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sua plataforma completa de agregação de conteúdo. Fique por dentro das últimas tendências e notícias das principais redes sociais, tudo em um só lugar.
            </p>
            <div className="flex space-x-3">
              <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary rounded-md">
                <Youtube size={20} />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary rounded-md">
                <Instagram size={20} />
              </Link>
              <Link href="#" aria-label="X (Twitter)" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary rounded-md">
                <XTwitterIconFooter />
              </Link>
            </div>
            <div className="space-y-3 pt-4">
              <h3 className="text-base font-semibold text-primary font-headline">Contato</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="mailto:contato@feedtime.com.br" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={16} className="mr-2.5 shrink-0" />
                    contato@feedtime.com.br
                  </Link>
                </li>
                <li>
                  <Link href="tel:+5511999999999" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={16} className="mr-2.5 shrink-0" />
                    +55 (11) 99999-9999
                  </Link>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <MapPin size={16} className="mr-2.5 shrink-0" />
                  São Paulo, SP - Brasil
                </li>
              </ul>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-primary font-headline">Navegação</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-primary font-headline">Empresa</h3>
            <ul className="space-y-2 text-sm">
              {empresaLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-primary font-headline">Legal</h3>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter - Abaixo das colunas principais em telas menores, na última coluna em telas maiores */}
        <div className="mt-10 lg:mt-0 lg:col-start-4 lg:col-span-2 xl:col-start-5 xl:col-span-1">
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-base font-semibold text-primary font-headline mb-2">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Receba as últimas novidades diretamente no seu email.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Seu email" className="bg-input flex-grow" aria-label="Email para newsletter"/>
              <Button type="submit" variant="default" size="default">
                OK
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Separator className="my-8 bg-border" />
      
      <div className="container mx-auto px-4 pb-8 max-w-screen-xl text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {currentYear} FeedTime. Todos os direitos reservados. Feito com ♥ por [Seu Nome/Empresa Aqui]
        </p>
      </div>
    </footer>
  );
}
