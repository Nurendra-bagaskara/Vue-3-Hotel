<template>
  <!-- <Sidebar v-if="show"/> -->
  <!-- <Navbar /> -->
  <router-view />
  </template>

<script>
// import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  // components: {
  //  Navbar
  // },
  methods:{
    async show (){
      console.log(this.href.substring(this.href.lastIndexOf('/Admin')));
    }
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
  
}
</style>
