function getLastPair (map) {
  const lastKey = Array.from(map.keys()).slice(-1)[0]
  if (lastKey) {
    return [lastKey, map.get(lastKey)]
  }
}

function getFirstPair (map) {
  const firstKey = Array.from(map.keys())[0]
  if (firstKey) {
    return [firstKey, map.get(firstKey)]
  }
}

function cycles (cyclicMap) {
  if (cyclicMap && cyclicMap.size > 0) {
    const [firstKey] = getFirstPair(cyclicMap)
    const [, lastValue] = getLastPair(cyclicMap)

    return firstKey === lastValue
  }
  return false
}

function getCyclic (map, [key, value]) {
  const result = new Map([[key, value]])
  const visited = [key]

  let currentKey = value
  let currentValue = map.get(currentKey)

  while (currentValue && !cycles(result)) {
    result.set(currentKey, map.get(currentKey))

    visited.push(currentKey)

    currentKey = result.get(currentKey)
    currentValue = map.get(currentKey)
  }

  return [result, visited]
}

exports.mapToCyclic = function (map) {
  const result = []
  let visited = []

  map.forEach((value, key) => {
    if (visited.indexOf(key) === -1 && (result.length === 0 || cycles(result[result.length - 1]))) {
      const [currentMap, visitedKeys] = getCyclic(map, [key, value])
      visited = [...visited, ...visitedKeys]

      result.push(currentMap)
    }
  })

  return result
}

exports.getCyclic = getCyclic
exports.cycles = cycles
exports.getFirstPair = getFirstPair
exports.getLastPair = getLastPair
