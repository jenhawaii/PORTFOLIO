let test = document.querySelector('h1');

function increaseWidth() {
  test.style.fontSize = '30px';
}

function reset() {
  test.style.fontSize = '';
}

test.addEventListener('mouseover', increaseWidth);
test.addEventListener('mouseout', reset);




