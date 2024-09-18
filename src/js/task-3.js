const inputElement = document.querySelector('#name-input');
const textElement = document.querySelector('#name-output');

inputElement.addEventListener('input', handleInput);

function handleInput(e) {
  textElement.textContent = e.target.value;
}
