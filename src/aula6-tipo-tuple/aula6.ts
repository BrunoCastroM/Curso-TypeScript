/*
A tupla não existe no JS o TypeScript vai pegar o array para fazer a tupla. A tupla seria um array com tipos específicos e tamanho fixos.

A tupla é mutável aqui, porém eu posso deixar ela imutável.
*/

const costumerData1: readonly [number, string] = [1, 'Bruno']; // para deixar uma tupla inalterável é so usar a propriedade readonly
const costumerData2: [number, string, ...number[]] = [1, 'Bruno', 3, 5, 10, 23];

costumerData2[0] = 100;
costumerData2[1] = 'Junior';

console.log(costumerData1);
console.log(costumerData2);
