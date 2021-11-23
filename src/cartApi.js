class CartApi {

  // static notificationsBucket = docuement.getElementById("notificationsBucket");
  static notificationBucket = document.getElementById("notificationBucket");

  constructor(port) {
    this.demoUrl = `${port}/show_cart`
    this.baseUrl = `${port}/carts`

    this.element = document.createElement('li')
    this.element.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    Cart Updated <strong>Successfully</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
    this.element.dataset.id = 'notification'
    this.element.id = 'notification'
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
    let { id, numberOfItems, subTotal } = cart
    let cartItems = cart.cartItems()
    const payload = {
      id,
      numberOfItems,
      subTotal,
      cartItems
    }

    const configOBj = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    }

    fetch(`${this.baseUrl}/${cart.id}`, configOBj).then((res) => res.json()).then(json => {
      cartApi.attatchResponseToDom();
      return console.log("Update success", json)
    })

  }

  attatchResponseToDom() {
    notificationBucket.appendChild(this.element);
  }
}

