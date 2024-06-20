// src/components/NavBar.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const NavBar: React.FC = () => {
  const venue = useSelector((state: RootState) => state.venue.venue);
  const navBackgroundColor = venue?.webSettings.navBackgroundColour;

  return (
    <nav
      style={{ backgroundColor: navBackgroundColor }}
      className="text-white p-4"
    >
      <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-4">
          <a href="#menu" className="hover:underline text-white">
            Menu
          </a>
          <a href="#entrar" className="hover:underline text-white">
            Entrar
          </a>
          <a href="#contato" className="hover:underline text-white">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
