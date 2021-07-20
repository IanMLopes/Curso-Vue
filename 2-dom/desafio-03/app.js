new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },

    computed: {
        resultado(){
            return this.valor == 37 ? 'valor igual' : 'valor Diferente'
        }
    },
    watch: {
        resultado(){
            setTimeout(() => {
                    this.valor = 0
            },2000)
        }
    }
});