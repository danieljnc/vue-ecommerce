import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {VueQueryPlugin} from '@tanstack/vue-query'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            cacheTime: 1000 * 60, // 1 minute
        }
    }
})

app.config.globalProperties.$filters = {
    formatMoney: function (number) {
        if (!number) {
            return '0.00'
        }
        
        // Truncate the number to two significant digits
        number = Number(number.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]).toFixed(2)
        
        // Add comma as thousands separator
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
}

app.mount('#app')
