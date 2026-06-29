import React from "react";
import Layout from "../ui/Layout";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Layout className="bg-[#222C1D]">
      <div className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1 - Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🪴</span>
            <span className="text-xl font-bold text-white tracking-wide">
              Planto.
            </span>
          </div>
          <p className="text-white/80 font-size-20px leading-relaxed font-inter-medium max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Col 2 - Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-size-24px font-inter-semibold tracking-wide">
            Quick Link's
          </h3>
          <ul className="flex flex-col gap-3">
            {["Home", "Plant Type's -", "Contact", "Privacy"].map((link) => (
              <li key={link}>
                <Link
                  to="#"
                  className="text-white/80 font-inter-medium text-sm hover:text-white transition-colors duration-200"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 - Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-size-24px font-inter-semibold tracking-wide">
            For Every Update's
          </h3>
          <div className="flex items-stretch">
            <input
              type="email"
              placeholder="Enter Email..."
              className="flex-1 bg-white/90 text-gray-700 placeholder-gray-400 text-sm font-inter-regular px-4 py-2.5 outline-none rounded-none"
            />
            <button className="bg-[#e8e0d0] text-[#1a2a1a] text-xs font-inter-bold tracking-widest px-1 md:px-4 py-2.5 hover:bg-white transition-colors duration-200 whitespace-nowrap uppercase">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Social Links */}
        <div className="flex items-center">
          {["FB", "TW", "LI"].map((social) => (
            <Link
              key={social}
              to="#"
              className="text-white/60 font-size-24px font-medium hover:text-white transition-colors duration-200 font-inter-bold"
            >
              {social}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-white/70 font-size-20px font-inter-regular">
          Planto © All right reserve
        </p>
      </div>
    </Layout>
  );
};

export default Footer;
