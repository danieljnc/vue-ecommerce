<script setup>
import {useCartStore} from '../stores/cart'

const props = defineProps({
    id: Number,
    title: String,
    image: String,
    price: Number,
})

const cart = useCartStore()
const addToCart = () => {
    cart.addToCart({
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
    })
}
</script>

<template>
    <div class='product'>
        <div class="product__info">
            <p>{{ props.title }}</p>
            <p class="product__price">
                <small>$</small>
                <strong>{{ $filters.formatMoney(props.price) }}</strong>
            </p>
        </div>

        <img :src='props.image' alt="product__image"/>

        <button @click="addToCart">Add to Cart</button>
    </div>

</template>

<style scoped>
.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-height: 400px;
    min-width: 100px;
    background-color: white;
    z-index: 1;
}

.product > img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
}

.product > button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
}

.product__price {
    margin-top: 5px;
}

.product__info {
    height: 100px;
    margin-bottom: 15px;
}
</style>