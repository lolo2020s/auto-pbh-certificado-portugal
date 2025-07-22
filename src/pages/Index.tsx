import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Shield, CheckCircle } from "lucide-react";

const Index = () => {
  const handleDownloadCertificate = () => {
    // Create a simple PDF-like content for demonstration
    const element = document.createElement('a');
    const file = new Blob(['Certificado Oficial - Isilda Conde - Processo UE/PT-NL/2025/0175'], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'certificado-oficial-isilda-conde.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header oficial */}
      <header className="bg-eu-blue text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-xs font-medium text-blue-100">AUTO PBH</div>
            </div>
            <h1 className="text-lg md:text-xl font-semibold text-center flex-1">
              União Europeia – Registo de Conformidade Logística Transfronteiriça
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Dossier Cliente */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-eu-blue" />
              <span>Dossier Cliente</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-muted-foreground">Nome:</span>
                  <p className="text-lg">Isilda da Conceição Martins Conde</p>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Número do processo:</span>
                  <p className="font-mono text-eu-blue">UE/PT-NL/2025/0175</p>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Data de emissão:</span>
                  <p>Segunda-feira, 22 de julho de 2025</p>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Estado do processo:</span>
                  <p className="flex items-center space-x-2 text-green-700">
                    <CheckCircle className="w-4 h-4" />
                    <span>Preparação logística concluída – Certificado disponível</span>
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-muted-foreground">Veículo:</span>
                  <p className="text-lg">Mini Cooper 1.5 Twin Turbo – 2018</p>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Chassis (VIN):</span>
                  <p className="text-muted-foreground">(não especificado)</p>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Quilometragem:</span>
                  <p>74.500 km</p>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Preço de compra:</span>
                  <p className="text-xl font-semibold text-eu-blue">€5.000</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabela de serviços certificados */}
        <Card>
          <CardHeader>
            <CardTitle>Serviços Certificados</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Código UE</TableHead>
                  <TableHead>Serviço certificado</TableHead>
                  <TableHead className="text-right">Valor (€)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-mono">EU-290-TUV</TableCell>
                  <TableCell>Inspeção técnica oficial TÜV – validade de 24 meses</TableCell>
                  <TableCell className="text-right">496,00 €</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">EU-416-ADMINT</TableCell>
                  <TableCell>Tratamento e verificação administrativa interna</TableCell>
                  <TableCell className="text-right">272,00 €</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">EU-723-GAR12M</TableCell>
                  <TableCell>Garantia técnica europeia – validade de 12 meses</TableCell>
                  <TableCell className="text-right">435,00 €</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">EU-850-LOGSUP</TableCell>
                  <TableCell>Supervisão logística e coordenação interna</TableCell>
                  <TableCell className="text-right">720,00 €</TableCell>
                </TableRow>
                <TableRow className="border-t-2 bg-muted/50">
                  <TableCell colSpan={2} className="font-semibold">Total certificado (com IVA)</TableCell>
                  <TableCell className="text-right font-bold text-lg">1.923,00 €</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Verificação da identidade */}
        <Card>
          <CardHeader>
            <CardTitle>Verificação da Identidade da Cliente</CardTitle>
            <p className="text-sm text-muted-foreground">Dados verificados através do Cartão de Cidadão Português</p>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Imagem da carta d'identité */}
              <div className="lg:col-span-1 space-y-3">
                <div>
                  <span className="font-semibold text-muted-foreground block mb-2">Documento apresentado:</span>
                  <div className="border rounded-lg overflow-hidden bg-white p-2">
                    <img 
                      src="/lovable-uploads/1812a91f-d804-4bb7-96b3-06325b1167c1.png" 
                      alt="Cartão de Cidadão Português - Isilda da Conceição Martins Conde"
                      className="w-full h-auto max-w-sm mx-auto rounded shadow-sm"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Cartão de Cidadão Português - Documento oficial válido
                  </p>
                </div>
              </div>

              {/* Dados verificados */}
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-muted-foreground">Nome completo:</span>
                    <p className="text-lg">Isilda da Conceição Martins Conde</p>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Número do Cartão de Cidadão:</span>
                    <p className="font-mono text-eu-blue">04347921 9 ZY4</p>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Data de nascimento:</span>
                    <p>15 de agosto de 1950</p>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Nacionalidade:</span>
                    <p>Portuguesa (PRT)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-muted-foreground">Validade do documento:</span>
                    <p>06 de novembro de 2028</p>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Estado de verificação:</span>
                    <p className="flex items-center space-x-2 text-green-700">
                      <CheckCircle className="w-4 h-4" />
                      <span>Documento válido e verificado</span>
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Data de verificação:</span>
                    <p>22 de julho de 2025, 14:30 CET</p>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Agente verificador:</span>
                    <p className="text-sm text-muted-foreground">Sistema Europeu de Verificação Identity-Check EU</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nova seção: Conformidade regulamentar */}
        <Card>
          <CardHeader>
            <CardTitle>Conformidade Regulamentar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-muted-foreground">Regulamento aplicável:</span>
                  <p>Diretiva 2007/46/CE (Homologação de veículos)</p>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Código de classificação:</span>
                  <p className="font-mono">EU-AUTO-M1-2018</p>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Autoridade competente:</span>
                  <p>RDW (Países Baixos)</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-muted-foreground">Certificado de conformidade:</span>
                  <p className="text-green-700">Válido</p>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Próxima inspeção obrigatória:</span>
                  <p>Julho de 2027</p>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Seguro de responsabilidade civil:</span>
                  <p className="text-green-700">Incluído na garantia europeia</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Suivi logistique */}
        <Card>
          <CardHeader>
            <CardTitle>Suivi Logistique do Veículo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Inspeção técnica concluída</p>
                    <p className="text-sm text-muted-foreground">20 de julho de 2025</p>
                  </div>
                </div>
                <span className="text-green-600 font-semibold">100%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Documentação administrativa verificada</p>
                    <p className="text-sm text-muted-foreground">21 de julho de 2025</p>
                  </div>
                </div>
                <span className="text-green-600 font-semibold">100%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Certificado de conformidade emitido</p>
                    <p className="text-sm text-muted-foreground">22 de julho de 2025</p>
                  </div>
                </div>
                <span className="text-green-600 font-semibold">100%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium">Preparação para expedição</p>
                    <p className="text-sm text-muted-foreground">Aguardando confirmação de pagamento</p>
                  </div>
                </div>
                <span className="text-blue-600 font-semibold">Pendente</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Botão de download */}
        <Card>
          <CardContent className="pt-6">
            <Button 
              onClick={handleDownloadCertificate}
              className="w-full md:w-auto bg-eu-blue hover:bg-eu-blue/90"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Descarregar certificado oficial em PDF
            </Button>
          </CardContent>
        </Card>

        {/* Bloco de pagamento */}
        <Card>
          <CardHeader>
            <CardTitle>Pagamento</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Para efetuar o pagamento, siga as instruções recebidas através de comunicação oficial da AUTO PBH.
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Informações de contacto */}
      <footer className="bg-muted/30 mt-16">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-lg">AUTO PBH</h3>
            <p className="text-muted-foreground">Autolettestraat 10, 3063 NP Rotterdam, Países Baixos</p>
            <p className="text-muted-foreground">Tel.: +39 376 176 2290</p>
            <p className="text-muted-foreground">Email: contact@autopbh.com</p>
          </div>
        </div>
      </footer>

      {/* Aviso legal */}
      <div className="bg-muted py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center space-y-2">
            <h4 className="font-semibold">Aviso de conformidade</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Esta página é uma interface privada gerada pela empresa AUTO PBH no contexto de uma venda transfronteiriça de um veículo entre os Países Baixos e Portugal.
              Os conteúdos estão organizados segundo a legislação europeia aplicável (Diretiva 2007/46/CE e Regulamento UE n.º 2012/290/CE).
              Este site não é afiliado nem gerido por nenhuma instituição oficial da União Europeia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
