/*ДЗ 1: 1) (решение есть в конспекте)
https://todoappexamplejs.herokuapp.com/items
В ООП стиле описать получение (запрос GET) и обновление (запрос PUT) задачи из списка TODO по заданному id.
1. Должен быть реализован базовый класс BaseRequest, в котором должен быть реализован метод perform, который отправляет запрос и возвращает промис
2. От него должны наследоваться 2 класса, GetRequest, PutRequest, в которых определяются методы, которые возвращают специифические для этого вида запроса данные. Например, метод requestType, который вернет "GET" или "POST" в зависимости от класса
3. Весь общий код и общие строки (например, домен сайта) нужно разместить в базовом классе. Для этого можно определять методы в BaseRequest, которые будут вызываться в его наследниках
4. Конструктор класса должен принимать как минимум один параметр, id задачи
5. Конструктор класс PutRequest может также принимать параметр body
6. Проверить результат выполнения можно таким образом
let request = new GetRequest(118);
request.perform().then(data => console.log(data))
1.1) Реализовать используя async-await*/

class BaseRequest {
  constructor(id) {
    this.id = id;
    
  }

  perform() {
    return fetch(`https://todoappexamplejs.herokuapp.com/items/${this.id}`, this.method)
  }
}

class GetRequest extends BaseRequest {
  requestMethod() {
    return this.method = {
      method: 'GET'
    }
  }
}

class PutRequest extends BaseRequest {
  constructor(id, body) {
    super(id);
    this.body = body;
  }

  requestMethod() {
    return this.method ={
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.body)
    }
  }
}

let request = new GetRequest(274);
request.perform().then(data => console.log(data.status))

let putRequest = new PutRequest(274, { ok: 'blabla' });
putRequest.perform().then(data => console.log(data))

// ДЗ 2 класс калькулятор

class Calc {
  constructor(number) {
    this.number = Number(number)
  }

  plus(x) {
    this.number += x;
    return this.number
  }
  
  minus(x) {
    this.number -= x;
    return this.number
  }
  
  multiply(x) {
    this.number *= x;
    return this.number
  }
  
  divide(x) {
    this.number /= x;
    return this.number
  }

}

let calc = new Calc(10);
calc.plus(100); // 110
calc.multiply(2); // 220
calc.divide(10); // 22
