/*
Unknown -> É a mesma coisa do any só que mais seguro
*/

let x: unknown;
x = 100;
x = 'Bruno';
x = 900;
x = 10; // Se aqui fosse uma string o unknown pede para você fazer a checagem se não da erro. No any ele só passaria

const y = 800;

if (typeof x === 'number') console.log(x + y);
