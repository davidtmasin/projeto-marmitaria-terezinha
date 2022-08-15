const date = new Date()
let weekday = date.getDay()

let allMeals = ['meal01', 'meal02', 'meal03', 'meal04']
meal01 = document.getElementById(allMeals[0])
meal02 = document.getElementById(allMeals[1])
meal03 = document.getElementById(allMeals[2])
meal04 = document.getElementById(allMeals[3])

let allDescriptions = document.querySelectorAll('.description')

switch (weekday) {
  case 0:
    console.log('Hoje é domingo!')
    meal01.textContent = 'Assado de panela'
    meal02.textContent = 'Bisteca de porco assada'
    meal03.textContent = 'Linguiça assada'
    meal04.textContent = 'Fígado assado'
    allDescriptions.forEach(function (e) {
      e.textContent = 'Baião de dois, farofa e salada verde.'
    })
    break
  case 1:
    console.log('Hoje é segunda-feira!')
    meal01.textContent = 'Bife ao molho'
    meal02.textContent = 'Carne de porco ao molho'
    meal03.textContent = 'Carne de gado cozida'
    meal04.textContent = 'Fígado assado'
    break
  case 2:
    console.log('Hoje é terça-feira!')
    meal01.textContent = 'Carne cozida'
    meal02.textContent = 'Bisteca de gado marinado na cebola'
    meal03.textContent = 'Bisteca de porco assada'
    meal04.textContent = 'Bife ao molho'
    break
  case 3:
    console.log('Hoje é quarta-feira!')
    meal01.textContent = 'Frango ao molho'
    meal02.textContent = 'Bife ao molho'
    meal03.textContent = 'Bisteca de porco assada'
    meal04.textContent = 'Carne moída cozida'
    break
    break
  case 4:
    console.log('Hoje é quinta-feira!')
    meal01.textContent = 'Fígado assado'
    meal02.textContent = 'Linguiça assada'
    meal03.textContent = 'Bisteca de gado assada'
    meal04.textContent = 'Bife ao molho'
    break
  case 5:
    console.log('Hoje é sexta-feira!')
    meal01.textContent = 'Frango ao molho'
    meal02.textContent = 'Carne moída'
    meal03.textContent = 'Fígado assado'
    meal04.textContent = 'Peixe assado'
    break
  case 6:
    console.log('Hoje é sábado')
    meal01.textContent = 'Carne moída'
    meal02.textContent = 'Fígado assado'
    meal03.textContent = 'Peixe assado'
    meal04.textContent = 'Linguiça assada'
    break

  default:
    console.log(
      `A informação da variável weekday é ${weekday}, sendo uma informação inválida, devendo variar de 0 a 6, sendo 0 - domingo, 1 - segunda, ..., 6 - sábado.`
    )
    break
}
