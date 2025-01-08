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
      <section class="content-2">Test Content 2</section>
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
  // display: grid;
  // grid-template-areas: "stack";

  // & > * {
  //   grid-area: stack;
  // }

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

  .content-1 {
  }

  .content-2 {
    background-color: #2e2e2e;
  }

  .content-3 {
    background-color: #494949;
  }
}
</style>
