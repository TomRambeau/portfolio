<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { isDarkTheme, toggleTheme } from '@/store/theme.js';

const route = useRoute();
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Surveiller les changements de route pour fermer le menu
watch(() => route.path, () => {
  closeMobileMenu();
});
</script>

<template>
  <header class="nav-header">
    <nav class="nav-container">
      <div class="logo">
        <router-link to="/" class="nav-logo"><span class="logo-text">TR</span></router-link>
      </div>

      <!-- Burger menu button -->
      <button class="mobile-menu-button" :class="{ 'active': isMobileMenuOpen }" @click="toggleMobileMenu">
        <span class="burger-bar"></span>
        <span class="burger-bar"></span>
        <span class="burger-bar"></span>
      </button>

      <div class="nav-links" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
        <router-link to="/" class="nav-link">Accueil</router-link>
        <router-link to="/about" class="nav-link">Profil</router-link>
        <router-link to="/projects" class="nav-link">Projets</router-link>
        <router-link to="/hobbies" class="nav-link">Loisirs</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
        <button @click="toggleTheme" class="theme-toggle" :aria-label="isDarkTheme ? 'Activer le thème clair' : 'Activer le thème sombre'">
          <svg v-if="isDarkTheme" class="theme-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" />
          </svg>
          <svg v-else class="theme-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.dark-theme .nav-header {
  background: rgba(13, 17, 23, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-color) 0%, #0077b5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0.5rem;
  border-radius: 8px;
  transition: opacity 0.2s ease;
}

.logo-text:hover {
  opacity: 0.8;
}
.nav-logo {
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  font-size: 14px;
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
  padding: 4px 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-color);
  transform: scaleX(0);
  transition: transform 0.2s ease;
}

.nav-link:hover {
  color: var(--accent-color);
}

.nav-link:hover::after,
.router-link-active::after {
  transform: scaleX(1);
}

.router-link-active {
  color: var(--accent-color);
}

.mobile-menu-button {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;
  position: relative;
}

.burger-bar {
  width: 100%;
  height: 2px;
  background-color: var(--accent-color);
  transition: all 0.3s ease-in-out;
  position: absolute;
  left: 0;
}

.burger-bar:nth-child(1) {
  top: 0;
}

.burger-bar:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.burger-bar:nth-child(3) {
  bottom: 0;
}

.mobile-menu-button.active .burger-bar:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.mobile-menu-button.active .burger-bar:nth-child(2) {
  opacity: 0;
}

.mobile-menu-button.active .burger-bar:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }

  .mobile-menu-button {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .dark-theme .nav-links {
    background: rgba(13, 17, 23, 0.98);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  }

  .nav-links.mobile-menu-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    font-size: 18px;
    padding: 0.75rem 0;
    width: 100%;
    text-align: center;
    font-weight: 500;
  }
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-color);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  padding: 0;
  margin-left: 1rem;
}

.theme-toggle:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.dark-theme .theme-toggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.theme-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.theme-toggle:hover .theme-icon {
  transform: rotate(30deg);
}

@media (max-width: 768px) {
  .theme-toggle {
    margin-top: 1rem;
    width: 48px;
    height: 48px;
  }

  .theme-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
