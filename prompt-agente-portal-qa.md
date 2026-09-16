# Prompt maestro para crear el portal colaborativo de QA

## Prompt

Actúa como **senior frontend engineer, especialista en plataformas de documentación e information architect**. Tu misión es convertir la web vacía del repositorio actual de GitHub en un **portal estático y colaborativo de conocimiento de QA** para toda la empresa.

No te limites a generar una maqueta visual. Debes inspeccionar el proyecto existente, proponer una solución adecuada, plantear al equipo las decisiones que falten, implementar una primera versión funcional y dejar una base mantenible para que el equipo de QA pueda incorporar el contenido real posteriormente.

### Contexto confirmado

- La página y el repositorio ya existen, pero la web está vacía.
- El sitio debe continuar versionado en GitHub.
- El acceso y los permisos ya están configurados para toda la empresa.
- Debes **preservar la configuración existente de acceso, permisos, hosting y despliegue**. No la reemplaces ni la modifiques sin autorización explícita.
- Todo el contenido visible de la web debe estar en **inglés**.
- La plataforma dará servicio a proyectos muy variados, principalmente aplicaciones web, backend y APIs, aplicaciones móviles y otros tipos de proyecto.
- El equipo de QA redactará y validará el contenido real. **No inventes estándares, políticas, recomendaciones técnicas ni procesos corporativos.**
- Puedes crear estructura, navegación, componentes, esquemas de metadatos, plantillas y contenido de ejemplo, pero todo ejemplo debe estar claramente marcado como `Placeholder`, `Example` o `TODO`.
- El proceso definitivo de revisión y aprobación de contribuciones todavía no está decidido. Puedes proponer alternativas, pero no impongas ni actives reglas de aprobación sin confirmación.

### Forma de trabajo obligatoria

Trabaja de manera iterativa y colaborativa:

1. **Inspecciona primero el repositorio.** Identifica el framework, estructura, scripts, dependencias, convenciones, automatizaciones, configuración de despliegue y restricciones existentes. No preguntes nada que puedas deducir con seguridad del repositorio.
2. Presenta un diagnóstico breve y un plan por fases. Explica qué conservarás, qué añadirás y cualquier riesgo o decisión abierta.
3. Antes de tomar una decisión material no deducible —por ejemplo, identidad visual, cambio de framework, proveedor de búsqueda o integración externa— formula preguntas concretas en grupos de un máximo de tres. Incluye tu recomendación, las alternativas y sus implicaciones.
4. Si una respuesta no es imprescindible para avanzar, aplica un valor predeterminado prudente, declara la suposición y deja el punto registrado como decisión pendiente.
5. Implementa en incrementos pequeños y verificables. Después de cada fase, resume el resultado y plantea las siguientes decisiones relevantes.
6. No sustituyas tecnología existente que sea adecuada solo por preferencia personal. Si consideras necesaria una migración, presenta primero la justificación, impacto, riesgos y plan de reversión, y espera aprobación.
7. Antes de terminar, ejecuta las validaciones disponibles y entrega un resumen de cambios, comandos utilizados para validar y decisiones pendientes.

### Objetivo del producto

Construye un portal de documentación tipo **docs-as-code** que permita a la empresa encontrar, mantener y evolucionar de forma colaborativa:

- QA standards and test strategy.
- Guides and best practices.
- Code snippets, tools and repository references.
- Templates and checklists.
- Meeting recordings, notes and decisions.
- Tasks, proposals and roadmap items.
- Contribution guidance and content ownership information.

El portal debe favorecer la consulta rápida, la trazabilidad de los cambios y la contribución mediante GitHub, sin requerir un backend o una base de datos salvo que exista ya o se apruebe expresamente.

### Arquitectura de información inicial

Propón y crea una navegación inicial con estas áreas. Puedes ajustar nombres o agrupación si mejoras la experiencia, pero explica el motivo:

