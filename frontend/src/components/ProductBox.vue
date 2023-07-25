<template>
    <div class="column is-3">
        <div class="box product-box">
            <div class="box-image">
                <figure class="image">
                    <img :src="product.get_thumbnail" alt="Product Thumbnail">
                </figure>
            </div>

            <div class="box-content">
                <h4 class="is-size-6 product-name">{{ product.name }}</h4>
                <p class="is-size-7 has-text-grey">${{ product.price }}</p>

                <router-link :to="product.get_absolute_url" class="button is-dark mt-2">View details</router-link>
            </div>
        </div>
    </div>
</template>
  
<style>
.product-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
    /* Apply a fixed height to ensure consistent box size */
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 1rem;
    transition: box-shadow 0.3s;
}

.product-box:hover {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.box-image {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.box-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.product-name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
  
<script>
export default {
    name: 'ProductBox',
    props: {
        product: Object
    }
}
</script>
  