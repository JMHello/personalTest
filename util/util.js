/**
 * 交换函数
 * @param arr
 * @param curIndex 当前项的索引
 * @param nextIndex 下一项的索引
 * @return {*}
 */
export function swap (arr, curIndex, nextIndex) {
  let temp = arr[curIndex]

  arr[curIndex] = arr[nextIndex]
  arr[nextIndex] = temp

  return arr
}