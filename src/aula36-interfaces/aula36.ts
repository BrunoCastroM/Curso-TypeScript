// Declaration merging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Bruno',
  sobrenome: 'Castro',
  enderecos: ['Av. Brasil'],
  idade: 30,
};

pessoa.idade = 31;
console.log(pessoa);
