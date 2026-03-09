'use client';

import React from 'react';

export default function PrintButton() {
  const handlePrint = async () => {
    // Add print styles
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        @page {
          margin: 2cm;
        }
        main {
          background: white !important;
          padding: 0 !important;
          color: black !important;
        }
        h1, h2, h3, h4, h5, h6 {
          color: black !important;
        }
        p, a, ul, ol, li, span {
          color: #333 !important;
        }
        .glass {
          background: white !important;
          border: 1px solid #eee !important;
          backdrop-filter: none !important;
          box-shadow: none !important;
        }
        footer, .apple-button-secondary, button {
          display: none !important;
        }
        .border-b {
          border-color: #eee !important;
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
      className="px-6 py-2.5 bg-[var(--accent)] text-white rounded-full font-semibold hover:bg-[var(--accent-hover)] transition-all duration-300 shadow-md hover:shadow-xl active:scale-95"
    >
      Export to PDF
    </button>
  );
}
