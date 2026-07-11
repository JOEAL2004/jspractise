const multiply=(a,b)=>a*b;
const cube=(a)=>a**3;
const greet=(name)=>{
  console.log("Welcome "+name);
}
const isEven=(a)=>{
  return a%2===0;
};
const subtract=(a,b)=>a-b;

console.log(multiply(1,3));
console.log(cube(3));
console.log(greet('messi'));
console.log(isEven(3));
console.log(isEven(4));

const numbers=[2,4,5,22];
const double=(numbers)=>{
  return numbers*2;
}

const dou=numbers.map(number=>number*2);
console.log(numbers);
console.log(dou);

const names=['messi','neymar','mbappe'];
console.log(names);
const greeting=names.map(name=>"Hello "+name);
console.log(greeting);

const ply=names.map(name=>`⚽ ${name}`);
console.log(ply);

//const listd=names.map(name => <li>{name}</li>);
//console.log(listd);

const fruits=['apple','orange','banana','grapes'];
const up=fruits.map(fruit=>fruit.toUpperCase());
console.log(up);

const prices = [100, 250, 80, 500];
const rupee=prices.map(price=>`₹${price}`);
console.log(prices);
console.log(rupee);

const cities = ["kannur", "kochi", "calicut"];
const CITY=cities.map(city=>city.charAt(0).toUpperCase()+city.slice(1));
console.log(cities);
console.log(CITY);

const marks = [45, 60, 90, 75];
const Marks=marks.map(mark=>`${mark} Marks`);
console.log(marks);
console.log(Marks);