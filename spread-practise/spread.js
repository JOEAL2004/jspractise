const fruits = [
    "Apple",
    "Banana"
];

const updated_fruits=[...fruits,'Orange','Mango'];
console.log(updated_fruits);

const numbers = [
    10,
    20,
    30
];
numbers.unshift(5);
numbers.push(40);
console.log(numbers);

const laptop = {
    brand:"Dell",
    ram:"16GB"
};

const updated_laptop={...laptop,price:65000};

console.log(updated_laptop);