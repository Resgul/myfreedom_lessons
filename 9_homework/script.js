/*1-е задание: сделать запрос за комментариями сюда
https://jsonplaceholder.typicode.com/comments
получив комментарии, отрезать и оставить только первые 30 комментариев, и их
отрисовать на странице (в любом виде), свойства name, email и body необходимо
отрисовывать.*/

let firstDzList = document.querySelector('.first-dz-list');
let textSpan = document.querySelector('span')
document.querySelector('.first-dz').addEventListener('click', () => {
  if (firstDzList.getAttribute('hidden')) {
    firstDzList.removeAttribute('hidden');
    textSpan.textContent = 'Нажмите, чтобы свернуть ДЗ1';
  } else {
    firstDzList.setAttribute('hidden','hidden');
    textSpan.textContent = 'Нажмите, чтобы развернуть ДЗ1';
  }
})
let xmlHttp = new XMLHttpRequest();
xmlHttp.onload = function() {
  let comments = JSON.parse(xmlHttp.responseText);
  for (let i = 0; i < 30; i++) {
    let li = document.createElement('li');
    li.textContent = `name: ${comments[i].name}, e-mail: ${comments[i].email}, body: ${comments[i].body}`
    firstDzList.append(li);
  }
}
xmlHttp.open("GET", 'https://jsonplaceholder.typicode.com/comments');
xmlHttp.send();

/*2.1-е задание: задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов массива меньше 2, то вторая переменная должна стать равна "alex".*/

let names = ['Вася', 'Катя', 'Лена', 'Лера', 'Вера', 'Валера'];
let [name1, name2, ...restOfNames] = names;
if (restOfNames.length < 2) {
  restOfNames[restOfNames.length] = 'alex';
}
restOfNames.forEach(name => {
  console.log(name);
})

/*2.2-е задание: задать функцию, которая принимает 3 параметра и выводит их в консоль.
Передать массив в функцию. Внутри функции каждый параметр должен
быть равен одному из элементов массива.*/

function showArguments(a, b, c) {
  console.log(`1-ый: ${a}, 2-ой: ${b}, 3-ий: ${c}`);
}
showArguments(...names);

/*2.3-е задание: задать объект с N полей. Создать 2 переменные, которые будут называться
так же, как поля, и хранить 2 значения полей объекта. Если  соответствующих полей в
объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в
переменную fields*/

let userObj = {name:'Вася', age:25, gender:'мужчина', status:'холост', religinon:'мусульманин'}
let {name = 1, status = 2, ...restOfUser} = userObj;
console.log(restOfUser);

//Функция для перевода направления ветра из градусов в названия сторон света
function checkWindDirection(windDegrees) {
  let deg = [];
  for (let i = 0; i <= 360; i++) {
    deg.push(i);
  }
  if (deg.slice(338).concat(deg.slice(0, 23)).includes(windDegrees)) return 'North'
  if (deg.slice(23,68).includes(windDegrees)) return 'North-East'
  if (deg.slice(68,113).includes(windDegrees)) return 'East'
  if (deg.slice(113,158).includes(windDegrees)) return 'South-East'
  if (deg.slice(158,203).includes(windDegrees)) return 'South'
  if (deg.slice(203,248).includes(windDegrees)) return 'South-West'
  if (deg.slice(248,293).includes(windDegrees)) return 'West'
  if (deg.slice(293,338).includes(windDegrees)) return 'North-West'
}

let xmlHttps = new XMLHttpRequest();
xmlHttps.onload = function() {
  let parsedArray = JSON.parse(xmlHttps.responseText);
  //Определение города и региона
  let country = document.querySelector('.country');
  country.textContent = `${parsedArray.city.name}, ${parsedArray.city.country}`
  
  //Массив с основными данными
  let weatherArray = parsedArray.list;
  
  //Определение времени прогноза
  document.querySelector('.time').textContent = `${weatherArray[1].dt_txt.slice(11)}`
  
  //Определение фотографии прогноза
  let weatherImgURL = `http://openweathermap.org/img/w/${weatherArray[1].weather[0].icon}.png`;
  let weatherImg = document.createElement('img');
  weatherImg.setAttribute('src', `${weatherImgURL}`);
  document.querySelector('.weather-img').append(weatherImg);
  
  //Описание погоды дождь-туман и т.д.
  document.querySelector('.weather-descr').textContent = weatherArray[1].weather[0].main;
  
  //Температура в кельвинах, затем перевод в цельсий
  document.querySelector('.weather-dgr').textContent = `${Math.floor(weatherArray[1].main.temp - 273,15)} ℃`;
  
  //Направление ветра в градусах
  let windDgr = Math.floor(weatherArray[1].wind.deg);
  
  //Направление ветра текстом
  document.querySelector('.wind-direction').textContent = checkWindDirection(windDgr);
  
  //Скорость ветра
  document.querySelector('.wind-speed').textContent = `${weatherArray[1].wind.speed} m/s`;

  let ul = document.querySelector('.other-days');
  for (let i = 0; i < weatherArray.length; i = i + 8) {
    let li = document.createElement('li');
    
    //Определение времени прогноза
    let p = document.createElement('p');
    p.textContent = `${weatherArray[i].dt_txt}`;
    li.append(p)

    //Определение фотографии прогноза
    let otherImgURL = `http://openweathermap.org/img/w/${weatherArray[i].weather[0].icon}.png`;
    let otherImg = document.createElement('img');
    otherImg.setAttribute('src', `${otherImgURL}`);
    li.append(otherImg);

    //Температура в кельвинах, затем перевод в цельсий
    let span = document.createElement('span');
    span.textContent = `${Math.floor(weatherArray[i].main.temp - 273,15)} ℃`;
    li.append(span);

    ul.append(li);
  }
}
xmlHttps.open("GET", 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=d2e7c760fd177e0ea6972b92a8c5b26f');
xmlHttps.send();