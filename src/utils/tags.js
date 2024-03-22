const whiteList = ['/login', '/import', '/404', '/401'] // 不希望被保存

/**
 * path 是否需要被缓存
 * @param {*} path
 * @returns
 */
export function isTags(path) {
  return !whiteList.includes(path)
}
