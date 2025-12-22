import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Copyright */}
        <p className="text-center md:text-left">
          © 2025 <span className="font-medium text-gray-700">Vinay Pandey</span>. All rights reserved.
        </p>

        {/* Powered By */}
        <p className="text-center">
          Powered by{" "}
          <a
            href="https://github.com/Vinay-pandey-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Vinay Pandey
          </a>
        </p>

        {/* Links */}
        <p className="flex gap-2 text-center">
          <Link
            to="/PrivacyPolicy"
            className="hover:text-blue-600 transition"
          >
            Privacy Policy
          </Link>
          <span>|</span>
          <Link
            to="/TermsofService"
            className="hover:text-blue-600 transition"
          >
            Terms of Service
          </Link>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
