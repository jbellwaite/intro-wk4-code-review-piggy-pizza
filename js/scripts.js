function PizzaOrder(toppings, size) {
  this.userToppings = [toppings];
  this.userSize = size;
}



$(document).ready(function() {
  alert ("hey");
  var select = $('select').material_select();
  $("#toppings").submit(function(event) {
    event.preventDefault();
    var selectTopping = $("#toppings").val();
    var selectSize = $("size").val();
    var selectPizza = new PizzaOrder(toppings, size);


    $("#output").text(selectTopping1)
  });
});
