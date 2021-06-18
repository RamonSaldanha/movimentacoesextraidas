var termo = `

PJEC 0801083-88.2021.8.20.5162 
CASSIA SIBELLY BARROS FONTINELLE DE MEDEIROS X M M C CONFECCOES LTDA - ME
Ícone de download
Ícone de menu
 
07 jun 2021
 
OUTRAS DECISÕES
69565706 - Decisão11:03
 
CONCLUSOS PARA DECISÃO
10:46
05 jun 2021
 
AUDIÊNCIA CONCILIAÇÃO - JUIZADO ESPECIAL CÍVEL DESIGNADA PARA 25/11/2021 09:00 JUIZADO ESPECIAL CÍVEL, CRIMINAL E DA FAZENDA PÚBLICA DA COMARCA DE EXTREMOZ.
11:50
 
DISTRIBUÍDO POR SORTEIO
11:50
 
69544850 - Petição Inicial
 69544851 - Documento de Identificação (2. RG e Comp. Residência)
 69544852 - Procuração (3. Procuração Sibelly)
 69544853 - Documento de Comprovação (4. Contrato de honorários)
 69544855 - Documento de Comprovação (5. BO)
 69544857 - Documento de Comprovação (6. Video 1)
 69544858 - Documento de Comprovação (7. Video 2)
 69544860 - Documento de Comprovação (8. Video 3)
 69544861 - Documento de Comprovação (9. Video 4)11:50
69565706 - Decisão
Juntado por DIEGO COSTA PINTO DANTAS - MAGISTRADO em 07/06/2021 11:03:24
Ícone de seta para esquerda
 
Ícone de seta para esquerda
 
10 de 10
 
Ícone de seta para direita
 
Ícone de seta para direita
Ícone de estrela vazado
 
Ícone de certidão
 
Ícone de download
 
Ícone de cadeado

FAVORITOS
LEMBRETES


`;


// var todasMovimentacoes = termo.match(/(2)[0-9][0-9]\s(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)\s[2][0][0-9][0-9](.|\n)*?([0-9][0-9]):([0-9][0-9])/g);
var todasMovimentacoes = termo.match(/[0-9][0-9]\s(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)\s[2][0][0-9][0-9](.|\n)*?([0-9][0-9]):([0-9][0-9])/g);

todasMovimentacoes.forEach(function(movimentacao, i) {

  var arr = [
    movimentacao.substr(0,11), 
    // com regex: movimentacao.match(/(2)[0-9]\s(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)\s[2][0][0-9][0-9]/g)[0],
    // da pra aprimorar a parte do texto, dividindo todos os documentos em movimentações.
    movimentacao.substr(11).slice(0,-5).replace(/(\r\n|\n|\r)/g," "), 
    movimentacao.substr(-5)
  ];
  

  let [date, texto, hora] = arr;

  // se dentro do texto existir uma data, ele vai alterar a variavel date
  // const regexDate = /(2)[0-9][0-9]\s(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)\s[2][0][0-9][0-9]/g;
  const regexDate = /[0-9][0-9]\s(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)\s[2][0][0-9][0-9]/g;
  const dateFounded = texto.match( regexDate );

  if ( dateFounded ) {
    date = dateFounded[0]
    // se no texto existir uma data, o código deve remove-la
    texto = texto.replace(regexDate, "")
  }
  
  console.log(date, texto, hora);

})

