<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <div>
      <NavBar />
    </div>
  </header>

  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

:root {
  --dark-blue: rgb(1, 38, 105);
  --medium-dark-blue: rgb(62, 119, 168);
  --medium-blue: rgb(109, 166, 216);
  --light-blue: rgb(188, 214, 237);
}
body {
  margin: 0;
  width: 100%;
  height: 100%;
}
* {
  background-color: var(--dark-blue);
  box-sizing: border-box;
  font-family: Montserrat, Arial;
}

#page-wrap {
  margin: auto;
  max-width: 1200px;
  min-height: 100vh;
}

button {
  background-color: black;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  padding: 16px;
}

.scaling-squares-spinner {
  margin: auto;
  animation-duration: 1250;
  size: 65;
}
</style>
