console.log("Counting from 1 to 5");
for(let i=1;i<=5;i++)
{
  console.log(i);
}

console.log("Count down");
for(let i=5;i>=1;i--)
{
  console.log(i);
}

console.log("Even numbers");
for(let i=2;i<=10;i+=2)
{
  console.log(i);
}
function printTable(num)
{
  for(let i=1;i<=10;i++)
  {
    console.log(i+"*"+num+"="+(i*num));
  }
}
printTable(5);