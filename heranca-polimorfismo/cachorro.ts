import {Animal} from './animais'

class Cachorro extends Animal {

    emitirSom(): void {
        console.log('Au, Au, Au !')
    }

    locomocao(): void {
        console.log('Correndo...')
    }

}

const cachorro = new Cachorro('Cachorro', 5)

cachorro.exibirDados()
cachorro.locomocao()
cachorro.emitirSom()
