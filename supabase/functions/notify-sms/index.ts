import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Sending SMS notification for new lead...');
    
    // Credenciais da API do iAgente
    const usuario = 'guilherme@sigmenu.com';
    const senha = 'SIGMenu@1';
    const celular = '5579998001507';
    const mensagem = 'leadnovo';
    
    const url = `https://api.iagentesms.com.br/webservices/http.php?metodo=envio&usuario=${encodeURIComponent(usuario)}&senha=${encodeURIComponent(senha)}&celular=${celular}&mensagem=${encodeURIComponent(mensagem)}`;
    
    const response = await fetch(url);
    const responseText = await response.text();
    
    console.log('SMS API response:', responseText);

    return new Response(JSON.stringify({ success: true, response: responseText }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error sending SMS:', errorMessage);
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
