#!/usr/bin/env node
console.log("\t***** WELCOME TO EJIS E-FRUIT STORE *****");

console.log(
    `
    \tType\t 1 to view Catalogue
    \t\t 2 to view Shopping cart
    \t\t 3 to checkout
    \tOR\t Simply type product to add to cart:`
);

let x = 0;

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

//console.log("Enter command: ");
/* 
const command = prompt("Enter Command: ");
console.log(command);
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Enter Command: ', (command) => {
console.log(`You entered: ${command}`);
rl.close();
});
*/
// npm install readline-sync
// install synchronous read which is a third-party node package
var command;

do {
    const readlineSync = require('readline-sync');

    command = readlineSync.question('Enter Command: ');

    console.log(`You entered: ${command}`);
    
    switch (command) {
        case '1':
            console.log("\t Produce\t\tPrice");
            for (i in catalogue) {
                console.log(`\t ${catalogue[i].name}\t\t\t${catalogue[i].cost}`);
            }
            break;
        case '2':
            console.log("\t Produce\t Quantity\t Price");
            for (a of cart) {
                console.log(`\t ${a[0]}\t\t ${a[1]}\t\t ${a[2]}`);
            }
            
            break;
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
        default:
            if (command in catalogue){
                let itemCost;
                item = [];
                item.push(command);
                const readlineSync = require('readline-sync');
                let command2 = readlineSync.question('Please enter Quantity: ');
                item.push(command2)
                itemCost = Number(catalogue[command].cost) * Number(command2);
                item.push(itemCost);
                console.log(
                            `\t You added ${command2} ${command} to cart \n\t Total cost of ${command}: ${itemCost}`
                        );
                cart.push(item);
            } else {
                console.log("Product not in Catalogue, Please re-enter prompt!"); 
            }
    }
  
} while (command != '3');
