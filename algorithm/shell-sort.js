import { swap } from '../util/util'

/**
 * 希尔排序（递减增量排序算法）
 * // ===
 * 核心思想：通过定义间隔序列来表示在排序过程中进行比较的元素之间有多远的间隔
 * === //
 * @param arr
 * @return {*}
 */
export function shellSort (arr) {
  const arrLen = arr.length
  let gap  = 1

  // 动态计算 gap
  while (gap < arrLen / 3) {
    gap = 3 * gap + 1
  }

  // 第一层循环：while保证在gap至少为1的情况下，才能进行shell sort
  while (gap >= 1) {
    // 第二层循环：控制基于每个间隔去进行排序（每次希尔排序都可以移动多位数据 - 至少一位）
    for (let i = gap; i < arrLen; i++) {
      // 第三层循环：交换数
      for (let j = i; j >= gap && arr[j] < arr[j - gap]; j-=gap) {
        swap(arr, j, j-gap)
      }
    }

    // 修改gap
    gap = Math.floor((gap - 1) / 3)
  }
  return arr
}