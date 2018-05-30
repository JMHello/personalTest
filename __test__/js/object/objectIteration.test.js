describe(`test some method about object's iteration` , () => {
  var a = {
    name: 'jm',
    age: 18,
    friend: {
      name: 'mm',
      age: 18,
    }
  }

  test('test Object.keys()', async () => {
    expect(Object.keys(a)).toEqual(['name', 'age', 'friend'])
  })

  test('test Object.values()', async () => {
    expect(Object.values(a)).toEqual(['jm', 18, {
      name: 'mm',
      age: 18,
    }])
  })

  test('test Object.entries()', async () => {
    expect(Object.entries(a)).toEqual([
      ['name', 'jm'],
      ['age', 18],
      ['friend',{
        name: 'mm',
        age: 18,
      } ]
    ])
  })
})