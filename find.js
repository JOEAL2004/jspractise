const prices = [100, 250, 600, 800, 150];

const high=prices.find(num=>num>500);
console.log(high);


const cities = [
    "Kannur",
    "Kochi",
    "Calicut",
    "Trivandrum"
];

const st=cities.find(name=>name.startsWith("C"));
console.log(st);

const employees = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Joeal" }
];

const emp=employees.find(
  employee=>employee.id===3);
console.log(`${emp.name}`);