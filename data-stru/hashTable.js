/**
 * 散列表
 * 使用散列函数，就知道值的具体位置，因此能够快速检索到该值。
 * 散列函数的作用是给定一个键值，然后返回值在表中的地址。
 *
 * 解决散列表冲突的方法：
 * 1、分离链接：散列表 + 链表
 * 2、线性探查：当想向表中某个位置加入一个新元素的时候，如果索引为index的位置已经被占据了，
 *    就尝试index+1的位置。如果index+1的位置也被占据了，就尝试index+2的位置，以此类推。
 */
export class HashTable {
  constructor () {
    this.table = []
  }
  put (key, value) {
    let position = getHashCode(key)

    if (this.table[position] === undefined) {
      this.table[position] = new ValuePair(key, value)
    } else {
      let index = ++position

      while (this.table[index] !== undefined) {
        index++
      }

      this.table[index] = new ValuePair(key, value)
    }
  }
  remove (key) {
    let position = getHashCode(key)

    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        this.table[position] = undefined
      } else {
        let index = ++position

        while (this.table[index] === undefined || this.table[index].key !== key) {
          index++
        }

        if (this.table[position].key === key) {
          this.table[index] = undefined
        }
      }
    }

    return undefined
  }
  get (key) {
    let position = getHashCode(key)

    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        return this.table[position]
      } else {
        let index = ++position

        while (this.table[index] === undefined || this.table[index].key !== key) {
          index++
        }

        if (this.table[position].key === key) {
          return this.table[position]
        }
      }
    }

    return undefined
  }
}

/**
 * 辅助类
 * @param key
 * @param value
 * @constructor
 */
function ValuePair (key, value) {
  this.key = key
  this.value = value
}

/**
 * 散列函数
 * 一个表现良好的散列函数是由几个方面构成的：插入和检索元素的时间（即性能），当然也包括较低的冲突可能性。
 * @param key
 * @return {number}
 */
function getHashCode (key) {
  // 初始化一个hash变量并赋值为一个质数
  let hash = 5381
  const len = key.length

  for (let i = 0; i < len; i++) {
    // 将hash与33相乘，用来当作一个魔力数，并和当前迭代到的字符的ASCII码值相加
    hash = hash * 33 + key.charCodeAt(i)
  }

  // 将使用相加的和与另一个随机质数相除的余数
  return hash % 1013
}