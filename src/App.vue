<template>
  <div id="app">
    <ps-header></ps-header>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
    <ps-footer></ps-footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PsHeader from './components/PsHeader.vue'
import PsFooter from './components/PsFooter.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    PsHeader,
    PsFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
