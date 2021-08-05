//menu hamburger

window.onload = () => {
  const btnMobile = document.getElementById('btn-mobile')
  btnMobile.addEventListener('click', toggleMenu)
  console.log(btnMobile)
}

function toggleMenu() {
  const menu = document.getElementById('menu')
  const btnMobile = document.getElementById('btn-mobile')

  if (menu.style.display === 'block') {
    menu.style.display = 'none'
    btnMobile.style.backgroundImage = 'url(./img/Hamburguer.png)'
  } else {
    menu.style.display = 'block'
    btnMobile.style.backgroundImage = 'url(./img/Hamburguer-close.png)'
  }
}

//form
function onSubmit() {
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const phone = document.getElementById('phone').value
  const message = document.getElementById('message').value

  console.log(name, email, phone, message)

  //Enviar dados para a API

  const data = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  }

  if (name === '' || email === '' || phone === '' || message === '') {
    return alert('Erro! Complete os campos.')
  }

  const url = 'https://otterwise-fake-api.herokuapp.com/contact'
  const stringData = JSON.stringify(data)

  fetch(url, {
    method: 'POST',
    body: stringData,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      alert('Sucesso! Pedido enviado.')
      document.getElementById('name').value = ''
      document.getElementById('email').value = ''
      document.getElementById('phone').value = ''
      document.getElementById('message').value = ''
    })
}
