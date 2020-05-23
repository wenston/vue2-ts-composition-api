import { Ref, onMounted, reactive, toRefs, onUpdated } from "@/composition.api"
import { offset } from "../_util/dom"
/**
 * 获取给定元素在页面中的绝对位置以及本身的宽高尺寸
 */
export function elementPosition(elemRef: Ref<Element | null>) {
  const ep = reactive({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  })
  const get = () => {
    const { left, top } = offset(elemRef.value)
    const { width, height } =
      elemRef.value !== null ? elemRef.value.getBoundingClientRect() : { width: 0, height: 0 }
    ep.left = left
    ep.top = top
    ep.width = width
    ep.height = height
  }
  onMounted(get)
  onUpdated(get)

  return toRefs(ep)
}
