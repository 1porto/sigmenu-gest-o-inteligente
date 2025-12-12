import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare, Star } from "lucide-react";

const testimonials = [
  {
    name: "Massimiliano",
    role: "Dono",
    restaurant: "Duna Beach",
    initials: "DB",
    message: "Olá meninos, quero agradecer pelo sistema, está muito melhor para o financeiro e para o atendimento! Bem melhor gerenciar tudo em um só.",
  },
  {
    name: "Marco",
    role: "Dono",
    restaurant: "Va Bene",
    initials: "VB",
    message: "Oi meninos! Passando só pra agradecer sobre o sistema de reservas, o que facilitou o meu lado não está escrito 😂 Valeu pela parceria!",
  },
  {
    name: "Seichele",
    role: "Dona",
    restaurant: "Seu Sergipe",
    initials: "SS",
    message: "O PDV de vocês também é muito prático, o pessoal tá gostando bastante aqui. E o acesso online também muito top, fico acompanhando sempre kkkk. Obrigado!",
  },
  {
    name: "Geraldo",
    role: "Dono",
    restaurant: "Mykonos",
    initials: "MK",
    message: "Boaa tarde! só um feedback rapidão: o sistema de reservas está top! estamos usando há 3 semanas e desde lá facilitou muito o meu lado e o dos clientes que já fazem a reserva na hora. Valeu!",
  },
  {
    name: "Bruna",
    role: "Dona",
    restaurant: "Padano",
    initials: "PD",
    message: "Boa tarde pessoal! queria agradecer que desde que instalamos, pra gerenciar tanto os pedidos quanto o delivery ficou muito mais fácil. Obrigado 🙏",
  },
  {
    name: "Lucas",
    role: "Dono",
    restaurant: "Hiroki Sushi Bar",
    initials: "HK",
    message: "Boa tarde pessoal! queria agradecer que desde que instalamos, pra gerenciar tanto os pedidos quanto o delivery ficou muito mais fácil. Obrigado 🙏",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient italic">O que nossos clientes dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que os donos de restaurantes estão falando sobre o SIGMENU e como nosso sistema tem transformado seus negócios.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
            {/* Decorative circles */}
            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-primary/30" />
            <div className="absolute top-4 left-10 w-2 h-2 rounded-full bg-accent/40" />
            
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
              {/* Left side - Profile */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border/50 flex items-center justify-center mb-4 shadow-md">
                  <span className="text-2xl font-bold text-primary">{current.initials}</span>
                </div>
                <h3 className="font-semibold text-lg">{current.name}</h3>
                <p className="text-sm text-muted-foreground">{current.role}</p>
                <div className="flex gap-0.5 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Right side - Testimonial */}
              <div className="border-l-0 md:border-l border-border/50 md:pl-8">
                <div className="flex items-start gap-3 mb-4">
                  <MessageSquare className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                  <p className="text-foreground leading-relaxed">{current.message}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>via WhatsApp</span>
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
