let name = "shazan";
console.log(name.length); // 6

console.log(name.slice(0, 3)); // sha
console.log(name.slice(3, name.length)); // zan
console.log(name.slice(-3, name.length)); // zan

//! substring
console.log(name.substring(2)); // azan
console.log(name.substring(2, name.length - 1)); // aza
name = name.toUpperCase();
console.log(name); //SHAZAN
console.log(name.toLowerCase()); // shazan

console.log(name.concat(" ", "priya")); // SHAZAN priya
console.log(name.concat(" ", "priya").toLowerCase()); // shazan priya

let me = "       shariyer shazan      ";
console.log(me); //        shariyer shazan
console.log(me.trim()); // shariyer shazan

name = name.toLowerCase();
console.log(name.charAt(2)); // a
console.log(name.charCodeAt(2)); // 97
console.log("a".charCodeAt()); // 97
console.log("A".charCodeAt()); // 65

for (let i = name.length - 1; i >= 0; i--) {
  console.log(name.charAt(i));
}

let rev = "";
for (let i = name.length - 1; i >= 0; i--) {
  rev += name.charAt(i);
}
console.log(rev) // nazahs