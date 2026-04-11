import { prompt } from "../4_js_pattern/1_node_prompt_sync_.js";

let name = prompt("Enter a string:  ")
console.log(name) // ShAzAn
let toggle = ""
for(let i = 0 ; i<name.length ; i++){
    if(name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90){
        toggle += name[i].toLowerCase()
    } else{
        toggle += name[i].toUpperCase();
    }
}
console.log(toggle); // sHaZaN