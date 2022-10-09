let myLibrary = [];

let bookSection = document.querySelector('.book-section');

let book = new Book("bla", "b. la", 321, false)
let other = new Book("other", "other", 123, true)
let otherOther = new Book("otherother", "otherother", 456, true)
addBookToLibrary(book)
addBookToLibrary(other)
addBookToLibrary(otherOther)

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    for(let i = 0; i < myLibrary.length; i++){
        let card = document.createElement('div')
        card.classList.add('card')

        let title = document.createElement('p')
        title.classList.add('title')
        title.textContent = `"${myLibrary[i].title}"`;
        card.appendChild(title)

        let author = document.createElement('p')
        author.classList.add('author')
        author.textContent = myLibrary[i].author;
        card.appendChild(author)

        let pages = document.createElement('p')
        pages.classList.add('pages')
        pages.textContent = myLibrary[i].pages;
        card.appendChild(pages)

        let read = document.createElement('button')
        if (myLibrary[i].read === true){
            read.classList.add("read")
            read.textContent = "Read"
        }
        else{
            read.classList.add("not-read")
            read.textContent = "Not read"
        }
        card.appendChild(read)

        let remove = document.createElement('button')
        remove.classList.add('remove')
        remove.textContent = "Remove";
        card.appendChild(remove)
        remove.addEventListener('click', () =>{
            bookSection.removeChild(card)
        })

        bookSection.appendChild(card)
    }
}