// ----- Lab Exercise 6: JSON Objects -----

const book = [
{
    "title": "book 1",
    "description": "description 1",
    "author": "author 1",
    "number of pages": "number of pages 1",
},
{
    "title": "book 2",
    "description": "description 2",
    "author": "author 2",
    "number of pages": "number of pages 2",
}];


for (i=0; i<book.length; i++) {
    console.log(`${JSON.stringify(book[i], null, 2)}\n--------------------\n`);
}

function updateDescription (title, newDescription) {
    const index = book.findIndex(updatedBook => updatedBook.title === title);
    if (index !== -1) {
        book[index].description = newDescription; 
        return console.log(`Description updated!\nNew Book data:\n${JSON.stringify(book[index], null, 2)}`);
    } else {
        console.log('Book not found.');
    }
}   

updateDescription("book 1","New Description");