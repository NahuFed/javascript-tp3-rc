

function parImpar(numero){
if(numero%2===0){
    return ('el numero es par')
}else
return ('el numero es impar')
}

document.write(parImpar(parseInt(prompt('ingrese un numero'))))