//  this code will run two alerts after button is clicked.
document.getElementById('button').addEventListener('click', message)

function message () {
  alert('Hey, thanks for coming!')
  alert('Going so soon? Oh well, have a great day!')
}

// This code changes the text of button2 and changes backgroundColor
document.getElementById('button2').addEventListener('click', buttonText)

function buttonText () {
  document.getElementById('button2').innerHTML = 'Oh Hey!'
  document.getElementById('main-page').style.backgroundColor = 'steelblue'
}

// this code will change the text color of the paragraph
document.getElementById('button3').addEventListener('click', color)

function color () {
  document.getElementById('text').style.color = 'lightseagreen'
  document.getElementById('text').style.fontFamily = 'fantasy'
  document.getElementById('text').style.fontSize = '30px'
}
