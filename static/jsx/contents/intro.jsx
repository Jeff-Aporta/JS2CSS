const sep = (
  <_>
    <$$h />
    <$hr />
    <$$h />
  </_>
);

function _intro() {
  const sep = (
    <_>
      <$$h />
      <$hr />
      <$$h />
    </_>
  );
  return (
    <$FMD>
      <_$Bienvenido name_app="JS2CSS" img_url="static/img/app.svg">
        Este código proporciona una solución eficiente para la conversión y
        aplicación de estilos en proyectos web al transformar objetos de estilo
        definidos en JavaScript a un formato CSS válido y luego insertarlos
        directamente en el documento HTML. El proceso comienza con la conversión
        de los objetos de estilo, que son estructuras de datos en JavaScript, en
        cadenas de texto que siguen la sintaxis estándar de CSS.
      </_$Bienvenido>
      <$hr />
      <$$h />
      <_$Instalación
        url_cdn="https://jeff-aporta.github.io/JS2CSS/static/js/index.all.min.js"
        npm_pack="js2css-tool"
      />
      {sep}
      <_$testing
        src_params_iife={{
          url: "https://jeff-aporta.github.io/JS2CSS/static/js/index.all.min.js",
          name: "JS2CSS",
          comment: "{parseCSS: ƒ, insertStyle: ƒ} --> all OK!",
        }}
        src_params_module={{
          url: "https://jeff-aporta.github.io/JS2CSS/index.mjs",
          name: "JS2CSS",
          comment: "{parseCSS: ƒ, insertStyle: ƒ} --> all OK!",
        }}
      />
      {sep}
      <Card className="pad-10px">
        <$index variant="h3">Características principales:</$index>
        <$hr />
        <$CardDef title="Automatización y Gestión de Estilos CSS" elevation={0}>
          <$h />
          Transforma automáticamente las propiedades de estilo de formato
          `camelCase` a `kebab-case`, evitando posibles errores y reduciendo
          significativamente el tiempo de desarrollo al eliminar la necesidad de
          realizar la conversión manualmente. Además, la herramienta es capaz de
          manejar reglas CSS anidadas (nested CSS rules), permitiendo una mayor
          flexibilidad y control en la definición de estilos complejos, lo que
          facilita la organización y mantenimiento de hojas de estilo dinámicas.
        </$CardDef>
        <$CardDef title="Inyección Dinámica de CSS" elevation={0}>
          <$h />
          Permite la creación e inyección directa de estilos CSS desde
          JavaScript, lo que resulta especialmente útil para aplicaciones web
          interactivas y dinámicas que requieren la personalización de estilos
          en tiempo real, en función de las condiciones de la aplicación o las
          interacciones del usuario. Además, facilita el seguimiento y la
          gestión de los estilos aplicados, lo que es particularmente valioso
          para exportar archivos con formato, como .xls, asegurando que los
          estilos se mantengan consistentes y correctamente aplicados en los
          documentos generados.
        </$CardDef>
        <$CardDef title="Manejo Inteligente de Unidades" elevation={0}>
          Añade automáticamente la unidad `px` a los valores numéricos cuando
          sea necesario, garantizando que los estilos se apliquen correctamente
          y evitando la intervención manual para especificar las unidades, lo
          que mejora la consistencia y precisión en la definición de los
          estilos.
        </$CardDef>
      </Card>
    </$FMD>
  );
}
