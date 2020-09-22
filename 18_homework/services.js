export class Services{
    computerDiagnostics() {
        console.log(`Мастер подключил автокомпьютер... Диагностика проведена... Система ${this.model} обновлена.`);
        this.computerStatus = true;
    }

    tireFitting() {
        console.log(`Мастер снял колеса с автомобиля ${this.model}... Проведена ребаллансировка колес...Колеса установлены. `);
        this.tireStatus = true;
    }

    engineRepair(hours) {
        console.log(`Мастер извлек двигатель из кузова ${this.model}... Выполнены работы по ремонту двигателя... Двигатель установлен в кузов`);
        this.engineStatus = true;
        let paymentPerHour = 25;
        return Number(hours * paymentPerHour)
    }

    painting(color) {
        console.log(`Старый цвет автомобиля ${this.model} ${this.color}, новый ${color}. Мастер выполнил покраску... Выполненяеться сушка... Готово`);
        this.color = color;
    }
}