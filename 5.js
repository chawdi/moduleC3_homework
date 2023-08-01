class ElectricDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedIn = false;
    }

    togglePower() {
        this.pluggedIn = !this.pluggedIn;
        console.log(`${this.name} ${this.pluggedIn ? 'включен' : 'выключен'}.`);
    }
}

class DeskLamp extends ElectricDevice {
    constructor(name, power, brightnessLevels) {
        super(name, power);
        this.brightnessLevels = brightnessLevels;
        this.currentBrightness = 0;
    }

    setBrightness(level) {
        if (level >= 0 && level <= this.brightnessLevels) {
            this.currentBrightness = level;
            console.log(`${this.name}: яркость установлена на уровень ${level}.`);
        } else {
            console.log(`Ошибка: некорректный уровень яркости.`);
        }
    }
}

class Computer extends ElectricDevice {
    constructor(name, power, os) {
        super(name, power);
        this.os = os;
        this.isRunning = false;
    }

    togglePower() {
        this.isRunning = !this.isRunning;
        console.log(`${this.name} ${this.isRunning ? 'включен' : 'выключен'}.`);
    }

    installSoftware(software) {
        console.log(`${software} успешно установлен на ${this.name}.`);
    }
}

// Создаем экземпляры приборов
const deskLamp = new DeskLamp('Настольная лампа', 25, 3);
const computer = new Computer('Компьютер', 500, 'Windows 10');

// Включаем и выключаем приборы
deskLamp.togglePower(); // Включен
computer.togglePower(); // Включен

// Устанавливаем яркость настольной лампы
deskLamp.setBrightness(2); // Настольная лампа: яркость установлена на уровень 2.

// Устанавливаем яркость за пределами допустимых значений
deskLamp.setBrightness(5); // Ошибка: некорректный уровень яркости.

// Устанавливаем программное обеспечение на компьютер
computer.installSoftware('Microsoft Office'); // Microsoft Office успешно установлен на Компьютер.

// Выключаем приборы
deskLamp.togglePower(); // Выключен
computer.togglePower(); // Выключен