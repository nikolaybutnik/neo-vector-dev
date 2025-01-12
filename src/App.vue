<template>
  <div class="app">
    <div class="parallax-container">
      <section class="content-1">
        <div class="lines">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
          >
            <path
              class="line"
              d="M85 0 L85 100"
              stroke="#333333"
              stroke-width="10"
              fill="none"
            />
            <path
              class="line"
              d="M65 0 L65 85"
              stroke="#333333"
              stroke-width="10"
              fill="none"
            />
            <path
              class="line"
              d="M45 0 L45 70"
              stroke="#333333"
              stroke-width="10"
              fill="none"
            />
          </svg>
        </div>
      </section>
      <section class="content-2">
        <div class="diagonal">
          <div class="wrapper">
            <h1>Test 2 Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos aliquam, totam ab nobis optio necessitatibus ipsum.
              Dicta, obcaecati quibusdam cumque, quos natus, cum atque deserunt
              totam ipsa voluptate id eaque!
            </p>
          </div>
        </div>
      </section>
      <section class="content-3">
        <div class="spikes">
          <div class="wrapper">
            <h1>Test 3 Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos aliquam, totam ab nobis optio necessitatibus ipsum.
              Dicta, obcaecati quibusdam cumque, quos natus, cum atque deserunt
              totam ipsa voluptate id eaque!
            </p>
          </div>
        </div>
      </section>
      <section class="content-4">
        <div class="wavy">
          <div class="wrapper">
            <h1>Test 4 Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos aliquam, totam ab nobis optio necessitatibus ipsum.
              Dicta, obcaecati quibusdam cumque, quos natus, cum atque deserunt
              totam ipsa voluptate id eaque!
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const observer = ref<IntersectionObserver | null>(null);

    const animateLines = (sectionIndex: number) => {
      const lines = document.querySelectorAll(".line");
      lines.forEach((line, index) => {
        const path = line as SVGPathElement;
        const length = path.getTotalLength();
        const offset = length * sectionIndex * 0.5;
        (line as SVGPathElement).style.transition =
          "stroke-dashoffset 1s ease-in-out";
        (line as SVGPathElement).style.strokeDasharray = `${length}`;
        (line as SVGPathElement).style.strokeDashoffset = `${offset}`;
      });
    };

    onMounted(() => {
      const sections = document.querySelectorAll(".parallax-container section");
      observer.value = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionIndex = Array.from(sections).indexOf(
                entry.target as HTMLElement
              );
              animateLines(sectionIndex);
            }
          });
        },
        { threshold: 0.5 }
      );

      sections.forEach((section: Element) => observer.value?.observe(section));
    });

    return {};
  },
  methods: {},
});
</script>

<style lang='scss'>
.diagonal {
  $skew-angle: -5deg;
  $background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);

  padding: 7rem 3rem;
  position: relative;
  isolation: isolate;

  &::after {
    content: "";
    background: $background;
    position: absolute;
    inset: 0;
    transform: skewY($skew-angle);
    z-index: -1;
  }
}

.parallax-container {
  height: 100vh;
  background-color: $background-color;
  color: $text-color;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  .content-1,
  .content-2,
  .content-3,
  .content-4 {
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .spikes {
    position: relative;
    background: linear-gradient(to right, #fdc830, #f37335);
    color: black;
    padding: 7rem 3rem;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 50px;
      background: black;
      -webkit-mask-image: url("./assets/triangle.svg");
      -webkit-mask-size: 20px 50px;
      // to avoid having to use mask-repeat,mask-size height needs to be same as container height
      // -webkit-mask-repeat: repeat-x;

      // For Firefox and Safari
      mask-image: url("./assets/triangle.svg");
      mask-size: 20px 50px;
      // mask-repeat: repeat-x;
    }

    &::before {
      top: 0;
      left: 0;
    }

    &::after {
      bottom: 0;
      left: 0;
      transform: rotate(0.5turn);
    }
  }

  .wavy {
    background: linear-gradient(to right, #00f260, #0575e6);
    color: black;
    padding: 7rem 3rem;

    --mask: radial-gradient(29px at 50% 41px, #000 99%, #0000 101%)
        calc(50% - 40px) 0/80px 51% repeat-x,
      radial-gradient(29px at 50% -21px, #0000 99%, #000 101%) 50% 20px/80px
        calc(51% - 20px) repeat-x,
      radial-gradient(29px at 50% calc(100% - 41px), #000 99%, #0000 101%)
        calc(50% - 40px) 100%/80px 51% repeat-x,
      radial-gradient(29px at 50% calc(100% + 21px), #0000 99%, #000 101%) 50%
        calc(100% - 20px) / 80px calc(51% - 20px) repeat-x;
    -webkit-mask: var(--mask);
    mask: var(--mask);
  }

  .lines {
    width: 300px;
    height: 100%;
    align-self: flex-end;

    .line {
      stroke-dasharray: 300;
      stroke-dashoffset: 300;
      transition: stroke-dashoffset 1s ease-in-out, stroke-width 1s ease-in-out;
    }
  }
}
</style>