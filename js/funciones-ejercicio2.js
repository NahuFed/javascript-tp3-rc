// 2- Definir una función que muestre información sobre una cadena de texto que se
// le pasa como argumento. A partir de la cadena que se le pasa, la función
// determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
// por una mezcla de ambas.

let texto = prompt("ingrese texto");

function determinarMayusculasOMinusculas(cadena) {
  if (cadena === cadena.toLowerCase()) {
    return document.write("el texto ingresado esta formado por minusculas");
  } else if (cadena === cadena.toUpperCase()) {
    return document.write("el texto ingresado esta formado por mayusculas");
  } else {
    return document.write(
      "el texto ingrasado esta formado por minusculas y mayusculas"
    );
  }
}

determinarMayusculasOMinusculas(texto);
