const buttonElement = document.querySelector('.change-color');
const textElement = document.querySelector('.color');

buttonElement.addEventListener('click', changeColor);

function changeColor(e) {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  textElement.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
