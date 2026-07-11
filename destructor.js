const movie = {
    title: "Interstellar",
    year: 2014,
    rating: 8.7
};

const {title,rating}=movie;
console.log(title);
console.log(rating);

const languages = [
    "JavaScript",
    "Python",
    "Java"
];

const [first,second,]=languages;
console.log(first);
console.log(second);

const employee = {
    name: "John",
    salary: 50000
};

const {name:employename}=employee;
console.log(employename);