# E-commerce.js (EJIS E-Fruit Store)

E-commerce.js is a simple command-line interface (CLI) application for an e-fruit store called EJIS E-Fruit Store. Users can interact with the application to view the catalog, manage their shopping cart, and proceed to checkout.

## Getting Started

To run the application, make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. Clone this repository:

   ```bash
   git clone https://github.com/Ken-Obieze/learnable-js-e-commerce-console-app.git
   cd e-commerce.js
   ```

2. Install the required npm package:
   ```bash
   npm install readline-sync
   ```

3. Run the application:
   ```bash
   node e-commerce.js
   ```
    OR
   ```bash
   ./e-commerce.js
   ``` 
   Because I have made the e-commerce executable and added `#!/usr/bin/env node` as the first line of code

## Usage
Upon running the application, you will be prompted with a welcome message and a menu to perform various actions:

* Type 1 to view the catalog.
* Type 2 to view the shopping cart.
* Type 3 to proceed to checkout.
* Alternatively, you can type the name of the product to add it to your shopping cart.

## Catalog
The available products and their prices in the catalog are as follows:

* Apple: 200 Naira
* Mango: 200 Naira
* Cashew: 80 Naira
* Pawpaw: 1200 Naira
* Orange: 80 Naira
* Pineapple: 1800 Naira
* Strawberry: 500 Naira

## Shopping Cart
The shopping cart will display the products, quantities, and total prices of the items added.

## Checkout
To complete your purchase, type 3 to view the total number of items and the total cost in the cart. The application will display a thank-you message.
