<template>
  <div id="not-found-page">
    <h1>{{ title ? title : "404: Page Not Found" }}</h1>
  </div>
</template>
<script>
export default {
  name: "NotFoundPage",
  props: ["title"],
};
</script>
<style scoped>
h1 {
  text-align: center;
  color: white;
}

#not-found-page {
  margin: 15% 0;
}
</style>
