-- Adicionar política para SELECT (leitura) dos leads
-- Nota: como não há autenticação, isso permite leitura pública
-- Em produção, você deve proteger isso com autenticação
CREATE POLICY "Permitir leitura pública de leads"
ON public.leads
FOR SELECT
USING (true);