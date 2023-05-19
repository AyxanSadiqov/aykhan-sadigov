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
          performance: 50,
        },
        {
          name: "JavaScript",
          performance: 50,
        },
        {
          name: "CSS",
          performance: 50,
        },
        {
          name: "Scss/Sass",
          performance: 50,
        },
        {
          name: "VueJS",
          performance: 50,
        },
        {
          name: "NuxtJS",
          performance: 50,
        },
        {
          name: "Tailwind",
          performance: 50,
        },
        {
          name: "Bootstrap",
          performance: 50,
        },
        {
          name: "Ajax",
          performance: 50,
        },
        {
          name: "AngularJS",
          performance: 50,
        },
        {
          name: "ReactJS",
          performance: 50,
        },
        {
          name: "jQuery",
          performance: 50,
        },
        {
          name: "TypeScript",
          performance: 50,
        },
        {
          name: "ES5/ES6",
          performance: 50,
        },
        {
          name: "REST",
          performance: 50,
        },
        {
          name: "JSON",
          performance: 50,
        },
        {
          name: "Git",
          performance: 50,
        },
        {
          name: "npm",
          performance: 50,
        },
      ],
    };
  },
  mounted() {
    document.addEventListener("click", function (evt) {
      if (evt.detail === 3) {
        var element = document.getElementsByClassName("title-content");
        for (let i = 0; i < element.length; i++) {
          element[i].classList.contains("blendMode")
            ? element[i].classList.remove("blendMode")
            : element[i].classList.add("blendMode");
        }
      }
    });
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
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #0f0f0f;
  .skills {
    display: flex;
    justify-content: flex-start;
    max-width: 916px;
    width: 100%;
    color: #cad5f5;
    font-size: 2rem;
    font-weight: 600;
    padding: 1.5rem 0 0 2rem;
  }
}
.container {
  display: flex;
  justify-content: center;
  background: #0f0f0f;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

@media screen and (max-width: 390px) {
  // 390-dan kucukler
  .card {
    grid-template-columns: auto !important;
  }
}
@media screen and (max-width: 630px) {
  // 630-dan kucukler
  .card {
    display: grid !important;
    place-items: center !important;
    grid-template-columns: auto auto;
    width: 98vw !important;
  }
  .title {
    max-width: 100% !important;
    width: 100% !important;
  }
}
.card {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 916px;
  position: relative;
  // border: 5px solid red;
}

.card:hover > .title > .title-border {
  opacity: 1;
}

.title {
  max-width: 32%;
  width: 100%;
  max-height: 150px;
  height: 150px;
  position: relative;
  background: #0f0f0f;
  // cursor: default;
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
      rgba(255, 255, 255, 0),
      /* opacity 0.06 idi */ transparent 40%
    );
    z-index: 3;
  }
  .title-border {
    background: radial-gradient(
      400px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.4),
      /* opacity 0.3 idi */ transparent 40%
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
        font-weight: 600;
        text-align: center;
        width: 100%;
      }
      .bar-bg {
        width: 100%;
        height: 4px;
        background: #0f0f0f;
        border-radius: 5px;
        overflow: hidden;
        .bar-front {
          background: #cad5f5;
          height: 100%;
          transition: all 0.3s;
        }
      }
    }
  }
}

.blendMode {
  mix-blend-mode: darken;
}
</style>
