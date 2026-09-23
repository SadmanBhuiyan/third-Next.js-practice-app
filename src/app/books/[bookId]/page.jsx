import React from 'react';

export const generateStaticParams = async () => {
    const res = await fetch('http://localhost:5000/books')
    const books = await res.json()

    return books.map(book => ({bookId: book.id}))
}
const BookDetailPage = async ({ params }) => {
    const { bookId } = await params

    const res = await fetch(`http://localhost:5000/books/${bookId}`)
    const book = await res.json()
    const { id, title, author, genre, rating, price, pages, publishedYear, description, inStock } = book;

    return (
        <div>
            <h2>Book details</h2>
            <h2 className="card-title text-red-500">{title}</h2>
            <p>Authors name: {author}</p><br />
            <p className='text-blue-500'>{description}</p>
            <p className='text-blue-500'>Genre: {genre}</p>
            <p className='text-yellow-300'>Rating: {rating}</p>
            <p className='text-green-400'>Price: ${price}</p>
            <p className='text-blue-500'>Page count: {pages}</p>
            <p className='text-blue-500'>Publish year: {publishedYear}</p>
            {inStock ? (
                <p className='text-blue-500'>Stock: Available</p>
            )
                : (
                    <p className='text-blue-500'>Stock: Unavailable</p>
                )}
        </div>
    );
};

export default BookDetailPage;


// "id": 4,
// "title": "Atomic Habits",
// "author": "James Clear",
// "genre": "Self-Development",
// "price": 18.99,
// "rating": 4.9,
// "pages": 320,
// "publishedYear": 2018,
// "description": "A practical guide to building good habits through small improvements.",
// "image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
// "inStock": true