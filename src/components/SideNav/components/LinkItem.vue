<template>
  <g @click="onNavigate()">
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
  </g>
</template>
  
<script lang="ts">
import { defineComponent, PropType, defineEmits } from "vue";

export default defineComponent({
  name: "LinkItem",
  props: {
    text: {
      required: true,
      type: String as PropType<string>,
    },
    scrollTarget: {
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
  setup(props, context) {
    const onNavigate = () => {
      const target: string = props.scrollTarget;
      context.emit("onNavigate", target);
    };

    return { onNavigate };
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
  transition: fill 0.2s ease-in-out;
}

.bottom-layer {
  text-shadow: 2px 2px 4px rgba(51, 51, 51, 0.8);
  transition: fill 0.2s ease-in-out;
}

g {
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
  