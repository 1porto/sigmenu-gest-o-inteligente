import duna from "@/assets/logos/duna.jpg";
import farao from "@/assets/logos/farao.jpg";
import carrodebois from "@/assets/logos/carrodebois.jpg";
import deck from "@/assets/logos/deck.jpg";
import cats from "@/assets/logos/cats.jpg";
import domus from "@/assets/logos/domus.jpg";
import staleiro from "@/assets/logos/staleiro.jpg";
import mykonos from "@/assets/logos/mykonos.jpg";
import sergipe from "@/assets/logos/sergipe.jpg";
import perron from "@/assets/logos/perron.jpg";
import pirata from "@/assets/logos/pirata.jpg";
import pitstop from "@/assets/logos/pitstop.jpg";
import rendeiro from "@/assets/logos/rendeiro.jpg";
import hiroki from "@/assets/logos/hiroki.jpg";
import loukanos from "@/assets/logos/loukanos.jpg";
import bembem from "@/assets/logos/bembem.jpg";
import fratelli from "@/assets/logos/fratelli.jpg";
import samore from "@/assets/logos/samore.jpg";
import mangiare from "@/assets/logos/mangiare.jpg";

const logos = [
  { src: duna, alt: "Duna" },
  { src: farao, alt: "Faraó na Praia" },
  { src: carrodebois, alt: "Carro de Bois" },
  { src: deck, alt: "Deck Choperia" },
  { src: cats, alt: "Cats Pizza" },
  { src: domus, alt: "Domus" },
  { src: staleiro, alt: "Staleiro Beach Club" },
  { src: mykonos, alt: "Mykonos Restaurante" },
  { src: sergipe, alt: "Sergipe" },
  { src: perron, alt: "Perron Cocina Mexicana" },
  { src: pirata, alt: "O Pirata Churrascaria" },
  { src: pitstop, alt: "Pit Stop Espetaria" },
  { src: rendeiro, alt: "Rendeiro" },
  { src: hiroki, alt: "Hiroki" },
  { src: loukanos, alt: "Loukanos" },
  { src: bembem, alt: "Ben & Bem Restaurante" },
  { src: fratelli, alt: "Fratelli" },
  { src: samore, alt: "Samore Pasta & Pizza" },
  { src: mangiare, alt: "Mangiare Pizzaria" },
];

export const LogoCarousel = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Restaurantes que confiam no <span className="text-gradient">SigMenu</span>
        </h2>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex animate-marquee">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-4 md:mx-6"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-background rounded-xl shadow-sm flex items-center justify-center p-3 md:p-4 transition-transform hover:scale-105">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-4 md:mx-6"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-background rounded-xl shadow-sm flex items-center justify-center p-3 md:p-4 transition-transform hover:scale-105">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
