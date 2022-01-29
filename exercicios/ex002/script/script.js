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
        if (fsex[0].checked) {
            genero = 'masculino'
        } else if (fsex[1].checked) {
            genero = 'feminino'
        }
        res.innerHTML = `Pessoa do sexo ${genero} com ${idade} anos de idade`
    }
}