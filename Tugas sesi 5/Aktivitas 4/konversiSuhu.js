const chalk = require('chalk');
const figlet = require('figlet');
const konversi = require('./rumusSuhu');

console.log(chalk.cyan(figlet.textSync('Konversi Suhu')));

let c = 30;
let f = konversi(c);

console.log(chalk.green(`Suhu dalam Celcius   : ${c}°C`));
console.log(chalk.yellow(`Suhu dalam Fahrenheit: ${f}°F`));
