import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Zap, 
  MessageCircle, 
  Send 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MASTER_DATA } from "@/lib/index";

export function ContactSection() {
  const { phone, phoneDisplay, areas, workingHours, whatsapp, telegram } = MASTER_DATA;

  return (
    <section id="contacts" className="relative scroll-mt-20 py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              На связи
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Свяжитесь со мной напрямую
            </h2>
            <p className="text-muted-foreground text-lg">
              Я работаю как частный мастер без посредников и диспетчерских служб. Вы общаетесь со мной лично, 
              получаете честную цену без накруток и гарантию на выполненные работы.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0 transition-transform group-hover:scale-110">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Телефон для связи:</p>
                <a 
                  href={`tel:${phone}`} 
                  className="text-2xl font-bold hover:text-primary transition-colors"
                >
                  {phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Зоны обслуживания:</p>
                <p className="font-medium">{areas.join(', ')}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Краснодар (все районы), Динская, Елизаветинская, Новая Адыгея, Яблоновский и пригород
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Время работы:</p>
                <p className="font-medium">{workingHours}</p>
                <p className="text-sm text-muted-foreground">Выезд в день обращения без выходных</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="trust-badge">
              <ShieldCheck className="w-4 h-4" />
              Гарантия 1 год
            </div>
            <div className="trust-badge">
              <Zap className="w-4 h-4" />
              Выезд за 40 мин
            </div>
          </div>
        </div>

        <Card className="glass-card border-none overflow-hidden">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold">Нужен срочный ремонт?</h3>
                <p className="text-muted-foreground">
                  Позвоните мне прямо сейчас — я проконсультирую вас бесплатно и назову ориентировочную стоимость
                </p>
              </div>
              <div className="grid gap-4">
                <Button asChild className="w-full btn-cta py-8 text-xl">
                  <a href={`tel:${phone}`} className="flex items-center justify-center gap-3">
                    <Phone className="w-6 h-6 animate-pulse" />
                    Позвонить мастеру
                  </a>
                </Button>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" asChild className="border-primary/20 hover:bg-primary/5 h-12 rounded-xl">
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="border-primary/20 hover:bg-primary/5 h-12 rounded-xl">
                    <a href={telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Send className="w-5 h-5 text-[#0088cc]" />
                      Telegram
                    </a>
                  </Button>
                </div>

                <p className="text-center text-xs text-muted-foreground italic mt-2">
                  * Отвечаю лично я, Евгений. Если не взял трубку — значит на заказе, обязательно перезвоню в течение 10 минут.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <AnimatePresence>
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
        >
          <Button asChild className="w-full btn-cta py-7 text-lg shadow-2xl rounded-2xl border-2 border-white/20">
            <a href={`tel:${phone}`} className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 animate-pulse" />
              Вызвать мастера
            </a>
          </Button>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
