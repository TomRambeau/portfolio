<script setup>
import ScrollReveal from '@/components/ScrollReveal.vue';
</script>

<template>
  <div class="hobbies-container">
    <h1 class="title">Mes Loisirs</h1>
    <p class="subtitle">Découvrez ce qui me passionne en dehors du code</p>

    <div class="hobbies-grid">
      <ScrollReveal :delay="0">
        <div class="hobby-card">
          <div class="hobby-icon">🎮</div>
          <h3>Gaming</h3>
          <p>Passionné par les jeux vidéo, particulièrement les jeux compétitif. J'aime analyser les mécaniques de jeu et améliorer mes performances.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal :delay="200">
        <div class="hobby-card">
          <div class="hobby-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
            </svg>
          </div>
          <h3>Street Workout</h3>
          <p>Je pratique le Street Workout depuis plus de 6 ans. Ce sport inculque discipline, constance et persévérance afin de progresser et de débloquer de nouvelles figures.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal :delay="400">
        <div class="hobby-card">
          <div class="hobby-icon">🚀</div>
          <h3>Astronomie</h3>
          <p>J'aime découvrir les dernières news sur les nouvelles découvertes spatiales et les nouvelles innovations de ce domaine. Référence : Hugo Lisoir</p>
        </div>
      </ScrollReveal>
    </div>
  </div>
</template>

<style scoped>
.hobbies-container {
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

.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.hobby-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.hobby-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.hobby-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
}

.hobby-icon svg {
  width: 3rem;
  height: 3rem;
}

.hobby-card h3 {
  color: var(--text-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.hobby-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
}
</style>
