# Algarrobo Adult Day Care

Landing de `Next.js` para Algarrobo Adult Day Care.

## Stack

- `Next.js 16`
- `React 18`
- `TypeScript`
- `Tailwind CSS`

## Desarrollo local

```bash
npm install
npm run dev
```

## Verificacion

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy en Cloudflare Pages

Este proyecto ya esta preparado para exportacion estatica.

Valores recomendados en Cloudflare Pages:

- Build command: `npm run build:cloudflare`
- Build output directory: `out`
- Root directory: `/`
- Node.js version: `20` o superior

Comprobacion local antes de desplegar:

```bash
npm run build:cloudflare
```

La guia corta de despliegue esta en [CLOUDFLARE_PAGES.md](./CLOUDFLARE_PAGES.md).
