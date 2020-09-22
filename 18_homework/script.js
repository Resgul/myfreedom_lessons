import {Transport} from './transport.js'
import {Services} from './services.js'

class Autorepair extends Services {
    constructor() {
        super()
        this.autoComputer = 'Auto-Comp.v2.02';
        this.worker = 'Семён Донкратыч';
    }
    startService(hours, color) {
        let payment = this.formFactor * 
        (this.painting(hours.p, color) + 
        this.tireFitting(hours.t) + 
        this.computerDiagnostics(hours.c) + 
        this.engineRepair(hours.e));
        console.log('Оплата за ' + this.model + ' ' + payment + '$');
    }
    
    painting(hours, color) {
        console.log(`Мастер ${this.worker} выполнит работу по покраске`);
        super.painting(hours, color);
        let paymentPerHour = 10;
        return Number(hours * paymentPerHour)
    }
    
    tireFitting(hours) {
        console.log(`Мастер ${this.worker} приступил к шиномонтажным работам...`);
        super.tireFitting(hours);
        console.log(`${this.model} обслужен`);
        let paymentPerHour = 5;
        return Number(hours * paymentPerHour)
    }
    
    computerDiagnostics(hours) {
        console.log(`${this.model} припаркован. Мастер ${this.worker} приступил к компьютерной диагностике при помощи ${this.autoComputer}...`);
        super.computerDiagnostics(hours);
        let paymentPerHour = 15;
        return Number(hours * paymentPerHour)
    }
}

let sportCar = new Transport({
    model: 'McLaren',
    color: 'red',
    formFactor: 2.5,
    tireStatus: false,
    engineStatus: false,
    computerStatus: false
})

let truck = new Transport({
    model: 'MAZ',
    color: 'yellow',
    formFactor: 7,
    tireStatus: false,
    engineStatus: false,
    computerStatus: false
})

let autorepair = new Autorepair();

sportCar.__proto__= autorepair;
truck.__proto__= autorepair;

console.log('Спорткар до сервиса: ', sportCar);
sportCar.startService({p:7, t:1, c:0.5, e:5}, 'orange');
console.log('Спорткар после сервиса: ', sportCar);
console.log('МАЗ до сервиса: ', truck);
truck.startService({p:14, t:5, c:0.5, e:25}, 'black');
console.log('МАЗ после сервиса: ', truck);