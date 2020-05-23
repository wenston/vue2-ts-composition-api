<template>
  <div :class="css.abc">
    <div :class="hc.home"></div>
  </div>
</template>
<script lang="tsx">
import { ref, reactive, watch, defineComponent, watchEffect, onMounted } from "@/composition.api"
import { useMouse } from "@/hooks/useMouse"
import homeCss from "./home.module.css"
export default defineComponent({
  name: "Home",
  components: {},
  setup(props, context) {
    const root = ref(null)
    const hc = reactive(homeCss)
    const { x, y } = useMouse(root)
    return { x, y, root, hc }
  }
})
</script>
<style lang="postcss" module="css">
.abc {
  padding: 2px;
  position: relative;
  & .box {
    border: 1px solid blue;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    background-color: blue;
    position: absolute;
  }
}
</style>
