// Namespace serve para você criar um escopo

/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace = 'Bruno';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace('Bruno');

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome no outro namespace';
  }
}

const constDoNamespace = 'Valor da const do namespace';
