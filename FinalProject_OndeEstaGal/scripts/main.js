//open this in devtools and see the result

console.log('this working!!')

let div = document.createElement('div'); //create element
div.classList.add('btn'); //add class to element

document.querySelector('.container').appendChild(div);
div.classList.add('btn-click');
div.classList.remove('btn');

//select element to reference
let header = document.querySelector('h1');
//change one style at a time
header.style.color = 'green';
//if the style has a dash in it - you have to reference it using brackets
header.style["padding-top"] = "30px"; 

div.innerText = 'dude whats up';
document.querySelector('h1').innerText = 'this is now an official header'

//let's create a new element for fun
let newDiv = document.createElement('div');
newDiv.classList.add('clickme');
newDiv.innerText = 'yes i am clickable';
newDiv.style['font-size'] = '30px';
newDiv.style.border = '1px solid black';
document.querySelector('.container').appendChild(newDiv);

let colors = ['red', 'blue', 'purple', 'green', 'black', 'yellow'];

newDiv.addEventListener('click', function(){
    console.log('is this workin');
    //generates random number between 0 and 4
    let randomColorIndex = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomColorIndex];
    newDiv.style.color = randomColor;
})
