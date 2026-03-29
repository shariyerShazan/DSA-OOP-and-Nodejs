/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let index = heights
    .map((value, index) => ({ value, index }))
    .sort((a, b) => b.value - a.value)
    .map((item) => item.index);
  let i = 0;
  let newArr = [];
  for (let idx of index) {
    newArr[i] = names[idx];
    i++;
  }
  return newArr;
};
