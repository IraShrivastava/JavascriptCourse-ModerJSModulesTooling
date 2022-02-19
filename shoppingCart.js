// Exporting module
console.log('Exporting module')

const shippingCost = 10;
export const cart = []

export const addToCart = function(product, qty){
    cart.push({product, qty})
    console.log(`${qty} ${product} added to cart`)
}

const totalPrice = 237;
const totalQty = 23;

export { totalPrice, totalQty } ;

export default function(product, qty){
    cart.push({product, qty})
    console.log(`${qty} ${product} added to cart`)
}