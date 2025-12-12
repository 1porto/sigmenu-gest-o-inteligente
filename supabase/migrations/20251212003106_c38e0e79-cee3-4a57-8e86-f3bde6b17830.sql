-- Tabela para armazenar leads do formulário de teste gratuito
CREATE TABLE public.leads (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone TEXT,
    nome_restaurante TEXT,
    tipo_estabelecimento TEXT,
    faturamento_mensal TEXT,
    interesse_principal TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- RLS desabilitado pois é público (formulário sem autenticação)
-- Mas apenas INSERT é permitido publicamente
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção pública (formulário na landing page)
CREATE POLICY "Permitir inserção pública de leads"
ON public.leads
FOR INSERT
WITH CHECK (true);

-- Nota: SELECT/UPDATE/DELETE não têm políticas públicas
-- Acesso aos dados será feito via service_role key em ambiente seguro