<template>
  <div class="app">
    <list></list>
  </div>
</template>

<script>
import list from "./components/list.vue";

export default {
  name: "App",
  components: { list },
};
</script>

<style>
* {
  --header-color: green;
  --header-text-color: white;
}

</style>