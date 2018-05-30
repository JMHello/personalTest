/**
 * // ===
 * in操作符 与 hasOwnProperty()
 * 两者区别：后者不能鉴别原型链上的属性，
 *
 * in操作符
 * 用法：如果指定的属性在指定的对象或其原型链中，则in 运算符返回true。
 * 语法：prop in object【prop: 一个字符串类型或者 symbol 类型的属性名或者数组索引（非symbol类型将会强制转为字符串）。】
 * 注意：
 * 1、如果你使用 delete 运算符删除了一个属性，则 in 运算符对所删除属性返回 false。
 * 2、如果你只是将一个属性的值赋值为undefined，而没有删除它，则 in 运算仍然会返回true。
 * 3、如果一个属性是从原型链上继承来的，in 运算符也会返回 true。
 *
 * obj.hasOwnProperty(property)：返回值 - Boolean
 * === //
 *
 */

/**
 * Object.keys()：返回表示给定对象的所有可枚举属性的字符串数组。
 */

/**
 * 集合
 * // ===
 * 集合可用数组或者对象实现。
 * JavaScript的对象不允许一个键指向两个不同的属性，保证了集合里的元素都是唯一的
 * === //
 */
export class Set {
  constructor () {
    this.items = {}
  }
  add (value) {
    if (!this.has(value)) {
      this.items[value] = value
      return true
    }

    return false
  }
  remove (value) {
    if (this.has(value)) {
      delete this.items[value]
      return true
    }

    return false
  }
  has (value) {
    return value in this.items
  }
  clear () {
    this.items = {}
  }
  size () {
    return Object.keys(this.items).length
  }
  values () {
    return Object.keys(this.items)
  }
}
