import i18n from '@/i18n'

import { watch, watchEffect } from 'vue'
import store from '@/store'

export function generateTitle(title) {
  return i18n.global.t('msg.route.' + title)
}

/**
 *
 * @param  {...any} cbs 所有的回调
 */
export function watchSwitchLang(...cbs) {
  watch(
    () => store.getters.language,
    () => {
      cbs.forEach((cb) => cb(store.getters.language))
    }
  )
}

export function watchSwitchLang2(...cbs) {
  watchEffect((newL, oldL) => {
    // 初始化时，一定会执行一次
    // console.log(newL.value, oldL)
    cbs.forEach((cb) => cb(store.getters.language))
  })
}
