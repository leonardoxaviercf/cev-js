function carregar() {
    var msg = window.document.querySelector('div#msg')
    var foto = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        foto.src = 'assets/img/manha-pq.png'
        document.body.style.background = 'rgba(105, 176, 199, 0.589)'
    }
    else if (hora >= 12 && hora < 18) {
        foto.src = 'assets/img/tarde-pq.png'
        document.body.style.background = 'rgba(232, 184, 106, 0.589)'
    }
    else {
        foto.src = 'assets/img/noite-pq.png'
        document.body.style.background = 'rgba(0, 17, 62, 0.912)'
    }
}
