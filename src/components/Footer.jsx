//
// import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">e-Shop</h3>
          <p className="mt-4 text-gray-300">
            Your one-stop for all your needs. Shop with us and get the best
            online shopping experience.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-gray-300 transition-colors"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow us</h4>
          <div className="flex space-x-4 mt-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
          <form className="mt-8">
            <label htmlFor="footer-email" className="sr-only">
              Email Newsletter
            </label>
            <div className="flex">
              <input
                id="footer-email"
                type="email"
                placeholder="Enter Email"
                className="w-full p-2 rounded-l-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-lg border border-gray-600 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; 2024 e-Shop. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="/cookies"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
