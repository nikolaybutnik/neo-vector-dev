<template>
  <div class="container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
    >
      <path
        class="main-line animate-pulse"
        d="M50 -1 L100 -1 L100 100 L85 100"
        stroke="#333333"
        fill="#333333"
      />
      <!-- <path
        class="secondary-line-1"
        d="M66 0 L66 100"
        stroke="#333333"
        stroke-width="9"
      /> -->
      <!-- <path
        class="secondary-line-2"
        d="M52 0 L52 100"
        stroke="#333333"
        stroke-width="5"
      /> -->
      <!-- <path
        class="secondary-line-3"
        d="M52 0 L52 100"
        stroke="#333333"
        stroke-width="2"
      /> -->

      <mask id="text-mask">
        <path
          class="main-line-mask animate-pulse"
          d="M50 -1 L100 -1 L100 100 L85 100"
          fill="white"
        />
        <!-- <path
          class="secondary-line-mask-1"
          d="M66 0 L66 100"
          stroke="white"
          stroke-width="9"
        /> -->
        <!-- <path
          class="secondary-line-mask-2"
          d="M52 0 L52 100"
          stroke="white"
          stroke-width="5"
        /> -->
        <!-- <path
          class="secondary-line-mask-3"
          d="M52 0 L52 100"
          stroke="white"
          stroke-width="2"
        /> -->
      </mask>

      <g class="link-items">
        <LinkItem
          v-for="(item, index) in items"
          :key="index"
          :text="item.text"
          :href="item.href"
          :xCoordinate="item.x"
          :yCoordinate="item.y"
        />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LinkItem from "./components/LinkItem.vue";

export default defineComponent({
  name: "SideNav",
  components: { LinkItem },
  setup() {
    const items = [
      { text: "HOME", href: "#content-1", x: 2, y: 42 },
      { text: "ABOUT", href: "#content-2", x: 2, y: 50 },
      { text: "PROJECTS", href: "#content-3", x: 2, y: 58 },
      { text: "CONTACT", href: "#content-4", x: 2, y: 66 },
    ];

    return { items };
  },
});
</script>

<style scoped lang="scss">
.container {
  width: 250px;
  height: 100%;
  align-self: flex-end;
  display: flex;
  position: relative;

  .animate-pulse {
    animation: pulse 5s infinite ease-in-out;
  }

  @keyframes pulse {
    0% {
      d: path("M50 -1 L100 -1 L100 100 L85 100");
    }
    50% {
      d: path("M40 -1 L100 -1 L100 100 L75 100");
    }
    100% {
      d: path("M50 -1 L100 -1 L100 100 L85 100");
    }
  }
}
</style>
