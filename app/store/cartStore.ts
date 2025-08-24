import { create } from "zustand";
import type { CartItem } from "~/types/CartItem";
import type { Product } from "~/types/Product";


type CartStore = {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
};

export const useCartStore = create<CartStore>((set) => ({
    items: [],
    addToCart: (product: Product) => {
        set((state) => {
            const existingItem = state.items.find(item => item.productId === product.id);
            if (existingItem) {
                return {
                    items: state.items.map(item =>
                        item.productId === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            } else {
                return {
                    items: [...state.items, { productId: product.id, product, quantity: 1 }]
                };
            }
        });
    },
    removeFromCart: (productId: string) => {
        set((state) => ({
            items: state.items.filter(item => item.productId !== productId)
        }));
    },
    updateQuantity: (productId: string, quantity: number) => {
        set((state) => ({
            items:
                quantity === 0
                    ? state.items.filter(item => item.productId !== productId)
                    : state.items.map(item =>
                        item.productId === productId
                            ? { ...item, quantity }
                            : item
                    )
        }));
    },
    clearCart: () => {
        set({ items: [] });
    },
    getTotalItems: () => {
        return 0; //useCartStore.getState().items.reduce((total, item) => total + item.quantity, 0);
    },
    getTotalPrice: () => {
        return 0; //useCartStore.getState().items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}));