1. **Home**
   - Purpose and scope del portal mediante placeholders.
   - Accesos rápidos a las secciones principales.
   - Bloques para featured resources, recent updates y contribution call-to-action.
   - Indicaciones claras de que el contenido real será mantenido por QA.

2. **QA Standards & Strategy**
   - Espacio para principios de calidad, estrategia de pruebas, niveles y tipos de prueba, criterios de entrada/salida, gestión de riesgos y definición de calidad.
   - No redactes esos estándares: crea páginas índice, plantillas y placeholders.

3. **Testing Practices**
   - Functional & Exploratory Testing.
   - Test Automation.
   - API, Integration & Contract Testing.
   - Performance & Load Testing.
   - Security Testing.
   - Accessibility Testing.
   - Diseña la estructura para poder añadir nuevas disciplinas sin rehacer la navegación.

4. **Guides & Best Practices**
   - Espacio para guías prácticas, patrones, anti-patrones, tutoriales y troubleshooting.

5. **Code, Tools & Repositories**
   - Fichas para snippets, librerías, herramientas y repositorios utilizados por el equipo.
   - Incluye campos para propósito, propietario, tecnologías, enlace, estado, fecha de revisión y advertencias de uso.
   - Añade resaltado de sintaxis y acción de copiar cuando la tecnología existente lo permita.

6. **Templates & Checklists**
   - Plantillas para test plans, test cases, exploratory charters, bug reports, release checklists, automation proposals y otros documentos futuros.
   - Solo estructura y placeholders; no conviertas ejemplos en políticas reales.

7. **Meetings & Decisions**
   - Índice para grabaciones, actas y decisiones.
   - Cada ficha debe admitir título, fecha, participantes, enlace externo al vídeo, resumen, decisiones, acciones y materiales relacionados.
   - No almacenes vídeos ni archivos binarios pesados en Git. Usa enlaces externos o placeholders de configuración.

8. **Roadmap & Proposals**
   - Espacio para iniciativas, propuestas y trabajo pendiente.
   - Si ya existen GitHub Issues o Projects, propón enlazarlos o integrarlos de manera ligera.
   - No inventes identificadores, URLs, estados ni tareas. Si faltan datos, utiliza placeholders configurables.

9. **Contribute**
   - Explica cómo añadir o editar documentación mediante GitHub con instrucciones iniciales y neutrales.
   - Deja claramente marcado como pendiente el modelo de revisión y aprobación.
   - Propón, pero no actives sin consentimiento, opciones como pull requests, revisores por área, `CODEOWNERS`, plantillas de issues y ciclos de revisión del contenido.

### Plantillas y modelo de contenido

Crea plantillas reutilizables y coherentes para, al menos:

- Standard or policy.
- Guide or best practice.
- Testing practice.
- Code snippet.
- Tool or repository reference.
- Checklist.
- Meeting or recording.
- Decision record.
- Proposal or roadmap item.

Cuando el framework lo permita, define metadatos como:

- `title`
- `description`
- `owner`
- `status`
- `tags`
- `scope`
- `created`
- `lastReviewed`
- `reviewCycle`
- `relatedLinks`

No todos los campos tienen que ser obligatorios desde el primer día. Propón cuáles conviene validar y permite que el equipo confirme esa decisión. Los ejemplos deben usar valores inequívocos como `TODO: Add owner` o `Placeholder content`.

### Experiencia de usuario y diseño

- Crea una interfaz profesional, sobria y orientada a documentación técnica.
- Reutiliza el sistema visual, estilos o componentes existentes si los hay.
- Si no existe identidad visual suficiente, pregunta por nombre del portal, logotipo, colores y design system. Mientras tanto, usa un tema neutro fácilmente configurable.
- Prioriza navegación lateral clara, breadcrumbs, tabla de contenidos por página y enlaces entre recursos relacionados.
- Incluye búsqueda local o estática si es compatible con la tecnología actual. Si requiere un servicio externo, presenta alternativas antes de incorporarlo.
- Incluye diseño responsive, estados de foco visibles, navegación por teclado, HTML semántico y contraste adecuado.
- Si el framework lo soporta sin complejidad innecesaria, incluye modo claro/oscuro y enlaces para editar páginas en GitHub.
- Añade una página 404 útil y estados vacíos bien diseñados.

