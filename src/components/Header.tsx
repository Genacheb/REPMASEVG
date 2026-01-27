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

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-secondary/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300 shadow-2xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-secondary hover:text-primary transition-colors py-3 border-b border-border/50"
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="pt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Свяжитесь напрямую:</span>
              <a
                href={`tel:${MASTER_DATA.phone}`}
                className="flex items-center gap-4 text-xl font-bold text-secondary"
              >
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                {MASTER_DATA.phoneDisplay}
              </a>
            </div>
            
            <Button 
              className="w-full h-14 text-lg font-bold bg-accent text-accent-foreground rounded-xl shadow-lg shadow-accent/20"
              onClick={handleContactClick}
            >
              Вызвать мастера
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-xs font-medium">
                Работаю сегодня: {MASTER_DATA.workingHours}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
