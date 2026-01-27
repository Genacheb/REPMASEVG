import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCheck, Clock, ShieldCheck, MapPin, BadgePercent } from 'lucide-react';
import { motion } from 'framer-motion';

const advantages = [
  {
    title: 'Прямой контакт',
    description: 'Вы общаетесь напрямую со мной, а не с оператором колл-центра. Это исключает недопонимание и переплаты посредникам.',
    icon: UserCheck,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    title: 'Выезд за 40 минут',
    description: 'Оперативно выезжаю в любой район Краснодара (ФМР, ЮМР, ГМР, Центр) и пригород в течение 40 минут после вашего звонка.',
    icon: Clock,
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    title: 'Гарантия качества',
    description: 'Предоставляю официальную гарантию на выполненные работы и установленные запчасти сроком до 12 месяцев по договору.',
    icon: ShieldCheck,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    title: 'Честные цены',
    description: 'Диагностика — 0₽ при ремонте. Озвучиваю финальную стоимость до начала работ. Цены ниже сервисных центров на 30-50%.',
    icon: BadgePercent,
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    title: 'Ремонт на дому',
    description: 'Весь инструмент и запчасти привожу с собой. Ремонтирую технику на ваших глазах за один визит в 95% случаев.',
    icon: MapPin,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
];

export function AdvantagesSection() {
  return (
    <div className="bg-muted/30 w-full">
      <section id="advantages" className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="trust-badge mb-4 mx-auto w-fit">
              Надежность и опыт
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-secondary">
              Почему выбирают частного мастера?
            </h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8" />
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Я работаю на свою репутацию и дорожу каждым клиентом. Мой подход — это профессиональный сервис 
              без лишних бюрократических проволочек и наценок крупных компаний.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 bg-card overflow-hidden">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-2xl ${adv.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <adv.icon className={`h-7 w-7 ${adv.color}`} />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-secondary group-hover:text-primary transition-colors">
                    {adv.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {adv.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden lg:flex flex-col justify-center items-center p-8 border-2 border-dashed border-primary/20 rounded-2xl bg-primary/5 text-center"
          >
            <h3 className="text-xl font-bold text-secondary mb-3">Нужна консультация?</h3>
            <p className="text-muted-foreground mb-6">
              Опишите поломку по телефону, и я сориентирую вас по примерной стоимости ремонта.
            </p>
            <a 
              href="tel:+79146711299"
              className="text-primary font-bold text-xl hover:text-accent transition-colors underline underline-offset-8 decoration-accent/30"
            >
              +7 (914) 671-12-99
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
