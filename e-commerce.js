#!/usr/bin/env node
console.log("\t***** WELCOME TO EJIS E-FRUIT STORE *****");

// Prompt for command
console.log(
    `
    \tType\t 1 to view Catalogue
    \t\t 2 to view Shopping cart
    \t\t 3 to checkout
    \tOR\t Simply type product to add to cart:`
);

let x = 0;

// Object to store shop catalogue
const catalogue = {
    apple:{
        name:"apple",
        cost:200
    },
    mango:{
        name:"mango",
        cost:200
    },
    cashew:{
        name:"cashew",
        cost:80
    },
    pawpaw:{
        name:"pawpaw",
        cost:1200
    },
    orange:{
        name:"orange",
        cost:80
    },
    pineapple:{
        name:"pineapple",
        cost:1800
    },
    strawberry:{
        name:"strawberry",
        cost:500
    }
};

const cart = [];


var command;

do {
    // npm install readline-sync
    // install synchronous read which is a third-party node package
    const readlineSync = require('readline-sync');

    command = readlineSync.question('Enter Command: ');
    console.log(`You entered: ${command}`);
    
    switch (command) {
        // case 1 shows cataloue
        case '1':
            viewCatalogue();
            break;
        // case 2 shows content in shopping cart
        case '2':
            viewCart();
            break;
        // case 3 processing content in cart and proceeds to checkout
        case '3':
            let sum = 0;
            let totalCost = 0;
            for (a of cart) {
                sum += Number(a[1]);
            }
            for (a of cart) {
                totalCost += Number(a[2]);
            }
            console.log(`
            You bought ${sum} items at a total cost of ${totalCost} Naira
            ***** THANK YOU FOR SHOPPING AT EJIS E-FRUIT STORE *****
            ******************* SEE YOu SOON *******************`);
            break;
        // Handles the addition of product to cart
        default:
            if (command in catalogue){
                addToCart(command);
            } else {
                console.log("Product not in Catalogue, Please re-enter prompt!"); 
            }
    }
  
} while (command != '3');

// viewCatalogue function declaration
function viewCatalogue() {
    console.log("\t Produce\t\tPrice");
    for (i in catalogue) {
        console.log(`\t ${catalogue[i].name}\t\t\t${catalogue[i].cost}`);
    };
}

// addToCart function declaration
function addToCart(command) {
    let itemCost;
    item = [];
    item.push(command);
    const readlineSync = require('readline-sync');
    let command2 = readlineSync.question('Please enter Quantity: ');
    item.push(command2);
    itemCost = Number(catalogue[command].cost) * Number(command2);
    item.push(itemCost);
    console.log(
                `\t You added ${command2} ${command} to cart \n\t Total cost of ${command}: ${itemCost}`
           );
    cart.push(item);
}

// viewCart function declaration
function viewCart() {
    console.log("\t Produce\t Quantity\t Price");
    for (a of cart) {
        console.log(`\t ${a[0]}\t\t ${a[1]}\t\t ${a[2]}`);
    };
}
