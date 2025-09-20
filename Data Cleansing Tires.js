const items = $input.all();

// Expresion regular para para allar en el texto las medidas de las llantas correctas
// ##/##R### ejem 160/45R16
const exp = /\b\d{3}\/\d{2}R\d{2}\b|\b\d{2,3}x\d{2,3}(?:\.\d{1,2})?R\d{2}\b/gi;

//todos los datos extraidos se guardara dentro de un array para que lo pueda interpretar el n8n 
const resultados = [];

items.forEach((item) => {
  const row = item.json;
//validamos que sea un tipo objeto es decir una fila completa para analizar con la expresion regular
  if (typeof row === "object" && row !== null) {
    Object.values(row).forEach((value) => {
      if (typeof value === "string") {
        const match = value.match(exp);
        if (match) {
          match.forEach(medida => {
            resultados.push({ 
              json: { 
                Producto: row.Producto || null, 
                Codigo: row.Codigo || null,
                Precio: row.Precio || null, 
                Medida: medida 
              } 
            });
          });
        }
      }
    });
  } //O en su debido caso si solo tiene tipo texto igualmente se analizara con la expresion regular, esto en caso que solo sea 1 texto
  else if (typeof row === "string") {
    const match = row.match(exp);
    if (match) {
      match.forEach(medida => {
        resultados.push({ 
          json: { 
            Producto: null, 
            Precio: null, 
            Medida: medida 
          } 
        });
      });
    }
  }
});

return resultados;