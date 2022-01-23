let valores = [6, 7 ,9, 2, 4, 5, 0, 7]
/*
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for(let pos in valores) {
    console.log(`Aposição ${pos} tem o valor ${valores[pos]}`)
}