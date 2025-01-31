'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-100 text-black mt-auto">
      <div className="container mx-auto px-6 py-4">
        <div className="text-center font-mono text-sm">
          <p>&copy; {new Date().getFullYear()} Iva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;