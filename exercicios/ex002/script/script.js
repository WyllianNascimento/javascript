function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert ('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade <= 2) {
                // Bebê
                img.setAttribute('src', 'imagens/bb-menino.jpg')
            } else if (idade <= 10) {
                // Criança
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade < 18) {
                // Adolescente
                img.setAttribute('src', 'imagens/menino-adolescente.jpg')
            } else if (idade <= 30) {
                // Jovem
                img.setAttribute('src', 'imagens/homem-jovem.jpg')
            } else if (idade < 60) {
                // Maduro
                img.setAttribute('src', 'imagens/homem-maduro.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/homem-velho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade <= 2) {
                // Bebê
                img.setAttribute('src', 'imagens/bb-menina.jpg')
            } else if (idade <= 10) {
                // Criança
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 18) {
                // Adolescente
                img.setAttribute('src', 'imagens/menina-adolescente.jpg')
            } else if (idade <= 30) {
                // Jovem
                img.setAttribute('src', 'imagens/mulher-jovem.jpeg')
            } else if (idade < 60) {
                // Madura
                img.setAttribute('src', 'imagens/mulher-madura.jpg')
            } else {
                // idosa
                img.setAttribute('src', 'imagens/mulher-velha.jpg')
            }
        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Pessoa do sexo ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }
}