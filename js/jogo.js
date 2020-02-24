function criaJogo(sprite) {
    
    return new Jogo(sprite);
    
};

class Jogo {

    constructor(sprite) {
        this._sprite = sprite;
        this._etapa = 1;
        this._chutes = []
        this._palavraSecreta = "";
        this._lacunas = [];
    }


    // recebe a palavra secreta e deve atribuí-la à variável `palavraSecreta`. Vai para a próxima etapa
    setPalavraSecreta(palavra) {
        if(!palavra.trim()) throw Error('Palavra inválida');
        this._palavraSecreta = palavra.toLowerCase();
        this._geraLacunas(this._palavraSecreta.length);
        this._proximaEtapa(2);
    };

    _proximaEtapa(etapa) {
        this._etapa = etapa
    }

    _geraLacunas(tamanho) {
        this._lacunas = [];
        this._lacunas = Array(tamanho).fill('');
    };

    // retorna as lacunas do jogo. Importante para quem for exibí-las.
    getLacunas() {
        return this._lacunas;
    };

    // retorna a etapa atual do jogo
    getEtapa() {
        return this._etapa;
    };

    processaChute(chute) {
        if(!chute) throw Error('Chute inválido');
        chute = chute.toLowerCase();
        if (this._chutes.indexOf(chute) == -1) { //verifica se o chute já foi dado
            
            if (this._palavraSecreta.match(chute)) {

                this._insereNaLacuna(chute); //acertou insere o chute na Lacuna
                this._guardaChutes(chute);   //guarda o chute no array de chutes já dados

            } else {

                this._sprite.nextFrame(); //errou coloca o próximo frame
                this._guardaChutes(chute); //guarda o chute no array de chutes já dados
            };
        };
    };

    _guardaChutes(chute) {
        this._chutes.push(chute);
    }

    _insereNaLacuna(chute) {
        for (let i = 0; i < this._palavraSecreta.length; i++) {
            if (this._palavraSecreta[i] == chute) this._lacunas[i] = chute
        };
    }

    ganhou() {
        return this._lacunas.length
            ?this._lacunas.indexOf('') == -1
            :false;
    };

    perdeu() {
        return this._sprite.isFinished();
    };

    ganhouOuPerdeu() {
        return this.ganhou() || this.perdeu()
    };

    reinicia(){
        this._sprite.reset();
        this._etapa = 1;
        this._chutes = []
        this._palavraSecreta = "";
        this._lacunas = [];
    };
}