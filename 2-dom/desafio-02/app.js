new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },

    methods: {
        botaoAlerta(){
            alert ('botão clicado')
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})