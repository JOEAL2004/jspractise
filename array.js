const students=["Joeal","Alice","Bob","Sam"];
console.log(students[0]);
console.log(students[2]);

console.log(students.length);

students[3]="Tom";

console.log(students);

function printstudents(list){
for(let i=0;i<list.length;i++)
{
  console.log(list[i]);
}
}

list=["joeal","rapheal","james"];
printstudents(list);