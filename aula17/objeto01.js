let amigo = {nome:'Leo',
    idade:21,
    aumentarIdade(idd){
    this.idade += idd
    },
}


amigo.aumentarIdade(2)


console.log(amigo.idade)