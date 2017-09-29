PizzaOrder function(topping1, topping2, topping3, topping4, size) {
  this.userTopping1 = topping1;
  this.userTopping2 = topping2;
  this.userTopping3 = topping3;
  this.userTopping4 = topping4;
  this.userSize = size;
}



$(document).ready(function(){
  $("form#toppings").submit(function(event){
    event.preventDefault();
    var selectTopping1 = $("#topping1").val();
    var selectTopping2 = $("#topping2").val();
    var selectTopping3 = $("#topping3").val();
    var selectTopping4 = $("#topping4").val();
    var selectSize = $('select').material_select();

    var selectTopping = new PizzaTopping(topping1, topping2, topping3, topping4, size);
    console.log(selectTopping);
  })
})
