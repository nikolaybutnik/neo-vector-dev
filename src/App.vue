<template>
  <div class="app">
    <div class="parallax-container">
      <section ref="homeSection" class="home-section content-section">
        <SideNav @onNavigate="handleScroll" />
      </section>
      <section ref="aboutSection" class="about-section content-section">
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
      <section ref="projectsSection" class="projects-section content-section">
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
      <section ref="contactSection" class="contact-section content-section">
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
import { defineComponent, ref } from "vue";
import SideNav from "./components/SideNav/SideNav.vue";

export default defineComponent({
  name: "App",
  components: { SideNav },
  setup() {
    const homeSection = ref<HTMLElement | null>(null);
    const aboutSection = ref<HTMLElement | null>(null);
    const projectsSection = ref<HTMLElement | null>(null);
    const contactSection = ref<HTMLElement | null>(null);
    const sections = [
      homeSection,
      aboutSection,
      projectsSection,
      contactSection,
    ];
    // const observer = ref<IntersectionObserver | null>(null);

    const handleScroll = (scrolltargetClass: string) => {
      const [targetSection] = sections.filter((section) =>
        section?.value?.classList?.contains(scrolltargetClass)
      );
      targetSection?.value?.scrollIntoView({ behavior: "smooth" });
    };

    return {
      homeSection,
      aboutSection,
      projectsSection,
      contactSection,
      handleScroll,
    };
  },
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

  .content-section {
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
}
</style>