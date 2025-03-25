<script setup>
const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const mailtoLink = `mailto:tom.rambeau@gmail.com?subject=${encodeURIComponent(formData.get('subject'))}&body=${encodeURIComponent(
    `From: ${formData.get('name')} (${formData.get('email')})\n\n${formData.get('message')}`
  )}`;
  window.location.href = mailtoLink;
};
</script>

<template>
  <form @submit="handleSubmit" class="contact-form">
    <div class="form-group">
      <label for="name">Nom</label>
      <div class="input-container">
        <svg class="input-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        <input type="text" id="name" name="name" required placeholder="Votre nom">
      </div>
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <div class="input-container">
        <svg class="input-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        <input type="email" id="email" name="email" required placeholder="Votre email">
      </div>
    </div>

    <div class="form-group">
      <label for="subject">Sujet</label>
      <div class="input-container">
        <svg class="input-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/></svg>
        <input type="text" id="subject" name="subject" required placeholder="Sujet de votre message">
      </div>
    </div>

    <div class="form-group">
      <label for="message">Message</label>
      <div class="input-container">
        <textarea id="message" name="message" rows="5" required placeholder="Votre message"></textarea>
      </div>
    </div>

    <button type="submit" class="submit-btn">
      Envoyer le message
      <svg class="send-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    </button>
  </form>
</template>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2.5rem;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 4px 6px var(--shadow-color);
  transition: background-color 0.3s ease;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  opacity: 0.8;
  font-weight: 500;
  font-size: 0.9rem;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1rem;
  width: 20px;
  height: 20px;
  color: var(--text-color);
  opacity: 0.5;
  transition: color 0.3s ease;
}

input, textarea {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--background-color);
  color: var(--text-color);
}

textarea {
  padding: 1rem;
  resize: vertical;
  min-height: 120px;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 4px rgba(var(--accent-color-rgb, 0, 102, 204), 0.1);
}

input:focus + .input-icon {
  color: var(--accent-color);
  opacity: 1;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, var(--accent-color) 0%, #0077b5 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 102, 204, 0.3);
}

.send-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .contact-form {
    padding: 1.5rem;
  }
}
</style>
