import React from 'react';

const Register = () => {
    return (
        <section className="container mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold text-center">Criar Conta</h2>
            <div className="flex justify-center mt-8">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <input type="email" placeholder="Email" className="mt-4 w-full border-gray-300 rounded-lg"/>
                        <input type="password" placeholder="Palavra-Passe" className="mt-4 w-full border-gray-300 rounded-lg"/>
                        <input type="password" placeholder="Confirmar Palavra-Passe" className="mt-4 w-full border-gray-300 rounded-lg"/>
                        <input type="text" placeholder="Nome" className="mt-4 w-full border-gray-300 rounded-lg"/>
                        <button className="mt-6 inline-block bg-pink-500 text-white py-2 px-6 rounded-lg">Criar Conta</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
