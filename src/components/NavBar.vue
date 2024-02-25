<template>
  <nav id="nav-bar">
    <router-link to="/products" id="products-link">
      <h1>Foobar Bookshop</h1>
    </router-link>
    <router-link to="/cart" id="cart-link">
      <button>Shopping Cart</button>
    </router-link>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
h1 {
  color: var(--dark-blue);
}
#nav-bar {
  height: 75px;
  width: 100%;
  background-color: var(--medium-blue);
}

#nav-bar *:not(button) {
  background-color: inherit;
}

#products-link {
  text-align: center;
  display: block;
  color: black;
  font-size: 22px;
  left: 32px;
  position: absolute;
  top: 16px;
  text-decoration: none;
}

#products-link h1 {
  margin: 0;
}

#cart-link {
  position: absolute;
  right: 16px;
  top: 16px;
}
</style>
