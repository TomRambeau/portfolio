<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getPageUrl } from '@/config/index.js'

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
        <span class="logo-text">TR</span>
      </div>
      
      <!-- Burger menu button -->
      <button class="mobile-menu-button" :class="{ 'active': isMobileMenuOpen }" @click="toggleMobileMenu">
        <span class="burger-bar"></span>
        <span class="burger-bar"></span>
        <span class="burger-bar"></span>
      </button>

      <div class="nav-links" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
        <router-link :to="getPageUrl('/')" class="nav-link">Accueil</router-link>
        <router-link :to="getPageUrl('/about')" class="nav-link">Profil</router-link>
        <router-link :to="getPageUrl('/projects')" class="nav-link">Projets</router-link>
        <router-link :to="getPageUrl('/hobbies')" class="nav-link">Loisirs</router-link>
        <router-link :to="getPageUrl('/contact')" class="nav-link">Contact</router-link>
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

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  font-size: 14px;
  color: #1d1d1f;
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
</style>
