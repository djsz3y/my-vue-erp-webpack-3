import variables from '@/styles/variables.module.scss'

const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: (state) => variables,
  sidebarOpened: (state) => state.app.sidebarOpened, // 伸缩侧边栏动画
  language: (state) => state.app.language // 国际化
}
export default getters
