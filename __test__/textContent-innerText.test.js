describe(`test textContent`, () => {
  test(`Return null: if the element is a document, a document type, or a notation`, async () => {
    expect(document.textContent).toBe(null)
  })
  test('Succeeded to get all child nodes including style、script', async () => {
    const div = document.createElement('div')
    div.innerHTML = `<div><script>alert(1)</script><style>.div{color: blue;}</style><span>/*ddd*/</span><span>22222</span></div>`
    expect(div.textContent).toBe(`alert(1).div{color: blue;}/*ddd*/22222`)
  })
  test('Should set value to textContent', async () => {
    const div = document.createElement('div')
    div.innerHTML = `<div><script>alert(1)</script><style>.div{color: blue;}</style><span>/*ddd*/</span><span>22222</span></div>`
    div.textContent = '你好'
    expect(div.textContent).toBe('你好')
  })
})

describe('test innerText', () => {
  test(`Return null: if the element is a document, a document type, or a notation`, async () => {
    expect(document.innerText).toBe(undefined)
  })
  // 这里测试不出
  // test('Succeeded to get all child nodes, not include style、script', async () => {
  //   const div = document.createElement('div')
  //   div.innerHTML = `<div>ddd
  //       <script>alert(1)</script><style>.div{color: blue;}</style>
  //       <span>/*ddd*/</span>
  //       <span>ff22222</span>
  //       </div>`
  //   expect(div.innerText).toBe(undefined)
  // })
  test('Should set value to innerText', async () => {
    const div = document.createElement('div')
    div.innerHTML = `<div><script>alert(1)</script><style>.div{color: blue;}</style><span>/*ddd*/</span><span>22222</span></div>`
    div.innerText = '你好'
    expect(div.innerText).toBe('你好')
  })
})