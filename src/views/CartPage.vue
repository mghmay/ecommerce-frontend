<template>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>
    <div v-if="loading">
      <scaling-squares-spinner />
    </div>
    <div v-else>
      <ProductsList
        :products="cartItems"
        v-on:remove-from-cart="removeFromCart($event)"
        v-on:add-to-cart="addToCart($event)"
        nobooksText="You haven't added any items to your cart yet"
      />
      <h3 id="total-price">Total: £{{ totalPrice }}</h3>
      <button id="checkout-button">Proceed to Checkout</button>
    </div>
  </div>
</template>
<script>
import { get, del, post } from "@/api";
import ProductsList from "@/components/ProductsList.vue";
import { ScalingSquaresSpinner } from "epic-spinners";

const updateCart = (result) => {
  return result.data.map(({ book: product, amount }) => ({
    product,
    amount,
  }));
};
export default {
  name: "CartPage",
  data() {
    return {
      cartItems: [],
      loading: true,
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems
        .reduce((sum, item) => sum + Number(item.product.price) * item.amount, 0)
        .toFixed(2);
    },
  },
  methods: {
    async removeFromCart(bookId) {
      this.loading = true;
      const result = await del(`/api/users/12345/cart/${bookId}`);
      this.cartItems = updateCart(result);
      this.loading = false;
    },
    async addToCart(bookId) {
      this.loading = true;
      const result = await post(`/api/users/12345/cart`, { bookId });
      this.cartItems = updateCart(result);
      this.loading = false;
    },
  },
  async created() {
    const result = await get("/api/users/12345/cart");
    this.cartItems = updateCart(result);
    this.loading = false;
  },
  components: {
    ProductsList,
    ScalingSquaresSpinner,
  },
};
</script>

<style scoped>
#page-wrap {
  background-color: var(--medium-blue);
  min-height: fit-content;
  padding: 0 0 50px 0;
}

#page-wrap *:not(button) {
  background-color: inherit;
}
h1 {
  border-bottom: 1px solid black;
  margin: 16px 0;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  display: block;
  margin: auto;
  width: 80%;
}
</style>
