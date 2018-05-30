import Dictionary from '../../data-stru/dictionary'

describe('test data structure: Stack', () => {
  test('test method: set ', async () => {
    const dic = new Dictionary()
    dic.set('Gandalf', 'gandalf@email.com')
    dic.set('John', 'johnsnow@email.com')
    dic.set('Tyrion', 'tyrion@email.com')

    const values = dic.values()
    expect(values.length).toBe(3)
  })

  test('test method: get ', async () => {
    const dic = new Dictionary()
    dic.set('Gandalf', 'gandalf@email.com')
    dic.set('John', 'johnsnow@email.com')
    dic.set('Tyrion', 'tyrion@email.com')

    const Gandalf = dic.get('Gandalf')
    expect(Gandalf).toBe('gandalf@email.com')
  })

  test('test method: remove ', async () => {
    const dic = new Dictionary()
    dic.set('Gandalf', 'gandalf@email.com')
    dic.set('John', 'johnsnow@email.com')
    dic.set('Tyrion', 'tyrion@email.com')

    expect(dic.remove('Gandalf')).toBe(true)
    expect(dic.size()).toBe(2)
  })

  test('test method: clear ', async () => {
    const dic = new Dictionary()
    dic.set('Gandalf', 'gandalf@email.com')
    dic.set('John', 'johnsnow@email.com')
    dic.set('Tyrion', 'tyrion@email.com')

    dic.clear()
    expect(dic.size()).toBe(0)
  })

  test('test method: keys ', async () => {
    const dic = new Dictionary()
    dic.set('Gandalf', 'gandalf@email.com')
    dic.set('John', 'johnsnow@email.com')
    dic.set('Tyrion', 'tyrion@email.com')

    expect(dic.keys()).toEqual(['Gandalf', 'John', 'Tyrion'])
  })

  test('test method: values ', async () => {
    const dic = new Dictionary()
    dic.set('Gandalf', 'gandalf@email.com')
    dic.set('John', 'johnsnow@email.com')
    dic.set('Tyrion', 'tyrion@email.com')

    expect(dic.values()).toEqual(['gandalf@email.com', 'johnsnow@email.com', 'tyrion@email.com'])
  })
})


