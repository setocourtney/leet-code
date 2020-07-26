// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }

// 1 bottle of milk:
// getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 }
//   ]) ➞ 1.5
  
//   // 1 bottle of milk & 1 box of cereals:
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Cereals", quantity: 1, price: 2.50 }
//   ]) ➞ 4
  
//   // 3 bottles of milk:
//   getTotalPrice([
//     { product: "Milk", quantity: 3, price: 1.50 }
//   ]) ➞ 4.5
  
const getTotalPrice = (groceries) => {
    return eval(groceries.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0).toFixed(1));
}

  console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
  ]));
