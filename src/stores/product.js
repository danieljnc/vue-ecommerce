import {defineStore} from 'pinia'
import {ref} from 'vue'

const useProductStore = defineStore('product', () => {
    const products = ref([])
    
    return {products, setProducts(newProducts) {
            products.value = newProducts
    }}
})

export default useProductStore