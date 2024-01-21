const send = document.getElementById('send')
const content = document.getElementById('content')
const titlleH = document.querySelector('h1')

send.addEventListener('click', (e) => {
  e.preventDefault()
  const str = content.value
  const xhr = new XMLHttpRequest()
  xhr.open('post', '/searchAJAX')
  xhr.setRequestHeader('Content-type', 'application/json')
  const data = JSON.stringify({content: str})
  xhr.send(data)
  xhr.onload = function() {
    console.log(xhr.responseText)
    const {title, name} = JSON.parse(xhr.responseText)
    titlleH.textContent = `${title}${name}`
  }
})