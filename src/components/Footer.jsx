import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FFEFD5] text-[#5C4033] py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">

        <div>
          <h2 className="text-2xl font-bold mb-2">PYQStore</h2>
          <p className="text-sm">
            Your trusted source for previous year question papers and study materials.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/about" className="hover:underline hover:bg-[#FFEFD5] hover:text-[#5C4033]">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline hover:bg-[#FFEFD5] hover:text-[#5C4033]">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline hover:bg-[#FFEFD5] hover:text-[#5C4033]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-[#5C4033]">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#5C4033]">
              <Twitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#5C4033]">
              <Instagram />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-[#5C4033] mt-6">
        &copy; {new Date().getFullYear()} PYQStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
