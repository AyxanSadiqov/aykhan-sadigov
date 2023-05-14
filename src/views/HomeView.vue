<template>
  <div id="home">
    <div class="double-click-info">
      Double click to see content
    </div>
    <div class="container">
      <div class="tiles cursorHover">
        <div
          v-for="(menu, index) in menus"
          :key="index"
          class="title"
          @click="openUrl(menu, index)"
          :class="activeMenu == index + 1 ? 'active disable' : ''"
        >
          <div class="title-content">
            <div class="num" :style="`color:${colors[index]}`">0{{ index + 1 }}.</div>
            <div class="text">{{ menu.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: -1,
      menus: [
        {
          name: "About",
          router: "about",
        },
        {
          name: "Skills",
          router: "skills",
        },
        {
          name: "Experience",
          router: "experience",
        },
        {
          name: "Contact",
          router: "contact",
        },
      ],
      colors: ["#1f2831","#1f2831","#1f2831","#1f2831"]
    };
  },
  methods: {
    openUrl(menu, index) {
      if (this.activeMenu == index + 1) {
        this.activeMenu = -1
        setTimeout(() => {
          this.$router.push({ name: menu.router });
        }, 500);
      }else{
        this.activeMenu = index + 1
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
  overflow-y: auto;
}
@media screen and (min-width: 630px) {
  // 630-dan buyukler
  #home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
@media screen and (max-width: 630px) {
  // 630-dan kucukler
  .tiles {
    display: grid;
    place-items: center;
    grid-template-columns: auto !important;
  }
}
@media screen and (max-width: 900px) {
  // 900-dan kucukler
  .active {
    background: #cad5f5 !important;
    // cursor: pointer !important;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  .tiles {
    width: 630px !important;
    display: grid;
    place-items: center;
    grid-template-columns: auto auto;
  }
  .double-click-info{
    display: flex !important;
    justify-content: center;
    padding: 10px 0;
    font-style: italic;
    font-size: 0.8rem;
    color: white;
  }
}
@media screen and (min-width: 900px) {
  // 900-dan buyukler
  .active {
    transform: rotateX(-90deg) rotateY(45deg) rotateZ(0deg)
      translate3d(0, -120px, 0);
    background: #cad5f5 !important;
    // cursor: pointer !important;
  }
  .container {
    -webkit-perspective: 500px;
    perspective: 1000px;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
  .tiles {
    width: 630px;
    height: 630px;

    -webkit-transform: rotateZ(0deg);
    transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    // border: 1px solid red;
  }
  .double-click-info{
    display: none;
  }
}

.title {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  float: left;
  margin: 0 10px 10px 0;
  background: #858dad;
  color: white;
  // cursor: default;
  border-radius: 5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &:not(.disable):hover {
    background: #cad5f5;
    -webkit-transform: translate3d(0, 0, 20px);
    transform: translate3d(0, 0, 20px);
    box-shadow: 30px 30px 10px rgba(0, 0, 0, 0.5);
  }
}

.title-content {
  // border: 1px solid red;
  .num {
    font-size: 4rem;
    font-weight: 600;
  }
  .text {
    font-size: 2rem;
    font-weight: 600;
    color: white;
  }
}
</style>
