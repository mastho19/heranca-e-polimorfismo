import {Animal} from './animais'

class Preguica extends Animal {
    emitirSom(): void {
        console.log('...')
    }

    locomocao(): void {
        console.log('*Escalando a árvore*')
    }
}

const preguica = new Preguica('Preguiça', 25)

preguica.exibirDados()
preguica.emitirSom()
preguica.locomocao()