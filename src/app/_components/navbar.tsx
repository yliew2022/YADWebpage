/*"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";

interface INavbarProps {}

const navItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About",
    href: "/posts/about-us",
  },
  {
    id: "what-we-do",
    label: "What we do",
    href: "/posts/what-we-do",
  },
  {
    id: "FAQ",
    label: "FAQ",
    href: "/posts/FAQ",
  },
];

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const pathname = usePathname();
  const isActive = (path: Url) => pathname === path;

  return (
    <nav className="pb-4 md:pb-8 flex justify-between items-center">
      <Link
        href="/"
        className="text-lg md:text-3xl font-bold text-spotify-green"
      >
        <img src="/assets/blog/nav/blia-logo.avif" alt="Image" />;
      </Link>
     <ul className="flex justify-end items-center gap-4">
        {navItems.map((eachItem) => (
          <li key={eachItem.id}>
            <Link
              href={eachItem.href}
              className={`${
                isActive(eachItem.href) ? "text-spotify-green" : ""
              }`}
            >
              {eachItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;*/

"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";

interface INavbarProps {}

const navItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About",
    href: "/posts/about-us",
  },
  {
    id: "what-we-do",
    label: "What we do",
    href: "/posts/what-we-do",
  },
  {
    id: "FAQ",
    label: "FAQ",
    href: "/posts/FAQ",
  },
];

const Navbar: React.FunctionComponent = (props) => {
  const pathname = usePathname();
  const isActive = (path: Url) => pathname === path;

  return (
    <nav className="flex items-center px-4 py-3 bg-white shadow-md">
      <div className="flex items-center space-x-8">
        {/* Logo container with specific dimensions */}
        <div className="w-32 h-16 relative">
          <Image
            src="/assets/blog/nav/blia-logo.avif"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {navItems.map((eachItem) => (
          <Link
            key={eachItem.id}
            href={eachItem.href}
            className={`text-sm font-medium transition-colors ${
              isActive(eachItem.href)
                ? "text-red-600"
                : "text-gray-600 hover:text-red-600"
            }`}
          >
            {eachItem.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;