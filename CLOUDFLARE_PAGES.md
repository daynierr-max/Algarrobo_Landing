# Deploy en Cloudflare Pages

Este proyecto ya esta preparado para desplegarse en Cloudflare Pages como sitio estatico.

## Configuracion en Cloudflare Pages

- Framework preset: `None` o `Next.js (Static HTML Export)` si aparece en tu panel
- Build command: `npm run build:cloudflare`
- Build output directory: `out`
- Root directory: `/` (deja la raiz del repositorio)
- Node.js version: `20` o superior

## Verificacion local

Antes de subir cambios:

```bash
npm run lint
npm run typecheck
npm run build:cloudflare
```

Si el build termina bien, Cloudflare Pages debe publicar el contenido de `out/`.

## Flujo recomendado

1. Sube este proyecto a GitHub.
2. En Cloudflare Dashboard ve a `Workers & Pages`.
3. Crea un proyecto nuevo de `Pages`.
4. Importa el repositorio.
5. Usa la configuracion indicada arriba.
6. Despliega.

## Notas

- Este proyecto usa exportacion estatica de Next.js cuando `STATIC_EXPORT=1`.
- La carpeta final para despliegue es `out/`.
- No requiere servidor Node en produccion si lo despliegas en Cloudflare Pages de esta forma.
