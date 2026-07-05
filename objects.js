const student={
  name:"Joeal",
  age:21,
  college:"GCEK"
}
console.log(student.name);
console.log(student.age);

student.branch="CSE";

student.age=22;

console.log(student);

const me={
  name:"Joeal",
  age:21,
  college:"GCEK",
  branch:"CSE",
  isstudent:true
}

console.log(me.name);
console.log(me.age);
console.log(me.college);
console.log(me.branch);
console.log(me.isstudent);

me.country="India";
me.age+=1;
console.log(me);