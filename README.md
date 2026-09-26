# Portfolio · Félix Achucarro (identidad FELIX)

Portfolio centrado en los proyectos: la interfaz es el marco (≈30 %), el trabajo ocupa el espacio (≈70 %).
Usa la identidad FELIX, capítulo I: verde puesto de diarios `#24503C`, gris perla `#DFDEDF`, gris mecánico `#5E605D`, blanco y negro; el monograma circular; encabezados de lámina ("folio") y secciones numeradas como en el manual.

Abre con doble click en `index.html` (no necesita servidor). HTML, CSS y JS sin librerías.

## Dónde tocar

| Quiero cambiar…                              | Archivo |
|----------------------------------------------|---------|
| Textos, casos, archivo, sobre mí (EN / ES)   | `js/content.js` |
| Colores, tipografía, espacios                | `css/style.css` (bloque `:root`) |
| Rutas, visor de imágenes, idioma             | `js/app.js` |
| Título, descripción para buscadores          | `index.html` |

## Estructura
- **Portada** (`#/`): una línea de quién soy, y enseguida los 8 casos.
- **Caso** (`#/work/scania`, `frio-creativos`, `visorix`, `monumental`, `material-rodante`, `canopia`, `felix`): título, resumen, ficha, imagen principal, secciones numeradas con imágenes grandes, resultado en verde, siguiente caso.
- **Archivo** (`#/archive`, filtros `/brand`, `/web`, `/motion`, `/art`): 17 proyectos más; cada uno se abre en el visor.
- **Sobre mí** (`#/about`) y **contacto** en el pie de todas las páginas.
- Cualquier imagen se abre en grande (← → para cambiar, Esc para cerrar).
- Idioma: botón EN / ES, se recuerda la elección; `?lang=es` fuerza español.

## Sumar un caso o un proyecto
Copiá un bloque en `FELIX.cases` o `FELIX.archive` dentro de `js/content.js`, cambiá textos y rutas, y poné las imágenes en `assets/img` (videos en `assets/video`). Las filas de imágenes se arman solas según el formato de cada una.

## Relación con Brugeoise
`portfolio-fca01` (Brugeoise) queda como versión experimental y aparece en el Archivo. Este sitio no la reemplaza ni la borra.
