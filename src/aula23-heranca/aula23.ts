export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    const result = super.getNomeCompleto(); // A palavra super é utilizada para ter acesso a super-classe (Pessoa)
    return result + ' HEYYYYYYYY!!';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Bruno', 'Castro', 30, '000.000.000-00');
const aluno = new Aluno('Bruno', 'Castro', 30, '000.000.000-00', '0001');
const cliente = new Cliente('Bruno', 'Castro', 30, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
