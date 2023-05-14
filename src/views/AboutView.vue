<template>
  <div id="about">
    <div class="box">
      <div class="block">
        <span style="--i: 0"></span>
        <span style="--i: 1"></span>
        <span style="--i: 2"></span>
        <span style="--i: 3"></span>
      </div>
      <div class="text">
        <span style="--i: 0" data-text="Aykhan">Aykhan</span>
        <span style="--i: 1" data-text="Sadigov">Sadİgov</span>
        <span style="--i: 2" data-text="Frontend">Frontend</span>
        <span style="--i: 3" data-text="Developer">Developer</span>
      </div>
    </div>
    <transition>
      <div v-show="showText" class="about-me">
        After I entered the computer engineering department in 2015, I met
        programming and I did many projects to improve myself during the
        academic year. An online blood donation system that I have developed as
        a graduation project and with enthusiasm. I've been working with django
        for a few years, but then I found that my comfort zone was when
        developing front-end. Fast forward to the present and I had the
        privilege of developing software for a <span>start-up</span> and a
        <span>midsize company</span>. <br /><br />
        My main focus these days is developing the new product we started at
        <a href="https://www.edusisco.net/" target="_blank">Edusisco</a>. In my
        free time I make an effort to read new articles about the technologies I
        deal with. And I'm a big
        <span id="star-wars" @click="playSound()">star wars</span>
        fan. I've been following the newly released movies and series.
        <br /><br />
        When I'm not at the computer, I usually play table tennis and hang out
        with my friends.
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showText: false,
      changePosition: "40%",
      replayTime: 6
    };
  },
  methods: {
    playSound() {
      if(Number(this.replayTime) <= 0) this.replayTime = 6
      if(this.replayTime < 6) return
      const sound = new Audio( require('@/assets/audio/darth-vader.mp3') )
      sound.play()
      let timer = setInterval(() => {
        if(this.replayTime <= 0.1) {
          clearInterval(timer)
        }
        this.replayTime = (this.replayTime - 0.1).toFixed(1)
      }, 100);
    }
  },
  mounted() {
    setTimeout(() => {
      this.changePosition = "6rem";
    }, 1000);
    setTimeout(() => {
      this.showText = true;
      // mouse about me sayfasindaki star-wars yazisi ustune geldiginde gizlensin
      var starwars = document.getElementById("star-wars");
      starwars.addEventListener("mouseenter", () => {
        this.$store.commit("hideCursor", true);
      });
      starwars.addEventListener("mouseleave", () => {
        this.$store.commit("hideCursor", false);
      });
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
#about {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: black;
}
@media screen and (max-width: 500px) {
  .box {
    & div.block span {
      left: calc(50% - 65px) !important;
      width: 130px !important; //
      height: 65px !important;
      transform: rotateY(calc(90deg * var(--i))) translateZ(65px) !important; //
    }
    & div.text span::after {
      width: 270px !important;
    }
    & div.text span {
      transform: rotateY(calc(90deg * var(--i))) translateZ(105px) !important;
      font-size: 2em !important;
    }
    & div.text span:nth-child(3) {
      font-size: 1.7em !important;
    }
    & div.text span:nth-child(4) {
      font-size: 1.5em !important;
    }
  }
}

.box {
  position: absolute;
  top: v-bind(changePosition);
  transition: top 2s linear;
  height: 200px;
  transform-style: preserve-3d;
  animation: animate 16s linear infinite;
  @keyframes animate {
    0% {
      transform: rotateX(-20deg) rotateY(360deg);
    }
    100% {
      transform: rotateX(-20deg) rotateY(0deg);
    }
  }
  & div {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
  }
  & div.block span {
    position: absolute;
    left: calc(50% - 100px);
    width: 200px; //
    height: 100px;
    background: #1f2831;
    transform: rotateY(calc(90deg * var(--i))) translateZ(100px); //
    transition: 0.5s;
  }
  &:hover div.block span,
  &:hover div.text span::after {
    background: #cad5f5;
    filter: drop-shadow(0 0 50px #cad5f5);
  }
  & div.text span {
    position: absolute;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
    // cursor: pointer;
    color: #fff;
    font-size: 3.5em;
    font-weight: 800;
    text-transform: uppercase;
    z-index: 10;
    line-height: 1em;
    -webkit-text-stroke: 2px #000;
    transform-style: preserve-3d;
  }
  & div.text span:nth-child(3) {
    font-size: 3.2em;
  }
  & div.text span:nth-child(4) {
    font-size: 3em;
  }
  & div.text span::before {
    content: attr(data-text);
    position: absolute;
    bottom: 7px;
    transform-origin: bottom;
    transform: rotateX(-90deg);
    color: rgba(0, 0, 0, 0.2);
    -webkit-text-stroke: 0px #000;
    filter: blur(5px);
  }
  & div.text span::after {
    content: "";
    position: absolute;
    top: 100px;
    width: 360px;
    height: 60px;
    background: #1f2831;
    transform: rotateX(-90deg);
    transition: 0.5s;
  }
}

.about-me {
  width: calc(100% - 1.5rem);
  max-width: 500px;
  max-height: 100%;
  overflow-y: auto;
  position: fixed;
  top: 330px;
  bottom: 0;
  color: #8798b4;
  & span {
    color: white;
  }
  & a {
    color: white;
    text-decoration: none;
    cursor: none;
  }
  & #star-wars {
    color: white;
    position: relative;
    padding: 5px;
    margin: -5px;
    &:hover {
      cursor: url("~@/assets/images/darth-vader.gif") 0 35, auto;
      color: #ebd71c;
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>