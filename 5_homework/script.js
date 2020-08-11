/*1-е задание: на странице в html задать список элементов li с числами.
жававскриптом нужно выбрать из этого списка четные числа и создать из них массив.
Затем, используя метод forEach, создать из массива новый спсок элементов li и
поместить эти элементы в исходный тег ul. Для обхода через querySelectorAll
использовать цикл for-of (forEach работать не будет)

P.s. сделал создание списка и его обработку двумя функциями, чтобы не список из
первого задания не перемешивался со вторым*/ 
function createListForFistTask() {
    let ul = document.createElement('ul');
    document.body.append(ul);
    for (let i = 1; i <= 10; i++) {
        let li = document.createElement('li');
        li.textContent = i;
        ul.append(li);
    }
}

function createEvenList() {
    let li_s = document.querySelectorAll('li');
    let liArr = [];
    for (let li of li_s) {
        let item = Number(li.textContent);
        if (item % 2 == 0) {liArr.push(item)};
    }
    let ul = document.querySelector('ul');
    ul.textContent = '';
    liArr.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    })
}

function runFirstTask(){
    let p = document.createElement('p');
    p.textContent = '1-ое задание:';
    document.body.append(p);
    createListForFistTask();
    createEvenList();
}

runFirstTask();

/*2-е задание: создать разметку формы с инпутом для текста и селектом для категории
(добавить несколько option). Под формой должны должен быть список ul. В этот список
каждую секунду добавляется новый элемент li. Для добавления можно использовать
функцию setInterval https://learn.javascript.ru/settimeout-setinterval
Вся разметка должна быть создана джаваскриптом.
В HTML в начале body должен быть пустой.
Старайтесь дробить код на небольшие функции.*/
function createForm(formzer) {
    document.body.append(formzer);
}

function createInput(form321) {
    let input = document.createElement('input');
    input.setAttribute('type', 'text')
    form321.append(input);
    input.value = 'Введите текст';
}

function createSelect(form123) {
    let select = document.createElement('select');
    let optionArr = ['Action', 'RPG', 'Shooter', 'MMO', 'MMORPG', 'Quest'];
    optionArr.map((element, index) => {
        let option = document.createElement('option');
        option.textContent = `${index+1}: ${element}`;
        select.append(option);
    });
    form123.append(select);
}

function createListWithTimer() {
    let ul = document.createElement('ul');
    document.body.append(ul);
    let timerId = setInterval(() => {
        let li = document.createElement('li');
        ul.append(li)}, 1000);
        setTimeout(() => {clearInterval(timerId)}, 10000);
}

function runSecondTask() {
    let p = document.createElement('p');
    p.textContent = '2-ое задание:';
    document.body.append(p);    
    let form = document.createElement('form');
    createForm(form);
    createInput(form);
    createSelect(form);
    createListWithTimer();
}

runSecondTask();

/*3-е задание: напишите функцию copyArr(arr),
которая копирует массив не изменяя иригинал. */

let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

function arrayClone(arr) {
    return arr.slice();
}

let arr1 = arrayClone(vegetables);
console.log('3-е задание: копия массива.')
console.log(arr1);

/*4-е задание: напишите код, который преобразовывает и объединяет все элементы
массива в одно строковое значение. Элементы массива будут разделены запятой.
Получите результат двумя разными методами.*/
// массив взял из рпедыдущего задания.

function makeString(arr) {
    let str = '';
    for (let element of arr) {
        str += `${element}, `;
    }
    return str.slice(0, -2);
}
let = str1 = makeString(vegetables);
console.log('4-е задание: строка из массива (1-ый метод).')
console.log(str1);

function makeString2(arr) {
    let str = '';
    arr.forEach(element => str += `${element}, `);
    return str.slice(0, -2);
}
let = str2 = makeString2(vegetables);
console.log('4-е задание: строка из массива (2-ой метод).')
console.log(str2);

let str3 = vegetables.toString();
console.log('4-е задание: строка из массива (3-ий метод).')
console.log(str3);

let str4 = vegetables.join(', ');
console.log('4-е задание: строка из массива (4-ый метод).')
console.log(str4);

/*5-е задание: пользователь вводит многозначное число через promt. 
Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента 
и вставляет двоеточие (:) между двумя нечетными числами.
Например, если вводится число 55639217, то на выход должно быть 5:563:921:7..*/

let num = 112345567;
function colonOdd(num) {
    let str = num.toString();
    let result = [str[0]];
    for (let i = 1; i < str.length; i++) {
        if ((str[i-1] % 2 != 0) && (str[i] % 2 != 0)) {
            result.push(`:${str[i]}`);
        } else {
            result.push(str[i]);
        }
    }
    return result.join('');
}
let a1 = colonOdd(num);
console.log('5-е задание: строка c двоеточием между нечетными числами.')
console.log(a1);

/*6-е задание: пользователь вводит строку кириллицей разного регистра.
Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр 
каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», 
то на выходе должен быть массив [кАжДыЙ оХоТнИк].*/

let newStr = 'КаЖдЫй ОхОтНиК123.,/`~фыABCDd';
function changeRegister (str) {
    let result = []; 
    for (let ch of str) {
        if (ch === ch.toUpperCase()) {
            result.push(ch.toLowerCase());
        } else {
            result.push(ch.toUpperCase());
        }
    }
    return result.join('');
}
console.log('6-е задание: строка c зеркальным регистром.')
console.log(changeRegister(newStr));

/*7-е задание: напишите функцию removeDuplicates(arr), которая возвращает массив,
в котором удалены повторяющиеся элементы из массива arr
(игнорируйте чувствительность к регистру).*/

let testArr = ["php", "php", "css", "css", "script", 
"script", "html", "html", "java", 1, 1, 2, 3, 4, 4];
function removeDuplicates(arr) {
    let clearArr = [];
    for (let element of arr) {
        if (clearArr.includes(element) === false) clearArr.push(element);
    }
    return clearArr;
}
//я вообще не понял решение этой задачи, представленное на сайте. У меня как-то проще.
console.log('7-е задание: массив без дубликатов.')
console.log(removeDuplicates(testArr));

/*8-е задание: високосным годом является каждый четвертый год и века начинаются
только на високостные года, отличие високосного года от обычного заключается
в появлении 366-го дня. Напишите функцию chooseYears(start, end), 
которая принимает в качестве аргументов диапозон лет и возвращает
массив високосных лет в заданном диапазоне. [2000,2004,2008,2012,2016]*/

function chooseYears(start, end) {
    yearsArr = [];
    for (let i = start; i <= end; i++) {
        if (i % 4 == 0) yearsArr.push(i);
    }
    return yearsArr;
}
//когда заглянул в решение, не смог разобраться зачем там столько проверок.
console.log('8-е задание: вывести массив из високосных годов в заданном диапазоне.')
console.log(chooseYears(2000,2018));

/*9-е задание: используя метод sort перепишите предсталенный ниже код, который
с помощью цикла for случайно изменяет порядок расстановки элементов массива.*/

// function shuffle() {
//     return 0.5 - Math.random();
// }  
// let array = [0,1,2,3,4,5,6,7,8,9];
// console.log('9-е задание: рандомная сортировка массива.')
// console.log(array.sort(shuffle));
//сам не решил.