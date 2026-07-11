function calculateBill(...prices){
  let total=0;
  for(let price of prices){
    total+=price;
  }
  console.log('Total Bill\n');
  console.log(`₹${total}`);
}

calculateBill(
100,
200,
50,
150
);