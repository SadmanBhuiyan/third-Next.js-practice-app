import React from 'react';

const ProductsCard = ({ product }) => {
    const { id, name, category, description, rating, price } = product;

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title text-red-500">{name}</h2>
                <p>{description}</p>
                <p className='text-blue-500'>Category: {category}</p>
                <p className='text-yellow-300'>Rating: {rating}</p>
                <p className='text-green-400'>Price: ${price}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;