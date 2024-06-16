/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  if (arr.length < 1) return [];

  let filteredArray = [];
  arr.forEach((item, itemIdx) => {
      if (fn(item, itemIdx)) {
          filteredArray.push(item)
      };
  })

  return filteredArray;
};