<script setup>
import {useCartStore} from '../stores/cart'

const props = defineProps({
    id: Number,
    title: String,
    image: String,
    price: Number,
    quantity: Number,
})

const cart = useCartStore()
</script>

<template>
    <div class='checkoutProduct'>
        <img class='checkoutProduct__image' :src='props.image' alt='checkout_product_image' />

        <div class='checkoutProduct__info'>
            <p class='checkoutProduct__title'>{{ props.title }}</p>
            <p class='checkoutProduct__price'>
                <small>$</small>
                <strong>{{ $filters.formatMoney(props.price) }}</strong>
            </p>

            <div class='checkoutProduct__quantity'>
                Quantity: {{ props.quantity }}
            </div>

            <button @click='cart.removeFromCart(props.id)'>Remove from Cart</button>
        </div>
    </div>
</template>

<style scoped>
.checkoutProduct {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
}

.checkoutProduct__info {
    padding-left: 20px
}

.checkoutProduct__info>button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
}

.checkoutProduct__image {
    object-fit: contain;
    width: 180px;
    height: 180px;
}

.checkoutProduct__quantity {
    display: flex;
    margin-bottom: 10px;
    margin-top: 10px;
}

.checkoutProduct__quantity > input {
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 120px;
    height: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 0 3px #ccc;
}

.checkoutProduct__title {
    font-size: 17px;
    font-weight: 800;
}
</style>