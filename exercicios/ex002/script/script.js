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
                img.setAttribute('src')
            } else if (idade <= 10) {
                // Criança
            } else if (idade < 18) {
                // Adolescente
            } else if (idade <= 30) {
                // Jovem
            } else if (idade < 60) {
                // Maduro
            } else {
                // idoso
            }
        } else if (fsex[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade <= 2) {
                // Bebê
            } else if (idade <= 10) {
                // Criança
            } else if (idade < 18) {
                // Adolescente
            } else if (idade <= 30) {
                // Jovem
            } else if (idade < 60) {
                // Madura
            } else {
                // idosa
            }
        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Pessoa do sexo ${genero} com ${idade} anos de idade`
    }
}