class CartApi {
  // Each instance of the CartApi makes a fetch to the server to get Cart info, which this class formats and sends to each relevant FE OBj method(s) for persitence.
  
  constructor(port){
    this.refUrl = `${port}/show_cart`;
  }

  getCartDetails(){
    fetch(this.refUrl)
    .then(r => r.json())
    .then(renderCartResponse);
    }

    renderCartResponse(responseData){
      debugger;
    }


  
  /*
  refUrl == http://localhost:3000/api/v1/show_cart
  RETURNED JSON EXAMPLES/ATTRIBUTES
{
  "data": {
    "id": "125",
    "type": "shopping_cart",
    "attributes": {
      "number_of_items": 6,
      "sub_total": "291.51",
      "cart_items": [
        {
          "id": 285,
          "name": "Ergonomic Paper Bench",
          "rating": "0.0",
          "number_of_reviews": 0,
          "price": 50,
          "quantity": 3
        }, etc... ]
      "related_items": [
        {
          "id": 4,
          "name": "Lightweight Concrete Table",
          "category": "Video Games",
          "rating": "0.0",
          "number_of_reviews": 0,
          "price": [
            "14.41",
            "36.47"
          ]
        }, etc... ]
      "sponsored_items": [
        {
          "id": 271,
          "name": "Mediocre Leather Bag",
          "rating": "0.0",
          "number_of_review": 0,
          "price": [
            "33.66",
            "88.57"
          ]
        }, etc... ]
  */

  }
