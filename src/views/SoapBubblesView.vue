<template>
  <div class="soapBubblesDiv">
    <h2>Soap - Bubbles</h2>
    <img src="@/assets/images/soap.png" alt="Soap Image" class="soap">
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("mousemove", this.mouseMove)
  },
  beforeUnmount() {
    document.removeEventListener("mousemove", this.mouseMove)
  },
  methods: {
    mouseMove(e) {
      let soap = document.querySelector(".soap")
      soap.style.left = (e.pageX) + "px"
      soap.style.top = (e.pageY) + "px"
      //
      let soapBubblesDiv = document.querySelector(".soapBubblesDiv")
      let i = document.createElement("i")
      i.style.left = (e.pageX) + "px"
      i.style.top = (e.pageY) + "px"
      i.style.scale = `${Math.random() * 2 + 1}`
      i.style.setProperty("--x", getRandomPosition())
      i.style.setProperty("--y", getRandomPosition())

      function getRandomPosition() {
        return `${Math.random() * 400 - 200}px`
      }
      
      soapBubblesDiv.appendChild(i)

      setTimeout(() => {
        soapBubblesDiv.removeChild(i)
      }, 2000);
    }
  }
};
</script>

<style lang="scss">
.soapBubblesDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
  h2{
    font-size: 10em;
    font-size: 10vw;
    color: rgba(0,0,0,0.25);
  }
  .soap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0) rotate(335deg);
    z-index: 2;
    pointer-events: none;
    transition: 0.1s;
  }
  &:hover .soap {
    transform: translate(-50%, -50%) scale(0.5) rotate(335deg);
  }
  i {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-radius: 50%;
    z-index: 1;
    pointer-events: none;
    box-shadow: inset 0 0 10px rgba(255,255,255,0.5);
    animation: soapBubbleAnimate 2s ease-in forwards;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: radial-gradient(#fff, transparent);
      transform: scale(0.25) translate(-70%, -70%);
    }
  }
}

@keyframes soapBubbleAnimate
{
  0%
  {
    transform: translate(0,0);
  }
  100%
  {
    transform: translate(var(--x), var(--y));
  }
}
</style>