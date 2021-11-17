class CartApi {
  // Handles the main fetch request to the api!
  
  // refUrl == http://localhost:3000/api/v1/show_cart
  constructor(host) {
    this.refUrl = `${host}/show_cart`
  }

  getCart(){
    fetch(this.refUrl)
    .then(response => response.json())
    .then( json => {
      json["data"].forEach(data => {
        debugger
        // should take in data and create FE OBj copies of response info
      })
    })
  }

}