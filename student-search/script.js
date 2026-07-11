const inp = document.querySelector("#read");
const btn = document.querySelector("button");
const status = document.querySelector("#res");

const students = [
    { name: "Joeal", marks: 80 },
    { name: "Alice", marks: 45 },
    { name: "Bob", marks: 65 },
    { name: "Charlie", marks: 30 }
];

function searchStudent() {

    const search = inp.value.trim();

if (search === "") {
    alert("Please enter a name.");
    return;
}

const searchName =
    search.charAt(0).toUpperCase() +
    search.slice(1).toLowerCase();

if(searchName===""){
    alert("Please enter a name.");
    return;
}
    const result = students.find(
        student => student.name === searchName
    );

    if (result) {
        status.textContent = `${result.name} - ${result.marks}`;
    } else {
        status.textContent = "Student data not found";
    }
}

btn.addEventListener("click", searchStudent);

inp.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchStudent();
    }
});