

const students = [
    "Joeal",
    "Alice",
    "Bob",
    "Charlie"
];

const stu=students.map(student=>`<li>👨‍🎓 ${student}</li>`);

document.querySelector("#list").innerHTML=stu.join("");