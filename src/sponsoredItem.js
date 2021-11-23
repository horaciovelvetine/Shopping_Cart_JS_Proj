class SponsorItem {
  // id, style, rating, number_of_reviews, price
  static all = [];
  static sponsoredItemsList = document.getElementById("sponsoredItemsList");

  constructor({ id, name, rating, number_of_reviews, price, styles }) {
    this.id = `${id}`;
    this.name = `${name}`;
    this.rating = `${rating}`;
    this.number_of_reviews = `${number_of_reviews}`;
    this.styles = styles;

    //checks for min/max price range and sets attrb accordingly
    if (price.length == 2) {
      this.price = `$${price[0]}-$${price[1]}`;
    } else {
      this.price = `$${price}`;
    }

    // create html elements for the item
    this.element = document.createElement("li");
    this.element.dataset.id = id;
    this.element.id = `sponsoredItemNum-${id}`;

    // adds listner for the sponsored item
    this.element.addEventListener("click", this.handleSponsorItemClick);

    //Adds this spon item to the list of all the spon items
    SponsorItem.all.push(this);
  }

  handleSponsorItemClick(e) {

    switch (e.target.innerText) {
      case "Add to Cart":
        let event = e
        const addItemId = this.dataset.id
        debugger
        //
        // cartApi.addSponsortItemToCart(this.id.replace(/\D/g, ''))
        break;

      default:
        console.log(e)
        break;
    }
  }
  // Is going to need to check value of inner text, if is a added render, case to that renderer and don't add listener
  attatchToDom() {
    SponsorItem.sponsoredItemsList.appendChild(this.renderSponsoredItem());
  }

  renderSponsoredItem() {
    this.element.innerHTML = `
      <li>
        <div class="d-flex flex-row">
          <div class="flex-column m-1">
            <img class="shadow m-2 img-fluid" src="https://via.placeholder.com/95x95" data-lazy-type="image" data-src="https://via.placeholder.com/95x95">
          </div>

          <div class="flex-column lh-1 m-1 pt-2">
            <span class="text-primary fs-5">${this.name}</span>
              <div class="row my-1">
                <span class="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f5a31b" class="bi bi-star" viewBox="0 0 16 16" stroke="#d39a63" stroke-width="0.25">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg><small> (${this.number_of_reviews})</small>
                </span>
              </div>
            <span class="text-danger fs-6 py-1">${this.price}</span>
            <form>
              <div class="d-flex">
                <span class="addSponItemToCartButton">
                  <button type="button" class="btn btn-light btn-sm border shadow-sm py-1 my-2 px-4" data-bs-toggle="modal" data-bs-target="#sponsorModal" id="addSponItemToCartBut item-id=${this.id}">
                    See All Buying Options
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </li>
      <!-- Modal -->
        <div class="modal fade" id="sponsorModal" tabindex="-1" aria-labelledby="sponsorModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${this.name} Style Options</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <ul class="list-unstyled list-group">
                  ${this.renderModalListContent()}
                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary py-1 my-2 px-4" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-light border py-1 my-2 px-4">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>`
    return this.element;
  }

  renderModalListContent() {
    let returnString = ""
    this.styles.forEach(style => {

      returnString += `<li><div class="form-check"><div class="sponsorItemStyleCheckbox"><input class="form-check-input" type="checkbox" value="" id="sponsoredItemStyle#-{style.id}Check"></div><label class="form-check-label" for="sponsoredItemStyle#-{style.id}Check"><div class="sponsoredItemStyleOption" id="sponsoredItemStyle#-${style.id}"><span class="fst-italic fw-bold">${style.name}</span><span class="fw-bolder text-danger"> $${style.price}</span></div></label></div>`
    })
    return returnString
  }
}