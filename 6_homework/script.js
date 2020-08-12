/*1-е задание: Описать в html тег input и тег ul. По нажатию на клавишу в инпуте
в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша*/

let input1 = document.querySelector('.input-1');
let ul1 = document.querySelector('.ul-1');
input1.addEventListener('keypress', event => {
  event.preventDefault();
  let newLi = document.createElement('li');
  newLi.textContent = event.key;
  ul1.appendChild(newLi);
  input1.textContent = '';
})

/*2-е задание: Вставить в разметку html теги input и div без js
(просто предусмотреть в разметке). Обрабатывая событие keyup на теге input,
выводить в консоль введенный текст каждый раз, как только клиент вписывает
любой символ в поле (или стирает любой символ из поля)
2.1-е задание: Каждый раз при изменении данных в инпуте, в предусмотренный div должна
вписываться фраза "Клиент набирает: ВСЕ_ЧТО_НАБРАНО_В_ИНПУТЕ"*/

let input2 = document.querySelector('.input-2');
let divOut2 = document.querySelector('.div-out');
input2.addEventListener('keyup', () => {
  divOut2.textContent = `Клиент набирает: ${input2.value}`;
  console.log(input2.value);
})

/*3-е задание: Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul.
Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст.
После отправки формы инпут должен быть очищен (проставить пустую строку в value).
Подсказки смотрите в последнем задании с предыдущего занятия в конспекте.*/

let input3 = document.querySelector('.input-3');
let button3 = document.querySelector('.button-3');
let ul3 = document.querySelector('.ul-3');
button3.addEventListener('click', (event) => {
  event.preventDefault();
  if (input3.value != '') {
    let newLi = document.createElement('li');
    newLi.textContent = input3.value;
    ul3.appendChild(newLi);
    input3.value = '';
  }
})

/*4-е задание: Калькулятор 2.0. Создать в html форму с текстовым input, тегом select,
вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические
знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму,
над двумя числами выполняется действие, выбранное в select.
Результат отображается в div. Делать можно как с eval, так и с if-else.*/

let input41 = document.querySelector('.input-41');
let input42 = document.querySelector('.input-42');
let select4 = document.querySelector('.select-4');
let divOut4 = document.querySelector('.div-out-4');
document.querySelector('.form-4').addEventListener('submit', (event) => {
  event.preventDefault();
  let str = Number(input41.value) + select4.value + Number(input42.value);
  input41.value = '';
  input42.value = '';
  divOut4.textContent = `Ответ: ${eval(str)}`
})

/*5-е задание: Вставить в разметку html тег button без js (просто предусмотреть в
разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При
выведении мышки за пределы кнопки, поворачивать кнопку на рандомный угол от -180 до
180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.*/

let button5 = document.querySelector('.button-5');
let colorArr = [1,3,5,7,9,'c'];
function shuffle() {
  return 0.5 - Math.random();
}  //Сортировка из 5ой домашки пригодилась))
let degArr = [];
for (let i = -180; i <= 180; i++) {
  degArr.push(i);
}

button5.addEventListener('mouseenter', () => {
  let newArr = colorArr.sort(shuffle);
  let strColor = newArr.join('');
  button5.style.backgroundColor = `#${strColor}`;
})
button5.addEventListener('mouseleave', () => {
  let randDeg = degArr[Math.floor(Math.random() * degArr.length)];
  button5.style.transform = `rotate(${randDeg}deg)`;
})