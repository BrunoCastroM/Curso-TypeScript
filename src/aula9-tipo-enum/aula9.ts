/*
Enum -> No JS não existe esse tipo. Utiliza-se quando a gente tem mais de uma opção para alguma coisa, ou seja qualquer dado que você colocar lá ele já vai enumerando eles.
*/

enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}

console.log(Cores);

// Formas de acessar os valores:
console.log(Cores.VERMELHO);
console.log(Cores[0]);
console.log(Cores[10]); // Se eu acessa um valor que não existe ele volta o valor como undefined

function chooseColor(cor: Cores): void {
  console.log(Cores[cor]);
}

chooseColor(Cores.AZUL);
