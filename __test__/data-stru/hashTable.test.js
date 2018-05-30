import {HashTable} from '../../data-stru/hashTable'

describe('test data structure: HashTable', () => {

  test('test method: put', () => {
    const ht = new HashTable()
    ht.put('Gandalf', 'gandalf@email.com')
    ht.put('John', 'johnsnow@email.com')
    ht.put('Tyrion', 'tyrion@email.com')

    expect(ht.get('John').value).toBe('johnsnow@email.com')
  })

  test('test method: get', () => {
    const ht = new HashTable()
    ht.put('Gandalf', 'gandalf@email.com')
    ht.put('John', 'johnsnow@email.com')
    ht.put('Tyrion', 'tyrion@email.com')

    expect(ht.get('John').value).toBe('johnsnow@email.com')
  })

  test('test method: remove', () => {
    const ht = new HashTable()
    ht.put('Gandalf', 'gandalf@email.com')
    ht.put('John', 'johnsnow@email.com')
    ht.put('Tyrion', 'tyrion@email.com')

    ht.remove('John')
    expect(ht.get('John')).toBe(undefined)
  })
})


