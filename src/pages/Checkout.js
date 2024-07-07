import React from 'react';

const Checkout = () => {
    return (
        <section className="container mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold text-center">Finalizar Compra</h2>
            <div className="flex flex-wrap justify-center mt-8">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold">Faturação</h3>
                        <input type="text" placeholder="Morada" className="mt-4 w-full border-gray-300 rounded-lg"/>
                        <input type="text" placeholder="NIF" className="mt-4 w-full border-gray-300 rounded-lg"/>
                        <input type="text" placeholder="Telemóvel" className="mt-4 w-full border-gray-300 rounded-lg"/>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold">Entrega</h3>
                        <input type="text" placeholder="Morada" className="mt-4 w-full border-gray-300 rounded-lg"/>
                        <input type="text" placeholder="Código Postal" className="mt-4 w-full border-gray-300 rounded-lg"/>
                        <div className="mt-4">
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio" name="delivery" value="ctt"/>
                                <span className="ml-2">CTT</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-8">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold">Pagamento</h3>
                        <div className="mt-4">
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio" name="payment" value="multibanco"/>
                                <span className="ml-2">Multibanco</span>
                            </label>
                        </div>
                        <div className="mt-4">
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio" name="payment" value="mbway"/>
                                <span className="ml-2">MB Way</span>
                            </label>
                        </div>
                        <button className="mt-6 inline-block bg-pink-500 text-white py-2 px-6 rounded-lg">Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
