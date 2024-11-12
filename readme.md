# JS2CSS

<h2>
    Documentación:
    <br/>
    <br/>
    <a target="_blank" href="https://jeff-aporta.github.io/JS2CSS">
        https://jeff-aporta.github.io/JS2CSS
        <br/>
        <br/>
        <p align="center">
            <img src="static/img/app.svg" width="250" height="250" />
        </p>
    </a>
</h2>

**JS2CSS** es una herramienta que convierte y aplica estilos de manera eficiente en proyectos web al transformar objetos de estilo definidos en JavaScript en CSS válido y los inserta directamente en el documento HTML.

## Instalación

### CDN

Para incluirlo en tu proyecto, simplemente agrega la URL a tu archivo HTML:

```html
<script src="https://jeff-aporta.github.io/JS2CSS/static/js/index.all.min.js"></script>
```

### npm

Instálalo en tu proyecto ejecutando:

```bash
npm install js2css-tool
```

## Comprobación de Funcionamiento

### Usando IIFE

```html
<script src="https://jeff-aporta.github.io/JS2CSS/static/js/index.all.min.js"></script>
<script>
  console.log(JS2CSS); // {parseCSS: ƒ, insertStyle: ƒ} --> all OK!
</script>
```

### Usando Módulo

```html
<script type="module">
  import JS2CSS from "https://jeff-aporta.github.io/JS2CSS/index.mjs";
  console.log(JS2CSS); // {parseCSS: ƒ, insertStyle: ƒ} --> all OK!
</script>
```

## Características Principales

- **Automatización y Gestión de Estilos CSS**  
   Convierte automáticamente las propiedades de estilo de camelCase a kebab-case y admite reglas CSS anidadas para simplificar la organización y mantenimiento de estilos complejos.

- **Inyección Dinámica de CSS**  
   Inserta estilos CSS directamente desde JavaScript, ideal para aplicaciones web interactivas. Facilita la personalización en tiempo real y mantiene los estilos consistentes en documentos generados, como archivos .xls.

- **Manejo Inteligente de Unidades**  
   Añade automáticamente la unidad `px` a valores numéricos cuando es necesario, mejorando la precisión y consistencia en la definición de estilos.

<br />
<hr />
<br />

<h2 align="right">
  Más en mi portafolio
  <br />
  <a href="https://jeff-aporta.github.io/portafolio">
    https://jeff-aporta.github.io/portafolio
  </a>
</h2>
