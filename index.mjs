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
  obj2CSS,
  parseCSS,
  insertStyle,
}

function obj2CSS(objJs) {
  return parseCSS({ objJs });
}

function parseCSS(props) {
  const { objJs, infer = true, decimalsInfer = 3, clasesKebab = true, deep = 0 } = props;
  if (!objJs) {
    return parseCSS({ objJs: props });
  }
  const estiloConvertido = {};

  Object.entries(objJs).forEach(([key, value]) => {

    const isHTMLDefault = htmlTags.some(e => e == key);
    const isClassCSS = typeof value == "object";

    const classSelector = key.startsWith(".");
    const idSelector = key.startsWith("#");
    const decorSelector = key.startsWith("@");

    const inferClass = !classSelector && !idSelector && !decorSelector;

    if (inferClass && !key.includes(",") && !isHTMLDefault) {
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
        const str = parseCSS({ objJs: value, deep: deep + 1 });
        let retorno = processFormat(str);
        return retorno;
      }

      const isNumber = typeof value == "number";
      const noIntuir = !attrs_no_inferPx.includes(key);

      if (infer && isNumber && noIntuir) {
        return `${parseFloat(value.toFixed(decimalsInfer))}px`;
      }
      return value;
    })();
  })
  const str = JSON.stringify(estiloConvertido, null, 1);

  let retorno = processFormat(str);

  if (deep == 0) {
    retorno = retorno.substring(1, retorno.length - 1)
  }

  return retorno; // Elimina las llaves que encierran al objeto.

  function processFormat(str) {
    let retorno = str // Convierte el objeto JSON a un string con formato de tabulación.
      .replaceAll('"', "") // Elimina las comillas dobles.
      .replace(/\}\s*,/g, "}") // Elimina las comas al final de los objetos de JSON para que no genere errores en CSS.
      .replace(/,\n/g, ";") // Reemplaza las comas al final de las líneas por punto y coma.
      .replace(/:?\s*"?\{\s*/g, "{") // Elimina los dos puntos antes de las llaves.
      .replace(/\\[nr]/g," ") // Elimina los saltos de línea en string
      .replace(/\s+/g," "); // Elimina espacios o saltos de línea innecesarios

    return retorno;
  }
}

function insertStyle(props) {
  let { style, id } = props;
  if (!style) {
    if (id) {
      style = document.querySelector(`style#${id}`) ?? document.createElement("style");
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
