import {add,multiply,divide,subtract} from "./math.js";
const Add=document.querySelector('#add');
const Multiply=document.querySelector('#multiply');

Add.textContent=add(2,5);
Multiply.textContent=multiply(2,4);
document.querySelector("#subtract").textContent = subtract(20,10);

document.querySelector("#divide").textContent = divide(20,10);