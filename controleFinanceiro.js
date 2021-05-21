const usuariosCadastrados = [
  {
    nome: 'Salvio',
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: 'Marcio',
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: 'Lucia',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
]

function somaReceita(receita) {
  return receita.reduce((total, acumulador) => total + acumulador)
}

function somaDespesa(despesa) {
  return despesa.reduce((total, acumulador) => total + acumulador)
}

function calculaSaldo(receita, despesa) {
  const saldo = somaReceita(receita) - somaDespesa(despesa)

  return saldo
}

function exibirSaldo(usuarios) {
  for (let usuario of usuarios) {
    const saldoDoUsuario = calculaSaldo(usuario.receitas, usuario.despesas)
    if (saldoDoUsuario > 0) {
      console.log(`${usuario.nome} possui saldo POSITIVO de ${saldoDoUsuario.toFixed(2)}`)
    } else {
      console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldoDoUsuario.toFixed(2)}`)
    }
  }
}

exibirSaldo(usuariosCadastrados)



