interface CartItem extends Ticket {
  quantity: number;
}

interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

import create from "zustand";
import { Ticket } from "../constants/data";

interface CartState {
  cart: Cart;
  addTicket: (ticket: Ticket) => void;
  removeTicket: (ticketId: string) => void;
  clearCart: () => void;
}

const useCart = create<CartState>((set) => ({
  cart: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },
  addTicket: (ticket) =>
    set((state) => {
      const existingItem = state.cart.items.find(
        (item) => item.id === ticket.id
      );

      let updatedItems;
      if (existingItem) {
        updatedItems = state.cart.items.map((item) =>
          item.id === ticket.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.cart.items, { ...ticket, quantity: 1 }];
      }

      const totalItems = updatedItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const totalPrice = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        cart: {
          items: updatedItems,
          totalItems,
          totalPrice,
        },
      };
    }),
  removeTicket: (ticketId) =>
    set((state) => {
      const existingItem = state.cart.items.find(
        (item) => String(item.id) === String(ticketId)
      );
      if (!existingItem) return state;

      let updatedItems;
      if (existingItem.quantity > 1) {
        updatedItems = state.cart.items.map((item) =>
          item.id === ticketId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        updatedItems = state.cart.items.filter((item) => item.id !== ticketId);
      }

      const totalItems = updatedItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const totalPrice = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        cart: {
          items: updatedItems,
          totalItems,
          totalPrice,
        },
      };
    }),
  clearCart: () =>
    set(() => ({
      cart: {
        items: [],
        totalItems: 0,
        totalPrice: 0,
      },
    })),
}));

export default useCart;
