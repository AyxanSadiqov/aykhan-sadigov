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
  </div>
</template>

<script>
export default {};
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

.box {
  position: relative;
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
  & div.block span{
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
    background: #ccf381;
    filter: drop-shadow(0 0 50px #ccf381);
  }
  & div.text span{
    position: absolute;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
    cursor: pointer;
    color: #fff;
    font-size: 3.5em;
    font-weight: 800;
    text-transform: uppercase;
    z-index: 10;
    line-height: 1em;
    -webkit-text-stroke: 2px #000;
    transform-style: preserve-3d;
  }
  & div.text span:nth-child(3){
    font-size: 3.2em;
  }
  & div.text span:nth-child(4){
    font-size: 3em;
  }
  & div.text span::before{
    content: attr(data-text);
    position: absolute;
    bottom: 7px;
    transform-origin: bottom;
    transform: rotateX(-90deg);
    color: rgba(0,0,0,0.2);
    -webkit-text-stroke: 0px #000;
    filter: blur(5px);
  }
  & div.text span::after{
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
</style>