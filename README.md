# Project Components

## Links

Deployed App:

<http://gnarsquad.github.io/nozama-front-end>


Back End Repository:
<https://github.com/gnarsquad/nozama-api>

Wireframes:
<http://i.imgur.com/i8euMEe.jpg>

ERD:
<http://i.imgur.com/iOsre56.jpg>


## Description

Nozama is an e-commerce web app that offers users a fine assortment of videogame inspired wares.  Want to fortify your command center against baneling balls?  Check out our siege tanks.  Need to transmute your amulets into a ring? We've got quite a treasure for you in our Horadric Cubes.
Upon creating an account and signing in, users can view the range of products available.  From these, they can add the products they want to their cart.  If they change their mind prior to checkout, they can update item quantities in their cart or delete items entirely.
To check out, users must provide credit card information via stripe which is processed in a secure environment.  Upon verification of their payment, the user's cart is reset and the items they have purchased are displayed in their previous orders.

## Technologies Used

The front-end of this app uses JavaScript, HTML, CSS/SASS, Bootstrap, jQuery, AJAX, and Handlebars.

## Approach

We started by mapping out wireframes and an entity relationship
diagram to determine how our web app could best recieve and render data.

Our back-end was initially planned as utilizing 2 models besides user; product and order.  This structure quickly evolved over the course of designing these models due to needing to maintain user ownership at each transaction phase.  We decided the best way to proceed would be to nest carts within the user schema as an empty array and push data to carts as products were selected.  We also learned how to construct the requisite controllers for products, carts and orders that the nuances of these models required.

On the front-end, we used a combination of JavaScript, jQuery, Bootstrap, Handlebars and AJAX to interact with the server
and render user data in the browser.  To provide security for the user, we
required that all interactions be authenticated and that the user would only be
able to interact with data that they provided.

In an effort to maintain modularity in our code, we created separate directories
for files such as AJAX requests and event handlers.  To backup and track our
project, we made frequent and descriptive commits to our front and back end project repositories.  To prevent merge conflicts, we communicated frequently about which task we were currently working on so as to avoid overlapping on each others' code.  We also took advantage of each others' expertise and insights via pair-programming as much as possible.

## Unsolved Problems

Implement code for our search function

UI improvements, such as displaying an order total per order, and only showing a new quantity input field on cart items if update quantity has not been selected.


## Dependency Installation

Please run 'npm install stripe' to install stripe dependencies.

## User Stories

1.  As a user, I want to be able to sign up and sign in to create a unique account.
2.  As a user, I want to see the products available for purchase.
3.  As a user, when I want to purchase an item I want to be able to add the item to my shopping cart and have it displayed there.
4.  As a user, I want to be able to update and delete items in my cart if I change my mind about what I want to purchase.
5.  As a user, I want to be able to purchase items in my cart using a credit card online.
6.  As a user, I want to be able to see my previous purchases so I know what I've ordered.
7.  As a user, I want to have all the above transactions be secure so my account information and payment information can't be accessed by others.
