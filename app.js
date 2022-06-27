const API_URL = 'https://fakestoreapi.com';

Vue.component('product', {
  template: `
    <div>
        <div>
            <img v-bind:src="item.image">
            {{ item.price }}
            <button v-on:click="addFunction(item)">
            Add to cart with Vue instance Method
            </button>
            <button @click="addToCart()">
            Add to cart with component method
            </button>
        </div>
    </div>
    `,
  props: {
    item: Object,
    cart: Array,
    addfunction: Function,
  },
  methods: {
    addToShoppingCart: function () {
      this.cart.push(this.item);
    },
  },
});

var app = new Vue({
  el: '#app',
  data: {
    products: [],
    Vuecart: [],
    page: 'welcome',
  },
  methods: {
    getProducts: async function () {
      let response = await fetch(`$(API_URL)/products`);
      let data = await response.json();
      this.products = data;
    },
    setPage: function (location) {
      this.page = location;
    },
  },
});
