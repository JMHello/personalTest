export default class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  isValid(str) {
    return /^[a-z1-9]+$/i.test(str);
  }

  /**
   * 添加节点
   * // ===
   * 省份编码：120000
   * 城市编码：121300
   * 地区编码：121314
   *
   * 思路：
   * 1、将两个数看作一个整体；
   * 2、如果位置为2和3的都是0，则证明是省份编码；如果位置为4和5的都是0，则证明是城市编码；其余的就是地区编码
   *
   * 3、首先插入的是省份编码
   *
   * 4、接下来插入城市编码
   * 5、最后插入地区编码
   * === //
   * @param obj
   * @return {boolean}
   */
  insert(obj) {
    // 省份/地区/街道的编码
    const id = obj.id
    // 省份/地区/街道的名称
    const name = obj.name

    // addWord
    if (this.isValid(obj.id)) {
      // 根节点
      let cur = this.root;
      let node

      // 获取编码数组 ['12', '00', '00']
      let codeArr = []
      const idLen = id.length
      let i = 0

      while (i < idLen) {
        codeArr.push(id.slice(i, i + 2))
        i += 2
      }

      const codeArrLen = codeArr.length

      for (let j = 0; j < codeArrLen; j++) {
        const index = codeArr[j]
        node = cur.edges[index]

        if (index !== '00' && node === null) {
          node = (cur.edges[index] = new TrieNode())

          node.code = index
          node.value = name
          node.numPass = 1
        } else {
          node.numPass++
        }

        cur = node
      }

      cur.isEnd = true
      cur.numEnd++
      return true
    } else {
      return false;
    }
  }
  remove(word){
    if (this.isValid(word)) {
      var cur = this.root;
      var array = [], n = word.length
      for (var i = 0; i < n; i++) {
        var c = word.charCodeAt(i);
        c = this.getIndex(c)
        var node = cur.edges[c];
        if(node){
          array.push(node)
          cur = node
        }else{
          return false
        }

      }
      if(array.length === n){
        array.forEach(function(){
          el.numPass--
        })
        cur.numEnd --
        if( cur.numEnd == 0){
          cur.isEnd = false
        }
      }
    }else{
      return false
    }
  }
  preTraversal(cb){//先序遍历
    function preTraversalImpl(root, str, cb){
      cb(root, str);
      for(let i = 0,n = root.edges.length; i < n; i ++){
        let node = root.edges[i];
        if(node){
          preTraversalImpl(node, str + node.value, cb);
        }
      }
    }
    preTraversalImpl(this.root, "", cb);
  }
  // 在字典树中查找是否存在某字符串为前缀开头的字符串(包括前缀字符串本身)
  isContainPrefix(word) {
    if (this.isValid(word)) {
      var cur = this.root;
      for (var i = 0; i < word.length; i++) {
        var c = word.charCodeAt(i);
        c -= 48; //减少”0“的charCode
        if (cur.edges[c]) {
          cur = cur.edges[c];
        } else {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
  isContainWord(str) {
    // 在字典树中查找是否存在某字符串(不为前缀)
    if (this.isValid(word)) {
      var cur = this.root;
      for (var i = 0; i < word.length; i++) {
        var c = word.charCodeAt(i);
        c -= 48; //减少”0“的charCode
        if (cur.edges[c]) {
          cur = cur.edges[c];
        } else {
          return false;
        }
      }
      return cur.isEnd;
    } else {
      return false;
    }
  }
  countPrefix(word) {
    // 统计以指定字符串为前缀的字符串数量
    if (this.isValid(word)) {
      var cur = this.root;
      for (var i = 0; i < word.length; i++) {
        var c = word.charCodeAt(i);
        c -= 48; //减少”0“的charCode
        if (cur.edges[c]) {
          cur = cur.edges[c];
        } else {
          return 0;
        }
      }
      return cur.numPass;
    } else {
      return 0;
    }
  }
  countWord(word) {
    // 统计某字符串出现的次数方法
    if (this.isValid(word)) {
      var cur = this.root;
      for (var i = 0; i < word.length; i++) {
        var c = word.charCodeAt(i);
        c -= 48; //减少”0“的charCode
        if (cur.edges[c]) {
          cur = cur.edges[c];
        } else {
          return 0;
        }
      }
      return cur.numEnd;
    } else {
      return 0;
    }
  },
  getRoot () {
    return this.root
  }
}

class TrieNode {
  constructor() {
    this.numPass = 0;//有多少个单词经过这节点
    this.numEnd = 0; //有多少个单词就此结束
    this.edges = [];
    this.code = ""; // 我这里将两个字符看作整体，例如：code = 11看作一个整体
    this.value = "" // 对应code的值
    this.isEnd = false;
  }
}