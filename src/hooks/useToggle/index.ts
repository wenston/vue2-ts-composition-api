/**
 * 几种状态之间来回切换
 */
import { ref, computed } from "@/composition.api"
export function useToggle(currentIndex: number = 0, list: Array<any> = [false, true]) {
  const index = ref(currentIndex)
  const arrLength = computed(() => list.length)
  const item = computed(() => list[index.value])
  const toggle = (i: number) => {
    if (typeof i === "number") {
      index.value = i
    } else {
      index.value = (index.value + 1) % arrLength.value
    }
  }

  return {
    item,
    index,
    toggle
  }
}
