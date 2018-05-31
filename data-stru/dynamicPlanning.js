/**
 *
 动态规划：从底部开始解决问题，将所有小问题解决掉，然后合并成一个
 整体解决方案，从而解决掉整个大问题。

 递归是从顶部开始将问题分解，通过解决掉所有分解出小问题的方式，来解决整
 个问题。

 */

export const Fib = {
  /**
   * 递归实现的斐波那契数列
   * // ===
   * 执行效率较低，太多值在递归调用中重新被计算
   * === //
   * @param n
   * @return {*}
   */
  recurFib: function recurFib (n) {
    if (n < 2) {
      return n
    } else {
      return recurFib(n - 1) + recurFib(n - 2)
    }
  },
  /**
   * 动态规划实现的斐波那契数列
   * // ===
   * 将已计算的值记录下来，提高函数的执行效率
   * === //
   * @param n
   * @return {*}
   */
  dynFib: function (n) {
    let val = []

    for (let i = 0; i < n; i++) {
      val[i] = 0
    }

    if (n == 1 || n == 2) {
      return 1
    } else {
      val[1] = 1
      val[2] = 2

      for (let i = 3; i < n; i++) {
        val[i] = val[i - 1] + val[i - 2]
      }

      return val[n - 1]
    }
  },
  /**
   * 迭代实现斐波那契数列
   * @param n
   * @return {number}
   */
  iterFib: function (n) {
    let last = 1
    let nextLast = 1
    let result = 1

    for (let i = 2; i < n; i++) {
      result = last + nextLast
      nextLast = last
      last = result
    }

    return result
  }
}

/**
 * 
 * 寻找最长公共子串
 * @param word1
 * @param word2
 * @return {string}
 */
export function lcs (word1, word2) {
  const word1Len = word1.length
  const word2Len = word2.length
  let max = 0
  let index = 0

  // 初始化：创建有多少行 [empty × 6]
  let lcsArr = new Array(word1Len + 1)

  // 初始化二维数组
  /**
   * 比如word1 = 'abbcc', word2 = 'dbbcc'，那么初始化的数组应该是 5 * 5
   * 但是我们要初始化 6 * 6 的数组
   * 格式如下：
   [
     [ 0, 0, 0, 0, 0, 0 ],
     [ 0, 0, 0, 0, 0, 0 ],
     [ 0, 0, 0, 0, 0, 0 ],
     [ 0, 0, 0, 0, 0, 0 ],
     [ 0, 0, 0, 0, 0, 0 ],
     [ 0, 0, 0, 0, 0, 0 ]
   ]
   * 新增一行和新增一列的原因是：
   * 其实就是为了第一个单词的第一个字母与第二个单词的每个字母作匹配，添加了一个基准，
   * 0其实代表没有匹配成功，默认一开始都没有匹配成功
   */

  // 外循环是行
  for (let i = 0; i < word1Len + 1; i++) {
    // 根据第二个字符的长度，初始化：创建有多少列
    lcsArr[i] = new Array(word2Len + 1)

    // 内循环是列
    for (let j = 0; j < word2Len + 1; j++) {
      lcsArr[i][j] = 0
    }
  }



  for (let i = 0; i <= word1Len; ++i) {
    for (let j = 0; j <= word2Len; ++j) {
      /**
       * 比如第一个单词长度为5，第二个单词的长度为5
       * 第一行和第一列永远是0，因为 0 - 1 不存在
       * 0 0 0 0 0
       * 0 x x x x
       * 0 x x x x
       * 0 x x x x
       * 0 x x x x
       */
      if (i == 0 || j == 0) {
        lcsArr[i][j] = 0
      }
      else {
        // 这里的 i 和 j 都是从1开始
        if (word1[i - 1] == word2[j - 1]) {
          lcsArr[i][j] = lcsArr[i - 1][j - 1] + 1
        } else {
          lcsArr[i][j] = 0
        }
      }

      // 如果变量 max 的值比现在存储在数组中的当前元素要小，
      // max 的值将被赋值给这个元素，变量 index 的值将被设置为 i 的当前值。
      // 目的：1、找到两个单词的最长公共子串，即max；2、再找到最长公共子串的最后一个字符从出的位置
      if (max < lcsArr[i][j]) {
        max = lcsArr[i][j]
        index = i
      }
    }
  }

  /**
   * 最终得出的二位数组的结果
   * 找最长公共子串：找对角线
   * 其实每一行代表第一个单词的每个字母（除去第一行）
   * 每一列代表第二个单词的每个字母（出去第一列）
   [
             d  b  b  c  c
        [ 0, 0, 0, 0, 0, 0 ],
   a    [ 0, 0, 0, 0, 0, 0 ],
   b    [ 0, 0, 1, 1, 0, 0 ],
   b    [ 0, 0, 1, 2, 0, 0 ],
   c    [ 0, 0, 0, 0, 3, 1 ],
   c    [ 0, 0, 0, 0, 1, 4 ]
   ]
   */

  let str = ''

  if (max == 0) {
    return ''
  } else {
    // max：作为终点 （两个单词的最长公共子串的长度是4）
    // index - max：作为起始点，即从第二个单词（或者第一个单词）的哪一个位置开始就是最长公共子串的开始
    // 这里是 i <= max 以及 ++i，而不是 i < max 以及 i++
    // 因此，遍历的次数必须是4，即：i <= max 以及 ++i
    // 如果是 i < max 以及 i++，那么遍历的次数只有3了
    for (let i = index - max; i <= max; ++i) {
      str += word1[i]
    }

    return str
  }
}


