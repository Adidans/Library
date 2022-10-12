let myLibrary = [];

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay')
const form = document.getElementsByTagName('form')

const bookSection = document.querySelector('.book-section');

const titleForm = document.querySelector('#title')
const authorForm = document.querySelector('#author')
const pagesForm = document.querySelector('#pages')
const readForm = document.querySelector('#read')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.newBook.active')
    modals.forEach(modal =>{
        overlayClicked = true;
        closeModal(modal)
    })
})

form.addEventListener('submit', (event) =>{
    const modal = button.closest('.newBook');
    if(titleForm.textContent != '' && authorForm.textContent != '' && pagesForm.textContent != ''){
        closeModal(modal)
    }
})

function openModal(modal) {
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if(modal == null){
        return
    } 
    else{
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }
}

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
            bookSection.removeChild(card)//janonem no array ari nevis tikai no display
        })

        bookSection.appendChild(card)
    }
}