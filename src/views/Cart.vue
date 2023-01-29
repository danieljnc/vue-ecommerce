<script setup>
import Subtotal from '../components/Subtotal.vue'
import CartProduct from '../components/CartProduct.vue'
import {useCartStore} from '../stores/cart'

const cart = useCartStore();
</script>
<template>
    <div class='checkout'>
        <div class='checkout__left'>
            <img
                class='checkout__ad'
                src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                alt='checkout__image'
            />

            <div>
                <h3>Hello, Guest!</h3>
                <h2 class='checkout__title'>Your shopping Cart</h2>

                <CartProduct
                    v-for='(item, idx) in cart.items'
                    :key='idx'
                    :id='item.id'
                    :title='item.title'
                    :image='item.image'
                    :price='item.price'
                    :quantity='item.quantity'
                />

            </div>
        </div>

        <div class='checkout__right'>
            <Subtotal />
        </div>
    </div>
</template>

<style scoped>
.checkout {
    display: flex;
    padding: 20px;
    background-color: white;
    height: max-content;
}

.checkout__ad {
    width: 100%;
    margin-bottom: 10px;
}

.checkout__title {
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
}
</style>
