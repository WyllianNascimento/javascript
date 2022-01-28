function carregar() {
    var msg = document.querySelector('.msg')
    var img = document.querySelector('.imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`
}