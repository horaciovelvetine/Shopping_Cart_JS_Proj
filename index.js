// Define paths
const port = 'http://localhost:3000/api/v1';
const showItemPath = 'http://localhost:3000/items/';
const newOrderPath = 'http://localhost:3000/orders/new';

// Define specific Elements on the Page for ease of recall.
const addSponItemButton = docuement.getElementById('addSponItemToCartBut')
const newOrderButton = docuement.getElementById('newOrderButton')


// Define new instance call of JS Page Elements
const cartApi = new CartApi(port);


addSponItemButton.addEventListener('submit', addToCartHandler)
newOrderButton.addEventListener('submit', newOrderHandler)


//Will likely require being part of a form in order to pass in POST data when submitting the form itself. 
function addToCartHandler(e) {
  e.preventDefault()
  
  //Means creating some routes in the API for it to talk to the items in the backend!
  itemApi.addItemToCart()

  // Add a method to sponItem called renderAdded
  e.target.renderAdded()
}

// Redirects to the new order page, preferably with some data to help fill out the form
function newOrderHandler(e) {
  window.location = newOrderPath
}


// Fetches the cart from the API and begins parsing into relevant FE OBj copies for display.
cartApi.getCartDetails();
