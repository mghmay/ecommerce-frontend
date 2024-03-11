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
  --extra-dark-blue: rgb(11, 4, 66);
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

a {
  text-decoration: none;
  color: inherit;
}

.extra-dark-blue-bg {
  background-color: var(--extra-dark-blue);
}
.dark-blue-bg {
  background-color: var(--dark-blue);
}
.medium-dark-blue-bg {
  background-color: var(--medium-dark-blue);
}
.medium-blue-bg {
  background-color: var(--medium-blue);
}
.light-blue-bg {
  background-color: var(--light-blue);
}

.inherit-bg {
  background-color: inherit;
}

#page-wrap {
  margin: auto;
  max-width: 1200px;
  min-height: 100vh;
}

.main-button {
  background-color: var(--extra-dark-blue);
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  padding: 16px;
}

h1 {
  color: var(--extra-dark-blue);
}

.scaling-squares-spinner {
  margin: 15% auto;
  animation-duration: 1250;
  size: 65;
}
</style>
