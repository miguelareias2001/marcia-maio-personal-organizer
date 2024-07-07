import React from 'react';

const Home = () => {
    return (
        <>
            <header className="bg-pink-100 py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Bem-vindo ao Meu Site</h1>
                    <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque scelerisque ante ut pellentesque.</p>
                    <a href="/products" className="mt-6 inline-block bg-pink-500 text-white py-2 px-6 rounded-lg">Clique me</a>
                </div>
            </header>
            <section className="container mx-auto px-6 py-10">
                <h2 className="text-3xl font-bold text-center">A Nossa Missão</h2>
                <div className="flex flex-wrap justify-center mt-8">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <img src="path/to/image.jpg" alt="Profile" className="rounded-lg w-full"/>
                            <h3 className="text-2xl font-semibold mt-4">MÁRCIA MAIO</h3>
                            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel orci at eros ullamcorper finibus vitae nec mauris.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
