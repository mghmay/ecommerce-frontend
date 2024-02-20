<template>
  <div class="product-container">
    <img :src="product.imageUrl" alt="" class="product-image" />
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <span>x{{ amount }}</span>
      <p>${{ totalPrice }}</p>
    </div>
    <button class="add-button" @click="$emit('add-to-cart', product.id)">Add</button>
    <button class="remove-button" @click="$emit('remove-from-cart', product.id)">Remove</button>
  </div>
</template>
<script>
export default {
  name: 'ProductsListItem',
  props: ['product', 'amount'],
  computed: {
    totalPrice() {
      return Number(this.amount) * Number(this.product.price)
    }
  }
}
</script>
<style scoped>
.product-container {
  align-content: 'center';
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}

.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}
.remove-button {
  flex: 1;
  margin: auto;
}
.add-button {
  flex: 1;
  margin: auto 10px auto auto;
}
</style>
