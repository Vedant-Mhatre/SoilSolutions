<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>Soil Solutions</strong></router-link>

        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      
      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">

        <div class="navbar-start">
          <div class="navbar-item">
            <form method="get" action="/search">
              <div class="field has-addons">
                <div class="control">
                  <input type="text" class="input" placeholder="What are you looking for?" name="query">
                </div>

                <div class="control">
                  <button class="button is-success">
                      <span class="icon">
                      <i class="fas fa-search"></i>
                      </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="navbar-end">
            <router-link to="/fertilizers" class="navbar-item">Fertilizers</router-link>
            <router-link to="/seeds" class="navbar-item">Seeds</router-link>

            <div class="navbar-item">
              <div class="buttons">

                <router-link to="/log-in" class="button is-light">Log In</router-link>
                <router-link to="/cart" class="button is-success">
                  <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                  <span>Cart {{ cartTotalLength }} </span>
                </router-link>
              </div>
            </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view/>
    </section>

    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2023</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: [] // Array to store items in the cart
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore') // Call the 'initializeStore' mutation before the component is created
  },
  mounted() {
    this.cart = this.$store.state.cart // Set the component's 'cart' data property to the value from the store
  },
  computed: {
    cartTotalLength(){

      let totalLength = 0
      
      // Calculate the total length or quantity of items in the cart
      for (let i=0; i < this.cart.items.length; i++){
        totalLength += this.cart.items[i].quantity
      }

      return totalLength;
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma';
.navbar-item .input {
  width: 800px; /* Adjust the width as desired */
}

.navbar-start {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
</style>
