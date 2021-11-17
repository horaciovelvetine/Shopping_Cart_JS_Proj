class SponItem {
  static all = []
  
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
}