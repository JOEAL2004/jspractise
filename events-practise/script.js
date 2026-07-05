const button=document.querySelector('#btn');
const title=document.querySelector('#title');
const heading=document.querySelector('#heading');
const theme=document.querySelector('#theme');

theme.addEventListener('click',function(){
  heading.textContent='Dark Mode Enabled';
  heading.style.color='white';
  document.body.style.backgroundColor='black';
})

button.addEventListener('click',function(){
  title.textContent='Button clicked';
  title.style.color='green';

});