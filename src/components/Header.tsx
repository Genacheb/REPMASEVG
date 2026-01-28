import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { cn, MASTER_DATA } from '@/lib/index';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Преимущества', href: '#advantages' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'Цены', href: '#pricing' },
    { name: 'Вопросы', href: '#faq' },
    { name: 'Контакты', href: '#contacts' },
  ];

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md py-3 shadow-sm border-border'
          : 'bg-background/50 backdrop-blur-sm py-5 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex flex-col">
          <a href="#" className="flex flex-col group" onClick={closeMobileMenu}>
            <span className="text-xl font-bold tracking-tight text-secondary group-hover:text-primary transition-colors leading-none">
              Мастер {MASTER_DATA.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 hidden sm:block">
              Ремонт техники в Краснодаре
            </span>
          </a>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <a
            href={`tel:${MASTER_DATA.phone}`}
            className="hidden lg:flex items-center gap-3 text-sm font-bold text-secondary hover:text-primary transition-colors group"
          >
            <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
            </div>
            <span className="whitespace-nowrap">{MASTER_DATA.phoneDisplay}</span>
          </a>
          
          <Button
            size="lg"
            className="hidden sm:flex bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full shadow-lg shadow-accent/20 transition-transform active:scale-95"
            onClick={handleContactClick}
          >
            Вызвать мастера
          </Button>

          <button
            className="md:hidden p-2 text-secondary hover:bg-muted rounded-full transition-colors border border-border"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}
