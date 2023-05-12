<template>
  <div id="experience">
    <div class="each">
      <div class="work-time">Feb 2022 - Present</div>
      <div class="work">
        <div class="company-name">
          Edusisco Education andInformation Technologies
          <fa :icon="['fa', 'chevron-right']" class="icon" />
        </div>
        <div class="about-work">
          Developing user-friendly interfaces, using vue/vuex,tailwind
          performance improvement and improving existing online school system
          project
        </div>
        <div class="work-skills">
          <div class="skills">Vue</div>
          <div class="skills">HTML</div>
          <div class="skills">CSS</div>
          <div class="skills">JavaScript</div>
        </div>
      </div>
    </div>

    <div class="each">
      <div class="work-time">Sep 2020 - Dec 2021</div>
      <div class="work">
        <div class="company-name">
          ZDC Informatics <fa :icon="['fa', 'chevron-right']" class="icon" />
        </div>
        <div class="about-work">
          Admin panel ofthe online market application Vue usage and
          applications. Online appointment system developments for corporate and
          private companies Construction of a fully online marketweb platform
          with VueCLI
        </div>
        <div class="work-skills">
          <div class="skills">Vue</div>
          <div class="skills">HTML</div>
          <div class="skills">CSS</div>
          <div class="skills">JavaScript</div>
        </div>
      </div>
    </div>

    <div class="each">
      <div class="work-time">June 2017 - Sep 2017</div>
      <div class="work">
        <div class="company-name">
          GRID Technology <fa :icon="['fa', 'chevron-right']" class="icon" />
        </div>
        <div class="about-work">
          Making Turkey map according to province information with HTML5/CSS3
          and JavaScript Python/Django usage and applications Building Inventory
          Tracking System with Django
        </div>
        <div class="work-skills">
          <div class="skills">Vue</div>
          <div class="skills">HTML</div>
          <div class="skills">CSS</div>
          <div class="skills">JavaScript</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#experience {
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  background: black;
  color: white;
  padding: 2rem 0;
}

.each {
  width: 37%;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 0.3rem;
  transition: 0.3s;
  &:hover {
    background: rgba(202, 213, 245, 0.3);
  }
  &:hover .work .company-name {
    color: #cad5f5;
  }
  &:hover .work .company-name .icon {
    color: #cad5f5;
    transform: translateX(10px);
  }
  & .work-time {
    padding-top: 2px;
    font-size: 12px;
    font-weight: 500;
    color: rgb(215, 215, 215);
  }
  & .work {
    padding-left: 8px;
    display: grid;
    gap: 12px;
    grid-column: 2 / 5;
    & .company-name {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 500;
      transition: 0.3s;
      & .icon {
        font-size: 10px;
        color: white;
        transition: 0.3s;
      }
    }
    & .about-work {
      font-size: 14px;
      color: rgb(215, 215, 215);
    }
    & .work-skills {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 4px;
      gap: 8px;
      & .skills {
        font-size: 11px;
        font-weight: 500;
        padding: 5px 5px;
        border: 2px solid #cad5f5;
        border-radius: 0.3rem;
        color: #cad5f5;
      }
    }
  }
}
</style>