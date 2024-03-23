<template>
  <div class="">
    <roles-dialog
      v-model="roleDialogVisible"
      :userId="selectUserId"
      @updateRole="getListData"
    ></roles-dialog>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import RolesDialog from './components/roles.vue'

/**
 * 查看角色的点击事件
 */
const roleDialogVisible = ref(false)

const selectUserId = ref('')
const onShowRoleClick = (row) => {
  console.log(row)
  roleDialogVisible.value = true
  // selectUserId.value = row._id
}
onShowRoleClick()

// 保证每次打开重新获取用户角色数据
watch(roleDialogVisible, (val) => {
  if (!val) selectUserId.value = ''
})
</script>

<style lang="scss" scoped></style>
