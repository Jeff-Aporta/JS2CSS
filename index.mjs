const attrs_no_inferPx = [
  "z-index",
  "scale",
  "opacity",
  "line-height",
  "flex-grow",
  "font-weight"
];

const htmlTags = [
  "a", "abbr", "address", "area", "article", "aside", "audio",
  "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button",
  "canvas", "caption", "cite", "code", "col", "colgroup", "data",
  "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl",
  "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer",
  "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header",
  "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins",
  "kbd", "label", "legend", "li", "link", "main", "map", "mark",
  "meta", "meter", "nav", "noscript", "object", "ol", "optgroup",
  "option", "output", "p", "param", "picture", "pre", "progress",
  "q", "rp", "rt", "ruby", "s", "samp", "script", "section",
  "select", "small", "source", "span", "strong", "style", "sub",
  "summary", "sup", "table", "tbody", "td", "template", "textarea",
  "tfoot", "th", "thead", "time", "title", "tr", "track", "u",
  "ul", "var", "video", "wbr"
];

export default {
  parseCSS,
  insertStyle,
}

function parseCSS({ objJs, infer = true, decimalsInfer = 3, clasesKebab = true }) {
  const estiloConvertido = {};

  Object.entries(objJs).forEach(([key, value]) => {

    const isHTMLDefault = htmlTags.some(e => e == key);
    const isClassCSS = typeof value == "object";

    if (!key.startsWith(".") && !isHTMLDefault) {
      const kebab = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
      if (clasesKebab && key != kebab) {
        if (isClassCSS) {
          key = "." + kebab;
        } else {
          key = kebab;
        }
      }
    }
    estiloConvertido[key] = (() => {
      if (isClassCSS) {
        return parseCSS(value);
      }

      const isNumber = typeof value == "number";
      const noIntuir = !attrs_no_inferPx.includes(key);

      if (infer && isNumber && noIntuir) {
        return `${parseFloat(value.toFixed(decimalsInfer))}px`;
      }
      return value;
    })();
  })

  return JSON.stringify(estiloConvertido, null, 2) // Convierte el objeto JSON a un string con formato de tabulación.
    .replaceAll("},", "}") // Elimina las comas al final de los objetos de JSON para que no genere errores en CSS.
    .replace(/,\n/g, ";\n") // Reemplaza las comas al final de las líneas por punto y coma.
    .replaceAll(":{", "{") // Elimina los dos puntos antes de las llaves.
    .replaceAll(": {", "{") // Elimina los dos puntos antes de las llaves, pero que tengan un espacio.
    .replaceAll('"', "") // Elimina las comillas dobles.
    .replaceAll("\\n", "") // Elimina los saltos de línea.
    .substring(1, estiloCSS.length - 1); // Elimina las llaves que encierran al objeto.
}

function insertStyle(props) {
  let { style, id } = props;
  if (!style) {
    if (id) {
      style = document.querySelector(`style#${id}`);
    } else {
      style = document.createElement("style");
    }
    style.classList.add("JS2CSS");
    return insertStyle({ style, id, ...props });
  }
  if (!document.head.contains(style)) {
    document.head.appendChild(style);
  }
  style.innerHTML = parseCSS(props); // Se añade el estilo CSS al elemento style.
  return style; // Se retorna el estilo CSS generado a partir del objeto JSON.
}
