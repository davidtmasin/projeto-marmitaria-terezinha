let checkboxes = document.getElementsByName('itemCardapio')
let pedidoWpp = document.getElementById('pedido')
let meals = document.querySelectorAll('.meal')
let descriptions = document.querySelectorAll('.description')
let prices = document.querySelectorAll('.price')
let pedidoCompleto =
  'Olá, bom dia, poderia me ajudar com meu pedido?\n\nEu gostaria de:\n'
let buttonLimpar = document.getElementById('limpar')
const numberWhatsapp = '558592346554'
const hrefWhatsapp = `https://wa.me/${numberWhatsapp}?text=Olá, bom dia, poderia me ajudar com meu pedido?`

const btnMinus1 = document.getElementById('minus01')
const btnMinus2 = document.getElementById('minus02')
const btnMinus3 = document.getElementById('minus03')
const btnMinus4 = document.getElementById('minus04')
const btnPlus1 = document.getElementById('plus01')
const btnPlus2 = document.getElementById('plus02')
const btnPlus3 = document.getElementById('plus03')
const btnPlus4 = document.getElementById('plus04')

let allPrices = document.querySelectorAll('.price')
let allQtde = document.querySelectorAll('.quantity')
let qtde1 = document.getElementById('quantity01')
let qtde2 = document.getElementById('quantity02')
let qtde3 = document.getElementById('quantity03')
let qtde4 = document.getElementById('quantity04')

pedidoWpp.addEventListener('click', function (e) {
  pedidoCompleto =
    'Olá, bom dia, poderia me ajudar com meu pedido?\n\nEu gostaria de:\n'
  let marmita = ''
  // let descricao = ''
  let preco = ''
  let total = ''
  let msgWhatsapp = ''

  checkboxes.forEach(function (el) {
    if (!el.checked) {
      console.log('Não marcado: ' + el.id)
      if (el.id == 'marmita01') {
        console.log('Marmita 01')
        pedidoWpp.href = `${hrefWhatsapp}`
      }
      if (el.id == 'marmita02') {
        console.log('Marmita 02')
        pedidoWpp.href = `${hrefWhatsapp}`
      }
      if (el.id == 'marmita03') {
        console.log('Marmita 03')
        pedidoWpp.href = `${hrefWhatsapp}`
      }
      if (el.id == 'marmita04') {
        console.log('Marmita 04')
        pedidoWpp.href = `${hrefWhatsapp}`
      }
    }
  })
  checkboxes.forEach(function (ele) {
    if (ele.checked) {
      if (ele.id == 'marmita01') {
        console.log('Marmita 01')

        marmita = meals[0].textContent
        preco = prices[0].textContent
        total = qtde1.textContent
        console.log(total)

        if (parseInt(total) == 1) {
          pedidoCompleto += `*0${total} marmita - ${marmita} - ${preco}*\n`
          console.log(pedidoCompleto)
        } else if (parseInt(total) > 1 && parseInt(total) < 10) {
          pedidoCompleto += `*0${total} marmitas - ${marmita} - ${preco} cada*\n`
          console.log(pedidoCompleto)
        } else {
          pedidoCompleto += `*${total} marmitas - ${marmita} - ${preco} cada*\n`
          console.log(pedidoCompleto)
        }

        msgWhatsapp = pedidoCompleto
        msgWhatsapp = window.encodeURIComponent(msgWhatsapp)
        pedidoWpp.href = `https://wa.me/${numberWhatsapp}?text=${msgWhatsapp}`
      }

      if (ele.id == 'marmita02') {
        console.log('Marmita 02')
        marmita = meals[1].textContent
        descricao = descriptions[1].textContent
        preco = prices[1].textContent
        total = qtde2.textContent
        console.log(total)

        if (parseInt(total) == 1) {
          pedidoCompleto += `*0${total} marmita - ${marmita} - ${preco}*\n`
          console.log(pedidoCompleto)
        } else if (parseInt(total) > 1 && parseInt(total) < 10) {
          pedidoCompleto += `*0${total} marmitas - ${marmita} - ${preco} cada*\n`
          console.log(pedidoCompleto)
        } else {
          pedidoCompleto += `*${total} marmitas - ${marmita} - ${preco} cada*\n`
          console.log(pedidoCompleto)
        }

        msgWhatsapp = pedidoCompleto
        msgWhatsapp = window.encodeURIComponent(msgWhatsapp)
        pedidoWpp.href = `https://wa.me/${numberWhatsapp}?text=${msgWhatsapp}`
      }

      if (ele.id == 'marmita03') {
        console.log('Marmita 03')
        marmita = meals[2].textContent
        descricao = descriptions[2].textContent
        preco = prices[2].textContent
        total = qtde3.textContent
        console.log(total)

        if (parseInt(total) == 1) {
          pedidoCompleto += `*0${total} marmita - ${marmita} - ${preco}*\n`
          console.log(pedidoCompleto)
        } else if (parseInt(total) > 1 && parseInt(total) < 10) {
          pedidoCompleto += `*0${total} marmitas - ${marmita} - ${preco} cada*\n`
          console.log(pedidoCompleto)
        } else {
          pedidoCompleto += `*${total} marmitas - ${marmita} - ${preco} cada*\n`
          console.log(pedidoCompleto)
        }

        msgWhatsapp = pedidoCompleto
        msgWhatsapp = window.encodeURIComponent(msgWhatsapp)
        pedidoWpp.href = `https://wa.me/${numberWhatsapp}?text=${msgWhatsapp}`
      }

      if (ele.id == 'marmita04') {
        console.log('Marmita 04')
        // meals.forEach(function (ele) {
        //   console.log(ele.textContent);
        // })
        // console.log(meals[3].textContent);
        marmita = meals[3].textContent
        // console.log(descriptions[3].textContent);
        descricao = descriptions[3].textContent
        // console.log(prices[3].textContent);
        preco = prices[3].textContent
        total = qtde4.textContent
        console.log(total)

        if (parseInt(total) == 1) {
          pedidoCompleto += `*0${total} marmita - ${marmita} - ${preco}*\n`
          console.log(pedidoCompleto)
        } else if (parseInt(total) > 1 && parseInt(total) < 10) {
          pedidoCompleto += `*0${total} marmitas - ${marmita} - ${preco} cada*\n`
          console.log(pedidoCompleto)
        } else {
          pedidoCompleto += `*${total} marmitas - ${marmita} - ${preco} cada*\n`
          console.log(pedidoCompleto)
        }

        msgWhatsapp = pedidoCompleto
        msgWhatsapp = window.encodeURIComponent(msgWhatsapp)
        pedidoWpp.href = `https://wa.me/${numberWhatsapp}?text=${msgWhatsapp}`
      }
    }
  })
})

