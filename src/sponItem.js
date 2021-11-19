class SponItem {

  // has: ID, NAME, RATING, NUMBER_OF_REVIEW, PRICE
  static all = []
  static sponItemsList = document.getElementById('sponsoredItemsList')

  constructor(sItem) {
    // Sets up all of a sponsored_items attributes for display
    this.id = sItem.id
    this.name = sItem.name
    this.rating = sItem.rating
    this.number_of_reviews = sItem.number_of_reviews

    //checks for min/max price range and sets attrb accordingly
    if (sItem.price.length == 2) {
      this.price = sItem.price
    } else {
      this.price = `$ ${sItem.price[0]}-${sItem.price[1]}`
    }

    // create html elements for the item
    this.element = document.createElement('li')
    this.element.data["id"] = sItem.id
    this.element.id = `sponsoredItemNum#${sItem.id}`


    //Adds this spon item to the list of all the spon items
    SponItem.all.push(this);
  }
  // Is going to need to check value of inner text, if is a added render, case to that renderer and don't add listener
  addToDom(){
    debugger;
    // switch (value) {
    //   case 'added':
    //     SponItem.sponItemsList.appendChild(this.renderAdded)
    //   case 'displayed':
    //     this.element.addEventListener('click', this.clickHandler)
    //     SponItem.sponItemsList.appendChild(this.render());
    //   default:
    //     console.log(`Hmmm, something's not right here...`);
    // }
  }

  render() {

    this.element.innerHTML = 
    `
      <li>
        <div class="d-flex flex-row">
          <div class="flex-column m-1">
            <img class="shadow m-2 img-fluid" src="https://via.placeholder.com/115x115" data-lazy-type="image" data-src="https://via.placeholder.com/100x100">
          </div>

          <div class="col-8 lh-1 m-1">
            <span>${this.name}</span><br>
            <span>${this.rating}</span><br>
            <span>${this.Price}</span><br>
            
            <form><input type="button" class="btn btn-light btn-sm border shadow-sm w-100 py-1 my-2" id="addSponItemToCartBut" item-id="${this.id}">Add to cart</input></form>

          </div>
        </div>
      </li>
    `
    return this.element
  }

  renderAdded() {
    this.element.innerHTML = 
      `
      <li>
        <div class="d-flex bg-light rounded align-items-center">
          <div class="d-flex flex-fill justify-content-center w-100 ">
            <p class="fs5 py-3 mt-3">Item added to cart Successfully!</p>
          </div>
        </div>
      </li>
    `
    return this.element
  }

  clickHandler = (e) => {
    //check what values e returns when clicked, add add/to/cart if button, otherwise link back to the show item page, to grab the item id and redirect to the appropriate show page
    // window.location = `${showItemPath}/${this.id}`
    debugger; 
  }

}