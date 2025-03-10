<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  }
});

const revealed = ref(false);
const elementRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          revealed.value = true;
        }, props.delay);
        observer.disconnect();
      }
    },
    {
      threshold: 0.1
    }
  );

  if (elementRef.value) {
    observer.observe(elementRef.value);
  }
});
</script>

<template>
  <div ref="elementRef" :class="{ 'reveal-visible': revealed }" class="reveal">
    <slot></slot>
  </div>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: 0.8s cubic-bezier(0.5, 0, 0, 1);
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
