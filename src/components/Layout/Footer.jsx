import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-20">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Left Side - Text & Email Input */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Ready to Find Your<br /> Perfect Talent?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Get in touch for a free consultation about your international recruitment needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href={"/contact"}>
                <button className="bg-[#6c1293] text-white rounded-full shadow-md hover:bg-[#35358B] hover:text-white px-6 py-2 rounded-lg font-medium transition w-full sm:w-auto">
                  Get Started
                </button>
              </Link>
              <Link href={"/job-application"}>
                <button className="bg-[#35358B] text-white rounded-full shadow-md hover:bg-[#6c1293] hover:text-white px-6 py-2 rounded-lg font-medium transition w-full sm:w-auto">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Logo */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="text-3xl font-bold text-[#6c1293]">
              GlobalRecruit
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm space-y-6 md:space-y-0">
          
          {/* Left - Links */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-2 text-md">
            <Link href="/" className="hover:text-white font-semibold">
              Home
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/job-application" className="hover:text-white">
              Apply Now
            </Link>
          </div>

          {/* Right - Copyright */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
            <p className="text-gray-400 text-sm sm:text-base">
              Connecting Global Talent with Opportunity
            </p>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">© 2025 GlobalRecruit — All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
