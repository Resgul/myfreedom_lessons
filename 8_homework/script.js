// ДЗ 1 
// Написать алгоритм, который переместит все нули в конец массива 
// [8,10,0,7,2,0,1,2,1,0] => [8,10,7,2,1,2,1,0,0,0]

// моё решение
let numbers1 = [8,10,0,7,2,0,1,2,1,0];
let resultNoZero = numbers1.filter(x => x !== 0);
let resultZero = numbers1.filter(x => x === 0);
let resultEndZero = resultNoZero.concat(resultZero);
console.log('ДЗ1');
console.log(resultEndZero);

// решение сверхразума
let endZero = numbers1.filter(x => x !== 0).concat(numbers1.filter(x => x === 0));
console.log(endZero);

// ДЗ 2 
// Отобрать только четные положительные числа 
// [2,9,3,12,120,-11,3,20] => [2,12,120,20] 

// тут сразу сообразил 1:1
let numbers2 = [2,9,3,12,120,-11,3,20];
let result2 = numbers2.filter(x => (x % 2 === 0) && (x > 0));
console.log('ДЗ2');
console.log(result2);

// ДЗ 3
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). 
// "привет Женя" => "янеЖ тевирп"

// моё решение
let controleStr = "привет Женя";
function reverseStr(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log('ДЗ3');
console.log(reverseStr(controleStr));

// решение сверхразума
console.log(controleStr.split('').reverse().join(''));

// ДЗ 4
// Написать функцию, которая будет возвращать из строки центральный(е) символ(ы)
// getMiddle("test") => "es"
// getMiddle("testing") => "t"
// getMiddle("middle") => "dd"
// getMiddle("A") => "A"

function getMiddle(str) {
  let mid;
  if (str.length % 2 === 0) {
    mid = (str.length / 2) - 1;
    return str[mid] + str[mid + 1]
  } else {
      mid = Math.floor(str.length / 2);
      return str[mid]  
    } 
  
}
console.log('ДЗ4');
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));

// ДЗ 5
// Есть массив пользователей (массив объектов)
// Надо отсортировать массив объектов по свойству name. Не забывайте, как себя ведет 
// встроенная сортировка, чтобы ее улучшить нужна функция в качестве параметра, a и b 
// во внутренней функции - это ячейки массива (в данном случае объекты).

let users = [
  {
    name: "Женя",
    phone: "+375295011111",
    operator: "МТС"
  },
  {
    name: "Вася",
    phone: "+375299876543",
    operator: "МТС"
  },
  {
    name: "Татьяна",
    phone: "+375299001122",
    operator: "Velcom"
  },
  {
    name: "Аня",
    phone: "+375291234567",
    operator: "Velcom"
  }
];

function sorter(a, b) {
  if (a.name > b.name) {
    return 1
  } else if (a.name < b.name) {
      return -1
    } else return 0 
}
console.log('ДЗ5');
console.log(users.sort(sorter));
// cверхразум
users.sort((a, b) => a.name === b.name ? 0 : (a.name > b.name ? 1 : -1));
console.log(users);

// ДЗ 6
// Дана JSON строка '["Коля", "Вася", "Петя"]'. Преобразуйте ее в массив
// JavaScript и выведите на экран элемент "Петя"

let names = JSON.parse('["Коля", "Вася", "Петя"]');
console.log('ДЗ6');
console.log(names[2]);

// ДЗ 7
// Дан объект {a: 'aaa', b: 'bbb'}. Преобразуйте его в JSON.
let charObj = JSON.stringify({a: 'aaa', b: 'bbb'});
console.log('ДЗ7');
console.log(charObj);

// ДЗ 8
// Дан текстареа. В него вводится текст. Сделайте так, чтобы после
// захода на эту страницу через некоторое время, введенный текст
// остался в текстареа. Текст должен запоминаться в локальном хранилище.

let textarea8 = document.querySelector('.area-8');
textarea8.addEventListener('keyup', () => {
  localStorage.textLocal = JSON.stringify(textarea8.value);
})
textarea8.value = (localStorage.textLocal) ? JSON.parse(localStorage.textLocal) : '';

