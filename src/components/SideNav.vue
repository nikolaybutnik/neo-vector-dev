<template>
  <div class="container">
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
        />

        <mask id="text-mask">
          <path
            class="main-line-mask"
            d="M91 0 L91 200"
            stroke="white"
            stroke-width="19"
            fill="none"
          />
        </mask>

        <text
          x="0"
          y="50"
          font-size="10"
          font-family="Arial"
          fill="#333333"
          textLength="90"
          lengthAdjust="spacingAndGlyphs"
        >
          Overlap Test
        </text>
        <text
          x="0"
          y="50"
          font-size="10"
          font-family="Arial"
          fill="#121212"
          textLength="90"
          lengthAdjust="spacingAndGlyphs"
          mask="url(#text-mask)"
        >
          Overlap Test
        </text>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideNav",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.container {
  width: 300px;
  height: 100%;
  align-self: flex-end;
  display: flex;
  position: relative;

  .main-line-mask,
  .main-line {
    animation: move-path 4s infinite ease-in-out;
  }

  @keyframes move-path {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-82%);
    }
    100% {
      transform: translateX(0);
    }
  }
}
</style>
