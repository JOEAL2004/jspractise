const students = [
    { name: "Joeal", marks: 80 },
    { name: "Alice", marks: 45 },
    { name: "Bob", marks: 65 },
    { name: "Charlie", marks: 30 }
];
let filtered=students.filter(student=>student.marks>=50);
const data=filtered.map(student=>`<li>${student.name}-${student.marks}</li>`);
document.querySelector("#lst").innerHTML="hi";
document.querySelector("#lst").innerHTML=data.join("");