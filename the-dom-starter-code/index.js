// * Write some code in the addListItem function that creates an element and appends it to the list.
// * Use a loop to create and append li elements for each name in the listItems array
// * Set the class of every other list item to be "even"
// * Set the count span to be the number of list items.

var listItems = ["Go out","Come back" , "Buy food" , "Eat food"];

var ulParent = document.getElementById('list');


function addListItem(value) {
  for (var i = 0; i < listItems.length; i++) {
// Create a new element
  var newListItem = document.createElement('li');
// put something in the element
  newListItem.innerHTML = listItems[i];
// add element to document
  ulParent.appendChild(newListItem);
}
}
addListItem();
// write append loop here




// write the class loop here

console.log(document.body);
