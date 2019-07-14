<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar/Navbar';

export default {
  name: 'App',
  components: {Navbar}
}

</script>
<style lang="sass">
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center

html
  font-size: 15px

*
	box-sizing: border-box

body
  margin: 0
  //font-family: 'Open Sans', sans-serif

.container
  width: 100%
  max-width: 1200px
  margin: 0 auto

.row::before, .row::after
  content: ""
  display: table

.row::after
  clear: both

</style>
