<template>
  <div class="app">
    <div class="parallax-container">
      <section class="content-1">
        <div class="diagonal">
          <div class="wrapper">
            <h1>Test 1 Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos aliquam, totam ab nobis optio necessitatibus ipsum.
              Dicta, obcaecati quibusdam cumque, quos natus, cum atque deserunt
              totam ipsa voluptate id eaque!
            </p>
          </div>
        </div>
      </section>
      <section class="content-2">
        <div class="spikes">
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
      <section class="content-3">Test Content 3</section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
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
  .content-3 {
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-2 {
    background-color: #2e2e2e;
  }

  .content-3 {
    background-color: #494949;
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
      background: #2e2e2e;
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
}
</style>
