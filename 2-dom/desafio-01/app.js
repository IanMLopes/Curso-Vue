new Vue({
    el: '#desafio',

    data:{
        nome:'Ian Marques',
        idade:'27',
        imagem:'https://image.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg'
    },

    methods: {
        idadex3(){
           return this.idade * 3

        },
        random(){
            return Math.random()
        }

    }


})