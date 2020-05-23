<template>
  <div :class="css.pagi">
    <div>
      <k-input v-model="text" />
      <k-button @click="onSearch">查询数据</k-button>
    </div>
    <k-table :data="dataList" :columns="columns" height="calc(100vh - 120px)">
      <template slot-scope="{ row, index }" slot="name"
        >{{ index }}，{{ row.n }}</template
      >
      <template slot-scope="{ row, index }" slot="actions">
        <k-icon name="k-icon-delete" />
        <k-button size="mini">{{ index }}</k-button>
      </template>
    </k-table>
    <k-pagination
      v-bind.sync="pager"
      @page-change="onPageChange"
    ></k-pagination>
  </div>
</template>
<script lang="tsx">
/**
 * 注意：不支持ts和tsx混写，怎么才能支持，是写法的问题吗？
 */
import { defineComponent, ref, reactive, watch } from "@/composition.api"
//虽然把分页参数分离了出来，但好像意义不大！
import { usePager } from "@/hooks/usePager"

export default defineComponent({
  setup(props, ctx) {
    const text = ref("输入框")
    const dataList = ref<any[]>([])
    const columns = ref([
      {
        name: "名字",
        scopedSlots: "name"
      },
      {
        name: "这次的随机数",
        field: "n"
      },
      {
        name: "操作",
        scopedSlots: "actions"
      }
    ])
    const pager = usePager()
    //方法
    const methods = {
      onSearch() {
        methods.onPageChange(1)
      },
      onPageChange(p: number) {
        pager.currentPage = p
        methods.getData()
      },
      getData() {
        setTimeout(() => {
          const arr = []
          let i = 0
          while (i < Math.random() * 300 + 50) {
            arr.push({
              n: Math.random()
            })
            i++
          }
          dataList.value = arr
          pager.total = arr.length
        }, 200)
      }
    }
    //watch
    {
      watch(text, (t) => {
        console.log(t)
      })
    }
    methods.getData()
    return { text, dataList, columns, pager, ...methods }
  }
})
</script>
<style lang="postcss" module="css">
.pagi {
  padding: 20px;
}
</style>
