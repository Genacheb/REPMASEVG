import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { IMAGES } from '@/assets/images';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 'ovens',
    title: 'Ремонт духовых шкафов',
    image: IMAGES.PHOTO_2026_01_26_14_40_17_43,
    description: 'Профессиональное обслуживание электрических духовок любых брендов: Bosch, Samsung, Electrolux и др. Быстрое устранение неисправностей нагрева и электроники.',
    problems: [
      'Духовка не включается или не греет',
      'Не работает переключатель режимов',
      'Проблемы с термостатом (перегрев/недогрев)',
      'Замена нагревательного элемента (ТЭНа)',
      'Ремонт модуля управления (платы)',
      'Замена петель или уплотнителя дверцы',
    ],
  },
  {
    id: 'hobs',
    title: 'Ремонт варочных панелей',
    image: IMAGES.PHOTO_2026_01_26_14_40_00_44,
    description: 'Ремонт индукционных и электрических варочных поверхностей. Быстрая диагностика электроники и сенсорного управления на дому.',
    problems: [
      'Панель не реагирует на сенсор',
      'Ошибка на дисплее (E, F, Er)',
      'Не работают одна или несколько конфорок',
      'Самопроизвольное выключение',
      'Треск или шум при работе индукции',
      'Короткое замыкание при включении',
    ],
  },
  {
    id: 'washers',
    title: 'Ремонт стиральных машин',
    image: IMAGES.PHOTO_2025_08_21_17_46_15_48,
    description: 'Устранение любых неисправностей стиральных машин всех популярных марок. Качественные запчасти и гарантия на работу.',
    problems: [
      'Не сливает или не набирает воду',
      'Сильный шум, гул или вибрация при отжиме',
      'Не крутит барабан (замена щеток/ремня)',
      'Не греет воду (замена ТЭНа)',
      'Протекает вода или не блокируется люк',
      'Ошибки на дисплее и сбои программ',
    ],
  },
];

const brands = [
  'Samsung', 'Bosch', 'GEFEST', 'LG', 'Gorenje', 'Electrolux', 'Ariston', 'Hansa', 'Candy', 'Siemens', 
  'Indesit', 'Smeg', 'AEG', 'Haier', 'Beko', 'Vestel', 'Whirlpool', 'Miele', 'Hotpoint-Ariston', 'Midea', 
  'MAUNFELD', 'DARINA', 'Korting', 'Weissgauff', 'Zanussi', 'Simfer', 'МЕЧТА', 'Kaiser', 'Kuppersberg', 
  'NEFF', 'Лысьва', 'КОМФОРТ', 'LEX', 'Krona', 'Oasis', 'Kuppersbusch', 'IKEA', 'Flama', 'De luxe', 
  'Schaub Lorenz', 'Лада'
];

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-background">
      <div className="text-center mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-secondary tracking-tight">
            Основные направления работы
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Специализируюсь на современной кухонной технике и стиральных машинах. 
            Знаю особенности каждой марки и использую проверенные комплектующие.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="service-card flex flex-col p-0 border-none shadow-xl overflow-hidden group h-full">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
                    {service.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6 md:p-8 flex-grow flex flex-col bg-card">
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <Accordion type="single" collapsible className="w-full mt-auto">
                  <AccordionItem value="details" className="border-none">
                    <AccordionTrigger className="py-2 text-primary font-bold hover:no-underline transition-colors hover:text-accent">
                      Что именно я чиню?
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <ul className="space-y-3">
                        {service.problems.map((problem, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-secondary leading-snug">
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 md:mt-24 p-8 md:p-12 glass-card border-primary/10 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-secondary">Работаю со всеми марками техники</h4>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Если вашего бренда нет в списке — просто позвоните. Я ремонтирую практически любую бытовую технику европейских, азиатских и отечественных производителей.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {brands.map((brand) => (
              <span 
                key={brand}
                className="px-3 py-1.5 md:px-4 md:py-2 bg-secondary/5 border border-secondary/10 rounded-full text-xs md:text-sm font-semibold text-secondary/70 transition-all hover:bg-primary/10 hover:text-primary hover:border-primary/20 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative background blurs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
      </motion.div>
    </section>
  );
}
