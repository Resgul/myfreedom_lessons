// 1-е задание: уже сдано ДЗ 1 и 2.

console.log("1-е задание:");
console.log('готово и сдано');

/* 2-е задание: Создать функцию findPositiveNumbers(arr). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться только положительные элементы.
На вход функции подать, например, массив Определить массив, например var arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]; */

let newArr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
function findPositiveNumbers(arr) {
    let positiveArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positiveArr[positiveArr.length] = arr[i];
        }
    }
    return positiveArr;
}
console.log("2-е задание:");
console.log(findPositiveNumbers(newArr));

/* 3-е задание: Определить массив, например var arr = [5, 4, 3, 8, 0];
Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
например запуск функции filterFor(arr, 5) дает результат [5,8]
а запуск функции filterFor(arr, 10) дает результат []
а запуск функции filterFor(arr, 3.11) дает результат [4,5,8] */

let newArr2 = [5, 4, 3, 8, 0];
function filterFor(arr, a) {
    let filteredArr = []
    for (let numbers of arr) {
        if (numbers >= a) {
            filteredArr[filteredArr.length] = numbers;
        }
    }
    return filteredArr;
}
console.log("3-е задание:");
console.log(filterFor(newArr2, 1));

// 4.1-е задание: сравнить больше / меньше
function compareNumbers(a, b) {
    if (a > b) {
        return a;
    } else { 
        if (a < b) {
            return b;
        } else {
            return 'Значения равны между собой'; 
    }
  }
}
console.log("4.1-е задание:");
console.log(compareNumbers(3, 3));

// 4.2-е задание: вывести массив чисел в заданной степени.
let newArr3 = [1, 2, 3, 5, 20]
function numbersInPower(arr, a) {
    let arrInPower = [];
    for (let i = 0; i < arr.length; i++) {
        arrInPower[arrInPower.length] = Math.pow(arr[i], a);
    }
    return arrInPower;
}
console.log("4.2-е задание:");
console.log(numbersInPower(newArr3, 3));