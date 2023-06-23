// É como se fosse o objeto impostor ele simplemente ele finge ser o seu objeto e no meio do caminho ele pode decorar o seu objeto (observe o que o objeto ta fazendo, modificar o objeto, substituir, entre outras coisas)

@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Bruno', 'roxo');
console.log(animal);
