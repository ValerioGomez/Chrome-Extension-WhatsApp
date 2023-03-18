const button = document.querySelector('#enviar');
const input = document.querySelector('#input');

const abrirURL = () => {
  const numero = input.value;
  if (numero) {
    window.open(`https://api.whatsapp.com/send/?phone=+51${numero}`, '_blank');
  }
}

button.addEventListener('click', abrirURL);

input.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    abrirURL();
  }
});
input.focus();