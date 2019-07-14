<template>
  <div class="Views">
    <About msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About/About.vue";

export default {
  name: "home",
  components: {
    About
  }
};
</script>
<style lang="sass" scoped>
@import './Views'
</style>
