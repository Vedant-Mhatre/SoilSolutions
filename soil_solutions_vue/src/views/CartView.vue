<template>
    <div class="page-cart">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title has-text-centered">Cart</h1>
            </div>

            <div class="column is-12 box">
                <table class="table is-fullwidth" v-if="cartTotalLength">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <CartItem v-for="item in cart.items" :key="item.product.id" :initialItem="item"
                            @removeFromCart="removeFromCart" />
                    </tbody>
                </table>

                <p v-else class="has-text-centered">You don't have any products in your cart...</p>
            </div>

            <div class="column is-12 box">
                <h2 class="subtitle">Summary</h2>

                <strong>Total Price: ${{ cartTotalPrice.toFixed(2) }}</strong>, {{ cartTotalLength }} items

                <hr>

                <router-link to="/cart/checkout" class="button is-dark is-fullwidth">Proceed to checkout</router-link>
            </div>
        </div>
    </div>
</template>
  
<script>
import CartItem from '@/components/CartItem.vue';

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    data() {
        return {
            cart: {
                items: []
            }
        };
    },
    mounted() {
        this.cart = this.$store.state.cart;
    },
    methods: {
        removeFromCart(item) {
            this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id);
        }
    },
    computed: {
        cartTotalLength() {
            return this.cart.items.reduce((acc, curVal) => acc + curVal.quantity, 0);
        },
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => acc + curVal.product.price * curVal.quantity, 0);
        }
    }
};
</script>
  
<style lang="scss">
.page-cart {
    padding: 2rem;
}

.page-cart .title {
    margin-bottom: 2rem;
}

.page-cart .box {
    margin-bottom: 2rem;
}

.page-cart .subtitle {
    margin-bottom: 1rem;
}

.page-cart table {
    margin-bottom: 1.5rem;
}

.page-cart th {
    font-weight: bold;
    text-align: left;
    padding-bottom: 0.75rem;
}

.page-cart td {
    vertical-align: middle;
    padding-bottom: 0.5rem;
}

.page-cart p {
    margin-bottom: 1rem;
}

.page-cart .button {
    margin-top: 1rem;
}
</style>
  