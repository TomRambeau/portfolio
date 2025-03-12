<template>
  <header class="nav-header">
    <nav class="nav-container">
      <div class="logo">
        <span class="logo-text">TR</span>
      </div>
      <div class="nav-links">
        <router-link to="/portfolio/home" class="nav-link">Accueil</router-link>
        <router-link to="/portfolio/about" class="nav-link">À propos</router-link>
        <router-link to="/portfolio/projects" class="nav-link">Projets</router-link>
        <router-link to="/portfolio/hobbies" class="nav-link">Loisirs</router-link>
        <router-link to="/portfolio/contact" class="nav-link">Contact</router-link>
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
</style>
