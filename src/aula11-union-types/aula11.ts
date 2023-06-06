/*
Union Types -> serve para uma variável, uma função, um retorno (entre outros), poderá ter mais de 1 tipo
  - Eu faço isso usando o "|"
*/

function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
