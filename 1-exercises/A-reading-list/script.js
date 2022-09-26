const content = document.getElementById("content");
const unorderedList = document.createElement("ul");
const header = document.createElement("h1");
header.innerText = "Book List";
content.appendChild(header);
content.appendChild(unorderedList);

function readingList(books) {
  books.forEach((book) => {
    const list = document.createElement("li");
    const title = document.createElement("h5");
    const image = document.createElement("img");
    title.innerText = `${book.title} - ${book.author}`;
    list.appendChild(title);
    list.style.textAlign = "center";
    unorderedList.appendChild(list);
    image.setAttribute("src", book.bookCoverImage);
    image.setAttribute("class", "cover-image");
    list.appendChild(image);
    if (book.alreadyRead) {
      list.style.backgroundColor = "green";
    } else list.style.backgroundColor = "red";
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
