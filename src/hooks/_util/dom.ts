/*此处如何定义参数类型*/
export const offset = (elem: any, parent: Node = document.body) => {
  let left = elem.offsetLeft,
    top = elem.offsetTop,
    cur = elem.offsetParent
  if (!parent) {
    while (cur) {
      left += cur.offsetLeft
      top += cur.offsetTop
      cur = cur.offsetParent
    }
  } else {
    while (cur && cur != parent) {
      left += cur.offsetLeft
      top += cur.offsetTop
      cur = cur.offsetParent
    }
  }
  return {
    left,
    top
  }
}
