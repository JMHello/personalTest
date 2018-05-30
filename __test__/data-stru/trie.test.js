import Trie from '../../data-stru/trie'

describe('test trie structor', () => {
  test('create a trie', async () => {
    const trie = new Trie()

    trie.insert('aa')
    trie.insert('bb')
    trie.insert('cc')
    
    trie.preTraversal(function (root, str) {
      console.log(root, str)
    })
  })
})