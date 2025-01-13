<template>
  <div class="container">
    <div class="navigation">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        width="250px"
        height="500px"
        fill="white"
      >
        <rect ref="blue" x="25" y="25" width="50" height="50" fill="blue" />
        <rect ref="red" x="0" y="0" width="50" height="50" fill="red" />
      </svg>
    </div>

    <div class="graphics">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
      >
        <path
          class="main-line"
          d="M91 0 L91 100"
          stroke="#333333"
          stroke-width="19"
          fill="none"
        />
        <path
          class="secondary-line"
          d="M77 0 L77 100"
          stroke="#333333"
          stroke-width="4"
          fill="none"
        />
        <path
          class="secondary-line"
          d="M71 0 L71 100"
          stroke="#333333"
          stroke-width="3"
          fill="none"
        />
        <path
          class="secondary-line"
          d="M66 0 L66 100"
          stroke="#333333"
          stroke-width="2"
          fill="none"
        />
        <path
          class="secondary-line"
          d="M62 0 L62 100"
          stroke="#333333"
          stroke-width="1"
          fill="none"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "SideNav",
  setup() {
    const blue = ref<SVGRectElement | null>(null);
    const red = ref<SVGRectElement | null>(null);

    onMounted(() => {});

    return { blue, red };
  },
});
</script>

<style scoped lang="scss">
.container {
  width: 500px;
  height: 100%;
  align-self: flex-end;
  display: flex;
  position: relative;
  //   isolation: isolate;

  .navigation {
    position: absolute;
    background-color: grey;
    height: 500px;
    width: 500px;
    right: 0;
    top: 25%;
  }

  .graphics {
    z-index: 1;
  }
}
</style>
