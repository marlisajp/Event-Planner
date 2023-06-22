<template>
  <div id="nav-bar">
    <div id="nav-image-container">
      <img id="nav-image" src="../assets/logo.svg" />
    </div>
    <div id="link-container">
      <RouterLink class="link" to="/">Home</RouterLink>
      <RouterLink class="link" to="/add">New Event</RouterLink>
      <RouterLink class="link" to="/calendar">Calendar</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavBar'
}
</script>

<style>
.link {
  color: white;
  text-decoration: none;
}
#nav-bar {
  background-color: rgb(3, 3, 54);
  display: flex;
  height: 70px;
  justify-content: space-between;
  position: fixed;
  width: 100%;
}

#nav-image {
  width: 50px;
}

#nav-image-container {
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 10px;
}

#link-container {
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  margin-right: 15px;
}
</style>
