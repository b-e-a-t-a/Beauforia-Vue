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
  //font-family: "Open Sans", Helvetica, Arial, sans-serif
  //-webkit-font-smoothing: antialiased
  //-moz-osx-font-smoothing: grayscale
  text-align: center

html
  font-size: 15px

*
	box-sizing: border-box

body
  margin: 0
  font-family: 'Open Sans', sans-serif

.container
  width: 100%
  max-width: 1200px
  margin: 0 auto

.row::before, .row::after
  content: ""
  display: table

.row::after
  clear: both

section > .container
  text-align: center

.col-1
  width: 8.33%
.col-2
  width: 16.66%
.col-3
  width: 25%
.col-4
  width: 33.33%
.col-5
  width: 41.66%
.col-6
  width: 50%
.col-7
  width: 58.33%
.col-8
  width: 66.66%
.col-9
  width: 75%
.col-10
  width: 83.33%
.col-11
  width: 91.66%
.col-12
  width: 100%

[class*="col-"]
	min-height: 1px
	float: left

</style>
