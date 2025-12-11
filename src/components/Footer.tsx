export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">S</span>
            </div>
            <span className="font-semibold">SIGMENU</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SIGMENU. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}