export const Knapsack = {
  dyKnapsack : function (capacity, size, value, n) {
    let knapArr = []

    // 初始化数组
    for (let i = 0; i <= capacity + 1; i++) {
      knapArr[i] = []
    }

    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= capacity; j++) {
        if (i == 0 || j == 0) {
          knapArr[i][j] = 0
        }
        else if (size[i - 1] <= j) {
          knapArr[i][j] = max(
            value[i - 1] + knapArr[i - 1][j - size[i-1]],
            knapArr[i - 1][j]
          )
        }
        else {
          knapArr[i][j] = knapArr[i - 1][j]
        }
      }
    }

    console.log(knapArr)
    return knapArr[n][capacity]
  },
  
  optDyKnapsack : function (capacity, size, value) {
    // 行数
    const n = size.length

    // 初始化行
    let knapArr = new Array(n)

    // 添加负一行，负一行的项数为重量 + 1（因为要从0开始），负一行的每一项都填充为0
    knapArr[-1] = new Array(capacity + 1).fill(0)

    for (let i = 0; i < n; i++) {
      // 初始化列，每列每一项赋值为0
      knapArr[i] = new Array(capacity + 1).fill(0)

      // j 代表 0 到 capacity 的重量
      for (let j = 0; j <= capacity; j++) {
        // j < wi (wi 表示第i件物品的质量)
        // 如果j所代表的重量还小于第i件物品的重量，那么证明在j重量下，是无法添加第i件物品的
        // 所以，在j重量下的最大价值依然是基于 i - 1即上一件物品所计算出的价值
        if (j < size[i]) {
          knapArr[i][j] = knapArr[i - 1][j]
        }
        // j >= wi，证明此时可以 【选择】 添加第 i 件物品，或者 是否保留之前已经添加的物品，就要通过计算比较才能得出结论
        else {
          // 假设现在到第1件物品，我们有两种选择：
          // 1、如果选择不放物品 1 ，背包里面有物品 0 ，最大价值为 6 。
          // 2、如果选择放入物品 1 ，我们要用算出背包放入物品 1 后还有多少容量，然后根据容量查出它的价值，再加上物品 1 的价值，即 ${f(0,j-w1)+v1}$  。

          // 第二种选择的意思就是：如果我们要放入物品1，那么就要计算除去物品1后剩余的重量（surplusWeight = xxx），然后再找出在没有添加物品1前，剩余重量的最大价值
          // （其实就是基于上一件物品 i - 1 所计算出来的最大价值），将剩余重量的最大价值 + 物品1的价值 = 选择添加物品1后的价值
          knapArr[i][j] = Math.max(
            knapArr[i - 1][j],
            knapArr[i - 1][j - size[i]] + value[i]
          )
        }
      }
    }
    
    // console.log(knapArr)

    return knapArr[n - 1][capacity]
  }
}

/**
 * 获取两个值中较大的值
 * @param a
 * @param b
 * @return {*}
 */
function max (a, b) {
  return a > b ? a : b
}
