const baseUrl = import.meta.env.VITE_APP_BASE_URL
const assetsUrl = import.meta.env.VITE_APP_ASSETS_URL
const apiUrl = import.meta.env.VITE_APP_API_URL

export const config = {
  baseUrl,
  assetsUrl,
  apiUrl,
}

export function getAssetUrl(path) {
  return `${assetsUrl}${path}`
}

export function getPageUrl(path) {
  return `${baseUrl}${path}`
}
