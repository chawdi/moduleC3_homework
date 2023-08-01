// Родительская функция для электроприборов
function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

// Методы для включения/выключения прибора из розетки
ElectricDevice.prototype.togglePower = function() {
    this.pluggedIn = !this.pluggedIn;
    console.log(`${this.name} ${this.pluggedIn ? 'включен' : 'выключен'}.`);
};

// Настольная лампа
function DeskLamp(name, power, brightnessLevels) {
    ElectricDevice.call(this, name, power);
    this.brightnessLevels = brightnessLevels;
    this.currentBrightness = 0;
}

// Наследование прототипа ElectricDevice для DeskLamp
DeskLamp.prototype = Object.create(ElectricDevice.prototype);
DeskLamp.prototype.constructor = DeskLamp;

// Уникальный метод для настольной лампы - установка яркости
DeskLamp.prototype.setBrightness = function(level) {
    if (level >= 0 && level <= this.brightnessLevels) {
        this.currentBrightness = level;
        console.log(`${this.name}: яркость установлена на уровень ${level}.`);
    } else {
        console.log(`Ошибка: некорректный уровень яркости.`);
    }
};

// Компьютер
function Computer(name, power, os) {
    ElectricDevice.call(this, name, power);
    this.os = os;
    this.isRunning = false;
}

// Наследование прототипа ElectricDevice для Computer
Computer.prototype = Object.create(ElectricDevice.prototype);
Computer.prototype.constructor = Computer;

// Уникальный метод для компьютера - установка программного обеспечения
Computer.prototype.installSoftware = function(software) {
    console.log(`${software} успешно установлен на ${this.name}.`);
};

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