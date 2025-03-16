<template>
  <div class="desktop-mockup">
    <div class="desktop">
      <div class="desktop-screen">
        <img :src="screenImage" alt="Desktop screen" class="screen-image">
      </div>
      <div class="desktop-stand"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  screenImage: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.desktop-mockup {
  perspective: 1000px;
  padding: 1rem;
}

.desktop {
  width: 400px;
  height: 250px;
  margin: 0 auto;
  position: relative;
  transform: rotateY(-20deg) rotateX(10deg);
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.desktop:hover {
  transform: rotateY(-10deg) rotateX(5deg);
}

.desktop-screen {
  background: #1a1a1a;
  border-radius: 8px;
  padding: 8px;
  box-shadow:
    30px 30px 30px rgba(0,0,0,0.2),
    0 0 0 2px rgba(255,255,255,0.1);
}

.screen-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.desktop-stand {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 20px;
  background: linear-gradient(to right, #1a1a1a, #2a2a2a);
  border-radius: 0 0 10px 10px;
}

.desktop-stand::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 10px;
  background: #1a1a1a;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .desktop {
    width: 300px;
    height: 188px;
  }
}
</style>
