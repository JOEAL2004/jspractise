localStorage.setItem("name","joeal");
const name=localStorage.getItem("name");
console.log(name);

const city = {
    name: "Kannur",
    state: "Kerala"
};

const data=localStorage.JSON.stringify(getItem("city"));
console.log(data.name);

const players = [
    "Messi",
    "Ronaldo",
    "Neymar"
];


const res=localStorage.JSON.parse(getItem("players"));
for(let r of res){
  console.log(r);
};