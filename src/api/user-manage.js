import request from '@/utils/request'

/**
 * 获取用户列表数据
 */
export const getUserManageList = (data) => {
  return request({
    url: '/user-manage/list',
    params: data
  })
}

/**
 * 获取指定用户角色
 */
export const userRoles = (id) => {
  return request({
    url: `/user-manage/role/${id}`
  })
}

/**
 * 分用户分配角色
 */
export const updateRole = (id, roles) => {
  return request({
    url: `/user-manage/update-role/${id}`,
    method: 'POST',
    data: {
      roles
    }
  })
}

/**
 * 批量导入
 */
export const userBatchImport = (data) => {
  return request({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}

/**
 * 删除指定数据
 */
export const deleteUser = (id) => {
  return request({
    url: `/user-manage/detele/${id}`
  })
}
