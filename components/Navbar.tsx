"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between relative z-30 py-4 px-6 md:px-12 lg:px-20 md:py-6">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="Logo"
          width={74}
          height={29}
          priority
        />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6">
        {NAV_LINKS.map(({ href, key, label }) => (
          <li key={key}>
            <Link
              href={href}
              className="text-black transition-all hover:font-extrabold hover:text-green-500"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-full hover:bg-green-600 border-4 border-gray-200">
          <Image src="/user.svg" alt="user" width={20} height={20} />
          <span className="font-bold">Log in</span>
        </button>
      </div>

      {/* Hamburger Icon */}
      <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden ">
          {NAV_LINKS.map(({ href, key, label }) => (
            <Link
              key={key}
              href={href}
              className="text-black text-lg"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-full hover:bg-green-600 border-4 border-gray-200">
            <Image src="/user.svg" alt="user" width={20} height={20} />
            <span className="font-bold">Log in</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
