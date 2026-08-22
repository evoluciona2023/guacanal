# Vereda Guacanal

Sitio web de la vereda Guacanal, corregimiento de San Antonio, municipio de El Cerrito, Valle del Cauca: su historia y las organizaciones comunitarias que la conforman (Junta de Acción Comunal, Aproagua, Mi Campo Emprende, Grupo de la Tercera Edad Añoranzas y Consejo Comunitario Afroguacanal).

## Stack

- [Astro](https://astro.build) — generador de sitios estáticos
- [Tailwind CSS](https://tailwindcss.com) — estilos
- [Netlify](https://netlify.com) — hosting y formulario de contacto (Netlify Forms)

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

Conectado a Netlify (`netlify.toml`): cada `git push` a `main` construye y publica el sitio automáticamente.
