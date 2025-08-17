

const myLibrary = new Array();

function Book(name , id , author ){
    this.name = name ;
    this.author = author;
    this.id = id;
    this.state = false;
}

function add(name , author){
    const id = crypto.randomUUID();
    const book = new Book(name , id , author);
    myLibrary.push(book);
    displayBooks();
}
function remove(id){
    for( i = 0 ; i< myLibrary.length ; i ++){
        if(myLibrary[i].id == id){
            myLibrary.splice(i,1);
            displayBooks();
        }
    }

}
function changeState(id){
    for( i = 0 ; i < myLibrary.length ; i++){
        if(myLibrary[i].id == id){
           if( myLibrary[i].state == true){
            myLibrary[i].state = false;
        
           }
           else{
             myLibrary[i].state = true;
           }
        }
    }
}

    function displayBooks() {
      const container = document.getElementById("books-container");
      container.innerHTML = ""; // clear previous
      myLibrary.forEach(book => {
        const div = document.createElement("div");
        div.className = "book";
        div.textContent = `Name: ${book.name}, Author: ${book.author}, ID: ${book.id}`;
       const del = document.createElement("button"); // create a <button> element
        del.textContent = "Delete"; 
        del.className = "btn";       
        del.addEventListener("click", () => {
            remove(book.id);
          });
          div.appendChild(del);

        const read = document.createElement("button"); // create a <button> element
        if(book.state == false){
         read.textContent = "Not Read"; 
        }else{
              read.textContent = "Read"; 
        }
       
        read.className = "btn";       
        read.addEventListener("click", () => {
           changeState(book.id);
            if(book.state == false){
         read.textContent = "Not Read"; 
        }else{
              read.textContent = "Read"; 
        }
          });
          div.appendChild(read);

        container.appendChild(div);
      });



    }
       const form = document.getElementById("bookForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // prevent page reload
      const name = form.elements["name"].value;
      const author = form.elements["author"].value;
      add(name, author);
      form.reset(); // clear form inputs
    });
    