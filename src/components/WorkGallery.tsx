import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { IMAGES } from "@/assets/images";
import { Camera } from "lucide-react";

const workImages = [
  {
    src: IMAGES.PHOTO_2025_08_21_17_46_15_48,
    title: "Ремонт стиральной машины",
    description: "Замена подшипников и ремонт барабана стиральной машины на дому у клиента в Краснодаре. Работа выполнена за 2 часа."
  },
  {
    src: IMAGES.PHOTO_2026_01_26_14_40_17_43,
    title: "Ремонт духового шкафа",
    description: "Диагностика и ремонт внутренних компонентов духового шкафа. Восстановление цепей питания и замена ТЭНа."
  },
  {
    src: IMAGES.PHOTO_2026_01_26_14_40_00_44,
    title: "Ремонт варочной панели",
    description: "Замена нагревательных элементов и ремонт платы управления сенсорной панели. Проверка всех режимов работы."
  },
  {
    src: IMAGES.PHOTO_2025_08_21_17_46_05_50,
    title: "Разборка и диагностика",
    description: "Полная разборка стиральной машины для дефектовки и замены изношенных узлов. Использую только оригинальные детали."
  },
  {
    src: IMAGES.PHOTO_2025_08_18_22_31_22_49,
    title: "Обслуживание техники",
    description: "Профилактическая чистка и устранение засора в системе слива. Регулярное ТО продлевает жизнь вашей технике."
  },
  {
    src: IMAGES.PHOTO_2025_08_18_22_31_54_51,
    title: "Ремонт электроники",
    description: "Сложный ремонт модуля управления: восстановление дорожек после короткого замыкания и замена реле."
  }
];

export function WorkGallery() {
  return (
    <div className="bg-muted/30">
      <section id="gallery" className="scroll-mt-20">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            <Camera className="w-4 h-4" />
            <span>Фото моих работ</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-secondary"
          >
            Примеры выполненных ремонтов
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Реальные фотографии с объектов в Краснодаре и пригороде. 
            Работаю аккуратно, соблюдаю чистоту и всегда убираю за собой.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {workImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-border bg-card shadow-md hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Выполнено мастером
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="font-bold text-xl mb-3 text-secondary group-hover:text-primary transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {image.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground italic">
            © 2026. Все фотографии сделаны лично мной в процессе выполнения заказов в Краснодаре, Динской и Адыгее.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
