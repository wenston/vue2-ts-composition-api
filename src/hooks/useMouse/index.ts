import { ref, onMounted, onUnmounted, Ref } from "@/composition.api"
import { useEventListener } from "@/hooks/useEventListener"

export function useMouse(elem: Ref<Element | null | Window> = ref(window)) {
  const x = ref(0)
  const y = ref(0)
  let isEnter = false
  function onEnter(e: any) {
    if (elem && elem.value !== null) {
      isEnter = true
      const rect = (elem.value as Element).getBoundingClientRect()
      x.value = e.clientX - rect.x
      y.value = e.clientY - rect.y
    }
  }
  function onLeave() {
    isEnter = false
  }
  function update(e: MouseEvent) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    if (elem) {
      if (elem.value === window) {
        window.addEventListener("mousemove", update)
      } else {
        elem.value?.addEventListener("mouseenter", onEnter)
        elem.value?.addEventListener("mousemove", onEnter)
        elem.value?.addEventListener("mouseleave", onLeave)
      }
    }
  })

  onUnmounted(() => {
    if (elem) {
      if (elem.value === window)
        elem.value?.removeEventListener("mousemove", update)
      else {
        elem.value?.removeEventListener("mouseenter", onEnter)
        elem.value?.removeEventListener("mousemove", onEnter)
        elem.value?.removeEventListener("mouseleave", onLeave)
      }
    }
  })

  return { x, y }
}
