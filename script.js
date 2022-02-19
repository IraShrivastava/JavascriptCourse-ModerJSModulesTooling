// Importing module
// import {addToCart, totalPrice as price, totalQty as qty} from './shoppingCart.js';
//import * as ShoppingCart from './shoppingCart.js'

console.log('Importing module');
// console.log(shippingCost)

//addToCart('icecream', 10);
//ShoppingCart.addToCart('bread', 5)
//console.log(qty, price)
//console.log(ShoppingCart.totalPrice, ShoppingCart.totalQty)
import add, {cart} from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart)

// const shoppingCart2 = (function(){
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQty = 23;

//     const addToCart = function(product, qty){
//         cart.push({product, qty})
//         console.log(`${qty} ${product} added to cart`)
//     };

//     const orderStock = function(product, qty){
//         console.log(`${qty} ${product} ordered from supplier`)
//     };

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQty
//     }
// })();

// shoppingCart2.addToCart('apple', 4)
// shoppingCart2.addToCart('pizza', 2)


//Export
// export.addToCart = function(product, qty){
//     cart.push({product, qty})
//     console.log(`${qty} ${product} added to cart`)
// };

//Import
// const { addToCart } = require('./shoppingCart.js');

//import cloneDeep  from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep  from "lodash-es";
const state = {
    cart: [
        {prod: 'bread', qty: 5},
        {prod: 'pizza', qty: 5},
    ],
    user: {
        loggedIn: true
    }
}

const stateClone = Object.assign({}, state)
const stateDeepClone = cloneDeep(state)
state.user.loggedIn = false;
console.log(stateClone)

console.log(stateDeepClone)

if(module.hot){
    module.hot.accept()
}

class Person {
    #greeting = 'Hey'
    constructor(name){
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`)
    }
}

const ira  = new Person('Ira')

console.log('Ira' ?? null)

console.log(cart.find(el => el.qty >= 2))
