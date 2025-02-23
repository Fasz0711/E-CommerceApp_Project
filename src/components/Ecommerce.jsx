import React from "react";
import { Navbar } from "./Navbar";
import { ShowProducts } from "./ShowProducts";
import { useContext } from "react";
import { CarritoContext } from "./EcommerseContext";

export const Ecommerce = () => {
  const { addProduct } = useContext(CarritoContext);

  return (
    <div className="w-screen min h-screen  min-h-dvh">
      <>
        <Navbar />
        <ShowProducts addProduct={addProduct} />
      </>
    </div>
  );
};