buttonLimpar.addEventListener('click', function (e) {
  pedidoCompleto = 'Olá, bom dia, poderia me ajudar com meu pedido?\n\n'
  pedidoWpp.href =
    'https://wa.me/5585989647993?text=Olá, bom dia, poderia me ajudar com meu pedido?'
  checkboxes.forEach(function (el) {
    el.checked = false
  })
  allQtde.forEach(function (el) {
    el.textContent = '1'
  })
  allPrices.forEach(function (el) {
    el.textContent = 'R$ 12,00'
  })
})

btnMinus1.addEventListener('click', function (e) {
  console.log(btnMinus1)
  console.log(btnPlus1)
  if (parseInt(qtde1.textContent) == 1) {
    btnMinus1.style.cursor = 'not-allowed'
    alert('Não é possível diminuir mais!')
    console.log(qtde1.textContent)
  } else {
    btnMinus1.style.cursor = 'pointer'
    btnPlus1.style.cursor = 'pointer'
    let convertedString = parseInt(qtde1.textContent)
    let subtractNumber = convertedString - 1
    subtractNumber = `${subtractNumber}`
    qtde1.textContent = subtractNumber
    console.log(qtde1.textContent)
  }
})

btnMinus2.addEventListener('click', function (e) {
  console.log(btnMinus2)
  console.log(btnPlus2)
  if (parseInt(qtde2.textContent) == 1) {
    btnMinus2.style.cursor = 'not-allowed'
    alert('Não é possível diminuir mais!')
    console.log(qtde2.textContent)
  } else {
    btnMinus2.style.cursor = 'pointer'
    btnPlus2.style.cursor = 'pointer'
    let convertedString = parseInt(qtde2.textContent)
    let subtractNumber = convertedString - 1
    subtractNumber = `${subtractNumber}`
    qtde2.textContent = subtractNumber
    console.log(qtde2.textContent)
  }
})

