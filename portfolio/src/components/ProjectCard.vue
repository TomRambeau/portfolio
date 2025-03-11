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
  <div class="project-card">
    <div class="project-image-container">
      <img :src="image" :alt="title" class="project-image">
      <div class="project-overlay">
        <h3>{{ title }}</h3>
        <div class="project-links">
          <a v-if="github" :href="github" target="_blank" class="overlay-btn">
            <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a v-if="demo" :href="demo" target="_blank" class="overlay-btn">
            <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/></svg>
          </a>
          <router-link :to="`/project/${id}`" class="overlay-btn">
            <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>
          </router-link>
        </div>
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
  </div>
</template>

<style scoped>
.project-card {
  background: #f5f5f5;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  background: #f1f5f9;
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
