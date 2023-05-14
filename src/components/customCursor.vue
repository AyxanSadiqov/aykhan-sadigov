<template>
  <div
    :class="[
      'g-cursor',
      { 'g-cursor_hover': hover },
      { 'g-cursor_hide': hideCursor },
    ]"
  >
    <div :style="cursorCircle" class="g-cursor__circle"></div>
    <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true,
      //
      circleColor: "#fff", // #fff
    };
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`;
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${
        this.yChild - 3
      }px) translateZ(0) translate3d(0, 0, 0);`;
    },
  },
  methods: {
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(() => {
        this.xParent = e.clientX - 9.5; // daha buyugu icin 15 yap
        this.yParent = e.clientY - 9.5; // daha buyugu icin 15 yap
      }, 100);
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener("mouseleave", () => {
      this.hideCursor = true;
    });
    document.addEventListener("mouseenter", () => {
      this.hideCursor = false;
    });
    // mouse about me sayfasindaki star-wars yazisi ustune geldiginde gizlensin
    setTimeout(() => {
      var starwars = document.getElementById("star-wars");
      starwars.addEventListener("mouseenter", () => {
        this.hideCursor = true;
      });
      starwars.addEventListener("mouseleave", () => {
        this.hideCursor = false;
      });
    }, 4000); // about me icindeki "showText" settimeout saniyesinden 1 saniye fazla yapildi

    // setTimeout(() => {
    //   var elements = document.getElementsByClassName("cursorHover");
    //   for (var i = 0; i < elements.length; i++) {
    //     elements[i].addEventListener("mouseenter", () => {
    //       this.circleColor = "#ff0000"
    //     });
    //     elements[i].addEventListener("mouseleave", () => {
    //       this.circleColor = "#fff"
    //     });
    //   }
    // }, 100);
  },
};
</script>

<style lang="scss">
html,
body {
  cursor: none !important;
}
.g-cursor {
  &_hide {
    opacity: 0;
    width: 60px;
    height: 60px;
    transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  }
  &__circle {
    pointer-events: none;
    user-select: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 20px; // daha buyugu icin 30 yap
    height: 20px; // daha buyugu icin 30 yap
    border: 2px solid v-bind(circleColor);
    border-radius: 100%;
    z-index: 5555;
    backface-visibility: hidden;
    transition: opacity 0.6s ease;
  }
  &__point {
    top: 0;
    left: 0;
    position: fixed;
    width: 10px;
    height: 10px;
    pointer-events: none;
    user-select: none;
    border-radius: 100%;
    background: #fff;
    z-index: 55555555;
    backface-visibility: hidden;
    will-change: transform;
  }
  &_hover {
    .g-cursor__circle {
      opacity: 0;
      width: 60px;
      height: 60px;
      transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
    }
  }
}
</style>