// ДЗ 9
// Дан текстареа. В него можно ввести данные, затем поредактировать их, затем еще
// поредактировать. Пусть текстареа хранит историю своих изменений (даже после
// перезагрузки страницы). Сверху над текстареа должны появится стрелочки,
// с помощью которых можно перемещаться по истории.

let textarea9 = document.querySelector('.area-9');
let p9 = document.querySelector('.p-9');

let undoBtn = document.createElement('button');
undoBtn.textContent = '<-';
p9.append(undoBtn);

let redoBtn = document.createElement('button');
redoBtn.textContent = '->';
p9.append(redoBtn);
//Все что выше, это создание интерфейса
let arrayWithData = [];

textarea9.addEventListener('keyup', (event) =>{
  event.preventDefault();
  //В data записывается значение из textarea, когда отпускается любая клавиша
  let data = textarea9.value;
  //Затем каждое состояние data заносится в массив arrayWithData
  arrayWithData.push(data);
  //Массив обновляется в локалсторэдж с каждой нажатой клавишей
  localStorage.array = JSON.stringify(arrayWithData);
})
//Присваиваю массиву arr значение из массива в локалстор localStorage.array (если он есть) или пустой массив
let arr = (localStorage.array) ? JSON.parse(localStorage.array) : [''];
//Задаю счетчик i - это номер последнего элемента массива 
let i = arr.length - 1;
//При перезагрузке страницы в текстэриа появится последний элемент масива
textarea9.value = (localStorage.array) ? JSON.parse(localStorage.array)[i] : '';

undoBtn.addEventListener('click', event => {
  //Смысл в том, что по нажатию на кнопку я уменьшаю текущее значение i и вывожу соответствующий ему элемент массива
  event.preventDefault();
  i--;
  if (i < 0) i = arr.length - 1;
  textarea9.value = arr[i];
})

redoBtn.addEventListener('click', event => {
  //По аналогии с минусом
  event.preventDefault();
  i++;
  if (i > arr.length - 1) i = 0;
  textarea9.value = arr[i];
})
// Сделал, но работает не совсем как надо (сработка на массиве есть только после перезагрузки страницы), хотел бы посмотреть как сделать правильно

// ДЗ 10
// Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил
// всю форму). Сделайте так, чтобы при следующем заходе на страницу введенные им ранее
// данные стояли на своих местах. Сделайте ваш скрипт как можно более универсальным.

let firstName = document.querySelector('.text-10-1');
let lastName = document.querySelector('.text-10-2');
let age = document.querySelector('.sel-10');
let text = document.querySelector('.area-10');
let gender = document.getElementsByName('gender');
//Функция для определения value радиокнопки
function checkGender(gend) {
  for (let i = 0; i < gend.length; i++) {
      if (gend[i].checked) {
          return gend[i].value;
      }
  }
}

//Если существует localStorage.objForm, то присваиваиваю его objectForm и заполняю инпуты его значениями из объекта
if (localStorage.objForm) {
  let objectForm = JSON.parse(localStorage.objForm);
  firstName.value = objectForm.firstName;
  lastName.value = objectForm.lastName;
  age.value = objectForm.age;
  text.value = objectForm.text;
  //Цикл для определения соответствующего елемента из массива радиокнопок и отметки его в форме
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].value == objectForm.gender) gender[i].setAttribute('checked', 'checked');
  }
} else {
  //Иначе создаю объект-болванку и заполняю импуты ей
  let objectForm = {firstName: '', lastName: '', gender: 'male', age: 25, text: ''};
}

document.querySelector('.form-10').addEventListener('change', event => {
  event.preventDefault();
  //Ивент change срабатывает на изменения в форме
  //Создается объект и обновляется при изменениях
  let objForm = 
  {
    firstName: firstName.value,
    lastName: lastName.value,
    gender: checkGender(gender),
    age: age.value,
    text: text.value
  };
  localStorage.objForm = JSON.stringify(objForm);
})

//Хотел бы посмотреть, как можно реализовать это по-человечески