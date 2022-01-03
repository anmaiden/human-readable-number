  const arrFirstTeen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; // от 0 до 9
  const arrSecondTeen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; //от 10 до 19
  const arrTeensNumber = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; // от 11 до 90 

// данная функция обрабатывает трехзначные числа, если приходит число 153, то сначала получаем первое число и выводим его словестное значение из массива, а затем берем остаток и выводим его словами из массива с числами от 10 до 19
function hundredNumber(inputNum) {
  if (inputNum > 99) {
    if(inputNum % 100 != 0){
        return arrFirstTeen[Math.floor(inputNum / 100)] + ' hundred ' + teensNumber(inputNum % 100);
      } else {
        return arrFirstTeen[Math.floor(inputNum / 100)] + ' hundred';
      }
  } else {
    return teensNumber(inputNum);
  }
}
// Данная функция обрабатывает числа меньше 10 и также числа от 10 до 20. 
 function teensNumber(inputNum){
    if (inputNum < 10){
      return arrFirstTeen[inputNum];
      } else if (inputNum >= 10 && inputNum < 20){
      return arrSecondTeen[inputNum - 10];
    }
      else{
        if (inputNum % 10 != 0){
          return arrTeensNumber[Math.floor(inputNum / 10)] + ' ' + arrFirstTeen[inputNum % 10]; // если введенное число 86 (пример), то берем 8 как десяток и остаток как цифру 
        }else {
        return arrTeensNumber[Math.floor(inputNum / 10)]; // Если введенное число это 10,20,30 и тд ТО выводится из массива просто значением
    }
  }
}
function buildFunc(inputNum){
  if (inputNum === 0){ // обработка ситуации, если введенное число 0
    return arrFirstTeen[0];
  }else{
    return hundredNumber(inputNum); // вызов проверок условий выше
  } 
}
module.exports = function toReadable (number) {
  return buildFunc(number); 
}
