<template>
  <div>
    <div class="heart-main">
      <div class="heart">
        <span>Naz</span>
        <span>Babişkosunun minnoşuu <fa :icon="['fa', 'kiss-wink-heart']" class="icon" /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.heart-main{
  transform: rotate(45deg);
}
.heart {
  width: 100px;
  height: 100px;
  background: red;
  margin: 150px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: beat 1s infinite alternate;
}
@keyframes beat {
  0% {
    transform: scale(0.95);
  }
  20% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(0.95);
  }
  60% {
    transform: scale(1);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.95);
  }
}
.heart span:nth-child(1) {
  position: absolute;
  transform: rotate(-45deg);
  color: white;
  margin: -30px 0 0 -30px;
  font-size: 2rem;
  z-index: 100;
}
.heart span:nth-child(2) {
  text-align: center;
  position: absolute;
  transform: rotate(-45deg);
  color: white;
  margin: 150px 0 0 150px;
  font-size: 1rem;
  z-index: 100;
}
.heart span:nth-child(2) .icon {
  color: yellow;
}
.heart::before,
.heart::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: red;
}
.heart::before {
  left: -50px;
}
.heart::after {
  top: -50px;
}
</style>