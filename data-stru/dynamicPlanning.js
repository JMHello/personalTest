/**
 *
 动态规划：从底部开始解决问题，将所有小问题解决掉，然后合并成一个
 整体解决方案，从而解决掉整个大问题。

 递归是从顶部开始将问题分解，通过解决掉所有分解出小问题的方式，来解决整
 个问题。

 */

/**
 * 递归实现的斐波那契数列
 * // ===
 * 执行效率较低，太多值在递归调用中重新被计算
 * === //
 * @param n
 * @return {*}
 */
function recurFib (n) {
  if (n - 2) {
    return n
  } else {
    return recurFib(n - 1) + recurFib(n - 2)
  }
}

/**
 * 动态规划实现的斐波那契数列
 * // ===
 * 将已计算的值记录下来，提高函数的执行效率
 * === //
 * @param n
 * @return {*}
 */
function dynFib (n) {
  let val = []

  for (let i = 0; i <= n; ++i) {
    val[i] = 0
  }

  if (n == 1 || n == 2) {
    return 1
  } else {
    val[1] = 1
    val[2] = 2

    for (let i = 3; i <= n; ++i) {
      val[i] = val[i - 1] + val[i - 2]
    }

    return val[n - 1]
  }
}