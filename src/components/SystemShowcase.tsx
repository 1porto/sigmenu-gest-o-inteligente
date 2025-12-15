import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import telaMesas from "@/assets/screenshots/tela-mesas.png";
import cardapioDigital from "@/assets/screenshots/cardapio-digital.png";
import reservaMesa from "@/assets/screenshots/reserva-mesa.png";
import delivery from "@/assets/screenshots/delivery.png";
import relatorios from "@/assets/screenshots/relatorios.png";

const screenshots = [
  {
    id: 1,
    title: "Gestão de Mesas",
    description: "Controle total das mesas do seu restaurante em tempo real",
    image: telaMesas,
    type: "desktop",
  },
  {
    id: 2,
    title: "Cardápio Digital",
    description: "Cardápio digital personalizado para seus clientes",
    image: cardapioDigital,
    type: "mobile",
  },
  {
    id: 3,
    title: "Reserva de Mesas",
    description: "Sistema de reservas online para seus clientes",
    image: reservaMesa,
    type: "mobile",
  },
  {
    id: 4,
    title: "Gestão de Delivery",
    description: "Acompanhe todos os pedidos de delivery em um só lugar",
    image: delivery,
    type: "desktop",
  },
  {
    id: 5,
    title: "Relatórios Gerais",
    description: "Análises completas para tomada de decisão",
    image: relatorios,
    type: "desktop",
  },
];

export const SystemShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const currentScreen = screenshots[currentIndex];

  return (
    <section id="sistema" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça o <span className="text-gradient">Sistema</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja algumas telas do SIGMENU e descubra como podemos transformar a gestão do seu restaurante
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 rounded-full bg-background/80 backdrop-blur-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 rounded-full bg-background/80 backdrop-blur-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Screenshot Display */}
          <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border/50">
            <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-muted-foreground ml-2">{currentScreen.title}</span>
            </div>
            <div className={`relative ${currentScreen.type === "mobile" ? "flex justify-center py-8 bg-muted/20" : ""}`}>
              <img
                src={currentScreen.image}
                alt={currentScreen.title}
                className={`transition-opacity duration-150 ${
                  currentScreen.type === "mobile" 
                    ? "max-h-[500px] rounded-lg shadow-lg" 
                    : "w-full"
                }`}
              />
            </div>
          </div>

          {/* Caption */}
          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold mb-2">{currentScreen.title}</h3>
            <p className="text-muted-foreground">{currentScreen.description}</p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
