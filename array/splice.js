/**
 * array.splice(start[, deleteCount[, item1[, item2[, ...]]]])：返回包含被删除项的数组或者空数组
 * 实例：arr = [ 2, 10, 14, 27, 33, 35, 100 ]
 start：起始值
  默认值为0；
  大于数组长度，其值会被修改为数组的长度；
  如果是负数，其绝对值小于或等于数组的长度，则从数组末尾开始算起（此时第一个索引是1，不是0）, arr.splice(-1) ==> [100] arr.splice(-3) ==> [33, 35, 100]
  如果是负数，其绝对值大于数组的长度，则重设为0, arr.splice(-100) ==> [ 2, 10, 14, 27, 33, 35, 100 ]

 deleteCount: 基于start为初始，需要删除项的数目
  默认值为0，0或者负数都不会删除任何项
  如果 deleteCount > arr.length - start, 那么，在start右边的值都被删除，arr.splice(3, 5) ===>  [27, 33, 35, 100]

 item1, item2...: 要添加的项，在 start 位置开始添加, arr.splice(3, 0, 1) ==> arr = [2, 10, 14, 1, 27, 33, 35, 100]

 */

export function splice () {

}