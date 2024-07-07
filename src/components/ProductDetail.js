import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    return (
        <section className="container mx-auto px-6 py-10">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 px-4">
                    <img src="path/to/product.jpg" alt="Product" className="rounded-lg w-full"/>
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <h2 className="text-3xl font-bold">Lorem Ipsum Do</h2>
                    <p className="text-gray-600 mt-4">23 €</p>
                    <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque scelerisque ante ut pellentesque.</p>
                    <button className="mt-6 inline-block bg-pink-500 text-white py-2 px-6 rounded-lg">Adicionar ao Carrinho</button>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
