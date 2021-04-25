//Exercício 1

function inverteArray(array) {
   const invertendoArray = [0, 8, 23, 16, 10, 15,41, 12, 13];

 invertendoArray.reverse();
 console.log(invertendoArray)

 return invertendoArray
} 

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   const numeros = [1, 2, 3, 4, 5, 6];

   const numerosParesElevadosADois = [];

   for(let index = 0; index < numeros.length; index++){
      if(numeros[index] % 2 === 0){
      
         numerosParesElevadosADois.push(numeros[index]** 2)

        
      }else{

      }
      console.log(numerosParesElevadosADois)

      
   }
   return numerosParesElevadosADois 
}

//Exercício 3

function retornaNumerosPares (array) {
   const numerosAleatorios = [1,2, 3, 4, 5, 6];

   const numerosPares = [];

   for(let index = 0; index < numerosAleatorios.length; index++){
      if(numerosAleatorios[index] % 2 === 0){
         numerosPares.push(numerosAleatorios[index])
      } else{

      }
      
   }
   console.log(numerosPares)

   return numerosPares
}

//Exercício 4

function retornaMaiorNumero(array) {
  const numerosAleatorios2 = [10, 18, 7, 56, 39];

 const maiorNumero = Math.max(...numerosAleatorios2);

 console.log(maiorNumero);

 return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   const elementos = [1, 2, 3, 4, 5, 6];

  console.log(elementos.length)

  return elementos.length

}
      

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
}

//Exercício 7

function retornaNNumerosPares(n) {

}

// Exercício 8

function checaTriangulo(a, b, c) {
   a = 2
   b = 3
   c = 4

 if(a == b && b == c){
    console.log("Equilátero")

 } else if(a == b || a == c || c == b){
   console.log("Isósceles")
 } else{
    console.log("Escaleno")
 }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
  const arrayCrescente = [20, 13, -1, 2, 5, 49, -40, 10, 70, 5];

  arrayCrescente.sort()

  console.log(arrayCrescente)

  return arrayCrescente


}

// Exercício 12

function filmeFavorito() {
   
   const astrodev = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep','Anne Hathaway','Emily Blunt','Stanley Tucci']
   }
   console.log(astrodev)

   return astrodev
}

// Exercício 13

function imprimeChamada() {
   const astrodev = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep','Anne Hathaway','Emily Blunt','Stanley Tucci']
   }

   return `Venha assistir ao filme ${astrodev.nome}, de ${astrodev.ano}, dirigido por ${astrodev.diretor} e estrelado por ${astrodev.atores[0]}, ${astrodev.atores[1]}, ${astrodev.atores[2]}, ${astrodev.atores[3]}.`
   

}

// Exercício 14

function criaRetangulo(lado1, lado2) {
 
const informacoesRetangulo = {
   largura: lado1,
   altura: lado2,
   perimetro: (2* (lado1 + lado2)),
   area: (lado1 * lado2)
}
console.log(informacoesRetangulo)

return informacoesRetangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
  const astrodevAnonimo = {
     nome: 'Astrodev',
     idade: 25,
     email: 'astrodev@future4.com.br',
     endereco: 'Rua do Futuro, 4'
  }

  astrodevAnonimo.nome = 'ANÔNIMO';

  return astrodevAnonimo
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } ]


// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   
   const adultos = arrayDePessoas.filter((valores) => {
      return valores.idade >= 18
   })
   return adultos
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const teen = arrayDePessoas.filter((valores) => {
      return valores.idade <= 18
   })
   return teen
}


// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const arrayMultiplicacao = array.map((numero) => {
       return (numero * 2)
   }) 

   return arrayMultiplicacao


}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const arrayMultiplicacao = array.map((numero) => {
      return (numero * 2).toString()
  }) 

  return arrayMultiplicacao
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}