function mergeArrays(arr1, arr2) {
  const set = new Set(arr1)

  arr2.forEach(num => {
    set.add(num)
  })

  const merged = Array.from(set)

  merged.sort((a, b) => a - b)

  return merged
}

console.log(mergeArrays([0, 4, 1, 6, 2], [9, 7, 1, 2, 3]))
