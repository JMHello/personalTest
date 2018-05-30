/**
 * 栈（后进先出）
 * 用途：进制间的转换
 */
class Stack {
  constructor () {
    this.stack = []
  }
  push (item) {
    this.stack.push(item)
  }
  pop () {
    return this.stack.pop()
  }
  peek () {
    return this.stack[0]
  }
  clear () {
    this.stack = []
  }
  size () {
    return this.stack.length
  }
  get () {
    return this.stack
  }
}

export default Stack