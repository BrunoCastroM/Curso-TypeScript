/*
O any representa uma falta de tipo ou qualquer tipo, e isso não é bom em uma liguagem que usar tipificação. Só utilizar ele em último caso
*/

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('olá'));
console.log(showMessage(1));
