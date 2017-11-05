$(function(event){
  console.log('DOM is ready');
  // * Write some code in the addListItem function that creates an element and appends it to the list.
  // * Use a loop to create and append li elements for each name in the listItems array
  // * Set the class of every other list item to be "even"
  // * Set the count span to be the number of list items.

var listItems = ["Go out","Come back" , "Buy food" , "Eat food"];
addListItem();

  function addListItem() {
    $(listItems).each(function(index,items){
      console.log(index, items)
        $("#list").append($("<li>" + items + "</li>"));
    })

    $('li:odd').css("color", 'red');
    // OR as even is a class in css
    $('li:odd').addClass('even');



    $('#count').html($('li').length);
  }

$(function(){

  $('#button').click(function(){
    console.log("I've been clicked")
  })


})



});
