import React from "react";
import { navLinks, NavRightImages } from "../../utils/data";
import { Link } from "react-router-dom";
import { images } from "../../utils/images";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-dark-green shadow-md">
      <div className="container mx-auto h-full flex items-center justify-between px-7">
        <div className="h-12 w-28 mt-2">
          <img src={images.navLogo} alt="logo" className="object-contain" />
        </div>
        <div>
          <ul className="md:flex gap-6 font-size-20px text-white hidden md:block font-inter-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.href}
                  className="inline-block transform transition duration-300 hover:scale-90 hover:text-green-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          {NavRightImages.map((img) => {
            return (
              <div className="h-6 w-6 hover:cursor-pointer" key={img.id}>
                <img
                  src={img.src}
                  className="object-contain h-full w-full"
                  alt={img.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
