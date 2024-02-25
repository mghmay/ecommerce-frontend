<template>
  <nav id="nav-bar">
    <router-link to="/books" id="books-link">
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
#nav-bar {
  height: 75px;
  width: 100%;
  background-color: var(--medium-blue);
}

#nav-bar *:not(button) {
  background-color: inherit;
}

#books-link {
  text-align: center;
  display: block;
  color: black;
  font-size: 22px;
  left: 32px;
  position: absolute;
  top: 16px;
  text-decoration: none;
}

#books-link h1 {
  margin: 0;
}

#cart-link {
  position: absolute;
  right: 16px;
  top: 16px;
}
</style>
