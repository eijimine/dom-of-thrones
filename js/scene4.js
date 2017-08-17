function scene4() {

  // Setup Stage
  stage = document.querySelector('#stage');
  kings = document.querySelector('#kings-landing');
  stageImg = stage.querySelector('#stage-img');
  kingslandingImgSrc = kings.getAttribute('src');
  stageImg.setAttribute('src', kingslandingImgSrc);

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
  //
  // egg = document.querySelector('#egg')
  // stage.append(egg)
  // egg.style.position = 'absolute'
  // egg.style.top = '60%'
  // egg.style.left = '53%'
  // egg.style.height = '15%'


  // Prop 1

  // Prop 2

  // Action!

  frame(function() {
    danContainer.style.top = '37%'
    danContainer.style.left = '31%'
  })

  frame(function() {
    danContainer.style.top = '34%'
    danContainer.style.left = '36%'
  })

  frame(function() {
    danContainer.style.top = '31%'
    danContainer.style.left = '41%'
  })

  frame(function() {
    danContainer.style.top = '38%'
    danContainer.style.left = '47%'
  })

  frame(function() {
    danContainer.style.top = '34%'
    danContainer.style.left = '53%'
  })


frame(function() {
  danContainer.style.top = '34%'
  danContainer.style.left = '53%'
})

frame(function() {
  danContainer.style.top = '38%'
  danContainer.style.left = '47%'
})

frame(function() {
  danContainer.style.top = '31%'
  danContainer.style.left = '41%'
})

frame(function() {
  danContainer.style.top = '34%'
  danContainer.style.left = '36%'
})
frame(function() {
  danContainer.style.top = '37%'
  danContainer.style.left = '31%'
})


frame(function() {
  drogoContainer.style.top = '37%'
  drogoContainer.style.left = '51%'
})

frame(function() {
  drogoContainer.style.top = '34%'
  drogoContainer.style.left = '56%'
})

frame(function() {
  drogoContainer.style.top = '31%'
  drogoContainer.style.left = '51%'
})

frame(function() {
  drogoContainer.style.top = '38%'
  drogoContainer.style.left = '57%'
})

frame(function() {
  drogoContainer.style.top = '34%'
  drogoContainer.style.left = '53%'
})


frame(function() {
drogoContainer.style.top = '34%'
drogoContainer.style.left = '53%'
})

frame(function() {
drogoContainer.style.top = '38%'
drogoContainer.style.left = '57%'
})

frame(function() {
drogoContainer.style.top = '31%'
drogoContainer.style.left = '51%'
})

frame(function() {
drogoContainer.style.top = '34%'
drogoContainer.style.left = '56%'
})

frame(function() {
drogoContainer.style.top = '37%'
drogoContainer.style.left = '51%'
})


frame(function() {
drogoContainer.style.top = '41%'
drogoContainer.style.left = '51%'
danContainer.style.top = '41%'
danContainer.style.left = '41%'

})

frame(function() {
drogoContainer.style.top = '54%'
drogoContainer.style.left = '56%'
danContainer.style.top = '54%'
danContainer.style.left = '36%'

})

frame(function() {
drogoContainer.style.top = '67%'
drogoContainer.style.left = '51%'
danContainer.style.top = '67%'
danContainer.style.left = '31%'

})

frame(function() {
drogoContainer.style.top = '71%'
drogoContainer.style.left = '51%'
danContainer.style.top = '71%'
danContainer.style.left = '41%'

})

frame(function() {
drogoContainer.style.top = '94%'
drogoContainer.style.left = '56%'
danContainer.style.top = '94%'
danContainer.style.left = '36%'

})

frame(function() {
drogoContainer.style.top = '100%'
drogoContainer.style.left = '51%'
danContainer.style.top = '100%'
danContainer.style.left = '31%'

})


  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
