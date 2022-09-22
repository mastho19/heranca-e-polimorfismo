import {Animal} from './animais'

class Cavalo extends Animal {

    emitirSom(): void {
        console.log('Hiin in in – Relincho do cavalo.')
    }

    locomocao(): void {
        console.log('Pocotó, Pocotó, Pocotó...')
    }
}

const cavalo = new Cavalo('Cavalo', 12)

cavalo.exibirDados()
cavalo.emitirSom()
cavalo.locomocao()