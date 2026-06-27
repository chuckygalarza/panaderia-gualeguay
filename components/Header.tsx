"use client";

import { useState } from "react";
import { Menu, X, Wheat } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Productos", href: "#products" },
  { label: "Ubicación", href: "#location" },
  { label: "Contacto", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm/90 backdrop-blur-sm border-b border-bakery-200">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-bakery-800 font-bold text-xl">
          <Wheat className="h-6 w-6 text-bakery-600" />
          <span className="font-serif">Croissant</span>
        </a>

        <button
          className="lg:hidden p-2 text-bakery-800"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <ul
          className={`${
            open ? "flex" : "hidden"
          } lg:flex absolute lg:static top-16 left-0 right-0 bg-warm lg:bg-transparent flex-col lg:flex-row items-center gap-6 p-6 lg:p-0 border-b lg:border-0 border-bakery-200 shadow-lg lg:shadow-none`}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-bakery-800 hover:text-bakery-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
