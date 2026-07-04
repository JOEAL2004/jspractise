const age=21;

if(age>=18){
  console.log("Adult");
}
else{
  console.log("Minor");

}

const marks=78;

if(marks>=90)
{
  console.log("Grade A");
}
else if(marks>=75)
{
  console.log("Grade B");
}
else if(marks>=50)
{
  console.log("Grade C");
}
else{
  console.log("Failed");
}

function checkEvenOdd(num){
  if(num%2===0)
  {
    console.log(num+" is Even");
  }
  else{
    console.log(num+" is Odd");
  }
}
checkEvenOdd(9);