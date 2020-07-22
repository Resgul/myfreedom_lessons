// 1-е задание: Определить массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]; В цикле создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.

// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// let positivArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         positivArr[positivArr.length] = arr[i];
//     }
// }    
// console.log(positivArr);

//  1-e задание с for..of, смысла особо не было, НО...

// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// let positivArr = [];
// for (let number of arr) {
//     if (number > 0) {
//         positivArr[positivArr.length] = number;
//     }
// }
// console.log(positivArr);
//// ________________________________________________

// 2-е задание: Определить массив, например let arr = [5, 4, 3, 8, 0]; и переменную let limit = 5; В цикле создать новый массив из элементов arr, но в новом должны содержаться элемент больше и равно (>=) значения переменной limit.

// let arr = [15, 4, 3, 8, -1, 10];
// let limit = 5;
// let limitArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//         limitArr[limitArr.length] = arr[i];
//     }
// }    
// console.log(limitArr);
//// ________________________________________________

// 3-е задагие: Посчитать и вывести в консоль сумму элементов в массиве из чисел

// let arr = [5, 4, 3, 8, -10];
// let summ = 0;
// for (let numbers of arr) {
//     summ += numbers;
// }
// console.log(summ);
//// ________________________________________________

// 3.1-e задание: Посчитать и вывести в консоль сумму четных элементов в массиве из чисел

// let arr = [5, 4, 3, 8, -10];
// let summ = 0;
// for (let numbers of arr) {
//     if (numbers % 2 === 0) {
//         summ += numbers;
//     }
// }
// console.log(summ);
//// ________________________________________________

// 4-е задание: Задать массив слов. В цикле сформировать массив объектов с ключами word (само слово), length (длина слова)

// let words = ['список', 'моих', 'дел','слишком', 'велик', 'для', 'меня', 'одного'];
// let wordsArr = [];
// for (let word of words) {
//     let obj = {};
//     obj.word = word;
//     obj.length = word.length;
//     wordsArr[wordsArr.length] = obj;
// }
// console.log(wordsArr);
//// ________________________________________________

// 4.1-е задание: Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"

// let words = ['список', 'моих', 'дел','слишком', 'велик', 'для', 'меня', 'одного'];
// let wordsArr = [];
// for (let word of words) {
//     let obj = {};
//     obj.word = word;
//     obj.length = word.length;
//     wordsArr[wordsArr.length] = obj;
// }
// for ( let i = 0; i < wordsArr.length; i++) {
//     console.log(wordsArr[i].word + ' - ' + wordsArr[i].length);
// }
//// ________________________________________________