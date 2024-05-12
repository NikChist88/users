export const removeDuplicates = (arr: string[]) => {
  const uniqueStrings = []

  for (let i = 0; i < arr.length; i++) {
    if (uniqueStrings.indexOf(arr[i]) === -1) {
      uniqueStrings.push(arr[i])
    }
  }

  return uniqueStrings
}
