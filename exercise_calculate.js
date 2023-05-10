/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
      * receitas: []
      * despesas: []
      
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com o saldo positivo ou negativo, seguido do valor do saldo
*/

let gastosFamiliar = {
  receitas: [2120, 3380],
  despesas: [80, 250, 860, 1000, 300, 330, 75],
}

function sum(array) {
  let total = 0

  for (let value of array) total += value
  return total
}

function calcularGastos() {
  const calcularReceitas = sum(gastosFamiliar.receitas)
  const calcularDespesas = sum(gastosFamiliar.despesas)

  const total = calcularReceitas - calcularDespesas

  const saldoPositivo = total >= 0

  let mensagem = "Negativo"
  if (saldoPositivo) {
    mensagem = "positivo"
  }
  console.log(`Seu saldo é ${mensagem}: ${total}`)
}

calcularGastos()
