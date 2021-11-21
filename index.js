// Define paths
const port = "http://localhost:3000/api/v1";
const showItemPath = "http://localhost:3000/items";
const newOrderPath = "http://localhost:3000/orders/new";
// Define new instance call of JS Page Elements
const cartApi = new CartApi(port);

// !Gets all item related page elements & OO's the front end.
cartApi.getCartDetails();
