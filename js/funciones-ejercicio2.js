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
