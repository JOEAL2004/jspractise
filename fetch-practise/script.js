const button=document.querySelector("#load");
const output=document.querySelector("#output");

button.addEventListener('click', async function(){
  const response =await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data=await response.json();
  console.log(data.title);
  output.textContent=data.title;
});