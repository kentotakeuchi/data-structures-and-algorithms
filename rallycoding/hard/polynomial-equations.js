// https://www.rallycoding.com/problems/264

// solve('5*x^2+3*x-10', 3) > 44

/**
 *
 * @param {string} poly
 * @param {number} x
 * @returns {number}
 */

// MINE
const solve = (poly, x) => {
  poly = poly.replace(/x/g, x)
  console.log({ poly })
  let re = /(\^\d)?/g

  console.log(poly.match(re))

  /*
  var order = poly.match(re).reduce((m, d) => {
    var ex = d.split('^')[1];
    if(ex && (ex > m)){
      return ex
    }
    return m
  }, 0)
  */
}
