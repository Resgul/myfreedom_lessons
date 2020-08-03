/*1-е задание: на странице в html задать список элементов li с числами.
жававскриптом нужно выбрать из этого списка четные числа и создать из них массив.
Затем, используя метод forEach, создать из массива новый спсок элементов li и
поместить эти элементы в исходный тег ul. Для обхода через querySelectorAll
использовать цикл for-of (forEach работать не будет)

P.s. сделал создание списка и его обработку двумя функциями, чтобы не список из
первого задания не перемешивался со вторым*/ 
// function createListForFistTask() {
//     let ul = document.createElement('ul');
//     document.body.append(ul);
//     for (let i = 1; i <= 10; i++) {
//         let li = document.createElement('li');
//         li.textContent = i;
//         ul.append(li);
//     }
// }
// createListForFistTask();
// function createEvenList() {
//     let li_s = document.querySelectorAll('li');
//     let liArr = [];
//     for (let li of li_s) {
//         let item = Number(li.textContent);
//         if (item % 2 == 0) {liArr.push(item)};
//     }
//     let ul = document.querySelector('ul');
//     ul.textContent = '';
//     liArr.forEach(element => {
//         let li = document.createElement('li');
//         li.textContent = element;
//         ul.appendChild(li);
//     })
// }
// createEvenList();

/*2-е задание: создать разметку формы с инпутом для текста и селектом для категории
(добавить несколько option). Под формой должны должен быть список ul. В этот список
каждую секунду добавляется новый элемент li. Для добавления можно использовать
функцию setInterval https://learn.javascript.ru/settimeout-setinterval
Вся разметка должна быть создана джаваскриптом.
В HTML в начале body должен быть пустой.
Старайтесь дробить код на небольшие функции.*/

function secondTask() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let select = document.createElement('select');
    let ul = document.createElement('ul');
    let optionArr = ['Action', 'RPG', 'Shooter', 'MMO', 'MMORPG', 'Quest'];

    document.body.append(form);
    input.setAttribute('type', 'text')
    form.append(input);
    input.value = 'Введите текст';
    optionArr.map((element, index) => {
        let option = document.createElement('option');
        option.textContent = `${index+1}: ${element}`;
        select.append(option);
    });
    form.append(select);
    document.body.append(ul);
    let timerId = setInterval(() => {
        let li = document.createElement('li');
        ul.append(li)}, 1000);
    setTimeout(() => {clearInterval(timerId)}, 10000);
}
secondTask();

