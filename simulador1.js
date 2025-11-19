const dadosNovos = `[\n {\n \"orgao\": \"Polícia Civil\",\n \"data\":
\"01/01/2024\",\n \"valor\": 5500.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Polícia Rodoviária Federal\",\n \"data\": \"02/01/2024\",\n \"valor\": 6000.00,\n
\"status\": \"falha\",\n \"motivo\": \"Problemas técnicos\"\n
},\n {\n \"orgao\": \"Polícia Militar\",\n \"data\":
\"03/01/2024\",\n \"valor\": 4500.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Corpo de Bombeiros\",\n
\"data\": \"04/01/2024\",\n \"valor\": 7000.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Guarda Municipal\",\n
\"data\": \"05/01/2024\",\n \"valor\": 3500.00,\n \"status\":
\"falha\",\n \"motivo\": \"Documentação incompleta\"\n },\n {\n
\"orgao\": \"Receita Federal\",\n \"data\": \"06/01/2024\",\n
\"valor\": 8000.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Ministério Público\",\n \"data\": \"07/01/2024\",\n
\"valor\": 9000.00,\n \"status\": \"falha\",\n \"motivo\":
\"Erro no sistema\"\n },\n {\n \"orgao\": \"Defesa Civil\",\n
\"data\": \"08/01/2024\",\n \"valor\": 4000.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\":
\"09/01/2024\",\n \"valor\": 5000.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n
\"data\": \"10/01/2024\",\n \"valor\": 6500.00,\n \"status\":
\"falha\",\n \"motivo\": \"Falta de recursos\"\n },\n {\n
\"orgao\": \"Ibama\",\n \"data\": \"11/01/2024\",\n \"valor\":
5500.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":
\"Anvisa\",\n \"data\": \"12/01/2024\",\n \"valor\":
6000.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":
\"Inmetro\",\n \"data\": \"13/01/2024\",\n \"valor\":
3000.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\":
\"14/01/2024\",\n \"valor\": 7000.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\":
\"15/01/2024\",\n \"valor\": 8000.00,\n \"status\":
\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n
\"orgao\": \"Polícia Civil\",\n \"data\": \"16/01/2024\",\n
\"valor\": 5200.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Polícia Rodoviária Federal\",\n \"data\":
\"17/01/2024\",\n \"valor\": 6100.00,\n \"status\":
\"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n
\"orgao\": \"Polícia Militar\",\n \"data\": \"18/01/2024\",\n
\"valor\": 4600.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"19/01/2024\",\n
\"valor\": 7100.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Guarda Municipal\",\n \"data\": \"20/01/2024\",\n
\"valor\": 3600.00,\n \"status\": \"falha\",\n \"motivo\":
\"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"21/01/2024\",\n \"valor\": 8100.00,\n
\"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Ministério Público\",\n \"data\": \"22/01/2024\",\n \"valor\": 9100.00,\n
\"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n
},\n {\n \"orgao\": \"Defesa Civil\",\n \"data\":
\"23/01/2024\",\n \"valor\": 4100.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\":
\"24/01/2024\",\n \"valor\": 5100.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n
\"data\": \"25/01/2024\",\n \"valor\": 6600.00,\n \"status\":
\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n
\"orgao\": \"Ibama\",\n \"data\": \"26/01/2024\",\n \"valor\":
5600.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":
\"Anvisa\",\n \"data\": \"27/01/2024\",\n \"valor\":
6100.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":
\"Inmetro\",\n \"data\": \"28/01/2024\",\n \"valor\":
3100.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\":
\"29/01/2024\",\n \"valor\": 7100.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\":
\"30/01/2024\",\n \"valor\": 8100.00,\n \"status\":
\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n
\"orgao\": \"Polícia Civil\",\n \"data\": \"31/01/2024\",\n
\"valor\": 5300.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Polícia Rodoviária Federal\",\n \"data\":
\"01/01/2024\",\n \"valor\": 6200.00,\n \"status\":
\"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n
\"orgao\": \"Polícia Militar\",\n \"data\": \"02/01/2024\",\n
\"valor\": 4700.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"03/01/2024\",\n
\"valor\": 7200.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Guarda Municipal\",\n \"data\": \"04/01/2024\",\n
\"valor\": 3700.00,\n \"status\": \"falha\",\n \"motivo\":
\"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"05/01/2024\",\n \"valor\": 8200.00,\n
\"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Ministério Público\",\n \"data\": \"06/01/2024\",\n \"valor\": 9200.00,\n
\"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n
},\n {\n \"orgao\": \"Defesa Civil\",\n \"data\":
\"07/01/2024\",\n \"valor\": 4200.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\":
\"08/01/2024\",\n \"valor\": 5200.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n
\"data\": \"09/01/2024\",\n \"valor\": 6700.00,\n \"status\":
\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n
\"orgao\": \"Ibama\",\n \"data\": \"10/01/2024\",\n \"valor\":
5700.00,\n \"status\": \"sucesso\"\n },\n {\n \n\n
\"orgao\": \"Anvisa\",\n \"data\": \"11/01/2024\",\n
\"valor\": 6200.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Inmetro\",\n \"data\": \"12/01/2024\",\n
\"valor\": 3200.00,\n \"status\": \"falha\",\n \"motivo\":
\"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n
\"data\": \"13/01/2024\",\n \"valor\": 7200.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\":
\"14/01/2024\",\n \"valor\": 8200.00,\n \"status\":
\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n
\"orgao\": \"Polícia Civil\",\n \"data\": \"15/01/2024\",\n
\"valor\": 5400.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Polícia Rodoviária Federal\",\n \"data\":
\"16/01/2024\",\n \"valor\": 6300.00,\n \"status\":
\"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n
\"orgao\": \"Polícia Militar\",\n \"data\": \"17/01/2024\",\n
\"valor\": 4800.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"18/01/2024\",\n
\"valor\": 7300.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Guarda Municipal\",\n \"data\": \"19/01/2024\",\n
\"valor\": 3800.00,\n \"status\": \"falha\",\n \"motivo\":
\"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"20/01/2024\",\n \"valor\": 8300.00,\n
\"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Ministério Público\",\n \"data\": \"21/01/2024\",\n \"valor\": 9300.00,\n
\"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n
},\n {\n \"orgao\": \"Defesa Civil\",\n \"data\":
\"22/01/2024\",\n \"valor\": 4300.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\":
\"23/01/2024\",\n \"valor\": 5300.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n
\"data\": \"24/01/2024\",\n \"valor\": 6800.00,\n \"status\":
\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n
\"orgao\": \"Ibama\",\n \"data\": \"25/01/2024\",\n \"valor\":
5800.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":
\"Anvisa\",\n \"data\": \"26/01/2024\",\n \"valor\":
6300.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":
\"Inmetro\",\n \"data\": \"27/01/2024\",\n \"valor\":
3300.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\":
\"28/01/2024\",\n \"valor\": 7300.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\":
\"29/01/2024\",\n \"valor\": 8300.00,\n \"status\":
\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n
\"orgao\": \"Polícia Civil\",\n \"data\": \"30/01/2024\",\n
\"valor\": 5500.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Polícia Rodoviária Federal\",\n \"data\":
\"31/01/2024\",\n \"valor\": 6400.00,\n \"status\":
\"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n
\"orgao\": \"Polícia Militar\",\n \"data\": \"01/01/2024\",\n
\"valor\": 4900.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"02/01/2024\",\n
\"valor\": 7400.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Guarda Municipal\",\n \"data\": \"03/01/2024\",\n
\"valor\": 3900.00,\n \"status\": \"falha\",\n \"motivo\":
\"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"04/01/2024\",\n \"valor\": 8400.00,\n
\"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Ministério Público\",\n \"data\": \"05/01/2024\",\n \"valor\": 9400.00,\n
\"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n
},\n {\n \"orgao\": \"Defesa Civil\",\n \"data\":
\"06/01/2024\",\n \"valor\": 4400.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\":
\"07/01/2024\",\n \"valor\": 5400.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n
\"data\": \"08/01/2024\",\n \"valor\": 6900.00,\n \"status\":
\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n
\"orgao\": \"Ibama\",\n \"data\": \"09/01/2024\",\n \"valor\":
5900.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":
\"Anvisa\",\n \"data\": \"10/01/2024\",\n \"valor\":
6400.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":
\"Inmetro\",\n \"data\": \"11/01/2024\",\n \"valor\":
3400.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\":
\"12/01/2024\",\n \"valor\": 7400.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\":
\"13/01/2024\",\n \"valor\": 8400.00,\n \"status\":
\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n
\"orgao\": \"Polícia Civil\",\n \"data\": \"14/01/2024\",\n
\"valor\": 5600.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Polícia Rodoviária Federal\",\n \"data\":
\"15/01/2024\",\n \"valor\": 6500.00,\n \"status\":
\"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n
\"orgao\": \"Polícia Militar\",\n \"data\": \"16/01/2024\",\n
\"valor\": 5000.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"17/01/2024\",\n
\"valor\": 7500.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Guarda Municipal\",\n \"data\": \"18/01/2024\",\n
\"valor\": 4000.00,\n \"status\": \"falha\",\n \"motivo\":
\"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"19/01/2024\",\n \"valor\": 8500.00,\n
\"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Ministério Público\",\n \"data\": \"20/01/2024\",\n \"valor\": 9500.00,\n
\"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n
},\n {\n \"orgao\": \"Defesa Civil\",\n \"data\":
\"21/01/2024\",\n \"valor\": 4500.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\":
\"22/01/2024\",\n \"valor\": 5500.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n
\"data\": \"23/01/2024\",\n \"valor\": 7000.00,\n \"status\":
\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n
\"orgao\": \"Ibama\",\n \"data\": \"24/01/2024\",\n \"valor\":
6000.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":
\"Anvisa\",\n \"data\": \"25/01/2024\",\n \"valor\":
6500.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":
\"Inmetro\",\n \"data\": \"26/01/2024\",\n \"valor\":
3500.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\":
\"27/01/2024\",\n \"valor\": 7500.00,\n \"status\":
\"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\":
\"28/01/2024\",\n \"valor\": 8500.00,\n \"status\":
\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n
\"orgao\": \"Polícia Civil\",\n \"data\": \"29/01/2024\",\n
\"valor\": 5700.00,\n \"status\": \"sucesso\"\n },\n {\n
\"orgao\": \"Polícia Rodoviária Federal\",\n \"data\":
\"30/01/2024\",\n \"valor\": 6600.00,\n \"status\":
\"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n
\"orgao\": \"Polícia Militar\",\n \"data\": \"31/01/2024\",\n
\"valor\": 5100.00,\n \"status\": \"sucesso\"\n }\n]`;

