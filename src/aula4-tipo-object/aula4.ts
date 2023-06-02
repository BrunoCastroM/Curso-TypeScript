const objectA: {
  readonly keyA: string; // O readonly serve para você proteger o dado de um objeto, ou seja ele somente vai ser lido, e não poderá ser escrito.
  keyB: string;
  keyC?: string; // Essa chave ficou como opcional dentro do objeto.
  [key: string]: unknown; // index signature serve para se eu quiser mais chaves eu não precisar ficar colocando os tipos de cada uma como em cima. A desvantagem desse é que ele não aparece no autocomplete.
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

// objectA.keyA = 'Another value';  // readonly
objectA.keyB = 'Another value2';
objectA.keyC = 'New key'; // Uma vez que os valores forem atribuidos no objeto em TypeScript você não pode adicionar outro depois, você pode mudá-los, porém não adicioná-los.
objectA.keyC = 'Another thing';
objectA.keyD = 'Another thing';
objectA.keyE = 'Another again';

console.log(objectA);
