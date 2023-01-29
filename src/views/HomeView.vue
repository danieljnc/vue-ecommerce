<script setup>
import Product from '../components/Product.vue'
import useProduct from '../composables/useProduct'
import ContentLoader from '../components/ContentLoader.vue'

const {isLoading, products} = useProduct()

const chunk = ((arr, chunkSize) => {
    if (!arr) return []

    let chunks = []
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunks.push(arr.slice(i, i + chunkSize));
    }

    return chunks
})
</script>

<template>
    <div class='home'>
        <div class='home__container'>
            <img
                class='home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt='home_image'
            />

            <div v-if='isLoading' class='home__row'>
                <content-loader  />
                <content-loader  />
                <content-loader  />
            </div>

            <div v-else class='home__row' v-for='(productsChunk, index) in chunk(products, 3)' :key='index'>
                <Product
                    v-for="product of productsChunk"
                    :key='product.id'
                    :id='product.id'
                    :title='product.title'
                    :price='product.price'
                    :image='product.image'
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;
}

.home__image {
    width: 100%;
    z-index: -1;
    margin-bottom: -250px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.home__row {
    display: flex;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
}
</style>
