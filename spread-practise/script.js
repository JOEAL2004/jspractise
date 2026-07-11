const btn=document.querySelector("#update");
const cart = [
    "Laptop",
    "Mouse"
];

const currentcart=cart.map(product=>`<li>🛒 ${product}</li>`);

document.querySelector("#items").innerHTML=currentcart.join("");
btn.addEventListener('click',function(){
const newcart=[...cart,'keyboard'];
const updatedcart=newcart.map(product=>`<li>🛒 ${product}</li>`);

document.querySelector("#items").innerHTML=updatedcart.join("");

});


