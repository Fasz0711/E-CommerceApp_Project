import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CarritoContext } from "./EcommerseContext";
import { Navbar } from "./Navbar";
import { Trash } from "lucide-react";

export const Carrito = () => {
  const { carrito, removeProduct, clearCart } = useContext(CarritoContext);

  const total = carrito.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Productos en el carrito
        </h1>
        {carrito.length === 0 ? (
          <p className="text-center text-xl">No hay productos en el carrito</p>
        ) : (
          <Table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <TableHeader className="bg-gray-200">
              <TableRow>
                <TableHead className="text-xl  p-4">Producto</TableHead>
                <TableHead className="text-xl  p-4 text-center">
                  Imagen
                </TableHead>
                <TableHead className="text-xl  p-4 text-center">
                  Cantidad
                </TableHead>
                <TableHead className="text-xl  p-4 text-center">
                  Precio
                </TableHead>
                <TableHead className="text-xl  p-4 text-center">
                  Subtotal
                </TableHead>
                <TableHead className="text-xl  p-4 text-center">
                  Eliminar
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {carrito.map((item, index) => (
                <TableRow key={index} className="border-b">
                  <TableCell className="text-lg p-4">{item.title}</TableCell>
                  <TableCell className="text-lg p-4 text-center flex justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover"
                    />
                  </TableCell>
                  <TableCell className="text-lg p-4 text-center">
                    {item.quantity}
                  </TableCell>
                  <TableCell className="text-lg p-4 text-center">
                    ${item.price}
                  </TableCell>
                  <TableCell className="text-lg p-4 text-center">
                    ${item.price * item.quantity}
                  </TableCell>
                  <TableCell className="text-lg p-4 text-center">
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeProduct(item.title)}
                    >
                      <Trash />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="p-4 text-right font-bold text-lg"
                >
                  Total:
                </TableCell>
                <TableCell className="p-4 text-center font-bold text-lg">
                  ${total.toFixed(2)}
                </TableCell>
                <TableCell className="p-4 text-center">
                  <Button variant="destructive" onClick={clearCart}>
                    Vaciar carrito
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
      </div>
    </>
  );
};
