let myLibrary = [];

var sampleBook1 = new Book("El Filibusterismo","José Rizal","338 pages","Book already read.");
myLibrary.push(sampleBook1);
var sampleBook2 = new Book("The Great Gatsby","F. Scott Fitzgerald","208 pages","Book has not been read.");
myLibrary.push(sampleBook2);
var sampleBook3 = new Book("The 48 Laws of Power","Robert Greene","480 pages","Book has not been read.");
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
      bookStatus="Book already read.";
    }else{
      bookStatus="Book has not been read.";
    }
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("booktitle").value = "";
    document.getElementById("bookauthor").value = "";
    document.getElementById("bookpages").value = "";

    var newBook = new Book(bookTitle,bookAuthor,bookPages,bookStatus);
    myLibrary.push(newBook);
    
    showBook();
  }
}

//Create divs below
showBook();
function showBook(){
  clearElements();
  const container = document.querySelector('#booklist');
  
  for (let i = 0; i < myLibrary.length; i++) {
  let bookTitle=myLibrary[i].title;
  let bookAuthor=myLibrary[i].author;
  let bookPages=myLibrary[i].page;
  let bookStatus=myLibrary[i].status;



  let book = document.createElement('div');
  book.classList.add('book');
  

  let bookTitleDiv = document.createElement('div');
  bookTitleDiv.classList.add('book-title');
  bookTitleDiv.textContent=bookTitle;
  book.appendChild(bookTitleDiv);

  let bookAuthorDiv = document.createElement('div');
  bookAuthorDiv.classList.add('book-author');
  bookAuthorDiv.textContent=bookAuthor;
  book.appendChild(bookAuthorDiv);

  let bookPagesDiv = document.createElement('div');
  bookPagesDiv.classList.add('book-pages');
  bookPagesDiv.textContent=bookPages;
  book.appendChild(bookPagesDiv);

  let bookStatusDiv = document.createElement('div');
  bookStatusDiv.classList.add('book-status');
  bookStatusDiv.textContent=bookStatus;
  book.appendChild(bookStatusDiv);

  let deleteButton = document.createElement('button');
  
  deleteButton.classList.add(i);
  deleteButton.classList.add('delete');
  deleteButton.textContent="Remove";
  book.appendChild(deleteButton);


  container.appendChild(book);
  
  }
  toDelete();
}
//remove grid
function clearElements(){
    
  const toRemove = document.querySelectorAll('.book');

  toRemove.forEach(book => {
    book.remove();
  });
  
}
//remove an element

function toDelete(){
  
  var gridTest =document.getElementsByClassName('delete');
  let gridArray=Array.from(gridTest);

  console.table(gridArray);

  gridArray.forEach(v => v.addEventListener('click', function() { 
   
    //let value = document.getElementById("myDIV").className;
    v.style.background = "red"; 
    
    let value=v.className;

    let indexToDelete=value.split(' ')[0];

    

    myLibrary.splice(indexToDelete, 1);//index of 2
    showBook();
  }));
  
}

//