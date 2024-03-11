// import variables from '@/styles/variables.module.scss'
import { MAIN_COLOR } from '@/constant'
import { getItem } from '@/utils/storage'
import { generateColors } from '@/utils/theme'

const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  // cssVar: (state) => variables, // 没有使用：自定义主题——菜单
  cssVar: (state) => {
    return {
      // ...variables,
      ...state.theme.variables,
      ...generateColors(getItem(MAIN_COLOR))
    }
  }, // 使用：自定义主题——菜单——1.根据当前保存的 mainColor 覆盖原有的默认色值
  sidebarOpened: (state) => state.app.sidebarOpened, // 伸缩侧边栏动画
  language: (state) => state.app.language, // 国际化
  mainColor: (state) => state.theme.mainColor, // 动态换肤
  tagsViewList: state => state.app.tagsViewList // tagsView
}
export default getters
