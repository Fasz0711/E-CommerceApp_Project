import React from "react";
import { useFetchProducts } from "./useFetchProducts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";

export const ShowProducts = ({ addProduct }) => {
  const { products } = useFetchProducts();

  const handleAddProduct = (product) => {
    addProduct(product);
    toast.success(`${product.title} agregado al carrito`, {
      position: "bottom-right",
      duration: 3000,
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, key) => (
          <Card key={key} className="shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="p-4 bg-white flex justify-between items-center">
              <CardTitle className="text-xl font-semibold">
                {product.title}
              </CardTitle>
              <Button
                className="bg-blue-600 text-white p-2 rounded-full"
                onClick={() => handleAddProduct(product)}
              >
                <ShoppingCart />
              </Button>
            </CardHeader>
            <CardContent className="p-4 bg-white">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              <p className="text-2xl font-bold text-center">${product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
