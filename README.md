# Football Vision AI

MVP frontend de una plataforma SaaS de análisis futbolístico con IA. Incluye datos simulados realistas, tracking, heatmaps, métricas, eventos, scouting y un Football AI Analyst. No implementa YOLO ni procesamiento real de vídeo todavía.

## Ejecutar

```bash
npm install
npm run dev
```

La aplicación funciona en modo demo sin configurar Firebase. Para activar Firebase, copia las variables en `.env.local`:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## Arquitectura

- `src/pages.tsx`: páginas y vistas responsive.
- `src/data/mockData.ts`: partido demo Real Madrid B vs Barcelona B, jugadores, tracking y eventos.
- `src/services/api.ts`: contrato de servicios mock reemplazable por HTTP.
- `src/lib/firebase.ts`: inicialización opcional; si faltan variables, mantiene modo demo.
- `src/types.ts`: interfaces compartidas para `Match`, `Player`, `PlayerTrackingPoint` y `MatchEvent`.

Rutas disponibles: `/login`, `/dashboard`, `/matches`, `/matches/:id`, `/matches/:id/video`, `/matches/:id/players`, `/matches/:id/tracking`, `/matches/:id/heatmap`, `/matches/:id/tactics`, `/matches/:id/events`, `/players`, `/players/:id`, `/scouting`, `/settings`.

## Evolución prevista

Frontend React + Vite → API Python/FastAPI → almacenamiento de vídeo (Google Cloud Storage), Computer Vision con YOLO + ByteTrack + OpenCV, métricas/eventos y Gemini API. Los servicios actuales pueden sustituirse por llamadas a:

- `POST /api/matches`
- `POST /api/matches/:id/process`
- `GET /api/matches/:id`
- `GET /api/matches/:id/tracking`
- `GET /api/matches/:id/events`
- `GET /api/players` y `GET /api/players/:id`
- `POST /api/ai/analyze`

Las claves privadas de Gemini no deben exponerse en el frontend; la futura llamada debe pasar por FastAPI.
