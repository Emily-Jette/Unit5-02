//  this code will run two alerts after button is clicked.
document.getElementById('button').addEventListener('click', message)

function message() {
  alert ('Hey, thanks for coming!')
  alert ('Going so soon? Oh well, have a great day!')
}

// This code changes the text on a button. It was a test.
document.getElementById('button2').addEventListener('click', text)

function text() {
  document.getElementById('button2').innerHTML = 'Oh Hey!'
}

// this code will change the text color of the paragraph
document.getElementById('button3').addEventListener('click', color)

function color() {
  document.getElementById('text').style.color = 'lightseagreen'
  document.getElementById('text').style.fontFamily='fantasy'
  document.getElementById('text').style.fontSize='30px'
}
