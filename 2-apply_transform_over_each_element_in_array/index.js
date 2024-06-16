/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  if (arr.length == 0) return [];

  let transformedArr = [];

  arr.forEach((item, itemIdx) => {
      const transformedItem = fn(item, itemIdx);

      transformedArr.push(transformedItem);
  })

  return transformedArr;
};