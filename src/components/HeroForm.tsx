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

const faturamentoMensal = [
  "Estou Abrindo",
  "Até 40 mil",
  "Entre 40 mil e 80 mil",
  "Entre 80 mil e 120 mil",
  "Entre 120 mil e 500 mil",
  "Acima de 500 mil",
];

function formatPhone(value: string) {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 2) {
    return numbers;
  }
  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  }
  // Permite até 15 dígitos após o hífen para acomodar DDI + DDD + número
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 22)}`;
}

export function HeroForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [faturamento, setFaturamento] = useState("");
  const [telefone, setTelefone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setTelefone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase.from("leads").insert({
      nome: formData.get("nome") as string,
      email: formData.get("email") as string,
      telefone: telefone,
      nome_restaurante: formData.get("restaurante") as string,
      faturamento_mensal: faturamento,
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

    // Notifica via SMS através da Edge Function
    try {
      await supabase.functions.invoke('notify-sms');
    } catch {
      // Silently fail - não impede o fluxo do usuário
    }

    toast({
      title: "Solicitação enviada!",
      description: "Em breve entraremos em contato para iniciar seu teste grátis.",
    });

    // Reset form
    e.currentTarget.reset();
    setFaturamento("");
    setTelefone("");
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
            Preencha o Formulário e Tenha o Teste Grátis
          </h2>
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

              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone para contato *</Label>
            <Input
              id="telefone"
              name="telefone"
              placeholder="(DDD) 99999-9999"
              value={telefone}
              onChange={handlePhoneChange}
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
              
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label>Faturamento Mensal *</Label>
            <Select value={faturamento} onValueChange={setFaturamento} >
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

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 text-base font-semibold gradient-primary hover:opacity-90 transition-opacity"
          >
            {isSubmitting ? "Enviando..." : "Iniciar Teste Grátis de 7 dias"}
          </Button>

          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground pt-2">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              Sem compromisso
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              7 dias grátis
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}