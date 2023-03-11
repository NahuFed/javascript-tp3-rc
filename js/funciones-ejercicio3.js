// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// ● La fórmula del perímetro es p = 2*(a +b)

const alturaRectangulo = parseFloat(prompt('ingrese la altura del rectangulo'))
const baseRectangulo = parseFloat(prompt('ingrese la base del rectangulo'))

function perimetroRectangulo(lado1,lado2){
    return 2*(lado1+lado2)
}

document.write('El perimetro del rectangulo es: ',perimetroRectangulo(alturaRectangulo,baseRectangulo))

