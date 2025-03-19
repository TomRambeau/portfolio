<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { projects } from '@/store/project.js';
import ScrollReveal from '@/components/ScrollReveal.vue';
import { getPageUrl } from '@/config/index.js'
import { getAssetUrl } from '@/config/index.js'

const route = useRoute();
const router = useRouter();
const project = ref(null);

onMounted(() => {
  const projectId = parseInt(route.params.id);
  project.value = projects.find(p => p.id === projectId);

  if (!project.value) {
    router.push({ name: 'not-found' });
  }
});

const openLightbox = (imageUrl) => {
  // TODO: Implement lightbox functionality
  window.open(getAssetUrl(imageUrl), '_blank');
};

const currentGalleryIndex = ref(0);

const nextImage = () => {
  if (!project.value?.gallery) return;
  currentGalleryIndex.value = (currentGalleryIndex.value + 1) % project.value.gallery.length;
};

const prevImage = () => {
  if (!project.value?.gallery) return;
  currentGalleryIndex.value = currentGalleryIndex.value === 0 
    ? project.value.gallery.length - 1 
    : currentGalleryIndex.value - 1;
};
</script>

<template>
  <div v-if="project" class="project-detail">
    <div class="hero-section">
      <img :src="getAssetUrl(project.image)" :alt="project.title" class="hero-image">
      <div class="hero-overlay">
        <ScrollReveal>
          <h1 class="project-title">{{ project.title }}</h1>
        </ScrollReveal>
      </div>
    </div>

    <div class="content-container">
      <ScrollReveal>
        <div class="project-links">
          <a v-if="project.github" :href="project.github" target="_blank" class="link-button github">
            <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Voir le code
          </a>
          <a v-if="project.demo" :href="project.demo" target="_blank" class="link-button demo">
            <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/></svg>
            Voir la démo
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <section class="project-section">
          <h2>Description</h2>
          <p class="description">{{ project.longDescription }}</p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section class="project-section">
          <h2>Technologies utilisées</h2>
          <div class="technologies">
            <span v-for="tech in project.technologies"
                  :key="tech"
                  class="tech-badge">
              {{ tech }}
            </span>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal v-if="project.features">
        <section class="project-section">
          <h2>Fonctionnalités principales</h2>
          <ul class="features-list">
            <li v-for="feature in project.features"
                :key="feature">
              {{ feature }}
            </li>
          </ul>
        </section>
      </ScrollReveal>

      <ScrollReveal v-if="project.gallery">
        <section class="project-section gallery-section">
          <h2>Galerie</h2>
          <div class="gallery-container">
            <div class="gallery-content">
              <img 
                :src="getAssetUrl(project.gallery[currentGalleryIndex].url)" 
                :alt="project.gallery[currentGalleryIndex].caption"
                class="gallery-image"
              >
              <div class="gallery-overlay">
                <h3 class="gallery-caption">{{ project.gallery[currentGalleryIndex].caption }}</h3>
              </div>
              <div class="gallery-navigation">
                <button class="nav-button prev" @click="prevImage" :disabled="!project.gallery?.length">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button class="nav-button next" @click="nextImage" :disabled="!project.gallery?.length">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="gallery-thumbnails">
              <button 
                v-for="(image, index) in project.gallery" 
                :key="index"
                class="thumbnail-dot"
                :class="{ active: index === currentGalleryIndex }"
                @click="currentGalleryIndex = index"
              ></button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>

    <ScrollReveal>
      <div class="back-button-container">
        <router-link to="/projects" class="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Retour aux projets
        </router-link>
      </div>
    </ScrollReveal>
  </div>
</template>

<style scoped>
.project-detail {
  min-height: 100vh;
}

.hero-section {
  position: relative;
  height: 60vh;
  min-height: 400px;
  width: 100%;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-title {
  color: white;
  font-size: 3.5rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: -2rem 0 2rem;
}

.link-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.link-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.github {
  background: #24292e;
  color: white;
}

.demo {
  background: var(--accent-color);
  color: white;
}

.project-section {
  background: #F5F5F5;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.project-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.description {
  color: #666;
  line-height: 1.6;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem;
}

.tech-badge {
  background: #f8fafc;
  color: #334155;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  color: #666;
}

.features-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-color);
}

.back-button-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #f1f5f9;
  color: var(--text-color);
  text-decoration: none;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.back-button:hover {
  transform: translateX(-5px);
}

.icon {
  width: 20px;
  height: 20px;
}

.gallery-section {
  padding: 0;
  background: none;
  box-shadow: none;
  margin: 4rem 0;
}

.gallery-container {
  width: 100%;
  max-width: 100vw;
  margin: 0 -2rem;
  background: #000;
}

.gallery-content {
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 600px;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4rem 2rem 2rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}

.gallery-caption {
  color: white;
  font-size: 2rem;
  font-weight: 600;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-navigation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  pointer-events: none;
}

.nav-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  pointer-events: auto;
  opacity: 0.7;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
  opacity: 1;
}

.nav-button svg {
  width: 24px;
  height: 24px;
}

.gallery-thumbnails {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #000;
}

.thumbnail-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.thumbnail-dot.active {
  background: white;
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .gallery-content {
    height: 50vh;
    min-height: 400px;
  }

  .gallery-caption {
    font-size: 1.5rem;
  }

  .nav-button {
    width: 40px;
    height: 40px;
  }

  .nav-button svg {
    width: 20px;
    height: 20px;
  }

  .gallery-navigation {
    padding: 0 1rem;
  }
}
</style>
