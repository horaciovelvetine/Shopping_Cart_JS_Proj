class CartApi {
  // Each instance of the CartApi makes a fetch to the server to get Cart info, which this class formats and sends to each relevant FE OBj method(s) for persitence.
  
  constructor(port){
    this.refUrl = `${port}/show_cart`;
  }


    // json["data"]["attributes"]["sponsored_items"].forEach(i => {
      //   const sponItem = new sponItem(i)
      //   sponItem.addToDom()
    // })
  getCartDetails() {
    fetch(this.refUrl)
    .then(r => r.json())
    .then( json => {
      const cart = new Cart({id: json["data"].id, ...json["data"].attributes})
      
      // debugger
      // ?Creates CartItems OBj
      json["data"].attributes.cart_items.forEach((item) => {
        const c = new CartItem(item);
        c.attachToCart();
      });

      // ?Creates SponItems OBj
      json["data"].attributes.sponItems.forEach((item) => {
        const s = new SponsorItem(item);
        s.attatchToDom();
      });

      //?Create RelItems OBj
      json["data"].attributes.relItems.forEach((item) => {
        const r = new RelItem(item);
        r.attatchToDom();
      })

      return cart;
    });
  }

  sendUpdatePatch() {
    // TODO: PERSISTS THE CHANGES ON THE FRONT END OF THE CART TO THE BACK END AND GRABS THE NEWLY UDATED CART INFO
  }

}


