import React from 'react';

const BooksCard = ({ book }) => {
    const { title, author, genre, rating, price } = book;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title text-red-500">{title}</h2>
                <p>Authors name: {author}</p>
                <p className='text-blue-500'>Genre: {genre}</p>
                <p className='text-yellow-300'>Rating: {rating}</p>
                <p className='text-green-400'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;