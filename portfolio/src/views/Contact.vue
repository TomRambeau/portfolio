<script setup>
import ContactForm from '@/components/ContactForm.vue'

</script>

<template>
  <div class="contact-container">
    <div class="header-section">
      <h1 class="title">Me contacter</h1>
      <p class="subtitle">N'hésitez pas à me contacter pour toutes informations supplémentaires ou opportunités</p>
    </div>

    <div class="content-wrapper">
      <div class="contact-info">
        <div class="form-card">
          <ContactForm />
        </div>

        <div class="social-links">
          <a href="https://www.linkedin.com/in/tom-rambeau-40b75320b/" target="_blank" class="social-btn linkedin">
            <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:tom.rambeau@gmail.com" class="social-btn email">
            <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            Email Direct
          </a>
        </div>
      </div>

      <div class="side-content">
        <div class="info-card cv-section">
          <div class="card-content">
            <h2>Télécharger mon CV</h2>
            <p>Obtenir un point de vue détaillé de mes compétences et expériences.</p>
            <a href="/portfolio/cv.pdf" download class="download-btn">
              Télécharger le CV
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>

        </div>

        <div class="info-card location-section">
          <div class="card-content">
            <h2>Localisation</h2>
            <p>Clermont-Ferrand, France</p>
            <p>Disponible pour des opportunités en France</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 44px);
  display: flex;
  flex-direction: column;
}

.header-section {
  text-align: center;
  margin-bottom: 4rem;
  padding-top: 2rem;
}

.title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-color) 0%, #0077b5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  flex: 1;
}

.form-card, .info-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.form-card:hover, .info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.card-content {
  padding: 2.5rem;
}

.social-links {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
}

.social-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 12px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
}

.linkedin {
  background: linear-gradient(135deg, #0077b5 0%, #00a0dc 100%);
}

.email {
  background: linear-gradient(135deg, #ea4335 0%, #ff7043 100%);
}

.social-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.cv-section, .location-section {
  height: fit-content;
}

.cv-section h2, .location-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-color) 0%, #0077b5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.download-btn {
  margin-top: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--accent-color) 0%, #0077b5 100%);
  color: white;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.download-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.icon {
  width: 24px;
  height: 24px;
}

.side-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;  /* Ajout d'un espacement de 2rem entre les éléments */
}

@media (max-width: 1024px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }

  .title {
    font-size: 3rem;
  }

  .side-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .side-content {
    grid-template-columns: 1fr;
  }

  .social-links {
    flex-direction: column;
  }

  .title {
    font-size: 2.5rem;
  }

  .card-content {
    padding: 1.5rem;
  }
}
</style>
