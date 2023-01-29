import productsApi from '../api/productsApi'
import {useQuery} from '@tanstack/vue-query'
import useProductStore from '../stores/product'
import {watch} from 'vue'

const getProducts = async () => {
    const {data} = await productsApi.get('/products?limit=9')
    
    return data
}

const useProduct = () => {
    const {isLoading, data} = useQuery(['products'], () => getProducts())
    
    const store = useProductStore()
    
    watch(data, products => {
        if (products) {
            store.setProducts(products)
        }
    })
    
    return {isLoading, products: data}
}

export default useProduct