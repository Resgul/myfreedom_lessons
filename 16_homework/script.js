// ДЗ 1 просто создать класс
/*
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.salary = this.rate * this.days
    }
}

let worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
*/
// ДЗ 2 геттеры
/*
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getName() {
        return this.name 
    }

    getSurname() {
        return this.surname
    }

    getRate() {
        return this.rate
    }

    getDays() {
        return this.days
    }

    getSalary() {
        return this.salary = this.rate * this.days
    }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
*/

// ДЗ 3 сеттеры
/*
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getName() {
        return this.name 
    }

    getSurname() {
        return this.surname
    }

    getRate() {
        return this.rate
    }
    setRate (rate) {
        return this.rate = rate
    }

    getDays() {
        return this.days
    }
    setDays(days) {
        return this.days = days
    }

    getSalary() {
        return this.salary = this.rate * this.days
    }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
*/

// ДЗ Практика 1

class MyString {
    reverse(str) {
        return str.split('').reverse().join('')
    }
    
    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    ucWords(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
}

let str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

// ДЗ Практика 2

class Validator {
    isEmail(email) {
        let emailArr = email.split('');
        let arrAt = [];
        let arrPoint = [];
        for (let i = 0; i < emailArr.length; i++) {
            if (emailArr[i] == '@') arrAt.push(i);
            if (emailArr[i] == '.') arrPoint.push(i-1);
        }
        if ((arrPoint.length && arrAt.length) === 1 && 
            arrAt[0] < arrPoint[0] &&
            emailArr[emailArr.length - 1] !== '.') {
            return 'Валидный'
        } else {
            return 'Невалидный'
        }
    }
}
let validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru'));