import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-gray-900 flex items-center px-6 shadow-md">
      <img
        src="https://www.loudmouth-media.com/media/1652/e-commerce-large-01.png"
        alt="ECommerce logo"
        className="h-10"
      />
      <div className="ml-auto flex gap-4">
        <Button variant="link" className="text-white text-lg">
          <Link to="/">Productos</Link>
        </Button>
        <Button variant="link" className="text-white text-lg">
          <Link to="/carrito">Carrito</Link>
        </Button>
      </div>
    </nav>
  );
};
