"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="">
      <Image
        src="/menu.svg"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={toggleSidebar}
      />
              <div
              className={`fixed top-0 left-0 h-full w-[450px] bg-secondaryBrown text-white z-40 p-8 transform transition-transform duration-300 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <h2 className="text-2xl mb-8">Mr.Cupcake Design</h2>
              <ul className="space-y-6">
                <li className="cursor-pointer hover:underline">Novedades</li>
                <li className="cursor-pointer hover:underline">Camisetas</li>
                <li className="cursor-pointer hover:underline">Tote Bag</li>
                <li className="cursor-pointer hover:underline">¡Mira nuestro blog!</li>
              </ul>
      
              {/* Mini Sidebar */}
              <div className="mt-32 text-sm">
                <ul className="space-y-4">
                  <li className="cursor-pointer hover:underline">FAQs</li>
                  <li className="cursor-pointer hover:underline">Newsletter</li>
                </ul>
              </div>
      
              {/* Botón para cerrar el Sidebar */}
              {sidebarOpen && (
                <button
                  onClick={toggleSidebar}
                  className="absolute top-8 left-[calc(100%-50px)] transform bg-transparent border-none cursor-pointer"
                >
                  <Image
                    src="/close-arrow.svg"
                    alt="Cerrar menú"
                    width={27}
                    height={28}
                  />
                </button>
              )}
            </div>
    </div>
  );
};

export default Menu;
