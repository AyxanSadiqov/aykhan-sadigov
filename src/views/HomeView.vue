<template>
  <div>
    <div class="container">
      <div class="tiles">
        <div
          v-for="(menu, index) in menus"
          :key="index"
          class="title"
          @click="
            activeMenu == index + 1 ? (activeMenu = -1) : (activeMenu = index + 1)
          "
          :class="activeMenu == index + 1 ? 'active disable' : ''"
        >
          <div @click="openUrl(menu, index)" class="title-content">
            <div class="num">0{{ index + 1 }}.</div>
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
          router: "about"
        },
        {
          name: "Experience",
          router: "experience"
        },
        {
          name: "Work",
          router: "work"
        },
        {
          name: "Contact",
          router: "contact"
        },
      ],
    };
  },
  methods: {
    openUrl(menu, index) {
      if(this.activeMenu == index + 1) {
        setTimeout(() => {
          this.$router.push({ name: menu.router })
        }, 1000)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.active {
  transform: rotateX(-90deg) rotateY(45deg) rotateZ(0deg) translate3d(0, -120px, 0);
  background: #cad5f5 !important;
  cursor: pointer !important;
}
.container {
  -webkit-perspective: 500px;
  perspective: 1000px;
  height: 100vh;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.tiles {
  width: 630px;
  height: 630px;

  position: relative;
  left: 50%;
  top: 0px;
  margin-left: -315px;

  -webkit-transform: rotateZ(0deg);
  transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  // border: 1px solid red;
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
  cursor: default;
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
    color: rgb(255, 0, 0);
  }
  .text {
    font-size: 2rem;
    font-weight: 600;
    color: white;
  }
}
</style>
