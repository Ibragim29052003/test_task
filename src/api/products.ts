import products from "../data/products.json";
import type { Product } from "../types/product";

export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products as Product[]);
    }, 500);
  });
};
