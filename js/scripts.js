function PizzaOrder(name, meat, cheese, veggies, sauce, size) {
  this.userName = name;
  this.userMeat = meat;
  this.userCheese = cheese;
  this.userVeggies = veggies;
  this.userSauce = sauce;
  this.userSize = size;
}

// function AddDelivery(delivery, address) {
//   this.userDelivery = delivery;
//   this.userAddress = address;
// }

PizzaOrder.prototype.pizzaPrice = function () {
  if (this.userSize === "small") {
    return "10";
  }else if (this.userSize === "medium") {
    return "15";
  }else {
    return "20";
  }
}

PizzaOrder.prototype.lowerCase = function () {
  this.userMeat = this.userMeat.toLowerCase();
  this.userCheese = this.userCheese.toLowerCase();
  this.userSize = this.userSize.toLowerCase();
  this.userVeggies = this.userVeggies.toLowerCase();
  this.userSauce = this.userSauce.toLowerCase();
}


$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var meat = $("#meat").val();
    var cheese = $("#cheese").val();
    var veggies = $("#veggies").val();
    var sauce = $("#sauce").val();
    var size = $("#size").val();

    var pizzaStyle = new PizzaOrder(name, meat, cheese, veggies, sauce, size);
    pizzaStyle.lowerCase();
    $("#output").show();
    $("#order-recap").text(pizzaStyle.userName +
      ", your order for a " +
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
    $("#cost").text(pizzaStyle.pizzaPrice());
  });
});

    // var delivery = $("input:radio[name=delivery]:checked").val();
    //   if (delivery === "delivery") {
    //     $("#address").show();
    //   }
    // });
    // $
    //   var address = $("#address").val();
    // var pizzaDelivery = new AddDelivery(delivery, address);
