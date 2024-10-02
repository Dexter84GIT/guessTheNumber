`use strict`


const isNumber = function(num) {
    return !isNaN(parseInt(num)) && isFinite(num) && (num > 0);
}
 const findNumber = function(number) {
      let writeInt = +prompt('Угадай число от 1 до 100');
     console.log(typeof writeInt, writeInt);
     function numberRecurcy() {
         if (writeInt === number) {
           alert("Поздравляю, Вы угадали!!!");
         } else if (writeInt > number)  {
           alert(`Загаданное число меньше ${writeInt}`), findNumber(number); 
         } else if (writeInt < number && writeInt !== 0) {
           alert(`Загаданное число больше ${writeInt}`), findNumber(number);
         } else if ((writeInt === null) || (writeInt === 0)) {
           alert("Игра окончена");
         } else if (!isNumber(writeInt)) {
           writeInt = alert(`Это не является числом. Введи число, собака!`), findNumber(number);; 
         } 
     }
     return numberRecurcy();
 }

 let hidden = findNumber(55);
