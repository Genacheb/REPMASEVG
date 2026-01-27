import React, { useEffect } from 'react';
import { Analytics } from '@/components/Analytics';
import { SEOOptimization } from '@/components/SEOOptimization';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AdvantagesSection } from '@/components/AdvantagesSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WorkGallery } from '@/components/WorkGallery';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';

const Index: React.FC = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Мастер Евгений - Ремонт бытовой техники в Краснодаре",
      "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
      "url": window.location.origin,
      "telephone": "+79146711299",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Красная",
        "addressLocality": "Краснодар",
        "postalCode": "350000",
        "addressCountry": "RU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.03547,
        "longitude": 38.975313
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "24:00"
      },
      "priceRange": "₽₽",
      "description": "Ремонт духовых шкафов, варочных панелей и стиральных машин в Краснодаре. Опыт 12 лет, выезд за 40 минут."
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/20">
      <SEOOptimization 
        title="Мастер Евгений — Ремонт бытовой техники в Краснодаре | Выезд за 40 минут"
        description="Частный мастер по ремонту духовых шкафов, варочных панелей и стиральных машин. 12 лет опыта. Честные цены, гарантия до 1 года. Работаю по Краснодару и пригороду."
        keywords="ремонт бытовой техники Краснодар, мастер по ремонту стиральных машин, ремонт духовых шкафов Краснодар, ремонт варочных панелей, частный мастер Краснодар"
      />
      <Analytics />
      
      <Header />

      <main className="flex-grow">
        <section id="hero" className="p-0 md:p-0 lg:p-0 max-w-none">
          <HeroSection />
        </section>

        <AdvantagesSection />

        <section id="services">
          <ServicesSection />
        </section>

        <section id="pricing">
          <PricingSection />
        </section>

        <WorkGallery />

        <FAQSection />

        <section id="contacts">
          <ContactSection />
        </section>
      </main>

      <footer className="border-t border-border bg-muted/30 py-12 text-sm text-muted-foreground">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
            <div>
              <p className="font-bold text-secondary text-lg mb-2">© 2026 Мастер Евгений</p>
              <p>Профессиональный ремонт бытовой техники в Краснодаре и пригороде.</p>
              <p className="mt-1 text-xs opacity-80">ИНН 231114567890 (Самозанятый)</p>
              <p className="mt-1">Работаем ежедневно с 08:00 до 24:00.</p>
            </div>
            <div className="md:text-right">
              <p className="font-medium text-secondary">Обслуживание:</p>
              <p className="mt-1">Краснодар, Динская, Елизаветинская, Новая Адыгея.</p>
              <p className="mt-1">
                Прямой номер: <a href="tel:+79146711299" className="text-primary hover:underline font-bold">+7 (914) 671-12-99</a>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/50 opacity-60 text-xs">
            <p>
              Вся представленная на сайте информация не является публичной офертой (ст. 437 ГК РФ). 
              Окончательная стоимость работ определяется мастером после диагностики. 
              Оригинальные запчасти и гарантия до 12 месяцев.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;