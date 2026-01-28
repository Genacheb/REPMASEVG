import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, Star, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MASTER_DATA } from '@/lib/index';
import { IMAGES } from '@/assets/images';

/**
 * Главный блок Hero с фото мастера Евгения.
 * Содержит основные преимущества, призыв к действию и информацию о самозанятости.
 */
export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-0 pb-12 md:pt-0 md:pb-24 overflow-hidden bg-background">
      {/* Декоративные фоновые элементы для визуального доверия */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-primary/5 rounded-bl-[100px] hidden lg:block animate-pulse" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Текстовый контент с анимацией появления */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">
              <Star className="h-4 w-4 fill-primary" />
              <span>Частный мастер в Краснодаре</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-secondary">
              Профессиональный ремонт <br />
              <span className="text-primary">бытовой техники</span> <br />
              у вас дома
            </h1>

            <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
              <p className="text-lg md:text-xl text-muted-foreground">
                Ремонт духовых шкафов, варочных панелей и стиральных машин.
                Работаю без посредников и наценок сервисных центров.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-secondary font-medium justify-center lg:justify-start">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>Приеду за 40 минут</span>
                </div>
                <div className="flex items-center gap-2 text-secondary font-medium justify-center lg:justify-start">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Опыт работы {MASTER_DATA.experience}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="btn-cta group h-auto py-4"
                onClick={scrollToContact}
              >
                Вызвать мастера
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Button>
              
              <div className="flex flex-col justify-center text-left border-l-2 border-border pl-4 hidden sm:flex">
                <span className="text-sm font-bold text-secondary text-nowrap">Работаю сегодня</span>
                <span className="text-xs text-muted-foreground">Выезд во все районы и пригород</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold">Гарантия до 1 года</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">Диагностика — 0₽</span>
              </div>
            </div>

            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium opacity-60">
              * Самозанятый мастер {MASTER_DATA.name}. Официальный чек и договор. © 2026
            </p>
          </motion.div>

          {/* Визуальный блок с фото мастера и цитатой */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-[4/5] md:aspect-square lg:aspect-[4/5] group">
              <img
                src={IMAGES.GENERATED_IMAGE_JANUARY_26_2026_2_16PM_47}
                alt={`Мастер ${MASTER_DATA.name} за ремонтом бытовой техники в Краснодаре`}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-card border-none">
                <blockquote className="text-sm md:text-base font-bold italic text-secondary leading-relaxed">
                  "Чиню технику как для себя. Все запчасти в наличии, поэтому 90% ремонтов делаю за один визит."
                </blockquote>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xs font-bold text-primary">— {MASTER_DATA.name}, ваш мастер</p>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-3 w-3 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Плавающий элемент доверия */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-card p-4 rounded-2xl shadow-xl border border-border hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary">Работа по договору</p>
                  <p className="text-[10px] text-muted-foreground">Юридическая защита</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
