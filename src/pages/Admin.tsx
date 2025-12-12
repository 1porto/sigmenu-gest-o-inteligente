import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string | null;
  nome_restaurante: string | null;
  tipo_estabelecimento: string | null;
  faturamento_mensal: string | null;
  interesse_principal: string | null;
  created_at: string;
}

export default function Admin() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setLeads(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">Leads Recebidos</h1>
          <Button onClick={fetchLeads} disabled={loading} variant="outline">
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Atualizar
          </Button>
        </div>

        {leads.length === 0 && !loading ? (
          <div className="text-center py-12 text-muted-foreground">
            Nenhum lead recebido ainda.
          </div>
        ) : (
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Restaurante</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Faturamento</TableHead>
                  <TableHead>Interesse</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </TableCell>
                    <TableCell>{lead.nome}</TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>{lead.telefone || "-"}</TableCell>
                    <TableCell>{lead.nome_restaurante || "-"}</TableCell>
                    <TableCell>{lead.tipo_estabelecimento || "-"}</TableCell>
                    <TableCell>{lead.faturamento_mensal || "-"}</TableCell>
                    <TableCell>{lead.interesse_principal || "-"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
