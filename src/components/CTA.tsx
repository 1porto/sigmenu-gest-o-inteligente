import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl gradient-primary p-8 md:p-12 text-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
              Pronto para transformar seu restaurante?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Junte-se a milhares de restaurantes que já usam o SIGMENU para crescer e vender mais.
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              Começar Teste Grátis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}