// src/components/layout/Footer.tsx
'use client';

import { useEffect, useState } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-t border-border py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <p className="text-sm">
          &copy; {currentYear} FeedTime. Todos os direitos reservados.
        </p>
        {/* Adicione outros links ou informações do rodapé aqui, se necessário */}
      </div>
    </footer>
  );
}
