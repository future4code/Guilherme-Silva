/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    alert("Bem vindo(a) ao jogo de Blackjack!")
 


    let inicioJogo = confirm("Quer iniciar uma nova rodada?")
    
    if(inicioJogo){
       let usuarioCarta1 = comprarCarta()
       let usuarioCarta2 = comprarCarta()

    const usuarioPontuacao = (usuarioCarta1.valor + usuarioCarta2.valor)
       console.log("Usuário - cartas: " + (usuarioCarta1.texto) + " " + (usuarioCarta2.texto) ," - pontuação " + (usuarioCarta1.valor + usuarioCarta2.valor))

      let computadorCarta1 = comprarCarta()
      let computadorCarta2 = comprarCarta()

      const computadorPontuacao = (computadorCarta1.valor + computadorCarta2.valor)
       console.log("Computador - cartas: " + (computadorCarta1.texto) + " " + (computadorCarta2.texto) ," - pontuação " + (computadorCarta1.valor + computadorCarta2.valor)) 
       if(usuarioPontuacao === computadorPontuacao){
         console.log("Empate!")
      } else if(usuarioPontuacao > computadorPontuacao){
         console.log("O usuário ganhou!!")
      } else if (usuarioPontuacao < computadorPontuacao){
         console.log("O computador ganhou")
      } else {
         alert("O jogo acabou!")
      }
   }
    
  