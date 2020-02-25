var criaController = function (jogo) {

    return new Controller(jogo);
}

class Controller {
    constructor(jogo) {
        this._jogo = jogo;
        this._entrada = document.querySelector('#entrada');
        this._lacunas = document.querySelector('.lacunas');
        this._gerador = document.querySelector('#gerador');
    }

    // consulta jogo.getLacunas() e exibe para o usuário cada lacuna 
    exibeLacunas() {
        let ulLacunas = this._lacunas;
        ulLacunas.innerHTML = ""
        this._jogo.getLacunas().forEach((letra) => {
            let li = document.createElement('li');
            li.textContent = letra
            li.classList.add('lacuna');
            ulLacunas.appendChild(li)
        });

    };

    // muda o texto do placeHolder do campo de entrada 
    mudaPlaceHolder(texto) {

        this._entrada.placeholder = texto;
    };

    // passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 
    guardaPalavraSecreta() {

        try {
            this._jogo.setPalavraSecreta(this._entrada.value.trim().toLowerCase())
            this.exibeLacunas();
            this.mudaPlaceHolder('chute');
            this._entrada.value = ""
        } catch (err) {
            alert(err.message);
        }
    };

    leChute() {
        try {
            let jogo = this._jogo;
            let Controller = this;
            jogo.processaChute(this._entrada.value.trim().toLowerCase()[0])
            this._entrada.value = ""
            this.exibeLacunas();

            setTimeout(function () {
                if (jogo.ganhouOuPerdeu()) {

                    if (jogo.ganhou()) {
                        alert("Você ganhou!")
                    }

                    if (jogo.perdeu()) {
                        alert("Você perdeu!")
                    }
                    Controller.reiniciaJogo();
                }

            }, 200)
        } catch (err) {
            alert(err.message);
        }
    }

    reiniciaJogo() {

        this._lacunas.innerHTML = ""
        this.mudaPlaceHolder('Palavra Secreta');
        this._jogo.reinicia();
        this._gerador.classList.remove("invisivel");
    }

    // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
    inicia() {

        let Controller = this;
        this._gerador.addEventListener("click", function(){
                let palavra = palavras[Math.floor((Math.random() * 500) + 1)];
                Controller._entrada.value = palavra;
                Controller.guardaPalavraSecreta();
                this.classList.add("invisivel");
        })

        this._entrada.addEventListener('keypress', function (event) {
            if (event.which == 13) {
                switch (Controller._jogo.getEtapa()) {
                    case 1:
                        Controller.guardaPalavraSecreta();
                        break;
                    case 2:
                        Controller.leChute();
                        break;
                }
            }
        });
    }
};