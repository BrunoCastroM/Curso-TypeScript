/* eslint-disable */  // Isso aqui é so para o eslint não encher o saco, pois quando o tipo da váriável já bem óbvio você não precisa inferir o tipo dela.
/*


Type Annotations:
  - Serve para indicar o tipo que a variável será
  - Para fazer isso é so colocar :tipo depois da variável
*/


// Obs: A maioria das tipificações o TypeScript já reconhece então não precisa ficar declarando toda hora o tipo. Só quando ele não reconheça de fato.


// Example:
let nome: string = 'Bruno'

// Tipos básicos (aqui ocorre inferência de tipos)
let nome1: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d(hexadecimal), 0b1010(binário), 0o7744(octal)
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint


// Arrays:
let arraysOfNumbers: Array<number> = [1, 2, 3];
let arraysOfStrings: Array<string> = ['a', 'b', 'c'];
// Outra forma de sintaxe para fazer arrays:
let arraysOfNumbers1: number[] = [1, 2, 3];
let arraysOfStrings2: string[] = ['a', 'b', 'c'];



// Objetos:
let person: {name: string, age: number, adult?: boolean} = {  // O "?" significa que a chave "adult" é opcional o resto ficará obrigatório de usar
  age: 30,
  name: 'Bruno'
};


// Funções:
function sum (x: number, y: number):number {  // Essa tipagem foram dos parênteses é a da função, então a função retornaria um number nessa caso
  return x + y
};

const result = sum(2, 2);
console.log(result)
// Outra forma de fazer uma função:
const sum2: (x: number, y: number) => number = (x, y) => x + y;
