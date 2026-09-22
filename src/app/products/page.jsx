import React from 'react';

const getProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    return res.json()
}
const ProductPage = async () => {
const products = await getProducts()

    return (
        <div>
            <h2>Products {products.length}</h2>
        </div>
    );
};

export default ProductPage;