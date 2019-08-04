<template>
  <div id="app">
    <navbar />
    <router-view />
    <footer>
		  <button class="back-to-top" @click="topFunction" title="Go to top"><i class="fas fa-chevron-up"></i></button>
	  </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar/Navbar';
import i18n from '@/i18n/i18n';

export default {
  name: 'App',
  components: { Navbar },
  methods: {
    topFunction() {
      window.document.body.scrollTop = 0;
      window.document.documentElement.scrollTop = 0;
    }
  }
}

</script>
<style lang="sass">
#app
  //-webkit-font-smoothing: antialiased
  //-moz-osx-font-smoothing: grayscale

.back-to-top
  position: fixed
  bottom: 20px
  right: 20px
  z-index: 99
  font-size: 1.5em
  border: none
  outline: none
  cursor: pointer
  padding: 5px 10px
  background: $color-navbar
  &:hover
    background-color: $color-turkois
    color: $color-white
</style>
