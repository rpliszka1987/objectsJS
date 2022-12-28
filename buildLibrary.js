// This is a Build A Library excercise from Code Academy

// Creating a Media class
class Media {
  // constructor for the class
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  //   title getter
  get title() {
    return this._title;
  }

  //   rating getter
  get rating() {
    return this._ratings;
  }

  //   isCheckedOut getter
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  //   method which changes the status from set value to opposite ( only true or false)
  toggleCheckoutStatus() {
    if (this._isCheckedOut == false) {
      this._isCheckedOut = true;
    } else {
      this._isCheckedOut = false;
    }
  }

  //   add a rating method
  addRating(rating) {
    this._ratings.push(rating);
  }

  //   calculates the average of rating scores
  getAverageRating() {
    const ratingCalculation = this._ratings.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return ratingCalculation / this._ratings.length;
  }
}

// Book class which inherits from Media class
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

const bookOne = new Book("Robert P", "Something I learned", 45);

console.log(bookOne.rating);
