<template>
  <transition name="bounce">
    <div v-if="value" class="main-modal">
      <div class="modal">
        <p>Hi! I'm Aykhan, a <span>frontend developer</span>.</p>
        <p>
          I can create a <span>flexible</span>, <span>responsive</span> site
          that looks good on all screen sizes and <span>fast load-times</span>.
        </p>
        <p>You can <span @click="$router.push({ name: 'contact' });">contact</span> me to have a website built.</p>
        <button @click="$emit('close', false)">X</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.main-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  .modal {
    position: relative;
    box-shadow: 10px 10px #858dad;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 15px;
    max-width: 450px;
    width: auto;
    height: auto;
    background-color: #cad5f5;
    color: #1f2831;
    border-radius: 5px;
    overflow: hidden;
    overflow-y: auto;
    p {
      margin-top: -5px;
      font-size: 20px;
      span {
        font-weight: 600;
      }
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
      background-color: #cad5f5;
      padding: 10px;
      border: 1px solid transparent;
      font-weight: 600;
      border-bottom-left-radius: 5px;
      &:hover {
        background-color: #858dad;
      }
    }
  }
}
</style>