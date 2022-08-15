let btnPlus01 = document.getElementById('plus01')
let btnPlus02 = document.getElementById('plus02')
let btnPlus03 = document.getElementById('plus03')
let btnPlus04 = document.getElementById('plus04')

let btnMinus01 = document.getElementById('minus01')
let btnMinus02 = document.getElementById('minus02')
let btnMinus03 = document.getElementById('minus03')
let btnMinus04 = document.getElementById('minus04')

btnPlus01.addEventListener('click', function (e) {
  let qtd01 = document.getElementById('quantity01').textContent

  let finalValue = qtd01 * 12.00
  console.log('Quantidade de marmita: ' + qtd01)
  console.log('Preço unitário: 12.00')
  console.log('Valor total: ' + finalValue.toFixed(2))
  finalValue = finalValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  console.log('Converter para string: ' + finalValue)
  document.getElementById('price01').innerHTML = finalValue
})

btnPlus02.addEventListener('click', function (e) {
  let qtd02 = document.getElementById('quantity02').textContent

  let finalValue = qtd02 * 12.00
  console.log('Quantidade de marmita: ' + qtd02)
  console.log('Preço unitário: 12.00')
  console.log('Valor total: ' + finalValue.toFixed(2))
  finalValue = finalValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  console.log('Converter para string: ' + finalValue)
  document.getElementById('price02').innerHTML = finalValue
})

btnPlus03.addEventListener('click', function (e) {
  let qtd03 = document.getElementById('quantity03').textContent

  let finalValue = qtd03 * 12.00
  console.log('Quantidade de marmita: ' + qtd03)
  console.log('Preço unitário: 12.00')
  console.log('Valor total: ' + finalValue.toFixed(2))
  finalValue = finalValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  console.log('Converter para string: ' + finalValue)
  document.getElementById('price03').innerHTML = finalValue
})

btnPlus04.addEventListener('click', function (e) {
  let qtd04 = document.getElementById('quantity04').textContent

  let finalValue = qtd04 * 12.00
  console.log('Quantidade de marmita: ' + qtd04)
  console.log('Preço unitário: 12.00')
  console.log('Valor total: ' + finalValue.toFixed(2))
  finalValue = finalValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  console.log('Converter para string: ' + finalValue)
  document.getElementById('price04').innerHTML = finalValue
})

btnMinus01.addEventListener('click', function (e) {
  let qtd01 = document.getElementById('quantity01').textContent

  let finalValue = qtd01 * 12.00
  console.log('Quantidade de marmita: ' + qtd01)
  console.log('Preço unitário: 12.00')
  console.log('Valor total: ' + finalValue.toFixed(2))
  finalValue = finalValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  console.log('Converter para string: ' + finalValue)
  document.getElementById('price01').innerHTML = finalValue
})

btnMinus02.addEventListener('click', function (e) {
  let qtd02 = document.getElementById('quantity02').textContent

  let finalValue = qtd02 * 12.00
  console.log('Quantidade de marmita: ' + qtd02)
  console.log('Preço unitário: 12.00')
  console.log('Valor total: ' + finalValue.toFixed(2))
  finalValue = finalValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  console.log('Converter para string: ' + finalValue)
  document.getElementById('price02').innerHTML = finalValue
})

btnMinus03.addEventListener('click', function (e) {
  let qtd03 = document.getElementById('quantity03').textContent

  let finalValue = qtd03 * 12.00
  console.log('Quantidade de marmita: ' + qtd03)
  console.log('Preço unitário: 12.00')
  console.log('Valor total: ' + finalValue.toFixed(2))
  finalValue = finalValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  console.log('Converter para string: ' + finalValue)
  document.getElementById('price03').innerHTML = finalValue
})

btnMinus04.addEventListener('click', function (e) {
  let qtd04 = document.getElementById('quantity04').textContent

  let finalValue = qtd04 * 12.00
  console.log('Quantidade de marmita: ' + qtd04)
  console.log('Preço unitário: 12.00')
  console.log('Valor total: ' + finalValue.toFixed(2))
  finalValue = finalValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  console.log('Converter para string: ' + finalValue)
  document.getElementById('price04').innerHTML = finalValue
})