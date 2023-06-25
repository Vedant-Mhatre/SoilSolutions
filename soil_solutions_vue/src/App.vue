<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">Soil Solutions</router-link>
        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu"
          @click="showMobileMenu = !showMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div class="navbar-menu" id="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
        <div class="navbar-start">
          <div class="navbar-item">
            <form method="get" action="/search" class="search-form">
              <div class="field has-addons">
                <div class="control">
                  <input type="text" class="input" placeholder="Search products" name="query">
                </div>
                <div class="control">
                  <button class="button is-success">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="navbar-end">
          <router-link to="/fertilizers" class="navbar-item">Fertilizers</router-link>
          <router-link to="/seeds" class="navbar-item">Seeds</router-link>
          <router-link to="/log-in" class="navbar-item">Log In</router-link>
          <router-link to="/cart" class="navbar-item">
            <i class="fas fa-shopping-cart"></i>
            <span>Cart {{ cartTotalLength }}</span>
          </router-link>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view />
    </section>

    <footer class="footer">
      <p class="has-text-centered">© 2023 Soil Solutions</p>
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
    cartTotalLength() {
      let totalLength = 0

      // Calculate the total length or quantity of items in the cart
      for (let i = 0; i < this.cart.items.length; i++) {
        totalLength += this.cart.items[i].quantity
      }

      return totalLength
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma';

/* Navbar */
.navbar-brand {
  padding: 0.75rem 1.5rem;
}

.navbar-item {
  align-items: center;
}

.navbar-item .input {
  width: 100%; 
  max-width: 800px;
}

.navbar-start {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.navbar-burger {
  color: #fff;
}

/* Search Bar */
.search-form {
  max-width: 100%;
  width: 100%;
}

.search-form .control {
  width: 100%;
}

/* Section and Footer */
.section {
  padding: 3rem 1.5rem;
}

.footer {
  padding: 2rem 1.5rem;
  background-color: #f5f5f5;
}

/* Media Queries */
@media screen and (min-width: 769px) {
  /* Adjust the width of the search bar on larger screens */
  .navbar-item .input,
  .search-form {
    width: auto;
    min-width: 400px;
    max-width: 600px; /* Adjust the value according to your needs */
  }
}
</style>
