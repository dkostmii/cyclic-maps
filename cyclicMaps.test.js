const {
  mapToCyclic,
  getCyclic,
  cycles,
  getFirstPair,
  getLastPair
} = require('./cyclicMaps')

describe('Cyclic maps algorithm test', () => {
  const firstPair = [5, 1]
  const lastPair = [1, 2]
  const testMap = new Map([firstPair, [3, 4], [2, 5], [4, 3], [6, 6], lastPair])
  const expected = [
    new Map([[5, 1], [1, 2], [2, 5]]),
    new Map([[3, 4], [4, 3]]),
    new Map([[6, 6]])
  ]

  it('Get first pair of map', () => {
    expect(getFirstPair(testMap)).toStrictEqual(firstPair)
    expect(getFirstPair(new Map())).not.toBeDefined()
  })

  it('Get last pair of map', () => {
    expect(getLastPair(testMap)).toStrictEqual(lastPair)
    expect(getLastPair(new Map())).not.toBeDefined()
  })

  it('Cycles test', () => {
    expect(cycles(expected[0])).toBe(true)
    expect(cycles(new Map([[5, 1], [1, 2]]))).toBe(false)
    expect(cycles(new Map())).toBe(false)
  })

  it('Get first cycle map', () => {
    const [result] = getCyclic(testMap, getFirstPair(testMap))
    expect(result).toStrictEqual(expected[0])
  })

  it('Test if algorithm works', () => {
    const result = mapToCyclic(testMap)
    expect(result).toStrictEqual(expected)
  })
})
