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



/// i bring the elements that i will use them and i puted the in variables :

const addBookButton = document.getElementById("btnadd"); //the add botton
const bookNameInput = document.getElementById("book"); //the input of book name
const bookPriceInput = document.getElementById("price"); //the input of book price
const bookIdInput = document.getElementById("id"); // the input of the id
const bookImageInput = document.getElementById("photo"); // the input of the photo
const cardContainer = document.getElementById("cardcontainer"); // the div witch contains the books that i made it
const buttonaddacceuil = document.getElementById("homeadd"); /// add new book in the nav bar
const addform = document.getElementById("addBookForm"); //the form that have all the inputs
const closebutton = document.getElementById("btnclose"); // button close of the form "addform"
buttonaddacceuil.addEventListener("click", function () {
  addform.style.display = "block"; /// by clicking on the "add new book" the form which contain the inputs of the book information which we will add it will be shown
});
closebutton.addEventListener("click", function () {
  addform.style.display = "none";  // after adding a new book we can click on close button to make the form disappear 
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
} /// i make this function because when i add new book and click in the buy button of the new book that i add it , nothing happens
// so i create that function by making the new buy buttons into an array then it starts an iteration  throw this buttons with our each function
// when i click on each button the displays of our two elements will toggle from "none" to "block"
//then i invoke it in the add function to work with the new buttons





//function to add new books : (add function)

function addnewBook() {
  

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
  makethenewcardswork(); // invoke our function that we make it to make our new buy buttons work
}

// add an eventlistner to the button  when i click into it the function that i make it will do the work
addBookButton.addEventListener("click", addnewBook);




var buybutton = document.querySelectorAll(".btnbuy");  // put all the button buy of exesting books in array

// var bigvisacontainerarr = document.querySelectorAll("#bigvisacontainer"); /// put the bigvisacontainer in array
var bigvisacontainer = document.getElementById("bigvisacontainer");    /// get the bigvisacontainer
each(buybutton, function (element) {
  element.addEventListener("click", function () {
    smallvisacontainer.style.display = "block";
    bigvisacontainer.style.display = "block";
  });
});  
// in this each function i make an iteration throw all the buy buttons (element) when i click in each element the small and the big 
// visa container will shown with their new display
var visabutton = document.querySelectorAll("#btnconfirm"); // get the confirm button of the visa in an array
var message = document.getElementById("msg"); // get the msg of the visa in put that i made it my doc html 
var smallvisacontainer = document.getElementById("smallvisacontainer"); // get the smallvisacontainer wich contain the input of visa number
each(visabutton, function (element) {
  element.addEventListener("click", function () {
    smallvisacontainer.style.display = "none";
    message.style.display = "block";
    setTimeout(function () {
      message.style.display = "none";
      bigvisacontainer.style.display = "none";
    }, 3000);
  });
});   /// in this each i use the array visabutton which contain all the confirm button(element) so when i click in each confirm button
     /// the small visa container witch contain the input visa will be disappear and the message that i make it none in the beginning will be shown 
    // and then after 3000ms(3s) the message and the bigvisacontainer background will disappear and the home page shown
     
    
var mode = document.getElementById("mode"); //get the link mode of my nav bar with his id
var nav = document.getElementById("nav");  // get the elemnt of navbar that contain the background 
mode.addEventListener("click", function () {
  cardContainer.classList.toggle("newmode");
  nav.classList.toggle("newnavbar");
}); // when i click on the mode link the cardcontainer will add  the new class which i put it in my css doc
    // same story with the background of the navbar it will add  the new class





    /// so here i will use jquery  to get a book with his id
  


$(document).ready(function () {
 
  $(".error").hide(); // this a h1 that i created in my html doc without value i make it hide in the beginning
  $("#searchbtn").mouseenter(
    function(){
      $(this).css("backgroundColor","#2f4f4f")
    }
  ) // i get the search button with her id and i use mouseenter (when i put the mouse in the button the background color will change)
  $("#searchbtn").mouseleave(
    function(){
      $(this).css("backgroundColor","#B22222")
    }
  ) // and when the mouse leaves the button the background color will change another time

  $("#searchbtn").click(function () { // when i click in the search button of the input
    var inputidvalue = $("#searchh").val(); // value of the id that the user will put it in the input of search
    var allCards = $(".card").get();  // put all the cards in an array to iterate throw them
    $(".card").hide(); // hide every element contain the class card witch in my project the cards of the books

    var matchingCards = filter(allCards, function (element) {
      return $(element).find(".myid").text() === inputidvalue;
    }); // this variable will contain the card with that the user put it in the search button 
    // i use our filter function  by iteration throw our array allcards witch contain element (cards) he will find all the element with
    // the class myid and will comparing the text of those element with the id that the user put it then he will return only the element with the id
    $(matchingCards).show().css("margin-left","700px"); // then the cards with the id will shown and i put to her some style to make her shown in the middle of the page

    
    $(".error").toggle(matchingCards.length === 0).text("Book not found").css("margin-left","730px")
  }); 
}); // if the id that the user write it d'ont exist it will show a message i use .toggle() to toggle between .show() and .hide()
    // this method will display with condition (if the array of the card with id d'ont contain any card)
    // i make to the message some style to be shown in the middle of the page
