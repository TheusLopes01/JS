/*
  Prototype

  * prototype-based language
  * prototype chain
  * __proto__
  */

/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

*/

//console.log(Number("9") + 5)

// Manipulando Strings e Números

// Transformar String em Número e Número em String

/*let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))
*/

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

/*let word = "Paralelepípedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)
*/

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

/*let number = 645.546454446
console.log(number.toFixed(2).replace(".", ','))
*/

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também

/*let word = "Programar é muito bacana!"
//console.log(word.toUpperCase())
console.log(word.toLowerCase())
*/

// Manipulando Strings e Arrays
// Separe um texto que contém espaços. e em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

/*let phrase = "eu quero viver o amor!"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())
*/

// Manipulando Strings
// Verificar se o texto contém a palavra Amor

/*let phrase = "eu quero viver o amor!"
console.log(phrase.includes("amor"))
*/

// Manipulando Arrays
// Criar Array com construtor

/*let myArray = new Array("a", "b", "c")
console.log(myArray)
*/

// Contar elementos de um array

//console.log(["a", "b", "c"].length)

// Transformar uma cadeia de caracteres em elementos de um array

/*let word = "manipulação"
console.log(Array.from(word))
*/

// adicionar um item no fim
// adicionar no começo
// remover do fim
// remover do começo
// pegar somente alguns elementos do array
// remover 1 ou mais items em qualquer posição do array
// encontrar a posição de um elemento no array

let techs = ["html", "css", "js"]
techs.push("nodejs")
techs.unshift("sql")
//techs.pop()
//techs.shift()

//console.log(techs.slice(1, 3))

//techs.splice(1, 1)

let index = techs.indexOf("css")
techs.splice(index, 1)
//console.log(index)
console.log(techs)
