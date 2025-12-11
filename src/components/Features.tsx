import { 
  Monitor, 
  BarChart3, 
  Users, 
  Smartphone, 
  Truck, 
  Tablet 
} from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: Monitor,
    title: "PDV Completo",
    description: "Sistema de ponto de venda rápido, intuitivo e completo para todas as operações do seu restaurante.",
  },
  {
    icon: BarChart3,
    title: "Financeiro, Fiscal e Estoque",
    description: "Controle total das finanças, emissão de notas fiscais e gestão de estoque integrados.",
  },
  {
    icon: Users,
    title: "Filas e Reservas",
    description: "Gerencie filas de espera e reservas online de forma automatizada e eficiente.",
  },
  {
    icon: Smartphone,
    title: "Garçom Mobile",
    description: "Seus garçons atendem direto no celular ou maquininha, agilizando pedidos e pagamentos.",
  },
  {
    icon: Truck,
    title: "Delivery Integrado",
    description: "Delivery próprio com integração direta ao iFood. Centralize todos os pedidos em um só lugar.",
  },
  {
    icon: Tablet,
    title: "Autoatendimento",
    description: "Totens e cardápios digitais para que seus clientes façam pedidos de forma independente.",
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tudo que seu restaurante <span className="text-gradient">precisa</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa para gerenciar todas as operações do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}