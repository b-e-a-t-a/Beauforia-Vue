<template>
  <transition name="Loader__fade">
    <div class="Loader">
      <div class="Loader__wrapper">
        <grid-loader
          class="Loader__icon"
          :color="color"
          :size="size"
        >
        </grid-loader>
      </div>
    </div>
  </transition>
</template>

<script>
import GridLoader from 'vue-spinner/src/GridLoader.vue';

export default {
  name: "Loader",
  components: {
    GridLoader
  },
  data() {
    return {
      color: "#58c5c2",
      size: "20px"
    }
  }
}
</script>

<style lang="sass">
@import './Loader'
</style>