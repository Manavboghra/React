import React from 'react';

// --- SVG Icons for the Footer ---
// A simple way to include icons without extra dependencies.
const GitHubIcon = () => (
    <a href="https://github.com/Manavboghra">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
  </a>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
);


const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
      <div className="container mx-auto px-6 py-6 text-center text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-white transition-colors"><TwitterIcon /></a>
          <a href="#" className="hover:text-white transition-colors"><GitHubIcon /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} CurrencyApp. All Rights Reserved.</p>
        <p className="text-sm mt-1">Designed with Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
