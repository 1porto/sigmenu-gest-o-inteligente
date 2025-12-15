import logo from "@/assets/logo.png";
export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2">
  <img src={logo} alt="SIGMENU" className="h-8" />
</div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SIGMENU. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}