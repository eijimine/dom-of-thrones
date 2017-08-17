function scene3() {

  // Setup Stage
  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)


  // Setup Cast

  danContainer = document.createElement('div')
  stage.append(danContainer)
  danContainer.style.position = 'absolute'
  danContainer.style.width = '10%'
  danContainer.style.height = '37%'
  danContainer.style.top = '50%'
  danContainer.style.left = '25%'
  danContainer.style.border = 'none'
  danContainer.style.background = 'none'
  dan = document.querySelector('#danerys')
  danContainer.append(dan)
  dress = document.querySelector('#blue-dress')
  danContainer.append(dress)
  dan.style.border = 'none'
  dress.style.border = 'none'
  dan.style.width = '60%'
  dan.style.position = 'absolute'
  dan.style.top = 0
  dress.style.position = 'absolute'
  dress.style.bottom = 0

  drogoContainer = document.createElement('div')
  drogoContainer.id = 'drogo-container'
  stage.append(drogoContainer)
  drogoContainer.style.width = '8%'
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.height = '31%'
  drogoContainer.style.top = '55%'
  drogoContainer.style.left = '55%'

  drogo = document.querySelector('#drogo')
  drogoContainer.append(drogo)
  drogo.style.width = '75%'
  drogo.style.position = 'absolute'
  drogo.style.left = '17%'

  drogoWardrobe = document.querySelector('#bulky-man')
  drogoContainer.append(drogoWardrobe)
  drogoWardrobe.style.position = 'absolute'
  drogoWardrobe.style.bottom = 0

  // Character 1

  // Character 2

  // Setup Props

  egg = document.querySelector('#egg')
  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.top = '60%'
  egg.style.left = '53%'
  egg.style.height = '15%'


  // Prop 1

  // Prop 2

  // Action!

  frame(function() {
    egg.style.top = '67%'
    egg.style.left = '31%'
  })

  frame(function() {
    egg.style.top = '64%'
    egg.style.left = '36%'
  })

  frame(function() {
    egg.style.top = '61%'
    egg.style.left = '41%'
  })

  frame(function() {
    egg.style.top = '68%'
    egg.style.left = '47%'
  })

  frame(function() {
    egg.style.top = '64%'
    egg.style.left = '53%'
  })


frame(function() {
  egg.style.top = '64%'
  egg.style.left = '53%'
})

frame(function() {
  egg.style.top = '68%'
  egg.style.left = '47%'
})

frame(function() {
  egg.style.top = '61%'
  egg.style.left = '41%'
})

frame(function() {
  egg.style.top = '64%'
  egg.style.left = '36%'
})
frame(function() {
  egg.style.top = '67%'
  egg.style.left = '31%'
})

frame(function() {
  egg.style.top = '67%'
  egg.style.left = '31%'
})

frame(function() {
  egg.style.top = '64%'
  egg.style.left = '36%'
})

frame(function() {
  egg.style.top = '61%'
  egg.style.left = '41%'
})

frame(function() {
  egg.style.top = '68%'
  egg.style.left = '47%'
})

frame(function() {
  egg.style.top = '64%'
  egg.style.left = '53%'
})


frame(function() {
egg.style.top = '64%'
egg.style.left = '53%'
})

frame(function() {
egg.style.top = '68%'
egg.style.left = '47%'
})

frame(function() {
egg.style.top = '61%'
egg.style.left = '41%'
})

frame(function() {
egg.style.top = '64%'
egg.style.left = '36%'
})
frame(function() {
egg.style.top = '67%'
egg.style.left = '31%'
})
  
  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
