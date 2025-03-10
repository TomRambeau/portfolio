<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/store/project.js'
import ScrollReveal from '@/components/ScrollReveal.vue'
</script>

<template>
  <div class="projects-container">
    <h1 class="title">Mes Projets</h1>
    <p class="subtitle">Découvrez une sélection de mes réalisations</p>
    
    <div class="projects-grid">
      <ScrollReveal v-for="(project, index) in projects" 
                    :key="project.id"
                    :delay="index * 200">
        <ProjectCard v-bind="project" />
      </ScrollReveal>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
