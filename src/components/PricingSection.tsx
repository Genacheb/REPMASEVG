import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const pricingData = [
  { service: "Выезд и диагностика (при выполнении ремонта)", price: "0 ₽" },
  { service: "Выезд и диагностика (без проведения работ)", price: "500 ₽" },
  { service: "Ремонт духового шкафа", price: "от 1200 ₽" },
  { service: "Ремонт варочной панели", price: "от 1100 ₽" },
  { service: "Ремонт стиральной машины", price: "от 1200 ₽" },
  { service: "Замена ТЭНа (нагревательного элемента)", price: "от 1500 ₽" },
  { service: "Замена подшипников (бак в сборе/разборный)", price: "от 3500 ₽" },
  { service: "Ремонт электронного модуля (платы управления)", price: "от 2500 ₽" },
  { service: "Устранение засора / извлечение инородных тел", price: "от 900 ₽" },
  { service: "Замена конфорки (стеклокерамика/чугун)", price: "от 1800 ₽" },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-muted/30">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <div className="trust-badge mx-auto w-fit mb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Фиксированные цены</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
            Прозрачная стоимость услуг
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Я работаю как частный мастер, поэтому мои цены на 30-40% ниже, чем в крупных сервисных центрах. 
            Стоимость фиксируется до начала работ.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden border-none shadow-2xl shadow-primary/5">
          <CardHeader className="bg-secondary text-secondary-foreground p-8">
            <CardTitle className="text-2xl text-white">Прайс-лист на 2026 год</CardTitle>
            <CardDescription className="text-secondary-foreground/80">
              Указана стоимость работ без учета запасных частей
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50 hover:bg-muted/50 border-b">
                    <TableHead className="w-[70%] py-4 pl-8 text-secondary font-bold">Вид работы</TableHead>
                    <TableHead className="text-right py-4 pr-8 text-secondary font-bold">Цена</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingData.map((item, index) => (
                    <TableRow key={index} className="hover:bg-primary/5 transition-colors border-b border-border/50">
                      <TableCell className="font-medium py-4 pl-8 text-foreground">{item.service}</TableCell>
                      <TableCell className="text-right font-bold text-primary py-4 pr-8">
                        {item.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-border shadow-sm">
            <div className="p-3 rounded-xl bg-accent/10 text-accent">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-secondary">Бесплатная диагностика</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                При согласии на ремонт диагностика проводится абсолютно бесплатно. Вы платите только за результат.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-border shadow-sm">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-secondary">Итоговая стоимость</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Зависит от сложности поломки и стоимости комплектующих. Мастер озвучит точную сумму после осмотра техники.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            * Не является публичной офертой. Точную стоимость уточняйте по телефону или после диагностики.
          </p>
        </div>
      </div>
    </section>
  );
}
