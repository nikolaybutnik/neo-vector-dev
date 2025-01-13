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
        class="main-line"
        d="M89 0 L89 100"
        stroke="#333333"
        stroke-width="23"
      />
      <path
        class="secondary-line-1"
        d="M66 0 L66 100"
        stroke="#333333"
        stroke-width="9"
      />
      <path
        class="secondary-line-2"
        d="M52 0 L52 100"
        stroke="#333333"
        stroke-width="5"
      />
      <!-- <path
        class="secondary-line-3"
        d="M52 0 L52 100"
        stroke="#333333"
        stroke-width="2"
      /> -->

      <mask id="text-mask">
        <path
          class="main-line-mask"
          d="M89 0 L89 100"
          stroke="white"
          stroke-width="23"
        />
        <path
          class="secondary-line-mask-1"
          d="M66 0 L66 100"
          stroke="white"
          stroke-width="9"
        />
        <path
          class="secondary-line-mask-2"
          d="M52 0 L52 100"
          stroke="white"
          stroke-width="5"
        />
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
      { text: "HOME", x: 0, y: 42 },
      { text: "ABOUT", x: 0, y: 50 },
      { text: "PROJECTS", x: 0, y: 58 },
      { text: "CONTACT", x: 0, y: 66 },
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
}
</style>
