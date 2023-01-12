/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

1. find the shortest string and remove it from the array
2. Check that string againt the other strings to see if they contain the entire sting as their prefix
3. if they match, return the string, otherwise remove a letter from the end of the string and check again
4. Continue steps 2 and 3 until there is a match or there are no more characters left in the sting

*/

function longestCommonPrefix(strs: string[]): string {
  const stringArray = [...strs]

  let shortestStringIndex = 0

  stringArray.forEach((element, index) => {
    if (element.length < stringArray[shortestStringIndex].length) {
      shortestStringIndex = index
    }
  })

  let shortestString = stringArray[shortestStringIndex]
  stringArray.splice(shortestStringIndex, 1)

  for (let x = 0; x < shortestString.length; x++) {
    let prefix = shortestString
    if (x !== 0) prefix = shortestString.slice(0, -x)

    let match = true
    stringArray.forEach((element) => {
      let elementPrefix = element.slice(0, prefix.length)

      if (elementPrefix !== prefix) match = false
    })
    if (match === true) return prefix
  }

  return ''
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
