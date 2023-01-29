import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const items = ref([])
    const itemsCount = computed(() => items.value.length)
    
    const addToCart = (item) => {
        const existingItem = items.value.find(i => i.id === item.id)
        if (existingItem) {
            existingItem.quantity++
            
            return
        }
        
        items.value = [...items.value, { ...item, quantity: 1 }]
       
    }
    
    
    const removeFromCart = (id) => {
        items.value = items.value.filter(i => i.id !== id)
    }
    
    const getItem = (id) => {
        return items.value.find(i => i.id === id)
    }
    
    const getSubtotal = () => {
        return items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
    
    return {items, itemsCount, addToCart, removeFromCart, getSubtotal, getItem}
})
