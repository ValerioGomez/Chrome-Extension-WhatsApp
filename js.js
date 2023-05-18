const button = document.querySelector('#enviar');
const input = document.querySelector('#input');

const abrirURL = () => {
  const numero = input.value;
  if (numero) {
    window.open(`https://api.whatsapp.com/send/?phone=51${numero}`, '_blank');
  }
};

button.addEventListener('click', abrirURL);

input.addEventListener('paste', (event) => {
  event.preventDefault();
  const clipboardData = event.clipboardData || window.clipboardData;
  const pastedText = clipboardData.getData('text/plain');
  const numbersOnly = pastedText.replace(/\D/g, '');
  input.value = numbersOnly;
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    abrirURL();
  }
});

input.focus();
