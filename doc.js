// // var items= document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent = 'Hellow 2';
// // item[1].style.fontWeight = 'bold';
// // item[1].style.backgroundColor = 'yellow';


// // for(var i=0;i<items.length;i++)
// // {
// //     item[i].style.backgroundColor = '#f4f4f4';


// // }


 var itemList = document.querySelector('#items');
// console.log(itemList);

// //parentELement
// console.log(itemList.parentElement.parentElement.parentElement)

// itemList.parentElement.style.backgroundColor = '#f4f4f4';

// console.log(itemList.parentElement.parentElement.parentElement);


// //child nodes

// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //first child 

// // console.log(itemList.firstChild);

// // // first element child

// // console.log(itemList.firstElementChild);
// // itemList.firstElementChild.textContent = 'Hellow 1';


// //last child 
// console.log(itemList.lastChild);

// // last  element child

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hellow 4';



// next sibling

//console.log(itemList.nextSibling);


// next element sibling

//console.log(itemList.nextElementSibling);


// previous sibling 

//console.log(itemList.previousSibling);

//previousElementSibling

//console.log(itemList.previousElementSibling);

//itemList.previousElementSibling.style.color = 'green';

 
// createElement 

// create a div

var newDiv =document.createElement('div');
// add class 
newDiv.className = 'hellow'; 

// add id

newDiv.id = 'hellow1';

// add attribute

newDiv.setAttribute('title' , 'Hellow Div');

//create a text node 

var newDivText = document.createTextNode('Hellow World');

// add text to div

newDiv.appendChild(newDivText);

var container = document.querySelector  ('header.container');
var h1 =document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);
