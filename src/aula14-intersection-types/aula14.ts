// Intersection types -> utiliza-se com 0 "&". Serve para criar tipos enxutos que possa ser reutilizado em varios objetos

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // É como se fosse o "and" para tipos, isso quer dizer que ele tem que ter nome, sobrenome e idade, nesse exemplo

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(pessoa);

// Module mode
export { pessoa };
