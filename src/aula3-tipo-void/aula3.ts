// O tipo void quer dizer que uma função ou método não retorna nada, no caso não tem um return
function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  name: 'Bruno',
  lastname: 'Castro',

  showName(): void {
    console.log(`${this.name} ${this.lastname}`);
  },
};

noReturn('Luiz', 'Otávio');
pessoa.showName();

export { pessoa };
