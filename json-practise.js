const person={
  name:'John',
  age:29,
  college:'MIT'
};

const jsondata=JSON.stringify(person);
console.log(jsondata);

const dataobj=JSON.parse(jsondata);
console.log(dataobj);
console.log(dataobj.name,dataobj.age,dataobj.college);

const laptop = {
    brand: "Dell",
    ram: "16GB",
    price: 65000
};

const jsonlap=JSON.stringify(laptop);
console.log(jsonlap);

const lapobj=JSON.parse(jsonlap);
console.log(lapobj);
console.log(lapobj.brand);