import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    msg: {
      test: 'hello world'
    }
  },
  zh: {
    msg: {
      test: '你好世界'
    }
  }
} // 【1. 创建 messages 数据源】

const locale = 'zh' // 【2. 创建 locale 语言变量】

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale,
  messages
}) // 【3. 初始化 i18n 实例】

// 【4. 把 i18n 注册到 vue 实例】
export default i18n
