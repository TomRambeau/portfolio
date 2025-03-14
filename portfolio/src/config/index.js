export const config = {
  baseUrl: import.meta.env.VITE_APP_BASE_URL || 'http://localhost:5173',
  assetsUrl: import.meta.env.VITE_APP_ASSETS_URL || '/images',
  apiUrl: import.meta.env.VITE_APP_API_URL || 'http://localhost:3000/api',
}

export function getAssetUrl(path) {
  return `${config.assetsUrl}${path}`
}

export function getPageUrl(path) {
  return `${config.baseUrl}${path}`
}
