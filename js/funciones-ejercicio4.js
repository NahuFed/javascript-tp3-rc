// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado
// por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
// solo los resultados del 1 al 10 del número elegido por el usuario.

numeroIngresado = parseInt(prompt('Ingrese un numero'))

function tablaDeMultiplicar(numero){
    let tabla = ''
    for(i=1;i<=10;i++){
        tabla+='<br>'+numero+' x '+i+' = '+ i*numero
    }
    return tabla
}

document.write('Tabla del ',numeroIngresado, ':',tablaDeMultiplicar(numeroIngresado))