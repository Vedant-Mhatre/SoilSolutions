<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">
          Welcome to Soil Solutions
        </p>
        <p class="subtitle">
          Organic products which won't harm your land
        </p>
      </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">
          Latest products
        </h2>
      </div>

      <ProductBox v-for="product in latestProducts" v-bind:key="product.id" v-bind:product="product" />

    </div>
  </div>
</template>

<script>
import axios from 'axios'

import ProductBox from '@/components/ProductBox'

export default {
  name: 'Home',
  components: {
    ProductBox
  },
  data() {
    return {
      latestProducts: []
    }
  },
  mounted() {
    this.getLatestProducts()

    document.title = "Soil Solutions: Organic products which won't harm your land"
  },
  methods: {
    getLatestProducts() {
      axios
        .get('/api/v1/latest-products/')
        .then(response => {
          this.latestProducts = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.product-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
z