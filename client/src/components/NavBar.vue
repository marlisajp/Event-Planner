<template>
  <div id="nav-bar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/add">Add Event</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavBar'
}
</script>

<style>
#nav-bar {
  border: 1px solid;
}
</style>
