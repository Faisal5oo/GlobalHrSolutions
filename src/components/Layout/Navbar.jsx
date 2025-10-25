"use client";

import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="text-white bg-[#0a1537] rounded-full mt-6 border border-gray-700">
      <div className="px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            Global Hire Solution
          </Link>
          {/* <Image src="/logo.png" alt="logo" width={100} height={100} /> */}
          {/* Desktop Menu */}
          <div className="hidden md:flex text-sm text-gray-500 py-2 px-4 rounded-full shadow-md">
            <Link
              href="/"
              className={`py-2 px-4 rounded-full transition ${
                pathname === "/" ? "text-white" : "hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`py-2 px-4 rounded-full transition ${
                pathname === "/about" ? "text-white" : "hover:text-white"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`py-2 px-4 rounded-full transition ${
                pathname === "/contact" ? "text-white" : "hover:text-white"
              }`}
            >
              Contact Us
            </Link>
            <Link
              href="/job-application"
              className={`py-2 px-4 rounded-full transition ${
                pathname === "/job-application" ? "text-white" : "hover:text-white"
              }`}
            >
              Apply Now
            </Link>
          </div>

          {/* Rightmost Button */}
          <div className="flex space-x-4 hidden md:flex">
            <Link href="/contact">
              <button className="bg-[#6c1293] text-white shadow-md hover:bg-[#35358B] hover:text-white transition py-3 px-4 rounded-[16px]">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-80 p-4 space-y-3 text-center rounded-b-2xl border border-gray-700 backdrop-blur-md">
          <Link href="/" className="block hover:text-[#6c1293]">
            Home
          </Link>
          <Link href="/about" className="block hover:text-[#6c1293]">
            About Us
          </Link>
          <Link href="/contact" className="block hover:text-[#6c1293]">
            Contact Us
          </Link>
          <Link href="/job-application" className="block hover:text-[#6c1293]">
            Apply Now
          </Link>
          <Link href="/contact">
            <button className="w-full bg-[#6c1293] px-5 py-2 mt-2 rounded-lg font-medium hover:bg-[#35358B]">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
