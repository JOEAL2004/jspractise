function multiply(...numbers){
  let product=1;
  for(let number of numbers){
    product*=number;
  }
  return product;
}
console.log(multiply(1,2,3,5,6));

function printPlayers(...players)
{
  for(let player of players){
    console.log(player);
  }
}
printPlayers(
"Messi",
"Ronaldo",
"Neymar"
);

function studentsdata(name,...subjects){
console.log(name);
for(let subject of subjects){
  console.log(subject);
}
};

studentsdata('joeal','Subjects','Javascript','React','Node');