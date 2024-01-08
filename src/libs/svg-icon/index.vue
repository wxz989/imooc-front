<template>
  <svg aria-hidden="true">
    <use :class="fillClass" :xlink:href="symbolId" :fill="color"></use>
  </svg>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  // 直接指定svg图标的颜色
  color: {
    type: String
  },
  // 通过tailwind指定svg颜色的类名
  fillClass: {
    type: String
  }
})

const symbolId = computed(() => `#icon-${props.name}`)
</script>

<style lang="scss" scoped>

</style>