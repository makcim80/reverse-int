module.exports = function reverse (n) {
  let result = ''

  n = Math.abs(n).toString()

  for (let i = 0; i < n.length; i++) {
    result = n[i] + result
  }
  
  return +result
}
