// Write your code below:
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Fruit World';
mainHeading.style.color = 'orange';

const header = document.getElementById('header');
//header.style.color = 'orange';
header.style.backgroundColor = 'green';
header.style.borderBottom = '3px solid orange';

const basketHeading = document.getElementById('basket-heading');

basketHeading.style.color = 'green';

const thanks = document.getElementById('thanks');

thanks.innerHTML = '<p>Please visit us again</p>'
// Write your code below:

//getElementsByClassName returns an HTMLCollection of elements with the specified class name.
const fruits = document.getElementsByClassName('fruit')

fruits[2].style.backgroundColor = 'yellow';

for (let i = 0; i < fruits.length; i++){
    fruits[i].style.fontWeight = 'bold';
}
// Write your code below:
const listItems = document.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++){
    listItems[i].style.fontStyle = 'italic';
}

listItems[4].style.color = 'red';

//Query Selector and Query Selector All
// Write the code as shown in the video below:
const mainHeading = document.querySelector('#main-heading');

mainHeading.style.textAlign = 'end';

const basketHeading = document.querySelector('#basket-heading');

basketHeading.style.color = 'brown';
basketHeading.style.marginLeft = '30px';

const fruits = document.querySelector('.fruits');

fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';


// Write answer to the questions asked below:
const evenFruits = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < evenFruits.length; i++){
    evenFruits[i].style.backgroundColor = 'brown';
    evenFruits[i].style.color = 'white';
    evenFruits[i].style.padding = '5px';
    evenFruits[i].style.borderRadius = '5px';
}

const oddFruits = document.querySelectorAll('.fruit:nth-child(odd)');
for (let i = 0; i < oddFruits.length; i++) {
    oddFruits[i].style.backgroundColor = 'lightgray';
    oddFruits[i].style.color = 'black';
    oddFruits[i].style.padding = '5px';
    oddFruits[i].style.borderRadius = '5px';
}

//Creating elements and DOM relations
// Write your code below:
const h3 = document.createElement('h3');
h3.textContent = 'Buy high quality organic fruits online';
h3.style.fontStyle = 'italic';

const divs = document.getElementsByTagName('div');
const firstDiv = divs[0];
firstDiv.appendChild(h3);

const para = document.createElement('p');
const paraText = document.createTextNode('Total fruits: 4');
para.appendChild(paraText);
para.id = 'fruits-total';

const secondDiv = divs[1];
const fruits = document.querySelector('.fruits');
secondDiv.insertBefore(para, fruits);