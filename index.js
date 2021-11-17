// Define host path
const port = 'http://localhost:3000/api/v1';

// Define specific Elements on the Page for ease of recall.

// Define new instance call of JS Page Elements
const cartApi = new CartApi(port);





// Add default handle_submit
// function handle_submit(e) {
//   e.preventDefault()
// }


// Fetches the cart from the API and begins parsing into relevant FE OBj copies for display.
cartApi.getCartDetails();
