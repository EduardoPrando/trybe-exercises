function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Exercise functions

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function addElementTag(parent, tag) {
  parent.appendChild(document.createElement(tag));
}

function addLiUl(n) {
  for (let i = 0; i < n.length; i += 1) {
    addElementTag(ul, 'li');
    document.getElementsByTagName('li')[i + 2].innerText = n[i];
    document.getElementsByTagName('li')[i + 2].className = 'day';
    addDifClass(n, i);
  }
}

function addDifClass(n, i) {
  if (n[i] === 24 || n[i] === 25 || n[i] === 31) {
    document.getElementsByTagName('li')[i + 2].className += ' holiday';
  }
  if (n[i] === 4 || n[i] === 11 || n[i] === 18 || n[i] === 25) {
    document.getElementsByTagName('li')[i + 2].className += ' friday';
  }
}

// Exercise 1
const li = document.createElement('li');
const ul = document.getElementById('days');

addLiUl(dezDaysList);

// Exercise 2
let button = document.getElementsByClassName('buttons-container')[0];
function holidayButton(Feriados) {
  addElementTag(button, 'button');
  button.firstElementChild.id = 'btn-holiday';
  document.getElementById('btn-holiday').innerHTML = Feriados;
}
let feria = 'feriados';
holidayButton(feria);

// Exercise 3
let btn1 = document.querySelector('button');
btn1.onclick = function () {
  let holydayClass = document.getElementsByClassName('holiday');
  let buttonCurrentColor =
    holydayClass[holydayClass.length - 1].style.background;
  for (let i = 0; i < holydayClass.length; i += 1) {
    if (buttonCurrentColor !== 'green') {
      holydayClass[i].style.background = 'green';
      holydayClass[i].style.color = 'white';
    } else {
      holydayClass[i].style.background = 'rgb(238,238,238)';
      holydayClass[i].style.color = '#777';
    }
  }
};

// Exercise 4
addElementTag(button, 'button');
function fridayButton(buttonString) {
  button.lastChild.id = 'btn-friday';
  document.getElementById('btn-friday').innerHTML = buttonString;
}
let stringButtonFriday = 'Sexta-feira';
fridayButton(stringButtonFriday);

// Exercise 5

let buttonFirstSibling = document.querySelector('button').nextSibling;

buttonFirstSibling.onclick = function () {
  let fridayClass = document.getElementsByClassName('friday');
  let numbersHoliday = [4, 11, 18, 25];
  let buttonCurrentString = fridayClass[fridayClass.length - 1].innerHTML;
  for (let i = 0; i < fridayClass.length; i += 1) {
    if (buttonCurrentString != 'SEXTOU') {
      fridayClass[i].innerHTML = 'SEXTOU';
    } else {
      for (let j = 0; j < fridayClass.length; j += 1) {
        fridayClass[i].innerHTML = numbersHoliday[i];
      }
    }
  }
};
