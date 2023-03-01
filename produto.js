function calcular(){
    let numero1 = parseFloat(num1.value)
    let numero2 = parseFloat(num2.value)
    let numero3 = parseFloat(num3.value)
    let numero4 = parseFloat(num4.value)
    let valorTotal = numero1 + numero2 + numero3 + numero4
    let media = valorTotal/4
    total.value = media
}