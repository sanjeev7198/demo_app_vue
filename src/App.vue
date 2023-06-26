<template>
  <NavBar/>
  <RouterView/>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

body {
    background-size: cover;
    background-image: url(https://i.pinimg.com/736x/4a/97/15/4a971554c8c61f8119469796b201c7f4.jpg);
}
</style>
