var criaJogo = function () {

    return new Jogo();
};

class Jogo {

    constructor() {
        this._etapa = 1;
        this._palavraSecreta = ""
        this._lacunas = [];
    }

    // recebe a palavra secreta e deve atribuí-la à variável `palavraSecreta`. Vai para a próxima etapa
    setPalavraSecreta(palavra) {

        this._palavraSecreta = palavra;
        this._geraLacunas(this._palavraSecreta.length);
        this._proximaEtapa(2);
    };

    _proximaEtapa(etapa){
        this._etapa = etapa
    }

    _geraLacunas(tamanho) {
        this._lacunas = [];
        for (let i = 0; i < tamanho; i++) {
            this._lacunas.push('');
        }
    };

    // retorna as lacunas do jogo. Importante para quem for exibí-las.
    getLacunas() {
        return this._lacunas;
    };

    // retorna a etapa atual do jogo
    getEtapa() {
        return this._etapa;
    }
}