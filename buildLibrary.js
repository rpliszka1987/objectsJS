class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get rating() {
    return this._ratings;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  toggleCheckoutStatus() {
    if (this._isCheckedOut == false) {
      this._isCheckedOut = true;
    } else {
      this._isCheckedOut = false;
    }
  }

  addRating(rating) {
    this._ratings.push(rating)
  }

  getAverageRating() {
    const ratingCalculation = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue);
    return ratingCalculation / this._ratings.length;
  }
}


const newItem = new Media("Testing")
newItem.addRating(5)
newItem.addRating(7)

console.log(newItem.getAverageRating())