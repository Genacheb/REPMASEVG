import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, CheckCircle2 } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Пожалуйста, введите ваше имя" }),
  phone: z.string().regex(/^(\+7|8)?[\s-]?\(?9[0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/, {
    message: "Введите корректный номер телефона (например, +7 999 000 00 00)"
  }),
});

type FormData = z.infer<typeof formSchema>;

export function CallbackForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", data);
      setIsSubmitted(true);
      toast({
        title: "Заявка принята!",
        description: "Я перезвоню вам в течение 5-10 минут.",
      });
      reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Что-то пошло не так. Попробуйте позвонить напрямую.",
      });
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto border-green-200 bg-green-50">
        <CardContent className="pt-10 pb-10 flex flex-col items-center text-center space-y-4">
          <CheckCircle2 className="w-16 h-16 text-green-600 animate-bounce" />
          <h3 className="text-2xl font-bold text-green-800">Спасибо за обращение!</h3>
          <p className="text-green-700">Заявка получена. Я свяжусь с вами в ближайшее время.</p>
          <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4 border-green-300 text-green-700 hover:bg-green-100">
            Отправить еще одну
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto shadow-2xl border-primary/20 overflow-hidden">
      <CardHeader className="bg-primary text-primary-foreground">
        <CardTitle className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          Бесплатная консультация
        </CardTitle>
        <CardDescription className="text-primary-foreground/90">
          Оставьте заявку, и я перезвоню вам в течение 5 минут для уточнения деталей поломки.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ваше имя</Label>
            <Input
              id="name"
              placeholder="Иван Иванов"
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Номер телефона</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              {...register("phone")}
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
          </div>
          <Button 
            type="submit" 
            className="w-full btn-cta"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Заказать звонок"}
          </Button>
          <p className="text-[10px] text-center text-muted-foreground">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
