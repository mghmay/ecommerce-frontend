<template>
  <router-link :to="link" class="link">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: "AppDropdownItem",
  props: ["link"],
};
</script>
<style scoped>
.link {
  z-index: 1000;
  padding: 10px;
  text-decoration: none;
  color: inherit;
  min-width: fit-content;
}
.link:hover {
  background-color: var(--medium-dark-blue);
}
</style>
