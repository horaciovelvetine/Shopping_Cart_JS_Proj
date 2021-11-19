// Define paths
const port = 'http://localhost:3000/api/v1';
const showItemPath = 'http://localhost:3000/items/';
const newOrderPath = 'http://localhost:3000/orders/new';
// Define new instance call of JS Page Elements
const cartApi = new CartApi(port);

cartApi.getCartDetails();



// Define specific Elements on the Page for ease of recall.
// const addSponItemButton = docuement.getElementById('addSponItemToCartButton')
// const newOrderButton = docuement.getElementById('newOrderButton')
// const cartInfoDisplay = docuement.getElementById('cartInfoDisplay')




// Handles events listener from sponsored_items sidebar add?? (May need to be removed into the sponsored items class as a part of the setting up of each individual item)
// addSponItemButton.addEventListener('submit', addToCartHandler)
function addToCartHandler(e) {
  e.preventDefault()
  debugger;
  //Means creating some routes in the API for it to talk to the items in the backend!
  // itemApi.addItemToCart()
  
  // // Add a method to sponItem called renderAdded
  // e.target.renderAdded()
}

//Should handle the Proceed to checkout button!
// newOrderButton.addEventListener('submit', newOrderHandler)
// Redirects to the new order page, preferably with some data to help fill out the form
function newOrderHandler(e) {
  e.preventDefault
  debugger;
  // window.location = newOrderPath
}


// Fetches the cart from the API and begins parsing into relevant FE OBj copies for display.
