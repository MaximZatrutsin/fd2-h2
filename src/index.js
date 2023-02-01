//Создание заготовок подсчета
function add(a, b){
   return a + b;
}
function subtract(a, b){
   return a - b;
}
function multiply(a, b){
   return a * b;
}
function divide(a, b){
   return a / b;
}

//функция для посчета
function calc(a, b,) {

   return function calcul(string) {

       let result = 0;

       if (typeof a === 'number' && typeof b === 'number') {
         
           if (string == add(a,b)) {
               result ;
           } else if (string == subtract(a,b)) {
               result ;
           } else if (string == multiply(a,b)) {
               result ;
           } else if (string == divide(a,b)) {
               result ;
           }
           else {
               result = null;
           }
       }
       else {
           result = null;
       }
       return (result);
   }
}