const dadosJSON = JSON.parse(dadosNovos);
//console.log("Resultado: ", dadosJSON);
console.log('Simulator - Nível #1\n');

//Historia de usuario 1 - Total de repasses processados
console.log("Total de repasses processados: ", dadosJSON.length, "\n");

//Historia de usuario 2 - Estatisticas de repasses por criterios

// Função para agrupar por chave
function agruparPor(lista, chave) {
  return lista.reduce((acc, item) => {
    const valorChave = item[chave] || "Não informado";
    if (!acc[valorChave]) acc[valorChave] = [];
    acc[valorChave].push(item);
    return acc;
  }, {});
}

// Função para formatar valores como moeda brasileira
function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Filtra sucesso e falha
const sucesso = dadosJSON.filter(d => d.status === "sucesso");
const falha = dadosJSON.filter(d => d.status === "falha");

// --- Resumo de sucesso ---
console.log("Resumo de repasses bem sucedidos:\n");
console.log("a) Quantidade total:", sucesso.length);
console.log("b) Quantidade por órgão:");
Object.entries(agruparPor(sucesso, "orgao")).forEach(([orgao, lista]) => {
  console.log(`   - ${orgao}: ${lista.length}`);
});
console.log("c) Valor total:", formatarMoeda(sucesso.reduce((soma, d) => soma + d.valor, 0)));
console.log("d) Valor total por órgão:");
Object.entries(agruparPor(sucesso, "orgao")).forEach(([orgao, lista]) => {
  const total = lista.reduce((soma, d) => soma + d.valor, 0);
  console.log(`   - ${orgao}: ${formatarMoeda(total)}`);
});

