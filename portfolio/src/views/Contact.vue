<script setup>
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <div class="contact-container">
    <h1 class="title">Me contacter</h1>
    <p class="subtitle">N'hésitez pas à me contacter pour toutes informations supplémentaires ou opportunités</p>
    
    <div class="content-wrapper">
      <div class="contact-info">
        <ContactForm />
        
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
        <div class="cv-section">
          <h2>Télécharger mon CV</h2>
          <p>Obtenir un point de vue détaillé de mes compétences et expériences.</p>
          <a href="https://tomrambeau.github.io/portfolio/cv.pdf" download class="download-btn">
            Télécharger le CV
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </div>

        <div class="location-section">
          <h2>Localisation</h2>
          <p>Clermont-Ferrand, France</p>
          <p>Disponible pour des opportunités en France</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
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

.content-wrapper {
  display: grid;
  gap: 4rem;
  grid-template-columns: 2fr 1fr;
}

.contact-info {
  flex: 2;
}

.side-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.cv-section {
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  text-align: center;
}

.cv-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.cv-section p {
  color: #666;
  margin-bottom: 2rem;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.social-links {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.social-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.github {
  background: #24292e;
}

.linkedin {
  background: #0077b5;
}

.email {
  background: #ea4335;
}

.location-section {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

.location-section h2 {
  color: var(--text-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.location-section p {
  color: #666;
  margin-bottom: 0.5rem;
}

.icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .side-content {
    margin-top: 2rem;
  }
}
</style>
