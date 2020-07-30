/*1-е задание: написать функцию, которая принимает на вход 3 параметра:
название тега, название цвета, содержимое. Функция должна сформировать необходимый тег,
добавить необходимый стиль с цветом и внести содержимое. 
Попробовать попользоваться такой функцией в коде программы 
(не отправлять созданную разметку на страницу)*/
function addElement(tagName, contentColor, tagContent) {
    let newTag = document.createElement(tagName);
    newTag.style.color = contentColor;
    newTag.textContent = tagContent;
    document.body.append(newTag);
}
addElement('h1', 'red', '1-е задание');

/*2-е задание: создать с помощью js абзац (тег p). Добавить в него контент.
Добавить к нему стили: размер 36px, жирный шрифт. 
Добавить абзац с текстом на страницу.*/
let newParagraph = document.createElement('p');
newParagraph.style.font = 'bold 36px arial';
newParagraph.textContent = '2-е задание';
document.body.append(newParagraph);

/*3-е задание: вставить в страницу (в html документ) тег <select>.
С помощью js добавить в этот select опции (option) под годы от 1960 по 2020.*/
let currientSelect = document.querySelector('select');
for (let i = 1960; i <= 2020; i++) {
    // let newOption = document.createElement('option');
    // newOption.textContent = i + ' год';
    // newOption.setAttribute('value', i)
    // currientSelect.appendChild(newOption);
    // потом случайно нашел готовую конструкцию для создания опшенов, очень удобно ;D
    let option = new Option(i + ' год', i)
    currientSelect.appendChild(option);
}

/*4-е задание: вставить в страницу (в html документ) ul.
Предусмотреть в коде следующий массив
[
{name: "Женя", order: true},
{name: "Кристина", order: true},
{name: "Павел", order: false},
{name: "Виолетта", order: false},
{name: "Костя", order: true}
];

Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:
- Клиент Женя оплатил заказ
- Клиент Павел отменил заказ
... остальные li с контентом

Маска получается такой:"Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта
(а объект тут это итая ячейка массива),
статус зависит от от свойства order, если true, то оплатил, если false, то отменил*/
let ul = document.querySelector('.my-list');
let clients = [
    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}
];
for (let i = 0; i < clients.length; i++) {
    let li = document.createElement('li');
    let orderStatus = (clients[i].order) ? 'оплатил(а) заказ' : 'отменил(а) заказ';
    li.textContent = `клиент ${clients[i].name} ${orderStatus}`;
    ul.appendChild(li);
}

/*5-е задание: (можно подсмотреть решение в конспекте)
Создать массив объектов с полями name, age. Создать html таблицу с двумя колонками,
заполненную этими объектами. Name должно быть красного цвета, age - зеленого*/
let p = document.createElement('p');
p.textContent = '5-е задание';
document.body.append(p);

let table = document.createElement('table');
let people = [
    {name: "Имя", age: "Возраст"},
    {name: "Женя", age: 18},
    {name: "Кристина", age: 20},
    {name: "Павел", age: 22},
    {name: "Виолетта", age: 24},
    {name: "Костя", age: 26}
];
table.style.border = '1px solid black'
document.body.append(table);
for (let i = 0; i < people.length; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    let tdName = document.createElement('td');
    tdName.style.color = 'red';
    tdName.style.border = '1px solid black'
    tdName.textContent = people[i].name;
    tr.append(tdName);
    let tdAge = document.createElement('td');
    tdAge.style.border = '1px solid black'
    tdAge.style.color = 'green';
    tdAge.textContent = people[i].age;
    tr.append(tdAge);
}