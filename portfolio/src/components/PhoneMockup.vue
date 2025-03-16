<template>
  <div class="phone-mockup">
    <div class="phone">
      <div class="phone-inner">
        <div class="phone-screen">
          <img :src="screenImage" alt="Phone screen" class="screen-image">
        </div>
        <div class="phone-notch"></div>
      </div>
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
.phone-mockup {
  perspective: 1000px;
  padding: 1rem;
}

.phone {
  width: 220px;
  height: 440px;
  margin: 0 auto;
  position: relative;
  border-radius: 30px;
  background: #1a1a1a;
  transform: rotateY(-20deg) rotateX(10deg);
  transform-style: preserve-3d;
  box-shadow:
    30px 30px 30px rgba(0,0,0,0.2),
    0 0 0 2px rgba(255,255,255,0.1);
  transition: transform 0.3s ease;
}

.phone:hover {
  transform: rotateY(-10deg) rotateX(5deg);
}

.phone-inner {
  position: absolute;
  inset: 3px;
  background: #000;
  border-radius: 37px;
  overflow: hidden;
}

.phone-screen {
  position: absolute;
  inset: 0;
  border-radius: 37px;
  overflow: hidden;
  background: #fff;
}

.screen-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.phone-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 25px;
  background: #000;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 1;
}

@media (max-width: 768px) {
  .phone {
    width: 200px;
    height: 400px;
    transform: rotateY(-10deg) rotateX(5deg);
  }

  .phone-notch {
    width: 90px;
    height: 20px;
  }
}
</style>
