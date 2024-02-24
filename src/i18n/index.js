import { createI18n } from 'vue-i18n'
// 1.复制 lang 到 i18n
// 2.导入语言包
import mZhLocale from './lang/zh'
import mEnLocale from './lang/en'

import store from '@/store'
/**
 * 返回当前 lang
 */
function getLanguage() {
  return store && store.getters && store.getters.language
} // 【1.】创建 getLanguage 方法

const messages = {
  en: {
    msg: {
      // test: 'hello world'

      ...mEnLocale // 3.注册到语言包
    }
  },
  zh: {
    msg: {
      // test: '你好世界'

      ...mZhLocale // 3.注册到语言包
    }
  }
} // 【1. 创建 messages 数据源】

// const locale = 'zh' // 【2. 创建 locale 语言变量】

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  // locale,
  locale: getLanguage(), // 【2.】修改 createI18n 的 locale 为 getLanguage()
  messages
}) // 【3. 初始化 i18n 实例】

// 【4. 把 i18n 注册到 vue 实例】
export default i18n
