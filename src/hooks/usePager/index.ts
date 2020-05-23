import { reactive, watch } from "@/composition.api"
interface Pager {
  total?: number
  currentPage?: number
  pageSize?: number
  pageSizes?: number[]
  align?: string
}
export function usePager(pagerOptions?: Pager) {
  pagerOptions = {
    total: 0,
    currentPage: 1,
    pageSize: 20,
    pageSizes: [15, 20, 25, 30],
    align: "center",
    ...pagerOptions
  }
  const pager = reactive(pagerOptions)

  // watch(
  //   () => pager.currentPage,
  //   n => {
  //     console.log(n)
  //   }
  // )

  //返回的是reactive包装的数据，所以是响应的
  return pager
}
