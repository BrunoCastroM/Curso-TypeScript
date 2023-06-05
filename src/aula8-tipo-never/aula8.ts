/*
Never -> Representa um não valor também, parecido com o null e o undefined.
  - Quer dizer que a função o método nunca vai retornar nada.
*/
export function createError(): never {
  throw new Error('Erro qualquer');
}

createError();
