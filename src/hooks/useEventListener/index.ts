import { onMounted, onUnmounted, Ref, isRef } from "@/composition.api"

export function useEventListener(
  type: string,
  listener: (event?: any) => void, //如何更好地控制listener的类型
  target?: Ref<Element | null | Window>,
  options?: boolean | AddEventListenerOptions
) {
  onMounted(() => {
    if (isRef(target)) {
      target.value?.addEventListener(type, listener, options)
    } else {
      window.addEventListener(type, listener, options)
    }
  })
  onUnmounted(() => {
    if (isRef(target)) {
      target.value?.removeEventListener(type, listener, options)
    } else {
      window.removeEventListener(type, listener, options)
    }
  })
}
