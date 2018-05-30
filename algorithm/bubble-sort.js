import {swap} from '../util/util'

/**
 * 冒泡排序
 * // ===
 * 主要思想：【升序】比较任何两个相邻的项，如果前一项比后一项大，那么就交换他们
 * === //
 *
 * // ===
 * 时间复杂度：O(n2)
 * === //
 * @param arr
 * @return {*}
 */
export function bubbleSort (arr) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    return
  }

  const arrLen = arr.length

  // 外循环 - 控制遍历的次数
  for (let i = 0; i < arrLen; i++) {
    // 内循环：控制元素两两间比较大小，并进行交换
    // 每一次外循环，其内循环所要比较的次数都是 arrLen - 1
    // 比如：数组中有5个数字，那么比较的次数就是 5-1=4
    for (let j = 0; j < arrLen - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

export function modifiedBubbleSort (arr) {
  const len = arr.length

  for (let i = 0; i < arr.length; i++) {
    // 从内循环减去外循环中已跑过的轮数，就可以避免内循环中所有不必要的比较
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
}