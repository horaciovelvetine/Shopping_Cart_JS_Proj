// Define paths
const port = 'http://localhost:3000/api/v1';
const showItemPath = 'http://localhost:3000/items/'

// Define specific Elements on the Page for ease of recall.
const addSponItemButton = docuement.getElementById('addSponItemToCartBut')


// Define new instance call of JS Page Elements
const cartApi = new CartApi(port);


addSponItemButton.addEventListener('submit', addToCartHandler)

function addToCartHandler(e) {
  e.preventDefault()
  
  //Means creating some routes in the API for it to talk to the items in the backend!
  itemApi.addItemToCart()

  // Add a method to sponItem called renderAdded
  e.target.renderAdded()
}
// Add default handle_submit
// function handle_submit(e) {
//   e.preventDefault()
// }


// Fetches the cart from the API and begins parsing into relevant FE OBj copies for display.
cartApi.getCartDetails();
