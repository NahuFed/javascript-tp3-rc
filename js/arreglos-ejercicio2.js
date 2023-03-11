// 2- Crear un script que solicite al usuario mediante un prompt el nombre de
// ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
// debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// ● Mostrar la longitud del arreglo.
// ● Mostrar en el documento web los ítems de las posiciones primera, tercera y
// última.
// ● Añade en última posición la ciudad de París.
// ● Escribe por pantalla el elemento que ocupa la segunda posición.
// ● Sustituye el elemento que ocupa la segunda posición por la ciudad de
// 'Barcelona'.
let ciudades=[]
do{
     ciudades.push(prompt('agregar una ciudad'))
    
    }while(confirm('desea agregar otra ciudad?'))
    
    
    document.write(ciudades)
    document.write('<br>longitud del arreglo: ',ciudades.length)
    document.write('<br>primera ciudad: ',ciudades[0])
    document.write('<br>tercera ciudad: ',ciudades[2])
    document.write('<br>ultima ciudad: ',ciudades[ciudades.length-1])
    ciudades.push('Paris')    
    document.write('<br>segunda ciudad: ',ciudades[1])
    ciudades.splice(1,0,'Barcelona')
    console.log(ciudades)