btnMinus3.addEventListener('click', function (e) {
  console.log(btnMinus3)
  console.log(btnPlus1)
  if (parseInt(qtde3.textContent) == 1) {
    btnMinus3.style.cursor = 'not-allowed'
    alert('Não é possível diminuir mais!')
    console.log(qtde3.textContent)
  } else {
    btnMinus3.style.cursor = 'pointer'
    btnPlus3.style.cursor = 'pointer'
    let convertedString = parseInt(qtde3.textContent)
    let subtractNumber = convertedString - 1
    subtractNumber = `${subtractNumber}`
    qtde3.textContent = subtractNumber
    console.log(qtde3.textContent)
  }
})

btnMinus4.addEventListener('click', function (e) {
  console.log(btnMinus4)
  console.log(btnPlus4)
  if (parseInt(qtde4.textContent) == 1) {
    btnMinus4.style.cursor = 'not-allowed'
    alert('Não é possível diminuir mais!')
    console.log(qtde4.textContent)
  } else {
    btnMinus4.style.cursor = 'pointer'
    btnPlus4.style.cursor = 'pointer'
    let convertedString = parseInt(qtde4.textContent)
    let subtractNumber = convertedString - 1
    subtractNumber = `${subtractNumber}`
    qtde4.textContent = subtractNumber
    console.log(qtde4.textContent)
  }
})

btnPlus1.addEventListener('click', function (e) {
  if (parseInt(qtde1.textContent) >= 10) {
    btnPlus1.style.cursor = 'not-allowed'
    alert('Limite de 10 unidades alcançado!')
    console.log(qtde1.textContent)
  } else {
    btnPlus1.style.cursor = 'pointer'
    btnMinus1.style.cursor = 'pointer'
    let convertedString = parseInt(qtde1.textContent)
    let sumNumber = convertedString + 1
    sumNumber = `${sumNumber}`
    qtde1.textContent = sumNumber
    console.log(qtde1.textContent)
  }
})

btnPlus2.addEventListener('click', function (e) {
  if (parseInt(qtde2.textContent) >= 10) {
    btnPlus2.style.cursor = 'not-allowed'
    alert('Limite de 10 unidades alcançado!')
    console.log(qtde2.textContent)
  } else {
    btnPlus2.style.cursor = 'pointer'
    btnMinus2.style.cursor = 'pointer'
    let convertedString = parseInt(qtde2.textContent)
    let sumNumber = convertedString + 1
    sumNumber = `${sumNumber}`
    qtde2.textContent = sumNumber
    console.log(qtde2.textContent)
  }
})

btnPlus3.addEventListener('click', function (e) {
  if (parseInt(qtde3.textContent) >= 10) {
    btnPlus3.style.cursor = 'not-allowed'
    alert('Limite de 10 unidades alcançado!')
    console.log(qtde3.textContent)
  } else {
    btnPlus3.style.cursor = 'pointer'
    btnMinus3.style.cursor = 'pointer'
    let convertedString = parseInt(qtde3.textContent)
    let sumNumber = convertedString + 1
    sumNumber = `${sumNumber}`
    qtde3.textContent = sumNumber
    console.log(qtde3.textContent)
  }
})

btnPlus4.addEventListener('click', function (e) {
  if (parseInt(qtde4.textContent) >= 10) {
    btnPlus1.style.cursor = 'not-allowed'
    alert('Limite de 10 unidades alcançado!')
    console.log(qtde4.textContent)
  } else {
    btnPlus4.style.cursor = 'pointer'
    btnMinus4.style.cursor = 'pointer'
    let convertedString = parseInt(qtde4.textContent)
    let sumNumber = convertedString + 1
    sumNumber = `${sumNumber}`
    qtde4.textContent = sumNumber
    console.log(qtde4.textContent)
  }
})
