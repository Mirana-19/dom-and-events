const controlElement = document.querySelector('#controls');
const containerElement = document.querySelector('#boxes');

controlElement.addEventListener('click', handleControls);

function handleControls(e) {
  const input = controlElement.firstElementChild;
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  if (e.target.hasAttribute('data-destroy')) {
    destroyBoxes();
    input.value = '';
    return;
  }

  if (e.target.hasAttribute('data-create') && input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
    input.value = '';
  } else {
    return alert('Please input a value between 1 and 100');
  }
}

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    boxes.push(
      `<div style="width:${boxSize}px; height:${boxSize}px; background-color:${getRandomHexColor()};"></div>`
    );

    boxSize += 10;
  }

  return (containerElement.innerHTML = boxes.join(''));
}

function destroyBoxes() {
  return (containerElement.innerHTML = '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
