function PizzaOrder(meat, cheese, veggies, sauce, size) {
  this.userMeat = meat;
  this.userCheese = cheese;
  this.userVeggies = veggies;
  this.userSauce = sauce;
  this.size = size;
}

PizzaOrder.prototype.pizzaPrice = function () {
  if (this.size === "Small") {
    return "10";
  }else if (this.size === "Medium") {
    return "15";
  }else {
    return "20";
  }
}


$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var selectMeat = $("#meat").val();
    var selectCheese = $("#cheese").val();
    var selectVeggies = $("#veggies").val();
    var selectSauce = $("#sauce").val();
    var selectSize = $("#size").val();

    var pizzaStyle = new PizzaOrder (meat, cheese, veggies, sauce, size);
    pizzaStyle.pizzaPrice();
    console.log(pizzaStyle.pizzaPrice);
    $("#output").text("hey");
  });
});
