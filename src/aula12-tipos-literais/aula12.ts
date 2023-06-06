let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; // eslint-disable-line

const person = {
  name: 'Luiz' as const,
  lastname: 'Miranda',
};

export function chooseColor2(cor: 'red' | 'yellow' | 'blue'): string {
  return cor;
}
console.log(chooseColor2('red'), person, x, y);
