<template>
  <g>
    <text
      class="nav-link-text"
      :x="xCoordinate"
      :y="yCoordinate"
      font-size="6"
      fill="#333333"
      textLength="96"
      lengthAdjust="spacingAndGlyphs"
    >
      {{ text }}
    </text>

    <text
      class="nav-link-text"
      :x="xCoordinate"
      :y="yCoordinate"
      font-size="6"
      fill="#121212"
      textLength="96"
      lengthAdjust="spacingAndGlyphs"
      mask="url(#text-mask)"
    >
      {{ text }}
    </text>
  </g>
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
</style>
  