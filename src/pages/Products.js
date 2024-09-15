import React from 'react';

const Products = () => {
    return (
        <section className="container mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold text-center">Produtos</h2>
            <div className="flex flex-wrap justify-center mt-8">
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 py-4">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img src="path/to/product.jpg" alt="Product" className="rounded-lg w-full"/>
                        <h3 className="text-2xl font-semibold mt-4">Lorem Ipsum Do</h3>
                        <p className="text-gray-600 mt-2">23 €</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
