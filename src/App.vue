<script setup>
import {RouterLink, RouterView} from 'vue-router'
import {useCartStore} from './stores/cart'

const cart = useCartStore();
</script>

<template>
    <div class='header'>
        <RouterLink to='/'>
            <img
                class='header__logo'
                src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt='amazon__logo'
            />
        </RouterLink>

        <div class='header__search'>
            <input
                type='text'
                class='header__searchInput'
            />

        </div>

        <div class='header__nav'>
            <div class="header__option">
                <span class="header__optionLineOne">Hello Guest</span>
                <span class="header__optionLineTwo">Sign In</span>
            </div>
            <div class='header__option'>
                    <span class='header__optionLineOne'>
                        Returns
                    </span>
                <span class='header__optionLineTwo'>
                        & Orders
                    </span>
            </div>
            <RouterLink to='/cart'>
                <div class='header__option'>
                    <span class='header__optionLineOne'>
                        Shopping
                    </span>
                    <span class='header__optionLineTwo'>
                        Cart ({{ cart.itemsCount || 0 }})
                    </span>
                </div>
            </RouterLink>
        </div>
    </div>

    <RouterView/>
</template>

<style scoped>
.header {
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #131921;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header__logo {
    width: 100px;
    object-fit: contain;
    margin: 18px 20px 0;
}

.header__search {
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
}

.header__searchInput {
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
}

.header__searchIcon {
    padding: 5px;
    height: 22px !important;
    background-color: #cd9042;
}

.header__nav {
    display: flex;
    justify-content: space-evenly;
}

.header__option {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 20px;
    color: white;
}

.header__optionLineOne {
    font-size: 13px;
}

.header__optionLineTwo {
    font-size: 16px;
    font-weight: 800;
}
</style>

