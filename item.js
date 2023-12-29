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

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
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

  book.search = function (id) {
    var arr = [];
    each(this.list, function (element) {
      if (element.id === id) {
        arr.push(element);
      }
    });
    return arr;
  };
  book.remove = function (id) {
    this.list = filter(this.list, function (book) {
      return book.id !== id;
    });
  };
  return book;
}

book.search = function (id) {
  var arr = [];
  each(this.list, function (element) {
    if (element.id === id) {
      arr.push(element);
    }
  });
  return arr;
};

// i use the oop function "bookstore" to add books using the my factory function "bookinformation" and to remove books using their id
// in the parametre ....

var newBook = `
      <div class="card">
        <img src="" style="width: 100%" />
        <h1></h1>
        <h3></h3>
        <p class="price"></p>
        <p class="price"></p>
        <p><button >buy</button></p>
      </div>`;
// new book is a variable witch i puted an empty card bring it from w3school to put into it the information of the books

/// i bring the element that i will use them and puted the in variables :

const addBookButton = document.getElementById("btnadd"); //the add botton
const bookNameInput = document.getElementById("book"); //the input of book name
const bookPriceInput = document.getElementById("price"); //the input of book price
const bookIdInput = document.getElementById("id"); // the input of the id
const bookImageInput = document.getElementById("photo"); // the input of the photo
const cardContainer = document.getElementById("cardcontainer"); // the div witch contains the books that i made it
const buttonaddacceuil = document.getElementById("homeadd");
const addform = document.getElementById("addBookForm");
const closebutton = document.getElementById("btnclose");
buttonaddacceuil.addEventListener("click", function () {
  addform.style.display = "block";
});
closebutton.addEventListener("click", function () {
  addform.style.display = "none";
});

var myBookstore = bookstore(); // give my oop function an instance

function makethenewcardswork() {
  var buttons = document.querySelectorAll(".btnbuy");
  each(buttons, function (element) {
    element.addEventListener("click", function () {
      smallvisacontainer.style.display = "block";
      bigvisacontainer.style.display = "block";
    });
  });
}

//function to add new books :
function addnewBook(event) {
  // event.preventDefault(); // i use preventDefault() to have a new function each time i add a book without actualisate the page

  const name = bookNameInput.value; // name will contain the value witch i will write it in the input of name
  const price = bookPriceInput.value; // price will contain the value witch i will write it in the input of price
  const id = bookIdInput.value; // id will contain the value witch i will write it in the input of id
  const image = bookImageInput.value; // image will contain the value witch i will write it in the input of image

  // add a new book using the oop function :
  myBookstore.add(name, price, image); // using the variable of the value of the inputs as a parametre in my oop function

  // put the book in the doc html
  const newBookElement = document.createElement("div"); // make new div to put my newcard book into it
  newBookElement.classList.add("card"); // give him the same class that i already used in my css doc
  newBookElement.innerHTML = `
    <img class="bookimage" src="${image}" style="width: 100%" />
    <h1>${name}</h1>
    <p class="price">${price}</p>
    <p class="price">${id}</p>
    <p><button class="btnbuy">buy</button></p>
  `; // then i put my card in the div that i created using .innerhtml with putting the value of the inputs

  cardContainer.appendChild(newBookElement);

  // clear all the value with an empty string to have each time clear inputs
  bookNameInput.value = "";
  bookPriceInput.value = "";
  bookIdInput.value = "";
  bookImageInput.value = "";
  makethenewcardswork();
}

// add an eventlistner to the button  when i click into it the function that i made it will do the work
addBookButton.addEventListener("click", addnewBook);

var buybutton = document.querySelectorAll(".btnbuy");
var bigvisacontainerarr = document.querySelectorAll("#bigvisacontainer");
var bigvisacontainer = document.getElementById("bigvisacontainer");
each(buybutton, function (element) {
  element.addEventListener("click", function () {
    smallvisacontainer.style.display = "block";
    bigvisacontainer.style.display = "block";
  });
});
var visabutton = document.querySelectorAll("#btnconfirm");
var message = document.getElementById("msg");
var smallvisacontainer = document.getElementById("smallvisacontainer");
each(visabutton, function (element) {
  element.addEventListener("click", function () {
    smallvisacontainer.style.display = "none";
    message.style.display = "block";
    setTimeout(function () {
      message.style.display = "none";
      bigvisacontainer.style.display = "none";
    }, 3000);
  });
});

var mode = document.getElementById("mode");
var nav = document.getElementById("nav");
mode.addEventListener("click", function () {
  cardContainer.classList.toggle("newmode");
  nav.classList.toggle("newnavbar");
});
