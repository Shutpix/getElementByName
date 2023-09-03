var form = document.getElementById('addForm');
var itemList =document.getElementById('items');

//form submit event 

form.addEventListener('submit',addItem);
//delete event

itemList.addEventListener('click' , removeItem);

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
