import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2">
      <footer className="w-full text-center text-gray-600 dark:text-gray-400 dark:bg-gray-800 p-4">
        <div className="flex items-center space-x-8 justify-center pb-4">
          <img
            src="https://cfi.iitm.ac.in/assets/WebopsandBlockchainLogo-207245f0.png"
            alt="Club_logo"
            className="w-16 h-16"
          />
          <img
            src="https://cfi.iitm.ac.in/assets/CFI%20Logo%20-%20White-6966b7c8.png"
            alt="CFI_logo"
            className="w-16 h-16 object-contain"
          />
          <img
            src="https://cfi.iitm.ac.in/assets/IITMadrasLogo-23dbf76e.png"
            alt="IITM_logo"
            className="w-14 h-14"
          />
        </div>

        <p>© 2024 InstiOlx. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
