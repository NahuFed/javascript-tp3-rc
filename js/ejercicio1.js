let meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

document.write(`
<ul>`);
meses.forEach((mes) => {
  document.write(`<li>${mes}</li>`);
});

document.write(`
</ul>`);
