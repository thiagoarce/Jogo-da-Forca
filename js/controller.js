var criaController = function (jogo) {

    return new Controller(jogo);
}

class Controller {
    constructor(jogo) {
        this._jogo = jogo;
        this._entrada = document.querySelector('#entrada');
        this._lacunas = document.querySelector('.lacunas');
        
    }

     // consulta jogo.getLacunas() e exibe para o usuário cada lacuna 
    exibeLacunas() {
        let ulLacunas = this._lacunas;
        ulLacunas.innerHTML = ""
        this._jogo.getLacunas().forEach((letra) => {
            ulLacunas.appendChild(document.createElement('li')).classList.add('lacuna');
        });
        
    };

    // muda o texto do placeHolder do campo de entrada 
    mudaPlaceHolder(texto) {

        this._entrada.placeholder = texto;
    };

     // passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 
    guardaPalavraSecreta() {
        
        this._jogo.setPalavraSecreta(this._entrada.value.trim().toLowerCase())
        this.exibeLacunas();
        this.mudaPlaceHolder('chute');
        this._entrada.value = ""
        
    };

    // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
    inicia() {

        let Controller = this;
        this._entrada.addEventListener('keypress', function (event) {
            if (event.which == 13) {
                switch (Controller._jogo.getEtapa()) {
                    case 1:
                        Controller.guardaPalavraSecreta()
                        break;
                    case 2:
                        alert('etapa 2 - falta implementar');
                        break;
                }
            }
        });
    }
};