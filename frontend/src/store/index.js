import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
      items: [] // Array to store items in the cart
    },
    isAuthenticated: false, // Flag to indicate if the user is authenticated
    token: '', // Token for authentication
    isLoading: false // Flag to indicate if data is loading
  },
  getters: {},
  mutations: {
    // Initialize the store by retrieving cart data from local storage if it exists,
    // otherwise set the initial cart state and store it in local storage
    initializeStore (state) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }

      // Check if a token exists in local storage and update the token and authentication state accordingly
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.isAuthenticated = false
      }
    },
    // Add an item to the cart
    addToCart (state, item) {
      // Checks if an item with the same id already exists in the cart
      const exists = state.cart.items.filter(
        i => i.product.id === item.product.id
      )

      // If an item with the same id exists, increment its quantity by the quantity of the new item
      if (exists.length) {
        exists[0].quantity =
          parseInt(exists[0].quantity) + parseInt(item.quantity)
      } else {
        // Otherwise, add the new item to the cart
        state.cart.items.push(item)
      }

      // Store the updated cart in local storage
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    setToken (state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken (state) {
      state.token = ''
      state.isAuthenticated = false
    },
    clearCart (state) {
      state.cart = { items: [] }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  actions: {},
  modules: {}
})
