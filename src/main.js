import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 导入全局样式
import './styles/index.scss'
// 导入 svgIcon
import installIcons from '@/icons'
import './permission.js'
// i18n （PS：导入放到 APP.vue 导入之前，因为后面我们会在 app.vue 中使用国际化内容）
import i18n from '@/i18n'
// filter
import installFilter from '@/filters'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
installFilter(app)

app.use(store).use(router).mount('#app')
app.use(i18n)
