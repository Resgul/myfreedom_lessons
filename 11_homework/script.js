// ДЗ 1: youtube

// создает айфрейм с вилео по заданному id 
function createIframe(id) {
  // div для плеера
  let video = document.querySelector('.video')
  // определение элемента по id для вывода только одного плеера в будущем
  let element = document.getElementById('one');
  let iFrame = document.createElement('iframe');
  // если элемента нет, то создастся плеер с id = 'one'
  if (!element) {
    iFrame.setAttribute('src',`https://www.youtube.com/embed/${id}?autoplay=1`);
    iFrame.setAttribute('id',`one`);
    return video.append(iFrame);
  } else {
    // иначе в елементе меняется атрибут с юрл
    return element.setAttribute('src',`https://www.youtube.com/embed/${id}?autoplay=1`);  
    }
}
// создает превью картинки
function showPrevImages(youObj) {
  // див с превью картинками
  let divImg = document.querySelector('.images');
  // обнуляет див на случай уже созданного набора картинок
  divImg.textContent = '';
  for (let i = 0; i < 5; i++) {
    // берем адрес из объекта
    let imgUrl = youObj.items[i].snippet.thumbnails.high.url
    let img = document.createElement('img');
    // задаю юрл каждой картинке
    img.setAttribute('src', imgUrl);
    // записываю id видео в кастомный аттрибут 'data-id-for-video'
    img.dataset.idForVideo = `${youObj.items[i].id.videoId}`;
    // добавляю картинку в див превьюшек
    divImg.append(img);
  }
}
// выбор видео по нажатию на превью картинку
function chooseVideoFromPrevImg() {
  // определяю набор картинок
  let imgs = document.querySelectorAll('img')
  for (let img of imgs) {
    img.addEventListener('click', () => {
      // забираю значение из кастомного аттрибута и закидываю его в функцию создания айфрейма
      let idForVideo = img.getAttribute('data-id-for-video')
      // красиво получилось - сам доволен
      createIframe(idForVideo)
    })
  }
}

document.querySelector('.search-button').addEventListener('click', () => {
  let search = document.querySelector('.search').value;
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCRpcluEHJ1Ya79LSWmkIVpiOidNL7kr4w&q=${search}&type=video`)
    .then(response => response.json())
    .then(youtubeObj => {
      let videoID = youtubeObj.items[0].id.videoId;
      createIframe(videoID);
      showPrevImages(youtubeObj)
    })
    // после загрузки видео и превьюшек уже можно обработать данные из картинок
    .then(() => chooseVideoFromPrevImg())
})

 
/* ДЗ 3: написать функцию, которая принимает на вход массив чисел, 
а возвращает массив только из значений, встречающихся в массиве лишь один раз
[1,3,5,5,7,9,9,1,3,3,5,6,10,11,10,5] => [1,3,5,7,9,6,10,11].*/

let contolArr = [1,3,5,5,7,9,9,1,3,3,5,6,10,11,10,5];

function filterDuplicateArr(arr) {
  let newArr = [];
  for (let element of arr) {
    // если элемент массива arr не включен в массив newArr, то записать его в newArr
    if (!newArr.includes(element)) newArr.push(element)
  }
  return newArr
}
console.log('ДЗ 3:')
console.log(filterDuplicateArr(contolArr))

/* ДЗ 4: сделать очень простой калькулятор calc. Он умеет добавлять и вычитать единицу.
Сделать на основе объекта. Одно свойство value: текущее значение калькулятора
(по умолчанию ноль), 3 метода: plus, minus и read
(просто выводит в консоль текущее значение)*/

let calc = {
  value: 0
}
calc.plus = function() {
  this.value++
  console.log (this.value)
}
calc.minus = function() {
  this.value--
  console.log (this.value)
}
calc.read = function() {
  console.log (this.value)
}

/* ДЗ 5: сделать очень простой калькулятор calcPlus. Он умеет добавлять и вычитать
любое число, приходящее в качестве параметра в соответствующий метод. Сделать на основе
объекта. Одно свойство value: текущее значение калькулятора (по умолчанию ноль), 5 методов:
plus, minus, multiply, divide и read (просто выводит в консоль текущее значение)*/

let calcPlus = {
  value: 0
}
calcPlus.plus = function(x) {
  this.value += x
  console.log (this.value)
}
calcPlus.minus = function(x) {
  this.value -= x
  console.log (this.value)
}
calcPlus.multiply = function(x) {
  this.value *= x
  console.log (this.value)
}
calcPlus.divide = function(x) {
  this.value /= x
  console.log (this.value)
}
calcPlus.read = function() {
  console.log (this.value)
}

// ДЗ 6.1 достать поле объекта их массива объектов и собрать с ним новый массив

function getNames(arr) {
  let names = arr.map(element => element.name)
  return names
} 

let data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

console.log('ДЗ 6.1:')
console.log(getNames(data))
// getNames(data) // should return ['Joe', 'Bill', 'Kate']

// ДЗ 6.2 закрыть сеткой всю строку, кроме последних 4-ех символов

function maskify(str) {
  let strArr = str.split('');
  for (let i = 0; i < strArr.length-4; i++) {
    strArr[i] = '#'
  }
  str = strArr.join('');
  return str
}
let asd = maskify('12345');

console.log('ДЗ 6.2:')
console.log(maskify("4556364607935616"))
console.log(maskify(     "64607935616"))
console.log(maskify(               "1"))
console.log(maskify(                ""))
console.log(maskify("Skippy"))
console.log(maskify("Nananananananananananananananana Batman!"))

// ДЗ 6.3 шифр ROT13

function ROT13(str) {
  let arrFromStr = str.split('');
  let rotAphabet = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
  
  let rotedArr = [];
  for (let i = 0; i < arrFromStr.length; i++) {
    if (rotAphabet.includes(arrFromStr[i])) {
      let char = rotAphabet.indexOf(arrFromStr[i]);
      rotedArr.push(rotAphabet[char + 13]);
    } else rotedArr.push(arrFromStr[i])
  }
  return rotedArr.join('')
}

document.querySelector('.rot13-button').addEventListener('click', () => {
  let input = document.querySelector('.rot13-input').value;
  let answer = document.querySelector('.answer');
  answer.textContent = `Ответ: ${ROT13(input)}`;
})

// ДЗ 6.4 функция, создаюшая массив функций

function createFunctions(x) {
  let arrayOfFunc = []
  for (let i = 0; i < x; i++) {
    function func(i) {return i}
    arrayOfFunc.push(func(i))
  }
  return arrayOfFunc
}

let callbacks = createFunctions(5);
console.log(callbacks[2])

//не работает пока
