<template>
  <div id="about">
    <div class="skills">Skills</div>
    <div class="container">
      <div class="card" @mousemove="cardMouseMove">
        <div v-for="(item, index) in itemsFunc" :key="index" class="title">
          <div class="title-border"></div>
          <div class="title-content">
            <div class="name">{{ item.name }}</div>
            <div class="bar">
              <div class="bar-bg">
                <div
                  class="bar-front"
                  :style="`width:${item.performance || 0}%;`"
                ></div>
              </div>
              <div class="bar-text">{{ item.performance || 0 }} %</div>
            </div>
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
      items: [
        {
          name: "HTML",
          performance: 100,
        },
        {
          name: "JavaScript",
          performance: 20,
        },
        {
          name: "CSS",
          performance: 80,
        },
        {
          name: "Scss/Sass",
          performance: 90,
        },
        {
          name: "VueJS",
          performance: 35,
        },
        {
          name: "NuxtJS",
          performance: 8,
        },
        {
          name: "Tailwind",
          performance: 50,
        },
        {
          name: "Bootstrap",
          performance: 75,
        },
        {
          name: "Ajax",
          performance: 100,
        },
        {
          name: "AngularJS",
          performance: 100,
        },
        {
          name: "ReactJS",
          performance: 100,
        },
        {
          name: "jQuery",
          performance: 100,
        },
        {
          name: "TypeScript",
          performance: 100,
        },
      ],
    };
  },
  computed: {
    itemsFunc() {
      let items = this.items;
      let sortedItem = items.sort((a, b) =>
        a.performance < b.performance ? 1 : -1
      );
      return sortedItem;
    },
  },
  methods: {
    cardMouseMove(e) {
      for (const card of document.getElementsByClassName("title")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#about {
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: black;
  .skills{
    display: flex;
    justify-content: start;
    max-width: 916px;
    width: 100%;
    color: #41a093;
    font-size: 2rem;
    font-weight: 600;
  }
}
.container {
  display: flex;
  justify-content: center;
  background: black;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.card {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 916px;
  position: relative;
}

.card:hover > .title > .title-border {
  opacity: 1;
}

.title {
  max-width: 32%;
  width: 100%;
  height: 150px;
  max-height: 150px;
  position: relative;
  background: black;
  cursor: default;
  border-radius: 5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &:hover::before {
    opacity: 1;
  }
  &::before,
  .title-border {
    border-radius: inherit;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 2;
  }
  &::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    z-index: 3;
  }
  .title-border {
    background: radial-gradient(
      400px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.3),
      transparent 40%
    );
    z-index: 1;
  }
  .title-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(23, 23, 23);
    border-radius: inherit;
    margin: 2px;
    height: calc(100% - 4px);
    width: calc(100% - 4px);
    position: relative;
    z-index: 2;
    color: rgb(179, 179, 179);
    .name {
      font-size: 2rem;
      font-weight: 600;
    }
    .bar {
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      .bar-text {
        padding-top: 0.2rem;
        font-size: 0.6rem;
        width: 100%;
      }
      .bar-bg {
        width: 100%;
        height: 4px;
        background: white;
        border-radius: 5px;
        overflow: hidden;
        .bar-front {
          background: #41a093;
          height: 100%;
          transition: all 0.3s;
        }
      }
    }
  }
}
</style>
