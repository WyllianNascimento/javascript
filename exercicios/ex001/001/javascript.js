function carregar() {
    var msg = document.querySelector('.msg')
    var img = document.querySelector('.imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    if (minuto < 10) {
        minuto = "0" + minuto
    }
    if (hora < 10) {
        hora = "0" + hora
    }
    if (hora >= 0 && hora < 12) {
        img.src = '001/imagens/manha.jpg'
        document.body.style.background = '#87CEFA'
        msg.innerHTML = `Bom Dia! Agora são ${hora}:${minuto}`
    } else if (hora < 18) {
        img.src = '001/imagens/tarde.jpg'
        document.body.style.background = '#DAA520'
        msg.innerHTML = `Boa Tarde! Agora são ${hora}:${minuto}`
    } else{
        img.src = '001/imagens/noite.jpg'
        document.body.style.background = '#191970'
        msg.innerHTML = `Boa Noite! Agora são ${hora}:${minuto}`
    }
}