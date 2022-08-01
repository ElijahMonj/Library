let myLibrary = [];

var sampleBook1 = new Book("El Filibusterismo","José Rizal","338 pages",true);
myLibrary.push(sampleBook1);
var sampleBook2 = new Book("The Great Gatsby","F. Scott Fitzgerald","208 pages",false);
myLibrary.push(sampleBook2);
var sampleBook3 = new Book("The 48 Laws of Power","Robert Greene","480 pages",false);
myLibrary.push(sampleBook3);

let bookTitle,bookAuthor,bookPages,bookStatus;

function Book(title, author, page, status) {
  this.title=title;
  this.author=author;
  this.page=page;
  this.status=status;
}

function addBookToLibrary() {

  bookTitle=document.getElementById("booktitle").value;
  bookAuthor=document.getElementById("bookauthor").value;
  bookPages=document.getElementById("bookpages").value;
  bookStatus=document.querySelector('input[name="yesno"]:checked').value;

  if((bookTitle=="")||(bookAuthor=="")||(bookPages=="")){
    document.getElementById("errorMessage").innerHTML = "Please fill out all the fields.";
  }else{
    bookPages=bookPages+" pages";
    if (bookStatus=='yes'){
      bookStatus=true;
    }else{
      bookStatus=false;
    }
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("booktitle").value = "";
    document.getElementById("bookauthor").value = "";
    document.getElementById("bookpages").value = "";

    var newBook = new Book(bookTitle,bookAuthor,bookPages,bookStatus);
    myLibrary.push(newBook);
    console.table(myLibrary);
  }
}


