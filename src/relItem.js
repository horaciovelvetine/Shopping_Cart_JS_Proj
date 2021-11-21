class RelatedItem {
  static all = [];
  static relateItemList = document.querySelector("relatedItemsList");

  // *id, name, category, rating, number_of_reviews, price 
  constructor({id, name, category, rating, number_of_reviews, price}) {
    
    // ?Sets all base attributes
    this.id = `${id}`
    this.name = `${name}`
    this.category = `${category}`
    this.rating = `${rating}`
    this.number_of_reviews == `${number_of_reviews}`
    this.price = `${price}`

    // ?Set elemented related attributes
    this.element = document.createElement('li');
    this.element.dataset.id = id;
    this.element.id = `relatedItemNum-${this.id}`

    // ?Lets the RelatedItem Class knos of its new frend.
    RelatedItem.all.push(this)

  }
}