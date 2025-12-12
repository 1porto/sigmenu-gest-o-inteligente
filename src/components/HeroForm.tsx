import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const tiposEstabelecimento = [
  "Restaurante",
  "Bar",
  "Hamburgueria",
  "Pizzaria",
  "Comida Japonesa",
  "Buffet por KG",
  "Beach Club",
  "Cafeteria",
  "Restaurante de Hotel",
  "Padaria/Doceria",
  "Franquia/Multi lojas",
  "Outro Ramo",
];

const faturamentoMensal = [
  "Estou Abrindo",
  "Até 40 mil",
  "Entre 40 mil e 80 mil",
  "Entre 80 mil e 120 mil",
  "Entre 120 mil e 500 mil",
  "Acima de 500 mil",
];

const interessePrincipal = [
  "PDV (Caixa e Vendas)",
  "Autoatendimento",
  "Sistema de Reservas e Filas",
  "Delivery Integrado",
  "Relatórios Detalhados",
  "Sistema Completo",
];

export function HeroForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tipoEstabelecimento, setTipoEstabelecimento] = useState("");
  const [faturamento, setFaturamento] = useState("");
  const [interesse, setInteresse] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase.from("leads").insert({
      nome: formData.get("nome") as string,
      email: formData.get("email") as string,
      telefone: formData.get("telefone") as string,
      nome_restaurante: formData.get("restaurante") as string,
      tipo_estabelecimento: tipoEstabelecimento,
      faturamento_mensal: faturamento,
      interesse_principal: interesse,
    });

    setIsSubmitting(false);

    if (error) {
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Solicitação enviada!",
      description: "Em breve entraremos em contato para iniciar seu teste grátis.",
    });

    // Reset form
    e.currentTarget.reset();
    setTipoEstabelecimento("");
    setFaturamento("");
    setInteresse("");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="gradient-card rounded-2xl p-8 shadow-xl border border-border/50 backdrop-blur-sm">
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Vagas limitadas
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-2">
            Comece seu teste grátis
          </h2>
          <p className="text-muted-foreground text-sm">
            Preencha o formulário para começar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome *</Label>
            <Input
              id="nome"
              name="nome"
              placeholder="Seu nome completo"
              required
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              required
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone para contato *</Label>
            <Input
              id="telefone"
              name="telefone"
              placeholder="(XX) XXXXX-XXXX"
              required
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="restaurante">Nome do restaurante *</Label>
            <Input
              id="restaurante"
              name="restaurante"
              placeholder="Nome do seu estabelecimento"
              required
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label>Tipo de Estabelecimento *</Label>
            <Select value={tipoEstabelecimento} onValueChange={setTipoEstabelecimento} required>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                {tiposEstabelecimento.map((tipo) => (
                  <SelectItem key={tipo} value={tipo}>
                    {tipo}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Faturamento Mensal *</Label>
            <Select value={faturamento} onValueChange={setFaturamento} required>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Selecione o faturamento mensal" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                {faturamentoMensal.map((faixa) => (
                  <SelectItem key={faixa} value={faixa}>
                    {faixa}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Principal interesse nos produtos *</Label>
            <Select value={interesse} onValueChange={setInteresse} required>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Selecione seu principal interesse" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                {interessePrincipal.map((int) => (
                  <SelectItem key={int} value={int}>
                    {int}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 text-base font-semibold gradient-primary hover:opacity-90 transition-opacity"
          >
            {isSubmitting ? "Enviando..." : "Iniciar Teste Grátis de 14 dias"}
          </Button>

          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground pt-2">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              Sem compromisso
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              14 dias grátis
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
