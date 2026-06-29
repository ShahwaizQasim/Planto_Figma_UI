import React from "react";
import { navLinks, NavRightImages } from "../../utils/data";
import { Link } from "react-router-dom";
import { images } from "../../utils/images";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-dark-green shadow-md">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="h-12 w-24 sm:w-28">
          <img
            src={images.navLogo}
            alt="logo"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-white font-inter-medium font-size-24px">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.href}
                className="transition duration-300 hover:text-green-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex gap-4 items-center">
          {NavRightImages.map((img) => (
            <div key={img.id} className="w-6 h-6 cursor-pointer">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-dark-green overflow-hidden  transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 text-white">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-green-400 "
              >
                {link.name}
              </Link>
            </li>
          ))}

          <div className="flex gap-4 mt-3">
            {NavRightImages.map((img) => (
              <div key={img.id} className="w-6 h-6 cursor-pointer">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
