import axios from 'axios'

const productsApi = axios.create({
    baseURL: 'https://fakestoreapi.com' //import.meta.env.VITE_API_URL
})

export default productsApi