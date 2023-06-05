/*
Formar de tipar um array: Array<T> ou T[]
  - Eu posso substituir esse tipo pelo o que eu quiser
*/

export function multipleArguments(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

export function concStrings(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multipleArguments(1, 2, 3);
const concatenate = concStrings('a', 'b', 'c');
const upper = toUpperCase('d', 'e', 'f');

console.log(result);
console.log(concatenate);
console.log(upper);

// Formas de deixar o array imultável:
const array1: readonly string[] = ['Bruno', 'Castro'];
const array2: ReadonlyArray<string> = ['Bruno', 'Castro'];

console.log(array1);
console.log(array2);
