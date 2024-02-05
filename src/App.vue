<script>
import AppMain from './components/AppMain.vue';
export default {
  name: 'App Vue',
  components: {
    AppMain
  }
}
</script>

<template>
  <div class="container">
    <AppMain />
    <!-- Main WIP -->
  </div>
</template>

<style>
.container {
  max-width: 1080px;
  height: 100vh;
  background-image: url('./assets/img/pxfuel.jpg');
  background-size: 100% 100%;
}
</style>