console.log(); // linha em branco

// --- Resumo de falha ---
console.log("Resumo de repasses com falha:\n");
console.log("a) Quantidade total:", falha.length);
console.log("b) Quantidade por órgão:");
Object.entries(agruparPor(falha, "orgao")).forEach(([orgao, lista]) => {
  console.log(`   - ${orgao}: ${lista.length}`);
});
console.log("c) Quantidade por motivo:");
Object.entries(agruparPor(falha, "motivo")).forEach(([motivo, lista]) => {
  console.log(`   - ${motivo}: ${lista.length}`);
});
console.log("d) Valor total:", formatarMoeda(falha.reduce((soma, d) => soma + d.valor, 0)));
console.log("e) Valor total por órgão:");
Object.entries(agruparPor(falha, "orgao")).forEach(([orgao, lista]) => {
  const total = lista.reduce((soma, d) => soma + d.valor, 0);
  console.log(`   - ${orgao}: ${formatarMoeda(total)}`);
});
console.log("f) Valor total por motivo:");
Object.entries(agruparPor(falha, "motivo")).forEach(([motivo, lista]) => {
  const total = lista.reduce((soma, d) => soma + d.valor, 0);
  console.log(`   - ${motivo}: ${formatarMoeda(total)}`);
});
console.log();

//Historia de usuario 3 - Estatisticas por criterios
console.log("Estatísticas de repasses por critérios\n")

// a) Repasse com maior valor
const maior = dadosJSON.reduce((max, d) => d.valor > max.valor ? d : max, dadosJSON[0]);
console.log(`a) Repasse com maior valor: Órgão: ${maior.orgao}, Data: ${maior.data}, Valor: ${formatarMoeda(maior.valor)}, Status: ${maior.status}${maior.motivo ? ", Motivo: " + maior.motivo : ""}`);

