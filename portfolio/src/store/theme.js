import { ref } from 'vue'

// Vérifier si le thème sombre est préféré par le système
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

// Vérifier s'il y a un thème enregistré dans le localStorage
const savedTheme = localStorage.getItem('theme')

// État réactif pour le thème actuel (dark ou light)
export const isDarkTheme = ref(savedTheme ? savedTheme === 'dark' : prefersDarkMode)

// Fonction pour basculer le thème
export function toggleTheme() {
  isDarkTheme.value = !isDarkTheme.value
  // Sauvegarder la préférence dans le localStorage
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light')
  // Mettre à jour la classe sur le document
  updateThemeClass()
}

// Fonction pour mettre à jour la classe CSS sur le document
export function updateThemeClass() {
  if (isDarkTheme.value) {
    document.documentElement.classList.add('dark-theme')
  } else {
    document.documentElement.classList.remove('dark-theme')
  }
}

// Initialiser la classe du thème au chargement
updateThemeClass()
