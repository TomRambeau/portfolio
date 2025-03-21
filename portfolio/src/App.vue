<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>
:root {
  --primary-color: #000000;
  --background-color: #ffffff;
  --accent-color: #0066cc;
  --text-color: #1d1d1f;
  --light-gray: #f5f5f7;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif;
  background: var(--background-color);
  color: var(--text-color);
  -webkit-font-smoothing: subpixel-antialiased !important;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern" 1, "liga" 1;
  font-synthesis: none;
  letter-spacing: -0.01em;
}

* {
  -webkit-font-smoothing: subpixel-antialiased !important;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
}

.app-container {
  min-height: 100vh;
  padding-top: 44px;
}

.main-content {
  padding-top: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
