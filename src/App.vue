<template>
  <div class="app">
    <p>{{ name }} - {{ age }}</p>
    <button @click="changeName('Zelda')">Change Name</button>
    <button @click="changeAge(19)">Change Age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Character {
  name: string;
  age: number;
}

export default defineComponent({
  name: "App",
  components: {},
  data(): Character {
    return { name: "Link", age: 25 };
  },
  methods: {
    changeName(name: string): void {
      this.name = name;
    },
    changeAge(age: number): void {
      this.age = age;
    },
  },
});
</script>

<style lang='scss'>
</style>
