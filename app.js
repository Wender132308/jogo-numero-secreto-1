alert('Boas Vindas ao jogo número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto(while) chute não for igual ao n.s (!=) é igual que "diferente"
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
   //se(if) chute for igual ao número secreto
   if(chute == numeroSecreto){
    break;                     
   } else {
       if( chute > numeroSecreto){
           alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        } 
        // tentativa = tentativa+1
        tentativas++;
   }
}
let palavraTentativa = tentativas > 1 ? 'tentativas.' : 'tentativa.';
    alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//mesma coisa porém mais simplificado que ...
//if(tentativas > 1){
//   alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}