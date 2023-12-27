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





var divcardcontainer = document.getElementById("cardcontainer");
var btnaddsumples = document.getElementById("addsamples");
btnaddsumples.addEventListener("click", function () {
  var newproduct = `
     
    <div id="samples" class="card">
    <img src="" style="width: 100%" />
    <h1>book title</h1>
    <h3>${id()}</h3>
    <p class="price">$19.99</p>

    <p><button>buy</button></p>
  </div>`;
  divcardcontainer.innerHTML += newproduct;
});
/// for adding a new sample when we click in the button addsumples we add the new product as a new element in the div bigcontainer
/// using "+=" ,  and".innerhtml" to add..
/// card sample using from w3schools
// i use to the function generateid() from the last sprint with this syntax "${}" to get the value of the function .
