const { default: fetchQuote } = require('./fetchQuote')

describe('fetch quote', () => {
  it('is object', async () => {
    const obj = await fetchQuote()
    expect.objectContaining(obj)
  })

  it('object conains strings quote_id, appeared_at and value and to be truthy', async () => {
    const obj = await fetchQuote()
    expect(obj.quote_id).toBeTruthy()
    expect(obj.appeared_at).toBeTruthy()
    expect(obj.value).toBeTruthy()
    expect.stringContaining(obj.quote_id)
    expect.stringContaining(obj.appeared_at)
    expect.stringContaining(obj.value)
  })
})
