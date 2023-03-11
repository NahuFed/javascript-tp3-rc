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