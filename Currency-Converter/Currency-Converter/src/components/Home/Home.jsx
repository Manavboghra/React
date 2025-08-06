import React from 'react';
import { Link } from 'react-router';

const CurrencyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5A6.5 6.5 0 1012 5.5a6.5 6.5 0 000 13z" />
  </svg>
);

const CalculatorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M12 17h.01M15 17h.01M9 10h.01M12 10h.01M15 10h.01M4 7h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1z" />
  </svg>
);

const SwapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
);


export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Seamless Currency Conversion
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Your all-in-one solution for real-time exchange rates, denomination breakdowns, and reverse calculations. Fast, accurate, and easy to use.
          </p>
          <a href="#features-section">
            <button className="mt-8 px-8 py-3 bg-blue-600 font-semibold rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
              Launch App
            </button>
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-800" id='features-section'>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose CurrencyApp?</h2>
            <p className="text-gray-500 mt-2">Everything you need for currency management in one place.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            
            {/* Feature 1 */}
            <Link to="/CurrencyConverter" className="block transform hover:scale-105 hover:-translate-y-2 transition-transform">
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg h-full">
                <div className="flex justify-center mb-4">
                  <CurrencyIcon />
                </div>
                <h3 className="text-xl font-bold mb-2">Live Exchange Rates</h3>
                <p className="text-gray-400">
                  Convert any amount with up-to-the-minute data for currencies across the globe.
                </p>
              </div>
            </Link>

            {/* Feature 2 */}
            <Link to="/Denominator" className="block transform hover:scale-105 hover:-translate-y-2 transition-transform">
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg h-full">
                <div className="flex justify-center mb-4">
                  <CalculatorIcon />
                </div>
                <h3 className="text-xl font-bold mb-2">Note Denominator</h3>
                <p className="text-gray-400">
                  Enter a total amount and instantly see the breakdown of bills and coins.
                </p>
              </div>
            </Link>

            {/* Feature 3 */}
            <Link to="/Reverse" className="block transform hover:scale-105 hover:-translate-y-2 transition-transform">
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg h-full">
                <div className="flex justify-center mb-4">
                  <SwapIcon />
                </div>
                <h3 className="text-xl font-bold mb-2">Reverse Calculator</h3>
                <p className="text-gray-400">
                  Input the number of notes you have to quickly calculate the total sum.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
