# API service contract

The mock service layer currently lives in `src/services/api.ts`. When the FastAPI backend is available, keep these method signatures and replace implementations with `fetch` calls. Expected payloads include `players`, `ball`, `tracking_points`, `events`, and `metrics`.

The upload flow is intentionally separate from processing: upload stores the video metadata, then processing can call `POST /api/matches/:id/process`. This keeps the frontend ready for asynchronous CV jobs and status polling.
