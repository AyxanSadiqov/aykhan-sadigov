<template>
  <div id="experience">
    <div class="all">
      <div class="each">
        <div class="work-time">Feb 2022 - Present</div>
        <div class="work">
          <div class="company-name">
            Edusisco Education and Information Technologies
            <fa :icon="['fa', 'chevron-right']" class="icon" />
          </div>
          <div class="status">Frontend Developer</div>
          <div class="about-work">
            Developments and maintance were made in an online platform project
            where teachers create different types of tests and present them to
            their students for all programs in high school, including
            mathematics, science, social and Turkish.
          </div>
          <div class="projects">
            <a href="https://www.edusisco.net/" target="_blank"
              ><fa :icon="['fa', 'link']" class="icon" /> Edusisco</a
            >
          </div>
          <div class="work-skills">
            <div class="skills">Vue.js</div>
            <div class="skills">JavaScript</div>
            <div class="skills">Tailwind</div>
          </div>
        </div>
      </div>

      <div class="each">
        <div class="work-time">Sep 2020 - Jan 2022</div>
        <div class="work">
          <div class="company-name">
            ZDC Informatics <fa :icon="['fa', 'chevron-right']" class="icon" />
          </div>
          <div class="status">Full Stack Developer</div>
          <div class="about-work">
            All frontend-development and maintenance of the project, admin panel
            and personal site of the project, where a chain store can sell
            online in a district in Turkey, was done by me. It has also been
            involved or developed in many projects undertaken by the company.
          </div>
          <div class="projects">
            <a href="https://www.gunkaysanalmarket.com/" target="_blank"
              ><fa :icon="['fa', 'link']" class="icon" /> Gunkay</a
            >
          </div>
          <div class="work-skills">
            <div class="skills">JQuery</div>
            <div class="skills">Vanilla JS</div>
            <div class="skills">Vue.js</div>
            <div class="skills">HTML</div>
            <div class="skills">CSS</div>
            <div class="skills">SCSS</div>
            <div class="skills">PHP</div>
          </div>
        </div>
      </div>

      <div class="each">
        <div class="work-time">June 2017 - Sep 2017</div>
        <div class="work">
          <div class="company-name">
            GRID Technology <fa :icon="['fa', 'chevron-right']" class="icon" />
          </div>
          <div class="status">Intern</div>
          <div class="about-work">
            Making Turkey map according to province information and applications
            Building Inventory Tracking System.
          </div>
          <div class="work-skills">
            <div class="skills">Python</div>
            <div class="skills">Django</div>
            <div class="skills">HTML</div>
            <div class="skills">CSS</div>
            <div class="skills">JavaScript</div>
          </div>
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
  background: #0f0f0f;
  color: white;
  padding: 2rem 0;
}
@media screen and (max-width: 1200px) {
  .all {
    width: 60% !important;
  }
}
@media screen and (max-width: 800px) {
  .all {
    width: 100% !important;
  }
}
@media screen and (max-width: 350px) {
  .work-time {
    position: absolute;
    top: 4.5rem;
    left: -3rem;
    transform: rotate(-90deg);
  }
  .each {
    grid-template-columns: repeat(8, 1fr) !important;
  }
  .work {
    grid-column: 1 / 8 !important;
  }
}
.all {
  width: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 5rem;
  &:hover .each {
    opacity: 0.4;
  }
}

.each {
  position: relative;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 0.3rem;
  transition: 0.3s;
  margin: 0 5px;
  &:hover {
    background: rgba(202, 213, 245, 0.2);
    opacity: 1 !important;
  }
  &:hover .work .company-name {
    color: #cad5f5;
  }
  &:hover .work .about-work {
    color: white;
  }
  &:hover .work .company-name .icon {
    color: #cad5f5;
    transform: translateX(10px);
  }
  & .work-time {
    padding-top: 2px;
    font-size: 12px;
    font-weight: 500;
    color: #8798b4;
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
    & .status {
      margin-top: -10px;
      font-size: 12px;
      color: #8798b4;
    }
    & .about-work {
      font-size: 14px;
      color: #8798b4;
    }
    & .projects {
      &:hover a {
        color: #cad5f5;
      }
      & .icon {
        font-size: 10px;
      }
      & a {
        text-decoration: none;
        color: white;
        cursor: none;
        font-size: 14px;
        font-weight: 500;
        color: rgb(240, 240, 240);
        transition: 0.3s;
      }
    }
    & .work-skills {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
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