/* 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 
*/

function reverse(x: number): number {
  let multiplier = 1
  if (x < 0) {
    multiplier = -1
    x = x * -1
  }
  let answer = Number(x.toString().split('').reverse().join(''))
  if (answer > 2147483648) return 0
  return answer * multiplier
}

console.log(reverse(1534236469))
