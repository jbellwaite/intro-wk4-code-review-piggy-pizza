##Piggy Pizza

#### A website for a pizza company (Piggy Pizza) where a user can choose one or more individual toppings (meat, cheese, veggies, sauce) and a size to order a pizza and see the final cost. September 29, 2017

#### By **Jessie Waite**

## Description

A website created with HTML, CSS, Bootstrap, Javascript and jQuery to allow a user to order pizza. The website is essentially an order form, which walks to user through ordering a pizza, step-by-step. The first step, the user enters their name. The second step, the user selects which toppings they'd like on their pizza. The website has four drop-down menus where the user can select one topping from each category: meat, cheese, veggies and sauce. The third step, the user selects the size of pizza they'd like to order. Once the user has made their selections, they press a button to submit their order. The price is calculated, and the user's name and order is displayed, along with the price of their order.  


### Specs
| Behavior                                                                                        | Input                                    | Output                                                                                               |
|-------------------------------------------------------------------------------------------------|------------------------------------------|------------------------------------------------------------------------------------------------------|
| The program allows the user to select toppings for their pizza.                                 | Pepperoni, Mozzarella, Peppers, Marinara | Pepperoni, Mozzarella, Peppers, Marinara                                                             |
| The program allows the user to select the size of their pizza.                                  | Medium                                   | Medium                                                                                               |
| The program allows the user to enter their name                                                 | Jessie                                   | Jessie                                                                                               |
| The program allows the user to enter personal details for order delivery.                       | Jessie Waite, 555 Main Street            | Jessie Waite, 555 Main Street                                                                        |
| The program calculates the customer's order total.                                              | Order Pizza                              | $19.99 due                                                                                           |
| The program displays a recap of the customer's name, their order, and the price of their pizza. | Submit Order                             | Jessie, your order for a small pizza, with pepperoni, mozzerella, mushrooms and marinara will be:$10 |

## Setup/Installation Requirements

* _Clone the "piggy-pizza" repository to your desktop from GitHub here: https://github.com/jbellwaite/piggy-pizza.git
* _Open the "piggy-pizza" folder_
* _Open a web-browser, preferably Chrome._
* _Drag "index.html" into an open tab in your web browser to open the application._
* _Once open in the web browser, enter your name, select your toppings from the drop-down menus, select a size, and then press "Submit order". The page will display your order details and the price of your pizza.

_Use a text editor like Atom to edit code._

## GitHub GH-Pages link
_https://jbellwaite.github.io/piggy-pizza/_

## Known Bugs
* I was unable to get the "Pig with a Pizza" picture that displays once the order is submitted to work when I sourced the picture from my img folder. I was able to get the picture to display when I used the web address though, so my syntax must've been wrong.

* I also started to add the additional functionality of calculating the price of the pizza when the user selected a delivery option. I tried to add an address form as well that would only appear once the user selected the "deliver" method, instead of a "pick-up" method. For time purposes, I commented the areas I began to work on out. I may or may not pick back up where I left off later this weekend.

* I did spend a majority of my time this morning trying to get Materialize to work, as opposed to using Bootstrap. I was able to get check-boxes to display, but once I added a drop-down box which required a line of jQuery, the function wasn't recognized. I spent some time trying to fix it, but I started to run out of time, so I abandoned it.

## Technologies Used
* javaScript and jQuery
  * CSS
  * HTML
  * Bootstrap

## Support and contact details

_Email Jessie with comments or questions._
_jess.bell@me.com_

### License

*{This software is not licensed under the MIT license}*

Copyright (c) 2017 **_{Jessie Bell Waite}_**
