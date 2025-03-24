<template>
  <div id="bg" class="background-container"></div>
</template>

<script>
export default {
  data() {
    return {
      colors: ['#FF001F', '#00A7FF', '#B900D8', '#F8E203', '#00DE25'],
      intervalId: null
    };
  },
  methods: {
    createChromino() {
      const section = document.getElementById("bg");
      if (!section) return;

      const square = document.createElement('span');
      let size = Math.random() * 50;

      square.style.width = 5 + size * 3 + 'px';
      square.style.height = 5 + size + 'px';
      square.style.borderRadius = '10%';

      const height = window.innerHeight;
      const width = window.innerWidth;

      square.style.top = (Math.random() * height) - (size * 4) + 'px';
      square.style.left = (Math.random() * width) - (size * 4) + 'px';

      const bg1 = this.colors[Math.floor(Math.random() * this.colors.length)];
      const bg2 = this.colors[Math.floor(Math.random() * this.colors.length)];
      const bg3 = this.colors[Math.floor(Math.random() * this.colors.length)];

      square.style.background = `linear-gradient(90deg, ${bg1} 0%, ${bg1} 31%, #FFF 33%, ${bg2} 35%, ${bg2} 64%, #FFF 66%, ${bg3} 68%, ${bg3} 100%)`;

      section.appendChild(square);

      setTimeout(() => {
        square.remove();
      }, 5000);
    },
    clearBackground() {
      const section = document.getElementById("bg");
      if (!section) return;
      while (section.firstChild) {
        section.removeChild(section.lastChild);
      }
    },
    startAnimation() {
      this.intervalId = setInterval(this.createChromino, 300);
      window.addEventListener('resize', this.clearBackground);
    },
    stopAnimation() {
      this.clearBackground();
      clearInterval(this.intervalId);
      window.removeEventListener('resize', this.clearBackground);
    }
  },
  mounted() {
    this.startAnimation();
  },
  beforeUnmount() {
    this.stopAnimation();
  }
};
</script>

<style scoped>
#bg {
    height: 100vh;
    position: absolute;
    z-index: 0;
}

#bg span {
    position: absolute;
    pointer-events: none;
    animation: animate 5s linear infinite;
}

.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

</style>
