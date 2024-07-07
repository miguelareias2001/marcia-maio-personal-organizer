import React from 'react';

const Cart = () => {
    return (
        <section className="container mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold text-center">O Meu Carrinho</h2>
            <div className="flex flex-wrap justify-center mt-8">
                <div className="w-full md:w-2/3 lg:w-1/2 px-4 py-4">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-between items-center">
                            <img src="path/to/product.jpg" alt="Product" className="rounded-lg w-20"/>
                            <div className="flex-1 mx-4">
                                <h3 className="text-xl font-semibold">Lorem Ipsum Do</h3>
                                <p className="text-gray-600 mt-2">23 €</p>
                            </div>
                            <div className="flex items-center">
                                <button className="text-gray-600 hover:text-gray-800">-</button>
                                <span className="mx-2">1</span>
                                <button className="text-gray-600 hover:text-gray-800">+</button>
                            </div>
                            <button className="text-red-600 hover:text-red-800 ml-4">Remover</button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4 px-4 py-4">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold">Resumo do Pedido</h3>
                        <p className="text-gray-600 mt-4">Subtotal: 23 €</p>
                        <p className="text-gray-600 mt-4">Custo de envio: 0 €</p>
                        <p className="text-gray-800 font-semibold mt-4">Total: 23 €</p>
                        <button className="mt-6 inline-block bg-pink-500 text-white py-2 px-6 rounded-lg">Comprar</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
