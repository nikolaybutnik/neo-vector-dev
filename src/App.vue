<template>
  <div class="app">
    <button @click="handleClick('title')">Order By Title</button>
    <button @click="handleClick('location')">Order By Location</button>
    <button @click="handleClick('salary')">Order By Salary</button>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Job from "./types/Job";
import JobList from "./components/JobList.vue";
import OrderTerm from "./types/OrderTerm";

export default defineComponent({
  name: "App",
  components: { JobList },
  setup() {
    const jobs = ref<Job[]>([
      { title: "Farm Worker", location: "Lon Lon Ranch", salary: 30000, id: 1 },
      { title: "Quarryman", location: "Death Mountain", salary: 40000, id: 2 },
      {
        title: "Flute Player",
        location: "The Lost Woods",
        salary: 35000,
        id: 3,
      },
      { title: "Fisherman", location: "Lake hylia", salary: 21000, id: 4 },
      {
        title: "Prison Guard",
        location: "Gerudo Valley",
        salary: 32000,
        id: 5,
      },
    ]);
    const order = ref<OrderTerm>("title");

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    return { jobs, handleClick, order };
  },
  methods: {},
});
</script>

<style lang='scss'>
</style>