// b) Repasse com menor valor
const menor = dadosJSON.reduce((min, d) => d.valor < min.valor ? d : min, dadosJSON[0]);
console.log(`b) Repasse com menor valor: Órgão: ${menor.orgao}, Data: ${menor.data}, Valor: ${formatarMoeda(menor.valor)}, Status: ${menor.status}${menor.motivo ? ", Motivo: " + menor.motivo : ""}`);

// c) Dia com mais repasses
const porDia = agruparPor(dadosJSON, "data");
const diaMais = Object.entries(porDia).reduce((max, [dia, lista]) => lista.length > max[1].length ? [dia, lista] : max, ["", []]);
console.log(`c) Dia com mais repasses: ${diaMais[0]} - ${diaMais[1].length} repasses`);

// d) Órgão com mais repasses
const porOrgao = agruparPor(dadosJSON, "orgao");
const orgaoMais = Object.entries(porOrgao).reduce((max, [orgao, lista]) => lista.length > max[1].length ? [orgao, lista] : max, ["", []]);
console.log(`d) Órgão com mais repasses: ${orgaoMais[0]} - ${orgaoMais[1].length} repasses`);

// e) Órgão com mais repasses com sucesso
const porOrgaoSucesso = agruparPor(sucesso, "orgao");
const orgaoMaisSucesso = Object.entries(porOrgaoSucesso).reduce((max, [orgao, lista]) => lista.length > max[1].length ? [orgao, lista] : max, ["", []]);
console.log(`e) Órgão com mais repasses com sucesso: ${orgaoMaisSucesso[0]} - ${orgaoMaisSucesso[1].length} repasses`);

// f) Órgão com mais repasses falhados
const porOrgaoFalha = agruparPor(falha, "orgao");
const orgaoMaisFalha = Object.entries(porOrgaoFalha).reduce((max, [orgao, lista]) => lista.length > max[1].length ? [orgao, lista] : max, ["", []]);
console.log(`f) Órgão com mais repasses falhados: ${orgaoMaisFalha[0]} - ${orgaoMaisFalha[1].length} repasses`);

// g) Motivo de falha com mais repasses
const porMotivoFalha = agruparPor(falha, "motivo");
const motivoMaisFalha = Object.entries(porMotivoFalha).reduce((max, [motivo, lista]) => lista.length > max[1].length ? [motivo, lista] : max, ["", []]);
console.log(`g) Motivo de falha com mais repasses: ${motivoMaisFalha[0]} - ${motivoMaisFalha[1].length} repasses\n`);

//Historia do usuario 4 - Apresentação automática de detalhes de transações
const orgaoAlvo = "Polícia Federal";

// Filtrar transações do órgão alvo
const transacoesOrgao = dadosJSON.filter(t => t.orgao === orgaoAlvo);

// Exibir resultados no console
console.log(`Detalhes das transações do órgão: ${orgaoAlvo}\n`);

if (transacoesOrgao.length === 0) {
  console.log("Nenhuma transação encontrada para este órgão.\n");
} else {
  transacoesOrgao.forEach(t => {
    let detalhes = `Data: ${t.data}, Valor: ${formatarMoeda(t.valor)}, Status: ${t.status}`;
    if (t.status === "falha") {
      detalhes += t.motivo ? `, Motivo: ${t.motivo}` : `, Motivo: NÃO INFORMADO ⚠️`;
    }
    console.log(detalhes);
  });
}

//Historia de usuario 5 - Tratamento de erros

// Filtrar transações com falha sem motivo
const errosProcessamento = falha.filter(t => !t.motivo || t.motivo.trim() === "");

// Exibir resultados
console.log("\nVerificação de tratamento de erros. Foram encontradas falhas sem motivo justificado?\n");

if (errosProcessamento.length === 0) {
  console.log("✅ Nenhum problema encontrado. Todas as falhas possuem motivo.\n");
} else {
  console.log("⚠️ Problemas encontrados no processamento:\n");
  errosProcessamento.forEach(t => {
    console.log(
      `Órgão: ${t.orgao}, Data: ${t.data}, Valor: ${formatarMoeda(t.valor)}, Status: ${t.status}, Motivo: NÃO INFORMADO ⚠️`
    );
  });
}

// História de Usuário 6: Ajustes nas estatísticas

// Criar lista filtrada (apenas válidas)
const dadosValidos = dadosJSON.filter(t => !(t.status === "falha" && (!t.motivo || t.motivo.trim() === "")));

// Separar sucesso e falha apenas das válidas
const sucessoValidos = dadosValidos.filter(d => d.status === "sucesso");
const falhaValidos = dadosValidos.filter(d => d.status === "falha");

// Exemplo de saída para conferência
console.log("Ajustes nas estatísticas\n");
console.log(`Total de transações válidas: ${dadosValidos.length}`);
console.log(`Total de transações de sucesso: ${sucessoValidos.length}`);
console.log(`Total de transações de falha (com motivo): ${falhaValidos.length}`);
console.log();

