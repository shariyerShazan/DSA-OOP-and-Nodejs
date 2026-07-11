/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.has(t[i])) {
      map.set(t[i], (map.get(t[i]) ?? 0) - 1);
    }
  }
  return [...map.values()].filter((val) => val !== 0).length === 0;
};

console.log(isAnagram("ab", "ac")); 
