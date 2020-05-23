<template>
  <div>
    <h3>按钮测试</h3>
    <div>
      <k-button @click="toggle">{{ item }}</k-button>
      <k-button :type="tItem" @click="tToggle">按钮的{{ tItem }}切换</k-button>
      <k-button @click="tToggle(3)">tToggle(3) warning</k-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@/composition.api"
import { useToggle } from "@/hooks/useToggle"
const buttonTypes = ["default", "primary", "danger", "warning", "success"]
const PAGE = {
  setup() {
    const { item, index, toggle } = useToggle(1)
    const { item: tItem, index: tIndex, toggle: tToggle } = useToggle(0, buttonTypes)
    return {
      item,
      index,
      toggle,
      tItem,
      tToggle
    }
  }
}
export default defineComponent(PAGE)
</script>