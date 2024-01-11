<template>
  <div class="w-full">
    <m-search
      v-model="inputValue"
      @search="onSearchHandler"
      @clear="onSearchHandler"
    >
    <template #dropdown>
      <div>111</div>
    </template>
  </m-search>
  </div>
</template>

<script setup>
import { ref } from "vue";
const inputValue = ref('')

// 搜索的回调事件
const onSearchHandler = (val) => {
  inputValue.value = val
  // if (val) {
  //   // 保存历史记录
  //   store.commit('search/addHistory', val)
  //   console.log('触发 searchText 变化')
  //   // 触发 searchText 变化
  //   store.commit('app/changeSearchText', val)
  // }
}
</script>

<style lang="scss" scoped>

</style>