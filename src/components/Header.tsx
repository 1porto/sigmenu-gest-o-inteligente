import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
  <img src={logo} alt="SIGMENU" className="h-10" />
</div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#funcionalidades" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Funcionalidades
            </a>
            <Button onClick={scrollToForm} className="gradient-primary hover:opacity-90">
              Teste Grátis
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <a 
                href="#funcionalidades" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Funcionalidades
              </a>
              <Button onClick={scrollToForm} className="gradient-primary hover:opacity-90 w-full">
                Teste Grátis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}