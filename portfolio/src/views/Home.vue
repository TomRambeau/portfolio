<script setup>
import ScrollReveal from '@/components/ScrollReveal.vue'
import { useRouter } from 'vue-router';
import { getPageUrl } from '@/config'

const router = useRouter();


</script>

<template>
  <div class="home-container">
    <div class="content-wrapper">
      <ScrollReveal>
        <div class="text-content">
          <h1 class="title">Tom Rambeau</h1>
          <p class="subtitle">Étudiant Entrepreneur Développeur</p>
          <div class="separator"></div>
          <p class="description">
            Étudiant passionné par le développement d'applications.
            Ayant obtenu le statut d'Étudiant Entrepreneur à l'organisation Pépite afin de concrétiser ses projets.
          </p>
          <div class="cta-group">
            <router-link :to="getPageUrl('/projects')" class="cta-button primary">
              Voir mes projets
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
            <router-link :to="getPageUrl('/contact')" class="cta-button secondary">
              Me contacter
            </router-link>
            <router-link :to="getPageUrl('/about')" class="cta-button third">
              En savoir plus
            </router-link>
           
          </div>
          <div class="tech-stack">
            <p class="tech-title">Technologies favorites :</p>
            <div class="tech-list">
              <span class="tech-item">.NET C#</span>
              <span class="tech-item">Vue.js</span>
              <span class="tech-item">PHP</span>
              <span class="tech-item">JavaScript</span>
              <span class="tech-item">VBA</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal :delay="200">
        <div class="image-container">
          <div class="image-wrapper">
            <img :src="getPageUrl('/images/avatar.png')" alt="Tom Rambeau" class="profile-image">
            <div class="image-decoration"></div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f7 100%);
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.text-content {
  flex: 1;
  max-width: 600px;
}

.title {
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.8rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.separator {
  width: 60px;
  height: 4px;
  background: var(--accent-color);
  margin: 2rem 0;
  border-radius: 2px;
}

.description {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.cta-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cta-button.primary {
  background: var(--accent-color);
  color: white;
}

.cta-button.secondary {
  background: transparent;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
}

.cta-button.third {
  background: transparent;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
}


.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tech-stack {
  margin-top: 2rem;
}

.tech-title {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

.tech-list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.tech-item {
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 50px;
  font-size: 0.9rem;
  color: var(--accent-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.image-container {
  flex-shrink: 0;
  position: relative;
}

.image-wrapper {
  position: relative;
  z-index: 1;
}

.profile-image {
  width: 400px;
  height: 400px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}

.profile-image:hover {
  transform: scale(1.02) rotate(2deg);
  border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
}

.image-decoration {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid var(--accent-color);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.3;
  z-index: -1;
}

@media (max-width: 1024px) {
  .content-wrapper {
    flex-direction: column-reverse;
    text-align: center;
    gap: 3rem;
  }

  .text-content {
    max-width: 100%;
  }

  .separator {
    margin: 2rem auto;
  }

  .cta-group {
    justify-content: center;
  }

  .tech-list {
    justify-content: center;
  }

  .profile-image {
    width: 300px;
    height: 300px;
  }
}
</style>
