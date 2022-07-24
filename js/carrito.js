// En funcion a los pedidos que haya en e carro los sumo para obtener el total.

//Los num son los prodcutos

function sumar(num1, num2, num3) {
    return num1+num2+num3
}

function calculos(operacion, num1, num2, num3) {
let resultado = operacion(num1, num2, num3)
console.log(resultado)
return resultado
}