import { useEffect, useState } from "react";

export const useFetchProducts = () => {
  const endpoint = "https://api.escuelajs.co/api/v1/products?offset=0&limit=41";
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { products };
};
