
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="font-serif text-2xl mb-4">RESIDENCY HOTEL</h3>
            <p className="text-gray-400 mb-4">
              Experience luxury and comfort at its finest. Our hotel combines elegant design with exceptional service to create unforgettable stays.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-serif text-xl mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold" />
                <p className="text-gray-400">1091/50-52 Petchburi 31 (Soi Charurat) Bangkok 10330, Thailand</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <p className="text-gray-400">+66 95 093 5097, +66 (2) 254 5675-7</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <p className="text-gray-400">kumar@residencybangkok.com</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-serif text-xl mb-4">Location</h4>
            <div className="h-48 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                title="Hotel Location"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.464410764677!2d100.54278997455866!3d13.750844297316675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ec6b768404d%3A0xd2b2d23feb44d887!2sResidency%20Hotel%20Bangkok!5e0!3m2!1sen!2sin!4v1739714747119!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Residency Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
