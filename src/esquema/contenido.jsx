const _CONTENIDO_JS2CSS_ = new GenerarContenidoLibreria({
    nombre: 'JS2CSS',
    slogan: 'Conversor de JS a CSS',
    img: 'src/img/logo.JPG',

    github: "https://github.com/Jeff-Aporta/JS2CSS",

    resumen: {
        desc: `
            El código presentado facilita la conversión y aplicación de estilos en proyectos web al transformar 
            objetos de estilo en JavaScript a un formato compatible con CSS y luego insertarlos en el documento HTML. 
        `,
        descImg: [
            `
                *Conversión Automática de Estilos:*
                Convierte propiedades de estilo de camelCase a *kebab-case* automáticamente, evitando errores y 
                ahorrando tiempo.
            `,
            `
                *Inyección Dinámica de CSS:*
                Permite crear e inyectar estilos CSS directamente desde JavaScript, ideal para aplicaciones dinámicas 
                que requieren estilos personalizados en tiempo real.
            `,
            `
                *Manejo Inteligente de Unidades:*
                Agrega automáticamente px a los valores numéricos, asegurando que los estilos se apliquen correctamente 
                sin necesidad de ajustes manuales.
            `,
        ]
    },
    secciones: [
        {
            nombre: "Uso con CDN",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Para usar *JS2CSS* en un proyecto web, se debe agregar el script al documento HTML.
                        <br /><br />
                        Se puede usar el siguiente enlace para cargar el script.
                        <Code nocode className="link">{`
                            ${thisObj.githubPage}/index.js
                        `}</Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "crearEstilo(JSCSS, styleDOM)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        La función crearEstilo toma un objeto de estilo en JavaScript y genera un elemento de
                        estilo CSS, si no recibe un elemento de estilo como argumento, crea uno nuevo.
                        Si se requiere estar cambiando los mismos estilos, las mismas clases o variables,
                        se puede pasar el elemento de estilo.
                        <Code>{`
                            crearEstilo({
                                ".clase": {
                                    backgroundColor: 'blue',
                                    margin: 10
                                },
                            });
                        `}</Code>
                        Esto inyectará el siguiente CSS en el head del documento:
                        <Code>{`
                            <style>
                                .clase {
                                    background-color: blue;
                                    margin: 10px;
                                }
                            </style>
                        `}</Code>
                        Si vuelves a ejecutar la función con los mismos estilos, se creará un nuevo elemento de
                        estilo, repitiendo la información.
                        <br /><br />
                        Si lo que deseamos es no repetir elementos de estilo, se puede pasar el elemento de
                        estilo como segundo argumento:
                        <Code>{`
                            const style = document.createElement("style");
                            style.classList.add("estilo-dinamico"); // Clase para identificar el estilo cuando queramos hacer debug.
                            document.head.appendChild(style);

                            crearEstilo({
                                ".clase": {
                                    backgroundColor: 'blue',
                                    margin: 10
                                },
                            }, style);
                        `}</Code>
                        De esta forma, si se vuelve a ejecutar la función, se actualizarán los estilos en el
                        elemento de estilo.
                        <br /><br />
                        En el head del documento se modificará el contenido del elemento de estilo, en lugar de
                        crear uno nuevo, así se evita la repetición de información.
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "crearEstilo(): kebab-case inferido",
            nombre_render_as: "CodeInlineParcial",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Como los objetos en *JavaScript* son más fáciles de definir y manipular en *camelCase,*
                        se ha considerado que la función *JS2CSS* convierta automáticamente las propiedades de
                        estilo de camelCase a *kebab-case.*
                        <br /><br />
                        Por ejemplo, si se pasa el siguiente objeto de estilo:
                        <Code linenumbers={false}>{`
                            {
                                backgroundColor: 'blue', // Propiedad en camelCase desde JS.
                            }
                        `}</Code>
                        *JS2CSS* lo convertirá a:
                        <Code linenumbers={false}>{`
                            {
                                background-color: 'blue'; // Convertido a kebab-case para CSS.
                            }
                        `}</Code>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "crearEstilo(): px inferido en números",
            nombre_render_as: "CodeInlineParcial",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Como las unidades de medida en *CSS* son más normalmente usadas en pixeles, la función
                        *JS2CSS* agrega automáticamente px a los valores numéricos, esto puede ser útil pero también
                        puede generar errores si no se tiene en cuenta.
                        <br /><br />
                        Por ejemplo, si se pasa el siguiente objeto de estilo:
                        <Code linenumbers={false}>{`
                            {
                                margin: 10 // No le definimos la unidad de medida 'px'
                            }
                        `}</Code>
                        *JS2CSS* lo convertirá a:
                        <Code linenumbers={false}>{`
                            {
                                margin: 10px; //  JS2CSS agrega px automáticamente al valor numérico.
                            }
                        `}</Code>
                        Aunque *JS2CSS* no infiere unidades en propiedades como *z-index, scale u opacity,* se debe
                        tener cuidado con las propiedades que no deben llevar unidades.
                        <Code linenumbers={false}>{`
                            {// No recomendado
                                zIndex: 10,
                                scale: 1.5,
                                opacity: 0.5,
                            }
                        `}</Code>
                        Aunque en este ejemplo las propiedades están en las excepciones, se recomienda que
                        su valor sea un string, como en las demás propiedades númericas que no llevan unidades.
                        <Code linenumbers={false}>{`
                            {// Recomendado
                                zIndex: '10',
                                scale: '1.5',
                                opacity: '0.5',
                            }
                        `}</Code>
                    </FormatoDoc>
                );
            }
        }
    ]
});