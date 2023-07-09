<template>
  <div id="app">
  
    <chat1 />
  </div>
</template>

<script>

import Chat1 from './components/Chat1Demo.vue'
export default {
  name: 'App',
  components: {
   
    Chat1
    
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
  margin-top: 60px;
}
</style>
