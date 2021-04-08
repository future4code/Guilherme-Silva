
/*Exercício 1

Vai iniciar uma contagem de 0 a 5, incrementando um valor a cada passo dado. 0, 1, 3, 6, 10, 15(...)*/

/*Exercício 2
a)
 Todos números maiores que 18.
b)
for(let index = 0; index <lista.length; index++){
    console.log(lista[index])
}*/

/*Exercício 3

let arrayOriginal = [1, 7, 8, 13, 14, 12, 90, 78, 65, 101]

a)
for (let index = 0; index < arrayOriginal.length ; index++) {
    console.log(arrayOriginal[index])
}

b)
for (let index = 0; index < arrayOriginal.length ; index++) {
    console.log(arrayOriginal[index]/10)
}

c)
let arrayOriginal = [1, 7, 8, 13, 14, 12, 90, 78, 65, 101]

let arrayPair = []

for (let index = 0; index < arrayOriginal.length ; index++) {
    if(index % 2 === 0){
       arrayPair.push(arrayOriginal[index])
    }
    
}
console.log(arrayPair)

d)
let arrayString = [22, 21, 33, 34, 65, 43, 11, 1, 9]

for (let index = 0; index < arrayString.length ; index++) {
    
    console.log("O elemento do index", [index], "é: ", arrayString[index])
}

d)
let arrayString = [22, 21, 33, 34, 65, 43, 11, 1, 9]

let valorMaior = 20
let valorMenor = 12


for(let index = 0; index < arrayString.length ; index++) {
    if(arrayString[index] > valorMaior){
        valorMaior = arrayString[index];
    } else if(arrayString[index] < valorMenor){
        valorMenor = arrayString[index]
    }
}
console.log("O maior número é: ", valorMaior, "e o menor é: ", valorMenor)*/