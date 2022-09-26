const date = new Date()
let weekday = date.getDay()

let allMeals = ['meal01', 'meal02', 'meal03', 'meal04']
meal01 = document.getElementById(allMeals[0])
meal02 = document.getElementById(allMeals[1])
meal03 = document.getElementById(allMeals[2])
meal04 = document.getElementById(allMeals[3])

let allDescriptions = document.querySelectorAll('.description')

let menu = document.getElementById('menuDay')

switch (weekday) {
  case 0:
    console.log('Hoje é domingo!')
    meal01.textContent = 'Frango ao molho'
    meal02.textContent = 'Bisteca de gado assada'
    meal03.textContent = 'Bistecade porco assada'
    meal04.textContent = 'Fígado assado'
    // allDescriptions.forEach(function (e) {
    //   e.textContent = 'Baião de dois, farofa e salada verde.'
    // })
    hasImage('./assets/img/menu/menuDom.png', 'Domingo | Marmitaria Terezinha')
    break
  case 1:
    console.log('Hoje é segunda-feira!')
    meal01.textContent = 'Carne cozida'
    meal02.textContent = 'Bisteca de gado assada'
    meal03.textContent = 'Bisteca de porco assada'
    meal04.textContent = 'Fígado acebolado'
    hasImage('./assets/img/menu/menuSeg.png', 'Segunda-feira | Marmitaria Terezinha')
    break
  case 2:
    console.log('Hoje é terça-feira!')
    meal01.textContent = 'Frango ao molho'
    meal02.textContent = 'Carne de porco cozida'
    meal03.textContent = 'Assado de panela'
    meal04.textContent = 'Bife ao molho'
    hasImage('./assets/img/menu/menuTer.png', 'Terça-feira | Marmitaria Terezinha')
    break
  case 3:
    console.log('Hoje é quarta-feira!')
    meal01.textContent = 'Carne porco ao molho'
    meal02.textContent = 'Frango ao molho'
    meal03.textContent = 'Bisteca de gado assada'
    meal04.textContent = 'Bisteca de porco assada'
    hasImage('./assets/img/menu/menuQuar.png', 'Quarta-feira | Marmitaria Terezinha')
    break
  case 4:
    console.log('Hoje é quinta-feira!')
    meal01.textContent = 'Carne porco ao molho'
    meal02.textContent = 'Bife ao molho'
    meal03.textContent = 'Carne de gado cozida'
    meal04.textContent = 'Fígado assado'
    hasImage('./assets/img/menu/menuQui.png', 'Quinta-feira | Marmitaria Terezinha')
    break
  case 5:
    console.log('Hoje é sexta-feira!')
    meal01.textContent = 'Frango cozido'
    meal02.textContent = 'Bife ao molho'
    meal03.textContent = 'Costela de gado cozida'
    meal04.textContent = 'Peito de gado ao molho'
    hasImage('./assets/img/menu/menuSex.png', 'Sexta-feira | Marmitaria Terezinha')
    break
  case 6:
    console.log('Hoje é sábado')
    meal01.textContent = 'Bife ao molho'
    meal02.textContent = 'Costela de gado cozida'
    meal03.textContent = 'Carne de gado assada'
    meal04.textContent = 'Bisteca de porco assada'
    hasImage('./assets/img/menu/menuSab.png', 'Sábado | Marmitaria Terezinha')
    break
  default:
    console.log(
      `A informação da variável weekday é ${weekday}, sendo uma informação inválida, devendo variar de 0 a 6, sendo 0 - domingo, 1 - segunda, ..., 6 - sábado.`
    )
    break
}

function hasImage(imageFile, fileName) {
  var ajax = new XMLHttpRequest()

  ajax.open('GET', imageFile, true)
  ajax.send()

  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      var png = ajax.responseText

      if (ajax.status === 200) {
        console.log('A imagem ' + imageFile + ' existe dentro do projeto.')
        menu.href = `${imageFile}`
        menu.download = `${fileName}`
      } else {
        console.log('A imagem ' + imageFile + ' NÃO existe dentro do projeto.')
        menu.href = './assets/pages/404notfound.html'
      }
    }
  }
}

