const prompt = require("prompt-sync")();

// Declaring Variables, menu items & Prices
let meals, price, userName, choice, order;
let quantity, details;
let delivery, phoneNumber, address, deliveryFee;

meals = ['Jollof rice and Chicken',
  'Fried rice and Chicken',
  'White rice and Chicken']
cost = [1500, 1400, 2000]


// Greeting the user 
console.log(`Welcome to Chicken City!
I'm Moses `)
userName = prompt(`What's your name please? `)

console.log(`Alright, ${userName}.
Would you like to see today's menu? `)
choice = prompt(`Reply with 'yes' to see the menu or 'no' to cancel `)


// The Menu
if (choice === `yes` || choice === `Yes` || choice === `YES`) {
  console.log(`Here's the Menu. Please choose a meal below:

To choose ${meals[0]} (₦1,500), reply with "one"
To choose ${meals[1]} (₦1,400), reply with "two"
To choose ${meals[2]} (₦2,000), reply with "three"`)

  // Making your order
  order = prompt(`What would you like to eat? `)

  if (order === 'One' || order === 'one' || order === 'ONE') {
    quantity = prompt(`How many servings? `)
    price = quantity * cost[0]
    details = `Jollof Rice and Chicken`


  } else if (order === 'two' || order === 'Two' || order === 'TWO') {
    quantity = prompt(`How many servings? `)
    price = quantity * cost[1]
    details = `Fried Rice and Chicken`


  } else if (order === 'three' || order === 'three' || order === 'three') {
    quantity = prompt(`How many servings? `)
    price = quantity * cost[2]
    details = `White Rice and Chicken`
  }


  // Order confirmation & Checkout
  deliveryFee = 500
  totalPrice = price + deliveryFee;
  delivery = prompt(`Your bill is ₦${price}, the delivery charge is ₦${deliveryFee} to make a total of ₦${totalPrice} 
Shall we proceed to checkout? `);
  phoneNumber = prompt(`What's your phone number? `);
  address = prompt(`What's your address please? `);

  console.log(`
${quantity} serving(s) of ${details} coming right up!

Your order is being processed, our dispatch rider will call you on ${phoneNumber} soon.
It will be delivered to ${address} within the hour and you will be charged a total of ₦${totalPrice}.
You can pay cash or transfer on delivery.

Thanks for your patronage ${userName}, we hope to see you again soon, preferably tomorrow ;). 
Have a great day!`)

} else if (choice === `no` || choice === `No` || choice === `NO`) {
  console.log(`That's too bad, we're open everyday, hope to serve you better next time!`)
}