var form = document.getElementById('addForm');
var itemList =document.getElementById('items');
var filter =document.getElementById('fi lter')

//form submit event 
form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click' , removeItem);
//filter event 
itemList.addEventListener('keyup', filterItems);

//addItem
function addItem(e)
{
    e.preventDefault();
    

    //get input value

    var newItem = document.getElementById('item').value;
    

    // create new li element

    var li = document.createElement('li');
    //add class 
    li.className = 'list-group-item';
    console.log(li)

    //add text node with input value

    li.appendChild(document.createTextNode(newItem));

    //create delete button element

    var deleteBtn = document.createElement('button');

    //add class to del button 

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    
    // append text node 

    deleteBtn.appendChild(document.createTextNode('X'));

    // append delete button 
    li.appendChild(deleteBtn);
    
    itemList.appendChild(li);


}

//remove item

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you Sure?'))
        {
            var li = e.target.parentElement;     
            itemList.removeChild(li); 
        }
    }
}

//filter items
function filterItems(e)
{
     //convert text to lower case
    var text =e.target.value.toLowerCase(); 

    // get lis
    var items = itemList.getElementsByTagName('li');

    //convert to array

    Array.from(items).forEach(function(item)
    {
        var itemName = item.firstChild.textContent;
        const description = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) !=- 1 || description.toLocaleLowerCase().indexOf(text))
        {
            item.style.display = 'block'; 
        }
        else{
            item.style.display = 'none';
        }
    });
}