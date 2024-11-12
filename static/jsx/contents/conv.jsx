function _conv() {
  return (
    <$FMD>
      <$h1>Generación y Aplicación Dinámica</$h1>
      <$h />
      El presente documento describe el funcionamiento y las aplicaciones de
      `JS2CSS`, una herramienta en JavaScript diseñada para simplificar la
      gestión de estilos CSS mediante la conversión automática de objetos de
      estilo en código CSS compatible. Mediante dos funciones principales,
      `parseCSS` e `insertStyle`, esta herramienta permite la generación y
      aplicación dinámica de estilos en documentos HTML, lo que facilita la
      creación de interfaces complejas y estilos personalizados en aplicaciones
      interactivas.
      <$p>
        `parseCSS` se encarga de transformar objetos de estilo en texto CSS,
        mientras que `insertStyle` inyecta los estilos generados directamente en
        el DOM, con un sistema optimizado para evitar la duplicación de estilos
        y mejorar el mantenimiento del código. La herramienta también admite
        reglas CSS anidadas y proporciona opciones avanzadas para la
        personalización de formatos y unidades.
      </$p>
      <$$h />
      <$hr />
      <$$h />
      <ParseCSS />
      <$$h />
      <$hr />
      <$$h />
      <InsertStyle />
    </$FMD>
  );

  function InsertStyle() {
    return (
      <_>
        <$index label="insertStyle" variant="h1">
          JS2CSS.insertStyle(props)
        </$index>
        <$$h />
        <$CardF className="pad-10px">
          La función `insertStyle` permite convertir y aplicar dinámicamente
          estilos CSS a partir de un objeto de estilo en JavaScript. Empaqueta
          todos los parámetros necesarios dentro del objeto `props`, lo que
          facilita la manipulación de estilos y optimiza la inserción de CSS en
          el documento HTML. Además, gestiona la creación de nuevos elementos
          `&lt;style&gt;` y la actualización de los existentes, evitando la
          duplicación de estilos.
          <$CardDef title="Sintaxis" elevation={0}>
            <$PR lang="javascript">
              {`insertStyle({ style, id, objJs, infer, decimalsInfer, clasesKebab })`}
            </$PR>
          </$CardDef>
          <$CardDef title="Parámetros:" variant="2" elevation={0}>
            <$CardDef title="style">
              (Elemento `style`, opcional): El nodo de tipo `style` donde se
              inyectarán los estilos generados. Si no se proporciona, la función
              buscará un nodo existente en el `&lt;head&gt;` usando el `id`
              proporcionado, o creará uno nuevo si no se encuentra.
            </$CardDef>
            <$CardDef title="id">
              (String, opcional): El identificador único que se usará para
              buscar un elemento `style` específico en el `&lt;head&gt;`. Si no
              se proporciona, se creará un nuevo nodo `style`.
            </$CardDef>
            <$CardDef title="objJs">
              (Objeto, obligatorio): El objeto JavaScript que contiene los
              estilos a convertir a CSS. Cada clave del objeto puede ser una
              regla de estilo CSS o una clase, y las propiedades deben seguir el
              formato camelCase.
            </$CardDef>
            <$CardDef title="infer">
              (booleano, opcional): Define si se debe agregar automáticamente la
              unidad `px` a los valores numéricos. El valor predeterminado es
              `true`, lo que agrega `px` a las propiedades que lo requieran,
              excepto las incluidas en la lista `attrs_no_inferPx`.
            </$CardDef>
            <$CardDef title="decimalsInfer">
              (número, opcional): Especifica la precisión decimal cuando se
              convierte un número a `px`. Predeterminado a `3`, lo que redondea
              los valores a tres decimales.
            </$CardDef>
            <$CardDef title="clasesKebab">
              (booleano, opcional): Indica si los nombres de las clases deben
              convertirse de `camelCase` a `kebab-case`. Predeterminado a
              `true`, lo que facilita la compatibilidad con la sintaxis CSS.
            </$CardDef>
          </$CardDef>
          <$CardDef title="Detalles Técnicos" variant="2" elevation={0}>
            <$CardDef title="Selección o Creación de `style`:">
              Si el parámetro `style` no es proporcionado, la función buscará un
              nodo `&lt;style&gt;` existente con el `id` especificado. Si no se
              encuentra, creará un nuevo elemento `&lt;style&gt;`.
            </$CardDef>
            <$CardDef title="Inserción de Estilos:">
              Si el nodo `style` no está ya presente en el `&lt;head&gt;`, se
              agrega dinámicamente. Luego, los estilos generados se inyectan en
              el `innerHTML` del nodo `style`.
            </$CardDef>
            <$CardDef title="Conversión de Estilos:">
              Los estilos en formato `camelCase` se transforman automáticamente
              a `kebab-case` para cumplir con la sintaxis de CSS. Los valores
              numéricos reciben la unidad `px` a menos que estén en la lista
              `attrs_no_inferPx`.
            </$CardDef>
          </$CardDef>
          <$CardDef title="Ejemplo de Uso:" variant="2" elevation={0}>
            <$CardDef title="Caso 1: Creación de un nuevo `&lt;style&gt;`:">
              <$PR lang="javascript" src="static/jsx/fragments/code-01.txt" />
              Este código creará un nuevo `&lt;style&gt;` en el `&lt;head&gt;` e
              inyectará el siguiente CSS:
              <$PR lang="css" src="static/jsx/fragments/code-02.txt" />
            </$CardDef>
            <$CardDef title="Caso 2: Reutilización de un `&lt;style&gt;` existente:">
              <$PR lang="javascript" src="static/jsx/fragments/code-03.txt" />
              Este código actualizará el contenido del nodo `&lt;style&gt;`
              existente con el `id` "estilo-dinamico", en lugar de crear un
              nuevo nodo. Los estilos en el `&lt;style&gt;` se actualizarán,
              evitando la duplicación de estilos en el documento.
            </$CardDef>
            <$CardDef title="Retorno:">
              La función retorna el nodo `style` donde se insertaron los
              estilos.
            </$CardDef>
          </$CardDef>
        </$CardF>
      </_>
    );
  }
  function ParseCSS() {
    return (
      <_>
        <$index label="parseCSS" variant="h1">
          JS2CSS.parseCSS(props)
        </$index>
        <$$h />
        La función `parseCSS` (implementada como `JS2CSS`) convierte un objeto
        de estilo en JavaScript (`objJs`) a una cadena de texto compatible con
        CSS. Esta función facilita el manejo de estilos directamente desde
        JavaScript, con opciones avanzadas de personalización para adaptar la
        conversión a distintas necesidades.
        <$h />
        <$CardDef title="Sintaxis">
          <$PR lang="javascript" elevation={0}>
            {`parseCSS({ objJs, infer = true, decimalsInfer = 3, clasesKebab = true })`}
          </$PR>
        </$CardDef>
        <$CardDef title="Parámetros" variant="2">
          Los parámetros de la función parseCSS permiten personalizar el proceso
          de conversión de un objeto JavaScript a una cadena de texto CSS.
          <$CardDef title="objJs" elevation={0}>
            Objeto JavaScript que contiene los estilos a convertir. Cada clave
            del objeto puede ser una regla de estilo CSS o una clase. Las
            propiedades pueden seguir el formato `camelCase`.
          </$CardDef>
          <$CardDef title="infer" elevation={0}>
            **(booleano, opcional):** Define si se debe agregar automáticamente
            la unidad `px` a valores numéricos. El valor predeterminado es
            `true`, lo que agrega `px` a las propiedades que lo requieran,
            excepto las incluidas en la lista `attrs_no_inferPx`.
          </$CardDef>
          <$CardDef title="decimalsInfer" elevation={0}>
            **(número, opcional):** Especifica la precisión decimal cuando se
            convierte un número a `px`. Predeterminado a `3`, lo que redondea
            los valores a tres decimales.
          </$CardDef>
          <$CardDef title="clasesKebab" elevation={0}>
            **(booleano, opcional):** Indica si los nombres de las clases deben
            convertirse de `camelCase` a `kebab-case`. Predeterminado a `true`,
            lo que facilita la compatibilidad con la sintaxis CSS.
          </$CardDef>
        </$CardDef>
        <$CardDef title="Detalles Técnicos" variant="2">
          Los detalles técnicos de la función parseCSS describen cómo se manejan
          internamente los objetos JavaScript para generar una cadena CSS
          válida.
          <$CardDef title="Conversión de CamelCase a Kebab-Case" elevation={0}>
            Las claves de estilo que siguen el formato `camelCase` se
            transforman automáticamente a `kebab-case`, un requisito de CSS.
            Esto se aplica a todas las propiedades de estilo y, si `clasesKebab`
            es `true`, también a las clases y selectores.
          </$CardDef>
          <$CardDef title="Manejo Inteligente de Unidades" elevation={0}>
            Para los valores numéricos, la función añade la unidad `px` por
            defecto, a menos que la clave se encuentre en `attrs_no_inferPx`. La
            lista de `attrs_no_inferPx` contiene propiedades como `z-index`,
            `scale`, `opacity`, entre otras, que no requieren unidades.
          </$CardDef>
          <$CardDef title="Conversión de Objetos a CSS" elevation={0}>
            La función convierte el objeto `objJs` en una cadena de texto
            compatible con CSS usando `JSON.stringify`, seguido de una serie de
            reemplazos para limpiar el formato:
            <$ul>
              <$li>Se eliminan comas después de cada declaración.</$li>
              <$li>
                Se eliminan los dos puntos antes de llaves `&#123; &#125;`.
              </$li>
              <$li>
                Se eliminan comillas dobles para evitar errores de formato en
                CSS.
              </$li>
              <$li>Se remueven los saltos de línea innecesarios.</$li>
            </$ul>
          </$CardDef>
        </$CardDef>
        <$CardDef title="Ejemplo de Uso">
          <$PR lang="javascript" elevation={0}>
            {loadStringsSync("static/jsx/fragments/code-04.txt")}
          </$PR>
          Este código generará el siguiente CSS:
          <$PR lang="css" elevation={0}>
            {loadStringsSync("static/jsx/fragments/code-05.txt")}
          </$PR>
        </$CardDef>
        <$CardDef title="Compatibilidad con Reglas Anidadas">
          `JS2CSS` permite definir reglas anidadas en `objJs`, lo que permite
          generar estilos complejos sin necesidad de una estructura CSS externa.
        </$CardDef>
        <$CardDef title="Flexibilidad para Debugging">
          Con `clasesKebab`, los nombres de clases se pueden adaptar
          automáticamente a `kebab-case`, facilitando la identificación y
          seguimiento de estilos en el navegador.
        </$CardDef>
      </_>
    );
  }
}
