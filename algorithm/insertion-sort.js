/**
 * 插入排序
 * // ===
 * 核心思想：就像抽取纸牌排大小一样
   举例：比如数组 arr = [5, 3, 2, 1, 4]，假设第一项已排序，后面的项都是没有排序的
   i = 1
   5 5 2 1 4 ==》 3 5 2 1 4
   i = 2
   3 5 5 1 4 ==》 5 3 5 1 4 ==》 2 3 5 1 4
   。。。
 * // === 排序小型数组时，此算法比选择排序和冒泡排序性能要好 === //
 * @param arr
 * @return {*}
 */
export function insertionSort (arr) {
  const arrlen = arr.length

  // 由于假定第一项已排好序，所以从 i = 1 开始
  // 外循环：将数组元素挨个移动
  for (let i = 1; i < arrlen; i++) {
    // temp：选中的元素
    let temp = arr[i]
    let j = i

    // 内循环：对外循环选中的元素与它后面的元素作比较
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1]
      j--
    }

    arr[j] = temp
  }

  return arr
}