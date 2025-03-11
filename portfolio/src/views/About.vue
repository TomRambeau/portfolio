<script setup>
import ScrollReveal from '@/components/ScrollReveal.vue'
</script>

<template>
  <div class="about-container">
    <ScrollReveal>
      <section class="hero-section">
        <img src="@/assets/avatar.png" alt="Tom Rambeau" class="profile-image">
        <div class="hero-content">
          <h1 class="title">A propos de moi...</h1>
          <p class="bio">
              Étudiant entrepreneur en 2ème année en BUT Informatique, je souhaite approfondir mes compétences en développement informatique.
          </p>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal :delay="200">
      <section class="experience-section">
        <h2>Expériences professionnelles</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-period-container">
              <span class="timeline-period">Juillet 2024</span>
              <span class="duration">1 mois</span>
            </div>
            <div class="timeline-content">
              <h3>Développeur intérimaire</h3>
              <p class="company">Safran Data Systems</p>
              <p class="description">
                Conception et création d'un outils dédié à l'analyse de la variation de la charge en VBA.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-period-container">
              <span class="timeline-period">Avril - Juin 2024</span>
              <span class="duration">3 mois</span>
            </div>
            <div class="timeline-content">
              <h3>Stage en développement</h3>
              <p class="company">Safran Data Systems</p>
              <p class="description">
                Réalisation de cahiers des charges et créations de mutiples outils au support de la direction Industrielle en VBA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal :delay="400">
      <section class="skills-section">
        <h2>Technical Skills</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>VBA</li>
              <li>.NET / C#</li>
              <li>PHP</li>
              <li>Ruby / Rails</li>
              <li>REST APIs:
                .NET / SpringBoot
              </li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>Vue.js </li>
              <li>JavaScript</li>
              <li>TailWind Css</li>
            </ul>
            <h3>Mobile</h3>
            <ul>
              <li>Kotlin / Android</li>
              <li>RactNative</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Database</h3>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Outils et autres</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>CI/CD</li>
              <li>VsCode / VisualStudio</li>
              <li>IntelliJ</li>
              <li>Android Studio</li>
              <li>NotePad++</li>
            </ul>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal :delay="600">
      <section class="soft-skills-section">
        <h2>Soft Skills</h2>
        <div class="soft-skills-grid">
          <div class="soft-skill-card">
            <h3>Autonome</h3>
            <p>Capable de me former tout seul à de nouvelles technologies, de travailler en étant indépendant et de m'adapter à de nouveaux environnements.</p>
          </div>
          
          <div class="soft-skill-card">
            <h3>Force de proposition</h3>
            <p>La résolution de problème est ce que je préfère, ainsi je propose des solutions de manière naturelle et instinctive.</p>
          </div>

          <div class="soft-skill-card">
            <h3>Travail en équipe</h3>
            <p>Ayant appris de mes expériences, je me suis formé à communiquer et à mettre en place des process d'organisation
              permettant d'éviter la majorité des problèmes de groupe.
            </p>
          </div>

          <div class="soft-skill-card">
            <h3>Recueil de besoins</h3>
            <p>Je me suis formé à récupérer les besoins d'un utilisateur de 0 lors de réunions afin de concevoir et développer
              l'outils répondant à ses attentes.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal :delay="800">
      <section class="education-section">
        <h2>Diplômes et Formations</h2>
        <div class="education-grid">
          <div class="education-card">
            <div class="education-year">2021 - 2025</div>
            <h3>BUT Informatique</h3>
            <p class="education-school">IUT de Clermont-Ferrand</p>
            <p class="education-description">
              Formation complète en développement informatique, gestion de projets et conception d'applications.
            </p>
          </div>

          <div class="education-card">
            <div class="education-year">2021</div>
            <h3>Baccalauréat Général</h3>
            <p class="education-school">Lycée de Jean-Paul de Rocca Serra</p>
            <p class="education-description">
              Spécialités Mathématiques et Physiques-Chimie 
              Option Mathématiques Expertes
              Mention Bien
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.hero-section {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 4rem;
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hero-content {
  flex: 1;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bio {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
}

.skills-section {
  margin-bottom: 4rem;
}

.skills-section h2,
.experience-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.skill-category h3 {
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  margin-bottom: 0.5rem;
  color: #666;
}

.skill-category:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.timeline {
  position: relative;
  padding: 2rem 0;
  margin-left: 140px; /* Ajout de marge gauche pour aligner avec le titre */
}

.timeline-item {
  position: relative;
  padding-left: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background: var(--accent-color)

}

.timeline-content {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 12px;
}

.timeline-period-container {
  position: absolute;
  left: -140px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.timeline-period {
  position: static;
  background: var(--accent-color);
  color: white;
  font-size: 0.9rem;
  width: 110px;
  text-align: center;
  padding: 6px 8px;
  border-radius: 4px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.duration {
  font-size: 0.85rem;
  color: #666;
  background: #e0e0e0;
  padding: 4px 8px;
  border-radius: 4px;
  width: fit-content;
}

.soft-skills-section {
  margin-bottom: 4rem;
}

.soft-skills-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.soft-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.soft-skill-card {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.soft-skill-card:hover{
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.soft-skill-card h3 {
  color: var(--accent-color);
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.soft-skill-card p {
  color: #666;
  line-height: 1.5;
}

.education-section {
  margin-bottom: 4rem;
}

.education-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.education-card {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.education-year {
  color: var(--accent-color);
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.education-card h3 {
  color: var(--text-color);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.education-school {
  color: #666;
  font-weight: 500;
  margin-bottom: 1rem;
}

.education-description {
  color: #666;
  line-height: 1.5;
}

.experience-section {
  position: relative; /* Ajout pour le contexte de positionnement */
  padding-left: 0;   /* Reset du padding */
}



@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .profile-image {
    width: 200px;
    height: 200px;
  }

  .timeline-item {
    padding-left: 1rem;
  }

  .timeline {
    margin-left: 0;
  }

  .experience-section h2 {
    margin-left: 0;
  }
}
</style>
