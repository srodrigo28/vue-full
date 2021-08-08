import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://first-bank-6efa6-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})