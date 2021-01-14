const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red','orange','lightblue', 'lightgreen','pink', '#3b5998', '#purple'];

colorBtn.addEventListener('click', changeColor);

function changeColor(){
    //bodyBcg.style.backgroundColor = colors[];
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}