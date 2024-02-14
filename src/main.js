import './assets/styles/main.css'

import { createApp } from 'vue'
// import * as Vue from 'vue';
import App from './App.vue'
import router from './router'
import Vue3Lottie from 'vue3-lottie'
// import * as LottieVuePlayer from '@lottiefiles/vue-lottie-player';

const app = createApp(App)

app.use(router)
app.use(Vue3Lottie)

app.mount('#app')

