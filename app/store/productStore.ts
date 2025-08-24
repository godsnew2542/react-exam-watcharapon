import { create } from "zustand";
import type { Product } from "../types/Product";
import { mockProducts } from "../mockData"

type ProductStore = {
    products: Product[];
    getProductsByCategory: (category: string) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
    products: mockProducts,
    getProductsByCategory: (category: string) => {
        set((state) => ({
            products: mockProducts.filter(product => product.category === category)
        }));
    }
}));