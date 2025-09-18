'use client';

import React from 'react';

export default function PrintButton() {
  const handlePrint = async () => {

    // Add print styles
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        main {
          background: white;
        }
        h1,h2,h3,h4,h5,h6 {
          color: black;
        }
        p,a,ul,ol,li,span,button{
          color: darkgrey !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Wait for styles to be applied
    await new Promise(resolve => setTimeout(resolve, 100));

    // Print
    window.print();

    // Remove print styles after printing
    document.head.removeChild(style);
  }

  return (
    <button
      onClick={handlePrint}
      className="px-6 py-3 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition-colors"
    >
      Export to PDF
    </button>
  );
}

