import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

export const EcommerceContext = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const storedCart = localStorage.getItem("carrito");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const addProduct = (product) => {
    setCarrito((prevCarrito) => {
      //Comprueba si existe un producto con el mismo titulo
      const existingProductIndex = prevCarrito.findIndex(
        (item) => item.title === product.title
      );

      // si ya existe uno, actualiza el campo quantity
      if (existingProductIndex !== -1) {
        // se crea una nueva instancia del objeto antes de modificarlo
        const updatedCarrito = prevCarrito.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return updatedCarrito;
      } else {
        return [
          ...prevCarrito,
          {
            title: product.title,
            image: product.images[0],
            price: product.price,
            quantity: 1,
          },
        ];
      }
    });
  };

  const removeProduct = (title) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((item) => item.title !== title)
    );
  };

  const clearCart = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
