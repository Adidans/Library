let myLibrary = [];

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay')
const form = document.getElementById('form')

const bookSection = document.getElementById('book-section')

const titleForm = document.getElementById('title')
const authorForm = document.getElementById('author')
const pagesForm = document.getElementById('pages')
const readForm = document.getElementById('read')

const readBt = document.getElementById('readBt')

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
    bookSection.innerHTML = ''
    for(let i = 0; i < myLibrary.length; i++){
        let card = document.createElement('div')
        card.classList.add('card')
        card.dataset.num = i;

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
        if (myLibrary[i].read === true && myLibrary[i].read.classList != "read"){
            read.classList.add("read")
            read.textContent = "Read"
        }
        else{
            read.classList.add("not-read")
            read.textContent = "Not read"
        }

        read.addEventListener('click', () =>{
            if(read.classList.contains('read')){
                read.classList.remove('read')
                read.classList.add('not-read')
                read.textContent = "Not read"
            }
            else{
                read.classList.add('read')
                read.classList.remove('not-read')
                read.textContent = "Read"
            }
        })
        read.id = 'readBt'
        card.appendChild(read)

        let remove = document.createElement('button')
        remove.classList.add('remove')
        remove.textContent = "Remove";
        card.appendChild(remove)
        remove.addEventListener('click', () =>{
            let removed = myLibrary.splice(document.querySelector('[data-num]').dataset.num, 1)
            bookSection.removeChild(card)
        })

        bookSection.appendChild(card)
    }
}

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        let modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.newBook.active')
    modals.forEach(modal =>{
        closeModal(modal)
    })
})

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    const modal = document.querySelector('.newBook');
    let book = new Book(titleForm.value, authorForm.value, pagesForm.value, readForm.checked)
    addBookToLibrary(book)
    displayLibrary() 
    closeModal(modal)
    titleForm.value = ''
    authorForm.value = ''
    pagesForm.value = ''
    readForm.checked = false
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
