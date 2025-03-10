import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] text-white py-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Brand and Tagline */}
        <h2 className="text-3xl font-serif font-bold text-gold">Sweet Heaven Bakery</h2>
        <p className="text-lg italic text-gray-400 mt-2">Where Tradition Meets Tomorrow</p>

        {/* Contact Information */}
        <div className="mt-6 text-gray-300">
          <p>© 2024 Sweet Heaven Bakery. Crafted with love, kneaded with care.</p>
          <p>From our ovens to your table since 2015.</p>
          <p>📞 (123) 456-7890 | 📍 123 Sweet Street, Bakery Town</p>
          <p>
            📧{' '}
            <a href="mailto:hello@sweatheaven.com" className="text-gold hover:underline">
              hello@sweatheaven.com
            </a>{' '}
            | 🌐{' '}
            <a href="http://www.sweatheaven.com" className="text-gold hover:underline">
              www.sweatheaven.com
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mt-8">
          <p className="text-gray-400 mb-3">Follow us for a taste of nostalgia with a modern twist:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gold hover:text-white transition-all duration-300"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-gold hover:text-white transition-all duration-300"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com"
              aria-label="TikTok"
              className="text-gold hover:text-white transition-all duration-300"
            >
              <FaTiktok className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-8 text-gray-400">
          <p>💌 Sign up for our newsletter to relive the magic of old-world baking with a sprinkle of today.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
