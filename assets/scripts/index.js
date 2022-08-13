let checkboxes = document.getElementsByName('itemCardapio')
let pedidoWpp = document.getElementById('pedido')
let meals = document.querySelectorAll('.meal')
let descriptions = document.querySelectorAll('.description')
let prices = document.querySelectorAll('.price')
let pedidoCompleto =
  'Olá, bom dia, poderia me ajudar com meu pedido?\n\nEu gostaria de:\n'
let buttonLimpar = document.getElementById('limpar')

pedidoWpp.addEventListener('click', function (e) {
  pedidoCompleto = 'Olá, bom dia, poderia me ajudar com meu pedido?\n\n'
  let marmita = ''
  // let descricao = ''
  let preco = ''
  let msgWhatsapp = ''

  checkboxes.forEach(function (el) {
    if (!el.checked) {
      console.log('Não marcado: ' + el.id)
      if (el.id == 'marmita01') {
        console.log('Marmita 01')
        pedidoWpp.href = `https://wa.me/5585989647993?text=Olá, bom dia, poderia me ajudar com meu pedido?`
      }
      if (el.id == 'marmita02') {
        console.log('Marmita 02')
        pedidoWpp.href = `https://wa.me/5585989647993?text=Olá, bom dia, poderia me ajudar com meu pedido?`
      }
      if (el.id == 'marmita03') {
        console.log('Marmita 03')
        pedidoWpp.href = `https://wa.me/5585989647993?text=Olá, bom dia, poderia me ajudar com meu pedido?`
      }
      if (el.id == 'marmita04') {
        console.log('Marmita 04')
        pedidoWpp.href = `https://wa.me/5585989647993?text=Olá, bom dia, poderia me ajudar com meu pedido?`
      }
    }
  })
  checkboxes.forEach(function (ele) {
    if (ele.checked) {
      if (ele.id == 'marmita01') {
        console.log('Marmita 01')
        marmita = meals[0].textContent
        // descricao = descriptions[0].textContent
        preco = prices[0].textContent

        pedidoCompleto += `*${marmita} - ${preco}*\n`
        console.log(pedidoCompleto)
        msgWhatsapp = pedidoCompleto
        msgWhatsapp = window.encodeURIComponent(msgWhatsapp)
        pedidoWpp.href = `https://wa.me/5585989647993?text=${msgWhatsapp}`
      }
      if (ele.id == 'marmita02') {
        console.log('Marmita 02')
        marmita = meals[1].textContent
        descricao = descriptions[1].textContent
        preco = prices[1].textContent

        pedidoCompleto += `*${marmita} - ${preco}*\n`
        console.log(pedidoCompleto)
        msgWhatsapp = pedidoCompleto
        msgWhatsapp = window.encodeURIComponent(msgWhatsapp)
        pedidoWpp.href = `https://wa.me/5585989647993?text=${msgWhatsapp}`
      }

      if (ele.id == 'marmita03') {
        console.log('Marmita 03')
        // meals.forEach(function (ele) {
        //   console.log(ele.textContent);
        // })
        // console.log(meals[2].textContent);
        marmita = meals[2].textContent
        // console.log(descriptions[2].textContent);
        descricao = descriptions[2].textContent
        // console.log(prices[2].textContent);
        preco = prices[2].textContent

        pedidoCompleto += `*${marmita} - ${preco}*\n`
        console.log(pedidoCompleto)
        msgWhatsapp = pedidoCompleto
        msgWhatsapp = window.encodeURIComponent(msgWhatsapp)
        pedidoWpp.href = `https://wa.me/5585989647993?text=${msgWhatsapp}`
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

        pedidoCompleto += `*${marmita} - ${preco}*\n`
        console.log(pedidoCompleto)
        msgWhatsapp = pedidoCompleto
        msgWhatsapp = window.encodeURIComponent(msgWhatsapp)
        pedidoWpp.href = `https://wa.me/5585989647993?text=${msgWhatsapp}`
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
})
