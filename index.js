//------------------------
// Funciones de estilo CSS
//------------------------

function JS2CSS(estilo) {
  /**
   * Convierte un objeto de estilo en formato JS a CSS.
   */
  const estiloConvertido = {};

  for (let [key, value] of Object.entries(estilo)) {
    if (!key.startsWith(".")) {
      key = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
    }
    estiloConvertido[key] = (() => {
      if (typeof value === "object") {
        return JS2CSS(value);
      }
      
      const noInferir = ["z-index", "scale", "opacity"];

      if (typeof value === "number" && !noInferir.includes(key)) {
        return `${value}px`;
      }

      return value;
    })();
  }

  return estiloConvertido;
}

function crearEstilo(estilo, style) {
  /**
   * Crea un estilo CSS en el head del documento.
   */
  let estiloCSS = JSON.stringify(JS2CSS(estilo), null, "\t") // Convierte el objeto JSON a un string con formato de tabulación.
    .replaceAll("},", "}") // Elimina las comas al final de los objetos de JSON para que no genere errores en CSS.
    .replace(/,\n/g, ";\n") // Reemplaza las comas al final de las líneas por punto y coma.
    .replaceAll(":{", "{") // Elimina los dos puntos antes de las llaves.
    .replaceAll(": {", "{") // Elimina los dos puntos antes de las llaves, pero que tengan un espacio.
    .replaceAll('"', "") // Elimina las comillas dobles.
    .replaceAll("\\n", ""); // Elimina los saltos de línea.

  estiloCSS = estiloCSS.substring(1, estiloCSS.length - 1); // Elimina las llaves del principio y del final del objeto JSON.

  if (!style) {
    /**
     * Si no se ha creado un estilo, se crea.
     */
    style = document.createElement("style");
    document.head.appendChild(style);
  }
  style.innerHTML = estiloCSS; // Se añade el estilo CSS al elemento style.

  return estiloCSS; // Se retorna el estilo CSS generado a partir del objeto JSON.
}
