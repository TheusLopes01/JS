let clima = "quente"
clima = "frio"

console.log(clima)

var cor = "preto"
cor = "azul"

console.log(cor)

const tamanho = "pequeno"
tamanho = "médio"
//const não muda!!

console.log(tamanho)

//tipos dinâmicos

let distância = "perto"
console.log(typeof distância)

//scope e var

{
  let x = 0
  console.log(x)
}

//var é global e também local
// hoisting
console.log("> existe x antes do bloco? ", x)

{
  var x = 0
}

console.log("> existe x depois do bloco? ", x)

// scope let e const
// const e let são locais e só funcionam no escopo onde foi criada

//let y = 1
const y = 1
{
  //let y = 0//
  //y = 0
  // quando é const, mesmo sendo o mesmo nome, são diferentes quando dentro e fora do escopo
  const y = 0
  console.log("> existe y? ", y)
}

console.log("> existe y depois do bloco? ", y)

// evitar de usar o var

// nomeando variáveis

/*let name = "theus"
let checkIfNameExists = name === "theus"
checkIfNameExists
check_if_name_exists

//camelCase
//snake_case

//variáveis e tipos de dados
//declaração or declaration

var name

// assignment or atribuição de valores
name = "theus"


var name

name = "theus"

console.log(typeof name)
console.log(name)

//let age = 20
      //let isHuman = true

      // agrupamento de declarações
      var name
      name = "theus"
      var name = "Matheus"

      let age, isHuman
      age = 20
      isHuman = true
      // multiplos argumentos na função
      //console.log(name, age, isHuman)

      // escrita de texto + variáveis
      //console.log('o theus tem 21 anos')

      // concatenando valores
      //console.log("o " + name + " tem " + age + " anos.")

      //interpolando valores com template strings or template literals
      console.log(`o ${name} tem ${age} anos.`) */
