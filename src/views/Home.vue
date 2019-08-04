<template>
  <div class="Views">
    <About />
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
<style lang="sass">
@import './Views'
</style>
