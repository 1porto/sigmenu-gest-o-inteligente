import { lazy, Suspense } from "react";
import "@fontsource/sora/400.css";
import "@fontsource/sora/500.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";

import { Header } from "@/components/Header";
import { HeroForm } from "@/components/HeroForm";
import { Features } from "@/components/Features";

// Lazy load components below the fold
const LogoCarousel = lazy(() => import("@/components/LogoCarousel").then(m => ({ default: m.LogoCarousel })));
const SystemShowcase = lazy(() => import("@/components/SystemShowcase").then(m => ({ default: m.SystemShowcase })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const CTA = lazy(() => import("@/components/CTA").then(m => ({ default: m.CTA })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left opacity-0 animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Gestão completa para o seu{" "}
                <span className="text-gradient">restaurante</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                PDV, delivery, reservas, financeiro e muito mais. Tudo em uma única plataforma feita para você vender mais.
              </p>
              <div className="hidden lg:flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-muted-foreground">+5.000 restaurantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-muted-foreground">Suporte 24/7</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="opacity-0 animate-fade-up animation-delay-200">
              <HeroForm />
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Suspense fallback={<div className="h-48" />}>
        <LogoCarousel />
        <SystemShowcase />
        <Testimonials />
        <CTA />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;