<script setup>
import {useCartStore} from '../stores/cart'

const cart = useCartStore()
</script>

<template>
    <div class='subtotal'>
        <p>
            Subtotal ({{ cart.itemsCount }} items): <strong>${{ $filters.formatMoney(cart.getSubtotal())  }}</strong>
        </p>
        <small class='subtotal__gift'>
            <input type='checkbox' /> This order contains a gift
        </small>

        <button>Proceed to Checkout</button>
    </div>
</template>

<style scoped>
.subtotal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    padding: 20px;
    background-color: #f3f3f3;
    border: 1px solid #dddddd;
    border-radius: 3px;
}

.subtotal__gift {
    display: flex;
    align-items: center;
}

.subtotal__gift>input {
    margin-right: 5px;
}

.subtotal>button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
}
</style>