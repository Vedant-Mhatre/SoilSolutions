<template>
    <div class="page-product">
        <div class="columns is-multiline">
            <div class="column is-9">
                <div class="product-image">
                    <figure class="image">
                        <img :src="product.get_image" alt="Product Image">
                    </figure>
                </div>
                <div class="product-details">
                    <h1 class="title">
                        {{ product.name }}
                    </h1>
                    <p>{{ product.description }}</p>
                </div>
            </div>

            <div class="column is-3">
                <h2 class="subtitle">Information</h2>

                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">Quantity:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <input type="number" class="input" min="1" v-model="quantity">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <a class="button is-dark" @click="addToCart">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
import { toast } from 'bulma-toast'

export default {
    name: 'Product',
    data() {
        return {
            product: {},
            quantity: 1
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        getProduct() {
            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug

            axios.get(`/api/v1/products/${category_slug}/${product_slug}`)
                .then(response => {
                    this.product = response.data

                    document.title = this.product.name + ': Soil Solutions'
                })
                .catch(error => {
                    console.log(error)
                })
        },
        addToCart() {
            if (isNaN(this.quantity) || this.quantity < 1) {
                this.quantity = 1 // Set the quantity to 1 if it is not a valid positive number
            }

            const item = {
                product: this.product,
                quantity: this.quantity
            }

            this.$store.commit('addToCart', item) // Call the 'addToCart' mutation in the store to add the item to the cart

            toast({
                message: 'The product was added to the cart',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: 'bottom-right',
            })
        }
    }
}
</script>
  
<style scoped>
.product-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

.product-image img {
    max-width: 100%;
    max-height: 400px;
    object-fit: contain;
}

.product-details {
    margin-bottom: 2rem;
}

.subtitle {
    margin-top: 0;
}

.field.is-horizontal {
    display: flex;
    align-items: center;
}

.field-label {
    flex: 0 0 auto;
}

.field-body {
    flex: 1 1 auto;
    display: flex;
    justify-content: flex-start;
}

.field {
    margin-right: 0.5rem;
}

.button.is-dark {
    margin-top: 0.5rem;
}
</style>
  