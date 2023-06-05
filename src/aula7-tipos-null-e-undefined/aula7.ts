/*
Null e undefined representão o não-valor, porém a intensão de uso deles é diferente.
  undfined -> geralmente nós não utilizamos, porém a própria liguagem utiliza para falar que algo não foi definido
*/

// Undefined:
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

// Null:
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('invalid account');
} else {
  console.log(squareOfTwoNumber);
}
