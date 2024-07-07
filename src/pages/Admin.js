import React from 'react';

const Admin = () => {
    return (
        <section className="container mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold text-center">Administração</h2>
            <div className="flex justify-center mt-8">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold">Gerir Produtos</h3>
                        <button className="mt-4 inline-block bg-pink-500 text-white py-2 px-6 rounded-lg">Adicionar Produto</button>
                        <button className="mt-4 inline-block bg-pink-500 text-white py-2 px-6 rounded-lg">Editar Produto</button>
                        <button className="mt-4 inline-block bg-pink-500 text-white py-2 px-6 rounded-lg">Remover Produto</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admin;
