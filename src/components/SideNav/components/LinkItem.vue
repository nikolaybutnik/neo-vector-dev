<template>
  <a :href="href">
    <text
      class="top-layer nav-link-text"
      :x="xCoordinate"
      :y="yCoordinate"
      font-size="6"
      fill="#333333"
      textLength="85"
      lengthAdjust="spacingAndGlyphs"
    >
      {{ text }}
    </text>

    <text
      class="bottom-layer nav-link-text"
      :x="xCoordinate"
      :y="yCoordinate"
      font-size="6"
      fill="#121212"
      textLength="85"
      lengthAdjust="spacingAndGlyphs"
      mask="url(#text-mask)"
    >
      {{ text }}
    </text>
  </a>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "LinkItem",
  props: {
    text: {
      required: true,
      type: String as PropType<string>,
    },
    href: {
      required: true,
      type: String as PropType<string>,
    },
    xCoordinate: {
      required: true,
      type: Number as PropType<number>,
    },
    yCoordinate: {
      required: true,
      type: Number as PropType<number>,
    },
  },
});
</script>
  
<style scoped lang="scss">
text {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  cursor: pointer;
}

.top-layer {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.bottom-layer {
  text-shadow: 2px 2px 4px rgba(51, 51, 51, 0.8);
}

a {
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(-1.5px);

    & > .top-layer {
      fill: #717171;
    }
    & > .bottom-layer {
      fill: white;
    }
  }
}
</style>
  