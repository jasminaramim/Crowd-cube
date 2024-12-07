import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800  text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm">
            We are dedicated to connecting donors with causes that matter. Help us make a difference
            by supporting impactful campaigns.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/all-campaigns" className="hover:text-gray-400">
                All Campaigns
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-gray-400">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-gray-400">
                Register
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm mb-2">
            Email: <a href="mailto:info@donatebangladesh.com" className="hover:text-gray-400">info@donatebangladesh.com</a>
          </p>
          <p className="text-sm mb-2">Phone: +880-1234-567890</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {/* Social Media Links */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-sm text-center">
        <p>© 2024 Donate Bangladesh. All Rights Reserved.</p>
        {/* <p>
          Designed with ❤️ by <a href="https://yourportfolio.com" className="hover:text-gray-400">Your Name</a>
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
