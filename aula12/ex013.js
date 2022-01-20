var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundo = agora.getSeconds()
console.log(`Agora são exatamente ${hora}:${minuto}:${segundo}`)
if (hora < 12) {
    console.log ('Bom dia')
} else if (hora < 18) {
    console.log('Boa Tarde')
} else if (hora < 6){
    console.log('Boa noite')
} else {
    console.log('Boa Madrugada')
}