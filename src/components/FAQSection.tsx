import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Сколько времени занимает ремонт техники?",
    answer: "В 90% случаев ремонт выполняется за один визит в день обращения. Простые неисправности (замена ТЭНа, датчиков, чистка) занимают от 40 до 60 минут. Сложный ремонт электронных модулей управления может потребовать до 2-3 рабочих дней. Информация актуальна на 2026 год."
  },
  {
    question: "Выезжаете ли вы в пригород Краснодара?",
    answer: "Да, я работаю по всему Краснодару и ближайшим населенным пунктам. Выезжаю в станицу Динская, станицу Елизаветинская, поселок Яблоновский и Новую Адыгею. Выезд при условии выполнения ремонта — бесплатный."
  },
  {
    question: "Какую гарантию вы предоставляете на работу?",
    answer: "Как частный мастер, я дорожу своей репутацией. На все выполненные работы и установленные запчасти предоставляю официальную гарантию от 3 до 12 месяцев. Вы получаете гарантийный талон с моей подписью и печатью."
  },
  {
    question: "Нужно ли везти духовой шкаф или стиральную машину в мастерскую?",
    answer: "Нет, в 99% случаев ремонт производится прямо у вас на дому. У меня в машине всегда есть необходимый профессиональный инструмент и запас основных комплектующих для большинства марок техники."
  },
  {
    question: "Сколько стоит ремонт варочной панели или духовки?",
    answer: "Стоимость работ в 2026 году начинается от 1100–1200 рублей. Точная цена зависит от типа поломки и стоимости запчастей. Позвоните мне, опишите проблему, и я сориентирую вас по примерной стоимости ремонта еще до выезда."
  },
  {
    question: "С какими брендами бытовой техники вы работаете?",
    answer: "Я ремонтирую технику практически всех популярных брендов: Bosch, Samsung, LG, Electrolux, Gorenje, Hansa, Ariston, Indesit, Zanussi, Candy и многие другие, включая премиальные и редкие марки."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="trust-badge mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Помощь и поддержка</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Частые вопросы клиентов
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Здесь собраны ответы на самые популярные вопросы о ремонте бытовой техники в Краснодаре и пригороде. Информация обновлена в январе 2026 года.
          </p>
        </div>

        <div className="glass-card p-4 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-border/50 last:border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-lg py-5 hover:text-primary transition-colors hover:no-underline [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Не нашли ответ на свой вопрос? <br className="md:hidden" />
            <a 
              href="tel:+79146711299"
              className="text-primary font-bold hover:underline ml-1 transition-all"
            >
              Позвоните мне напрямую
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
