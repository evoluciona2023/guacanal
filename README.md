# Vereda Guacanal

Sitio web de la vereda Guacanal, corregimiento de San Antonio, municipio de El Cerrito, Valle del Cauca: su historia y las organizaciones comunitarias que la conforman (Junta de Acción Comunal, Aproagua, Mi Campo Emprende, Grupo de la Tercera Edad Añoranzas y Consejo Comunitario Afroguacanal).

## Stack

- [Astro](https://astro.build) — generador de sitios estáticos
- [Tailwind CSS](https://tailwindcss.com) — estilos
- [GitHub Pages](https://pages.github.com) — hosting, vía GitHub Actions (`.github/workflows/deploy.yml`)

## Estructura

```text
src/
├── components/    # Header/Footer (en BaseLayout), OrgCard, OrgPage, Gallery, MapEmbed, ContactForm
├── layouts/       # BaseLayout.astro
├── content/
│   └── organizaciones/   # un .md por organización (esquema en content/config.ts)
└── pages/         # index.astro + una página por organización
```

Los bloques de texto marcados como `[PENDIENTE]` en `src/content/organizaciones/*.md` están a la espera de contenido real por parte de la comunidad.

## Comandos

| Comando           | Acción                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Instala dependencias                          |
| `npm run dev`        | Servidor local en `localhost:4321`            |
| `npm run build`      | Genera el sitio de producción en `./dist/`    |
| `npm run preview`    | Previsualiza el build antes de desplegar      |

## Despliegue

El sitio se publica en GitHub Pages: `https://evoluciona2023.github.io/guacanal/`. Cada `git push` a `main` dispara el workflow de GitHub Actions (`.github/workflows/deploy.yml`), que construye el sitio y lo publica automáticamente — sin límite de minutos de build para repos públicos.

Como GitHub Pages sirve el sitio desde la subruta `/guacanal` (no la raíz), el proyecto está configurado con `base: '/guacanal'` en `astro.config.mjs`, y todas las rutas internas (enlaces, imágenes) pasan por el helper `src/lib/base.ts` para incluir ese prefijo automáticamente.

**Nota:** el formulario de contacto usaba Netlify Forms, que no funciona fuera de Netlify. Sigue marcado con los atributos `data-netlify`, pero necesita un servicio de formularios distinto (p. ej. Formspree) para volver a recibir mensajes.
