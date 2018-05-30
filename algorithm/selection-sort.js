import {swap} from '../util/util'

/**
 * 选择排序
 * // ===
 * 主要思想：找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推
 * === //
 *
 * // ===
 * 时间复杂度：O(n2)
 * === //
 * @param arr
 * @return {*}
 */
export function selectionSort (arr) {
  const arrlen = arr.length

  // 每一次外循环，找到这次循环中，最小的值
  for (let i = 0; i < arrlen; i++) {
    let mixIndex = i

    for (let j = i + 1; j < arrlen; j++) {
      if (arr[j] < arr[mixIndex]) {
        mixIndex = j
      }
    }

    // 交换
    swap(arr, i, mixIndex)
  }

  return arr
}