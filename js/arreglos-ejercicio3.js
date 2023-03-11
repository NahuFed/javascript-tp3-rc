// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
// función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
// de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
// anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
// esta operación.
let lanzamientoDado1 = 0
let lanzamientoDado2 = 0
let arrayLanzamientos =[]
let posiblesSumas=[2,3,4,5,6,7,8,9,10,11,12]
let arrayApariciones=[]

for(let i = 0;i<50;i++){
    lanzamientoDado1 = Math.floor(Math.random() * 6) + 1
    lanzamientoDado2 = Math.floor(Math.random() * 6) + 1
    arrayLanzamientos[i]= + lanzamientoDado1 + lanzamientoDado2    
}
posiblesSumas.forEach(posibleSuma => {
    let contador = 0
    arrayLanzamientos.forEach(lanzamiento => {
        if(lanzamiento === posibleSuma){        
        contador ++             
        }        
    });
    arrayApariciones.push(posibleSuma+' se repitio '+contador+ ' veces')
});

document.write('lanzamientos de dados: '+arrayLanzamientos.join(' - '))

document.write('<br>'+arrayApariciones)
