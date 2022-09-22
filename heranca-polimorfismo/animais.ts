export class Animal {
    nome:string;
    idade:number;

    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    exibirDados(){
        console.log(`Sou um ${this.nome} e tenho ${this.idade} anos de idade.`)
    }
}

