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
    msg.innerHTML = `Agora são ${hora}:${minuto}`
}