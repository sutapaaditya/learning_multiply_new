let newEl = (el, text = '') => {
  let x = document.createElement(el);
  if (text) {

    x.textContent = text
  }
  document.querySelector('.main').appendChild(x);
}

let addItems = (option) => {
  let values = document.querySelectorAll ('input');
  a = parseInt(values[0].value);
  b = parseInt(values[1].value);
  if (a && b ) {
    if (option === 'add') {
      values[2].value = a+b;
    } else if (option === 'mult') {
      values[2].value = a*b;
    }
  } else {
    alert ("Invalid input!")
  }
  values[0].value = '';
  values[1].value = '';
}


    newEl('input');

newEl('input');
newEl('button', 'Multiply');
newEl('input');


let btns = document.querySelectorAll('button');

btns.forEach(b => {
  if (b.textContent === 'Add'){
    b.addEventListener('click', () => {
      addItems('add');
    });
  } else if (b.textContent === 'Multiply') {
    b.addEventListener('click', () => {
      addItems('mult');
    });
  }
})
