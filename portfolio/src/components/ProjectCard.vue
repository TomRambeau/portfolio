<script setup>
defineProps({
  id: Number,
  title: String,
  description: String,
  technologies: Array,
  image: String,
  github: String,
  demo: String,
})
</script>

<template>
  <router-link :to="{ name: 'project-detail', params: { id: id }}" class="project-card">
    <div class="project-image-container">
      <img :src="image" :alt="title" class="project-image">
      <div class="project-overlay">
        <h3>{{ title }}</h3>
        
      </div>
    </div>
    <div class="project-content">
      <h3>{{ title }}</h3>
      <p class="description">{{ description }}</p>
      <div class="technologies">
        <span v-for="tech in technologies" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.project-card {
  background: #f5f5f5;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: block; /* Ajoutez cette ligne pour s'assurer que le lien occupe tout l'espace */
  text-decoration: none; /* Ajoutez cette ligne pour enlever le soulignement du lien */
  color: inherit; /* Ajoutez cette ligne pour garder la couleur du texte originale */
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.project-image-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* Ratio 16:9 */
  overflow: hidden;
}

.project-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-overlay h3 {
  color: white;
  margin-bottom: 1rem;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.project-links {
  display: flex;
  gap: 1rem;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.overlay-btn {
  background: white;
  color: var(--accent-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.overlay-btn:hover {
  transform: scale(1.1);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-card:hover .project-overlay h3,
.project-card:hover .project-links {
  transform: translateY(0);
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.description {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: white;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  font-size: 0.875rem;
  color: var(--accent-color);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.link-btn:hover {
  opacity: 0.8;
}

.github {
  background: #24292e;
  color: white;
}

.demo {
  background: var(--accent-color);
  color: white;
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
