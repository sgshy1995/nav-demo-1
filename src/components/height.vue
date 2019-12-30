<template>
  <section class="height" :class="{active:cansee}" @click="goToTop">
    <img src="../assets/up.png" alt="up" id="up" class="up" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      height: 0,
      cansee: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateHeight);
  },
  watch: {
    height: function() {
      if (this.height >= 400) {
        this.cansee = true;
      } else {
        this.cansee = false;
      }
    }
  },
  methods: {
    updateHeight() {
      this.height = document.documentElement.scrollTop;
    },
    goToTop() {
      const timer = setInterval(() => {
        if (this.height <= 0) {
          clearInterval(timer);
        }
        document.documentElement.scrollTop = this.height - 100
      }, 10);
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.updateHeight);
  }
};
</script>

<style lang="scss">
section.height {
  position: fixed;
  border: 1px solid #515151;
  bottom: 1%;
  right: 2%;
  padding: 10px 10px 5px 10px;
  border-radius: 5px;
  z-index: 4;
  transform: translateX(200%);
  transition: all 0.5s;
}
section.height.active {
  transform: translateX(0);
}
section.height img.up {
  width: 20px;
}
</style>