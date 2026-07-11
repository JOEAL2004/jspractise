const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango"
];

const fru=fruits.map(fruit=>`<li>🍎 ${fruit}</li>`);
document.querySelector("#ls").innerHTML=fru.join("");