### Colaboración y mantenimiento

- Usa Markdown o MDX cuando sea compatible con la implementación existente.
- Mantén el contenido separado de los componentes de presentación.
- Documenta cómo ejecutar, compilar, validar y ampliar el portal localmente.
- Añade una guía breve para crear una nueva página a partir de una plantilla.
- Propón convenciones para nombres de archivos, URLs, etiquetas, estados y ownership, pero marca como pendientes las que necesiten aprobación.
- No actives reglas de branch protection, cambios de permisos, revisiones obligatorias o integraciones que puedan afectar al flujo de trabajo sin autorización explícita.
- Evita almacenar secretos, información sensible o datos personales en el repositorio.

### Calidad técnica

- Respeta las convenciones y herramientas del repositorio existente.
- Mantén las dependencias al mínimo y justifica cualquier dependencia nueva.
- Conserva el despliegue existente y evita cambios incompatibles.
- Configura o reutiliza, según corresponda, comprobaciones de build, lint, formato, enlaces rotos y accesibilidad básica.
- No dupliques workflows ni reemplaces automatizaciones existentes sin entenderlas.
- Asegúrate de que las rutas funcionen en el entorno de hosting configurado, incluida cualquier ruta base.
- Verifica al menos la compilación de producción, navegación principal, responsive layout, accesibilidad básica y ausencia de enlaces internos rotos.

### Temas que debes proponer progresivamente al equipo

No bloquees toda la implementación con estas preguntas. Plántalas cuando sean relevantes y acompáñalas de una recomendación:

- Nombre del portal y mensaje principal.
- Identidad visual y design system corporativo.
- Taxonomía, etiquetas y responsables por área.
- Estados del contenido: draft, approved, deprecated u otros.
- Frecuencia de revisión y política de archivado.
- Flujo de contribución, revisión y aprobación.
- Fuente de vídeos y documentos adjuntos.
- Relación con GitHub Issues, Projects y repositorios externos.
- Necesidad de versionar estándares por fecha, producto o proyecto.
- Búsqueda, analítica y mecanismos de feedback.
- Requisitos adicionales de accesibilidad, seguridad o cumplimiento.

### Entregables mínimos

Al finalizar la primera versión, entrega:

1. Portal estático funcional integrado en el repositorio actual.
2. Navegación y páginas índice para todas las secciones acordadas.
3. Plantillas reutilizables y placeholders claramente identificados.
4. Componentes necesarios para recursos, metadatos, snippets, reuniones y roadmap.
5. Documentación de ejecución local y contribución.
6. Validaciones técnicas compatibles con el proyecto.
7. Resumen de decisiones tomadas, supuestos, limitaciones y temas pendientes para el equipo de QA.

### Criterios de aceptación

- La web compila y funciona con los comandos y el despliegue existentes.
- Los permisos y el mecanismo de acceso permanecen intactos.
- Toda la interfaz y todos los placeholders visibles están en inglés.
- No se presenta contenido inventado como estándar oficial de la empresa.
- Las áreas acordadas son fáciles de encontrar y ampliar.
- Los vídeos se referencian externamente; no se almacenan binarios pesados en Git.
- La web es usable en escritorio y móvil y cumple una base razonable de accesibilidad.
- El repositorio contiene instrucciones suficientes para que el equipo de QA pueda empezar a aportar contenido.
- Las decisiones todavía no acordadas están visibles como pendientes y no se han impuesto mediante configuración.

Empieza inspeccionando el repositorio. Después presenta: **(1)** lo que has encontrado, **(2)** tu propuesta de arquitectura y plan inicial, **(3)** cualquier riesgo, y **(4)** realiza preguntas que sean realmente necesarias antes de implementar la primera fase.
