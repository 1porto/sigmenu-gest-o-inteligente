import { Check, X } from "lucide-react";

const diferenciais = [
  {
    title: "Sem taxas adicionais",
    description: "Você paga apenas a mensalidade. Sem surpresas no final do mês.",
    othersHave: false,
  },
  {
    title: "Montamos seu cardápio",
    description: "Nossa equipe cria e configura todo o cardápio digital para você.",
    othersHave: false,
  },
  {
    title: "Sem fidelidade",
    description: "Cancele quando quiser. Sem multas ou contratos longos.",
    othersHave: false,
  },
  {
    title: "Suporte 24h",
    description: "Atendimento por WhatsApp ou ligação a qualquer hora do dia.",
    othersHave: false,
  },
  {
    title: "Funciona offline",
    description: "O sistema continua funcionando mesmo sem internet.",
    othersHave: false,
  },
  {
    title: "Instalação em 24h",
    description: "Pronto para usar já no dia seguinte à contratação.",
    othersHave: false,
  },
];

export const WhyUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não esquente a cabeça com a <span className="text-gradient">troca de sistema</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cuidamos de tudo para que você não se estresse com a mudança. Sem ser enganado com taxas adicionais ou fidelidades chatas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Comparison Header */}
          <div className="grid grid-cols-[1fr,100px,100px] md:grid-cols-[1fr,120px,120px] gap-4 mb-4 px-4">
            <div />
            <div className="text-center">
              <span className="text-sm font-semibold text-primary">SigMenu</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-medium text-muted-foreground">Outros</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-3">
            {diferenciais.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr,100px,100px] md:grid-cols-[1fr,120px,120px] gap-4 items-center bg-card rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="w-5 h-5 text-destructive" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
