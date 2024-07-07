import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <div>
                        <a href="/" className="text-gray-800 text-xl font-bold md:text-2xl">Personal Organizer</a>
                    </div>
                    <div className="flex items-center">
                        <a href="/" className="text-gray-800 hover:text-gray-600 mx-4">Sobre</a>
                        <a href="/products" className="text-gray-800 hover:text-gray-600 mx-4">Produtos</a>
                        <a href="/portfolio" className="text-gray-800 hover:text-gray-600 mx-4">Portfólio</a>
                        <a href="/contact" className="text-gray-800 hover:text-gray-600 mx-4">Contactos</a>
                        <a href="/login" className="text-gray-800 hover:text-gray-600 mx-4">Iniciar Sessão</a>
                        <a href="/cart" className="text-gray-800 hover:text-gray-600 mx-4"><i className="fa fa-shopping-cart"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;