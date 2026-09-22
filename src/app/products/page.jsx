import React from 'react';
import ProductsCard from '../components/ProductsCard';

const getProducts = async () => {
    const res = await fetch('http://localhost:5000/products', {cache: 'no-cache'})
    return res.json()
}
const ProductPage = async () => {
    const products = await getProducts()

    return (
        <div>
            <h2>{products.length} Products</h2>
            <div className='grid grid-cols-4 gap-4'>
                {products.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)}
            </div>
        </div>
    );
};

export default ProductPage;