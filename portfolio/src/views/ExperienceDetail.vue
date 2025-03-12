<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { experiences } from '@/store/experience.js';
import ScrollReveal from '@/components/ScrollReveal.vue';

const route = useRoute();
const router = useRouter();
const experience = ref(null);

onMounted(() => {
  const experienceId = parseInt(route.params.id);
  experience.value = experiences.find(e => e.id === experienceId);
  
  if (!experience.value) {
    router.push({ name: 'not-found' });
  }
});
</script>

<template>
  <div v-if="experience" class="experience-detail">
    <div class="hero-section">
      <img :src="experience.image" :alt="experience.title" class="hero-image">
      <div class="hero-overlay">
        <ScrollReveal>
          <h1 class="experience-title">{{ experience.title }}</h1>
          <p class="experience-company">{{ experience.company }}</p>
        </ScrollReveal>
      </div>
    </div>

    <div class="content-container">
      <ScrollReveal>
        <section class="detail-section">
          <h3>Description</h3>
          <p>{{ experience.longDescription }}</p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section class="detail-section">
          <h3>Technologies utilisées</h3>
          <div class="tech-list">
            <span v-for="tech in experience.technologies" 
                  :key="tech" 
                  class="tech-badge">
              {{ tech }}
            </span>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal v-if="experience.achievements">
        <section class="detail-section">
          <h3>Réalisations principales</h3>
          <ul class="achievements-list">
            <li v-for="achievement in experience.achievements" 
                :key="achievement">
              {{ achievement }}
            </li>
          </ul>
        </section>
      </ScrollReveal>

      <ScrollReveal v-if="experience.impact">
        <section class="detail-section">
          <h3>Impact</h3>
          <p>{{ experience.impact }}</p>
        </section>
      </ScrollReveal>
    </div>

    <ScrollReveal>
      <div class="back-button-container">
        <router-link to="/portfolio/about" class="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Retour au profil
        </router-link>
      </div>
    </ScrollReveal>
  </div>
</template>

<style scoped>
.experience-detail {
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.experience-title {
  color: white;
  font-size: 3.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  margin-bottom: 1rem;
}

.experience-company {
  color: white;
  font-size: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
  opacity: 0.9;
}

.content-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.detail-section {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.detail-section h3 {
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background: white;
  color: var(--accent-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.achievements-list {
  list-style: none;
  padding: 0;
}

.achievements-list li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.achievements-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-color);
}

.back-button-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--light-gray);
  color: var(--text-color);
  text-decoration: none;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.back-button:hover {
  transform: translateX(-5px);
}

@media (max-width: 768px) {
  .hero-section {
    height: 40vh;
  }

  .experience-title {
    font-size: 2.5rem;
  }

  .experience-company {
    font-size: 1.2rem;
  }
}
</style>
