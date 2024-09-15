import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black px-4 py-6 mt-8">
      <div className="container mx-auto flex justify-between">
        {/* Left Section - Site Map */}
        <div>
          <h2 className="font-bold mb-4">Mapa do site</h2>
          <ul>
            <li className="mb-2"><a href="/sobre">Sobre</a></li>
            <li className="mb-2"><a href="/produtos">Produtos</a></li>
            <li className="mb-2"><a href="/portfolio">Portfólio</a></li>
          </ul>
        </div>

        {/* Center Section - Quote */}
        <div className="text-center mx-auto">
          <p className="italic">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacus accumsan, ultricies augue a, mollis lorem.”
          </p>
        </div>

        {/* Right Section - Contact Info */}
        <div className="text-right">
          <h2 className="font-bold mb-4">Contactos</h2>
          <div className="flex justify-end space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="mailto:example@example.com" target="_blank" rel="noreferrer">
              <FaEnvelope size={24} />
            </a>
            <a href="https://wa.me/your-number" target="_blank" rel="noreferrer">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-pink-200 p-3 rounded-full">
          <span className="text-white">&#8593;</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;