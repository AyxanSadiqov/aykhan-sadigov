<template>
  <div id="app">
    <router-view />
    <back-btn />
    <custom-cursor />
  </div>
</template>

<script>
import backBtn from './components/backBtn.vue';
import customCursor from "./components/customCursor.vue";

export default {
  components: {
    backBtn,
    customCursor,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
html,
body {
  margin: 0;
  padding: 0;
  background-color: rgba(31, 40, 49, 1);
  font-family: "Rubik", sans-serif;
  overflow: hidden;
}
#app {
  height: 100%;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #8798b480;
  border-radius: 10px;
}
</style>
