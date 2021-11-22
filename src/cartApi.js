class CartApi {


  constructor(port) {
    this.demoUrl = `${port}/show_cart`
    this.baseUrl = `${port}/carts`
  }

  getCartDetails() {
    fetch(this.demoUrl)
      .then((r) => r.json())
      .then((json) => {
        const cart = new Cart({
          id: json["data"].id,
          ...json["data"].attributes
        });

        // ?Creates CartItems OBj
        json["data"].attributes.cart_items.forEach((item) => {
          const c = new CartItem(item);
          c.attachToCart();
        });

        // ?Creates SponItems OBj
        json["data"].attributes.sponsored_items.forEach((item) => {
          const s = new SponsorItem(item);
          s.attatchToDom();
        });

        // ?Create RelItems OBj
        json["data"].attributes.related_items.forEach((item) => {
          const r = new RelatedItem(item);
          // r.attatchToDom();
        })

        return cart;
      });
  }

  sendPatch(cart) {
    console.log("gotme!")
    

    debugger

    // const configObj = {
    //   method: 'PATCH',
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json"
    //   },
    //   body: JSON.stringify(payload)
    // }

    // fetch(`${this.baseUrl}/${payload.id}`, configObj).then(response => response.json()).then(json => {
    //   console.log(json)
    //   debugger
    // })

  }
}

