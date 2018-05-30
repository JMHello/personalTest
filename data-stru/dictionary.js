/**
 * Object.entries(object)：返回对象可枚举的[key, value]键值对 - [["foo", "bar"], ["baz", 42]]
 * Object.values(object)：返回对象可枚举的value数组
 */

/**
 * 字典
 */
export default class Dictionary {
  constructor () {
    this.items = {}
  }
  set (key, value) {
    this.items[key] = value
  }
  remove (key) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }

    return false
  }
  has (key) {
    return key in this.items
  }
  get (key) {
    return this.has(key) ? this.items[key]: undefined
  }
  clear () {
    this.items = {}
  }
  size () {
    return Object.keys(this.items).length
  }
  keys () {
    return Object.keys(this.items)
  }
  values () {
    return Object.values(this.items)
  }
}