const Age=document.querySelector('#age');
const Name=document.querySelector('#name');
const College=document.querySelector('#college');
const Branch=document.querySelector('#branch');

const student = {
    name: "Joeal",
    age: 21,
    college: "GCEK",
    branch: "CSE"
};

const {name,age,college,branch}=student;
Name.textContent=`👨‍🎓 ${name}`;
Age.textContent=`Name: ${age}`;
Branch.textContent=`Branch: ${branch}`;
College.textContent=`College: ${college}`;
