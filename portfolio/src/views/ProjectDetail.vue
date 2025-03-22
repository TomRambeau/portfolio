<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { projects } from '@/store/project.js';
import ScrollReveal from '@/components/ScrollReveal.vue';
import { getAssetUrl } from '@/config/index.js'
import { marked } from 'marked';

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

const scrollToGallery = () => {
  const gallerySection = document.getElementById('gallery-section');
  const offset = 50; // Offset pour éviter que le header ne cache le contenu
  const elementPosition = gallerySection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
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

    <!-- Bouton démo séparé -->
    <ScrollReveal v-if="project.demo" class="demo-button-container">
      <a :href="project.demo" target="_blank" class="demo-button">
        <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/></svg>
        Voir la démo
      </a>
    </ScrollReveal>

    <div class="content-container">
      <ScrollReveal>
        <div class="project-links">
          <a v-if="project.github" :href="project.github" target="_blank" class="link-button github">
            <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Voir le code
          </a>
        </div>
      </ScrollReveal>



      <ScrollReveal>
        <section class="project-section">
          <h2>Description</h2>
          <p class="description" v-html="marked(project.longDescription)"></p>
        </section>
      </ScrollReveal>

      <ScrollReveal v-if="project.workflow">
        <section class="project-section">
          <h2>Fonctionnement</h2>
          <p class="description" v-html="marked(project.workflow)"></p>
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



    </div>

    <ScrollReveal>
      <div class="back-button-container">
        <button @click="scrollToGallery" class="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
          Visiter la galerie
        </button>
      </div>
    </ScrollReveal>

    <div class="featured-section" id="gallery-section">
      <div class="featured-content">
        <ScrollReveal v-if= "project.gallery">
          <h2 class="featured-title">Aperçu visuel de l'application</h2>
          <p class="featured-description">Explorez les fonctionnalités du projet à travers une galerie visuelle</p>
          <div class="scroll-indicator">
            <svg viewBox="0 0 24 24" class="scroll-arrow">
              <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
            </svg>
            <span>Faites défiler</span>
          </div>
        </ScrollReveal>
      </div>
      <div class="featured-gallery">
        <div class="gallery-track" v-if="project.gallery">
          <ScrollReveal v-for="(image, index) in project.gallery"
               :key="index"
               class="featured-gallery-item"
               @click="openLightbox(image.url)"
               :delay="index * 200">

            <img :src="getAssetUrl(image.url)" :alt="image.caption">
            <div class="featured-caption">{{ image.caption }}</div>
          </ScrollReveal>
        </div>
      </div>
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

.description :deep(strong) {
  font-weight: 600;
  color: #5a5a5a;
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
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.back-button:hover {
  transform: translateY(-5px);
}

.icon {
  width: 20px;
  height: 20px;
}

.gallery-section {
  background: #F5F5F5;
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}

.gallery-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16/9;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.9rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .image-caption {
  transform: translateY(0);
}

.featured-section {
  width: 100%;
  min-height: 600px;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  margin: 4rem 0 0 0;
  overflow: hidden;
  scroll-margin-top: 2rem;
}

.featured-content {
  text-align: center;
  padding: 0 2rem 2rem 2rem;
}

.featured-title {
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #fff 0%, #a0a0a0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.featured-description {
  font-size: 1.5rem;
  line-height: 1.5;
  color: #a0a0a0;
  margin: 0 auto;
  max-width: 600px;
}

.featured-gallery {
  width: 100%;
  padding: 2rem 0;
  overflow-x: hidden;
}

.gallery-track {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 5%;
  justify-content: flex-start; /* Changé de center à flex-start */
  align-items: flex-start;
}

.featured-gallery-item {
  flex: 0 0 auto;
  width: calc(33.333% - 1.34rem); /* Ajusté pour compenser le gap et éviter les sauts de ligne non désirés */
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
}

@media (max-width: 1200px) {
  .featured-gallery-item {
    width: calc(50% - 1rem);
  }
}

@media (max-width: 768px) {
  .featured-gallery-item {
    width: 100%; /* Simplifié car plus besoin de calculer avec le gap en pleine largeur */
  }

  .gallery-track {
    padding: 1rem 5%;
    gap: 1.5rem;
  }
}

.featured-gallery-item img {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: scale-down; /* Changé de contain à scale-down pour mieux gérer les GIF */
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  image-rendering: auto; /* Ajout pour améliorer le rendu des GIF */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.featured-gallery-item:hover img {
  transform: scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.featured-caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.featured-gallery-item:hover .featured-caption {
  opacity: 1;
  transform: translateY(0);
}

.gallery-navigation,
.nav-button {
  display: none;
}

.scroll-indicator {
  display: none;
}

@media (max-width: 768px) {
  .hero-section {
    height: 40vh;
  }

  .project-title {
    font-size: 2.5rem;
  }

  .project-links {
    flex-direction: column;
  }

  .technologies {
    gap: 0.75rem;
  }

  .tech-badge {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .image-gallery {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .featured-section {
    padding: 2rem 0;
  }

  .featured-title {
    font-size: 2.5rem;
  }

  .featured-description {
    font-size: 1.2rem;
  }

  .gallery-track {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    padding: 1rem;
    overflow-x: auto;
    justify-content: flex-start;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  .gallery-track::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  .featured-gallery-item {
    flex: 0 0 90%;
    width: 90%;
    margin-right: 1rem;
    scroll-snap-align: center;
  }

  .featured-gallery-item:last-child {
    margin-right: 0;
  }

  .featured-gallery {
    overflow-x: auto;
    padding: 1rem 0;
  }

  .scroll-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
    color: #a0a0a0;
    font-size: 0.9rem;
    animation: bounce 2s infinite;
  }

  .scroll-arrow {
    width: 24px;
    height: 24px;
    color: #a0a0a0;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px);
    }
  }
}

.demo-button-container {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: -25px;
  margin-bottom: 2rem;
  z-index: 1;
}

.demo-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.demo-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .demo-button-container {
    margin-top: -20px;
  }

  .demo-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 2rem;
}
</style>
