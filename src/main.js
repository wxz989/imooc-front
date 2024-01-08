import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'

import './styles/index.scss'
import router from './router'

import { useREM } from './utils/flexible.js'
useREM()

import mLibs from './libs'
createApp(App).use(router).use(mLibs).mount('#app')
