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
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        img.src = '001/imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else{
        img.src = '001/imagens/noite.jpg'
    }
    msg.innerHTML = `Agora são ${hora}:${minuto}`
}