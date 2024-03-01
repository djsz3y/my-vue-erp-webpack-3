import { getItem, setItem } from '@/utils/storage'
import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
import variables from '@/styles/variables.scss'

export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR,
    variables // 解决：主题色替换之后，需要刷新页面才可响应——因为：getters 没有监听到 依赖值的响应变化，
  }),
  mutations: {
    /**
     * 设置主题色
     */
    setMainColor(state, newColor) {
      // state.mainColor = newColor
      state.variables.menuBg = newColor
      setItem(MAIN_COLOR, newColor)
    }
  }
}
