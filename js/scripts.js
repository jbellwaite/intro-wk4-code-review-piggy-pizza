function PizzaOrder(meat, cheese, veggies, sauce, size) {
  this.userMeat = meat;
  this.userCheese = cheese;
  this.userVeggies = veggies;
  this.userSauce = sauce;
  this.userSize = size;
}

PizzaOrder.prototype.pizzaPrice = function () {
  if (this.userSize === "Small") {
    return "10";
  }else if (this.userSize === "Medium") {
    return "15";
  }else {
    return "20";
  }
}



$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var meat = $("#meat").val();
    var cheese = $("#cheese").val();
    var veggies = $("#veggies").val();
    var sauce = $("#sauce").val();
    var size = $("#size").val();

    var pizzaStyle = new PizzaOrder(meat, cheese, veggies, sauce, size);
    pizzaStyle.pizzaPrice();

    $("#output").show();
    $("#order-recap").text(
      "A " +
      pizzaStyle.userSize +
      " pizza, with " +
       pizzaStyle.userMeat +
      " , " +
      pizzaStyle.userCheese +
      " , " +
      pizzaStyle.userVeggies +
      " and " +
      pizzaStyle.userSauce
    );
    $("#cost").text(pizzaStyle.pizzaPrice);

  });
});
