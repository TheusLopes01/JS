// control flow

// se estiver sujo
//console.log("lavar o copo")

// se estiver limpo
//console.log("servir café")

// if...else

/*let temperature = 30
// let highTemperature = temperature >= 37.5
// let mediumTemperature = temperature < 37.5 && temperature >= 37

if (temperature >= 37.5) {
  console.log("febre alta")
} else if (temperature < 37.5 && temperature >= 37) {
  console.log("febre moderada")
} else {
  console.log("saudável")
}*/

// switch

/*let expression = 'a'

switch (expression) {
  case "a":
    // código
    console.log('a')
    break
  case "b":
    // código para expression b
    console.log('b')
    break
  default:
    console.log('default')
    break
}*/

/*function calculate(number1, operator, number2) {
  let result

  switch (operator) {
    case "+":
      result = number1 + number2
      break
    case "-":
      result = number1 - number2
      break
    case "*":
      result = number1 * number2
      break
    case "/":
      result = number1 / number2
      break
    default:
      console.log("não implementado")
      break
  }
  return result
}

console.log(calculate(4, "+", 8))
*/

// throw

function sayMyName(name = "") {
  if (name === "") {
    throw "Nome é necessário"
  }
  console.log(name)
}
// try...catch
try {
  sayMyName("theus")
} catch (e) {
  console.log(e)
}

console.log("após ao try/catch")
