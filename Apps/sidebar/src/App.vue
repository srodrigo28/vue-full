<template>
  <div id="app">
    <NavBar />
    <SideBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
export default {

  name: 'App',
  components: {
      NavBar, SideBar
  }
}
</script>

<style>

</style>
