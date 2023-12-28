function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}
var id = generateID();
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function bookinformation(name, price, img) {
  return {
    name: name,
    price: price,
    id: id(),
    img: img,
  };
}

function bookstore() {
  var book = {};

  book.list = [];

  book.add = function (name, price, img) {
    this.list.push(bookinformation(name, price, img));
  };

  book.remove = function (id) {
    var book = this;
    each(this.list, function (element, i) {
      if (element.id === id) {
        book.list.splice(i, 1);
      }
    });
    return this.list;
  };

  book.update = function (reference, value, id) {
    each(this.list, function (element) {
      if (element.id === id) {
        element[reference] = value;
      }
    });
    return this.list;
  };

  book.search = function (id) {
    var arr = [];
    each(this.list, function (element) {
      if (element.id === id) {
        arr.push(element);
      }
    });
    return arr;
  };

  book.name = function (name) {
    var foundName = null;
    each(this.list, function (element) {
      if (element.name === name) {
        foundName = element.name;
      }
    });
    return foundName;
  };

  book.price = function (price) {
    var foundPrice = null;
    each(this.list, function (element) {
      if (element.price === price) {
        foundPrice = element.price;
      }
    });
    return foundPrice;
  };

  book.id = function (id) {
    var foundID = null;
    each(this.list, function (element) {
      if (element.id === id) {
        foundID = element.id;
      }
    });
    return foundID;
  };

  book.img = function (img) {
    var foundImg = null;
    each(this.list, function (element) {
      if (element.img === img) {
        foundImg = element.img;
      }
    });
    return foundImg;
  };

  return book;
}
// i use the oop function "bookstore" to add books using the my factory function "bookinformation" and to remove books using their id
// in the parametre ....

var newBook = `
      <div class="card">
        <img src="" style="width: 100%" />
        <h1></h1>
        <h3></h3>
        <p class="price"></p>
        <p class="price"></p>
        <p><button>buy</button></p>
      </div>`;
// new book is a variable witch i puted an empty card bring it from w3school to put into it the information of the books

/// i bring the element that i will use them and puted the in variables :

const addBookButton = document.getElementById("btnadd"); //the add botton
const bookNameInput = document.getElementById("book"); //the input of book name
const bookPriceInput = document.getElementById("price"); //the input of book price
const bookIdInput = document.getElementById("id"); // the input of the id
const bookImageInput = document.getElementById("photo"); // the input of the photo
const cardContainer = document.getElementById("cardcontainer"); // the div witch contains the books that i made it

var myBookstore = bookstore(); // give my oop function an instance

//function to add new books :
function addnewBook(event) {
  event.preventDefault(); // i use preventDefault() to have a new function each time i add a book without actualisate the page

  const name = bookNameInput.value; // name will contain the value witch i will write it in the input of name
  const price = bookPriceInput.value; // price will contain the value witch i will write it in the input of price
  const id = bookIdInput.value; // id will contain the value witch i will write it in the input of id
  const image = bookImageInput.value; // image will contain the value witch i will write it in the input of image

  // add a new book using the oop function :
  myBookstore.add(name, price, image); // using the variable of the value of the inputs as a parametre in my oop function

  // put the book in the doc html
  const newBookElement = document.createElement("div"); // make new div to put my newcard book into it
  newBookElement.classList.add("card"); // give him the same class that already used in my css doc
  newBookElement.innerHTML = `
    <img src="${image}" style="width: 100%" />
    <h1>${name}</h1>
    <p class="price">${price}</p>
    <p class="price">${id}</p>
    <p><button>buy</button></p>
  `; // then i put my card in the div that i created using .innerhtml with putting the value of the inputs

  cardContainer.appendChild(newBookElement);

  // clear all the value with an empty string to have each time clear inputs
  bookNameInput.value = "";
  bookPriceInput.value = "";
  bookIdInput.value = "";
  bookImageInput.value = "";
}

// add an eventlistner to the button when i click into it the function that i made it will do the work
addBookButton.addEventListener("click", addnewBook);

const deleteBookButton = document.getElementById("btndelete");
const deleteBookInput = document.getElementById("deletebook");

function deleteBook() {
  const bookIdToDelete = parseInt(deleteBookInput.value);

  myBookstore.remove(bookIdToDelete);
}
deleteBookButton.addEventListener("click", deleteBook);
