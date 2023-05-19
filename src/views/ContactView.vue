<template>
  <div id="contact">
    <ul>
      <!-- <li style="--i:-3;--clr:#1877f2;" data-text="Facebook"><a href="#"><span><fa :icon="['fab', 'facebook']" /></span>Facebook</a></li>
      <li style="--i:-2;--clr:#24d366;" data-text="Whatsapp"><a href="#"><span><fa :icon="['fab', 'whatsapp']" /></span>Whatsapp</a></li>
      <li style="--i:-1;--clr:#1da1f2;" data-text="Twitter"><a href="#"><span><fa :icon="['fab', 'twitter']" /></span>Twitter</a></li>
      <li style="--i:0;--clr:#c32aa3;" data-text="Instagram"><a href="#"><span><fa :icon="['fab', 'instagram']" /></span>Instagram</a></li>
      <li style="--i:1;--clr:#ff0000;" data-text="Youtube"><a href="#"><span><fa :icon="['fab', 'youtube']" /></span>Youtube</a></li>
      <li style="--i:2;--clr:#0a66c2;" data-text="Linkedin"><a href="https://www.linkedin.com/in/aykhan-sadiqov/" target="_blank"><span><fa :icon="['fab', 'linkedin']" /></span>Linkedin</a></li>
      <li style="--i:3;--clr:#4078c0;" data-text="GitHub"><a href="https://www.linkedin.com/in/aykhan-sadiqov/" target="_blank"><span><fa :icon="['fab', 'github']" /></span>GitHub</a></li> -->

      <li style="--i:-2;--clr:#4078c0;" data-text="GitHub"><a href="https://github.com/AyxanSadiqov" target="_blank"><span><fa :icon="['fab', 'github']" /></span>GitHub</a></li>
      <li style="--i:-1;--clr:#0a66c2;" data-text="Linkedin"><a href="https://www.linkedin.com/in/aykhan-sadiqov/" target="_blank"><span><fa :icon="['fab', 'linkedin']" /></span>Linkedin</a></li>
      <li style="--i:0;--clr:#c32aa3;" data-text="Instagram"><a href="#"><span><fa :icon="['fab', 'instagram']" /></span>Instagram</a></li>
      <li style="--i:1;--clr:#1da1f2;" data-text="Twitter"><a href="#"><span><fa :icon="['fab', 'twitter']" /></span>Twitter</a></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#contact{
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(31, 40, 49, 1);
  color: white;
}

ul{
  position: relative;
  left: -45px;
  transform: skewY(-25deg);
  & li{
    position: absolute;
    top: 0;
    transform: translate(calc(var(--i) * 40px), calc(var(--i) * 40px));
    list-style: none;
    width: 100px;
    padding: 15px;
    background: #383838;
    transition: 0.5s;
    &:hover{
      top: -49px;
      background: var(--clr);
    }
    &::before{
      content: "";
      position: absolute;
      top: 0;
      left: -40px;
      width: 40px;
      height: 100%;
      background: #2f2f30;
      transform-origin: right;
      transform: skewY(45deg);
      transition: 0.5s;
    }
    &:hover::before{
      background: var(--clr);
      filter: brightness(0.8);
    }
    &::after{
      content: attr(data-text);
      position: absolute;
      top: -39px;
      left: 0;
      width: 100%;
      height: 40px;
      background: #3e3e3e;
      transform-origin: bottom;
      transform: skewX(45deg);
      box-shadow: -120px 120px 20px rgba(0,0,0,0.25);
      transition: 0.5s;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      left: 0.02em;
      padding-left: 15px;
      box-sizing: border-box;
      color: var(--clr);
    }
    &:hover::after{
      filter: brightness(0.9);
      background: var(--clr);
      color: #fff;
      box-shadow: -170px 170px 20px rgba(0,0,0,0.25);
    }
    & a{
      text-decoration: none;
      color: transparent;
      display: block;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: 0.5s;
      cursor: none;
      & span{
        position: absolute;
        top: 0;
        left: -40px;
        width: 40px;
        text-align: center;
        height: 100%;
        color: var(--clr);
        transform-origin: right;
        transform: skewY(45deg);
        transition: 0.5s;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25em;
      }
    }
    &:hover a{
      color: #fff;
    }
    &:hover a span{
      color: #fff;
    }
  }
}
</style>