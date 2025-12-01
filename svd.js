function criaCalculadora() {

    return {
        display: document.querySelector('.display'),
        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta Inválida')
                    return;
                }
                this.display.value = String(conta);
            } catch(e){
                alert('Conta Inválida');
                return;
            }
        },
        apagaNum(){
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay(){
            this.display.value = '';
        },

        inicia() {
            this.cliqueBotoes();
        },

        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagaNum();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            }.bind(this))
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
    
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();