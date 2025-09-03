"use client";

import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { Product } from '../data/products';

export interface OrderItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  estimatedDelivery: string;
  shippingInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentInfo: {
    cardLast4: string;
    cardType: string;
  };
}

interface OrderState {
  orders: Order[];
}

type OrderAction = 
  | { type: 'ADD_ORDER'; payload: Order }
  | { type: 'UPDATE_ORDER_STATUS'; payload: { id: string; status: Order['status'] } }
  | { type: 'LOAD_ORDERS'; payload: Order[] };

const initialState: OrderState = {
  orders: []
};

function orderReducer(state: OrderState, action: OrderAction): OrderState {
  switch (action.type) {
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [action.payload, ...state.orders]
      };
    
    case 'UPDATE_ORDER_STATUS':
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload.id
            ? { ...order, status: action.payload.status }
            : order
        )
      };
    
    case 'LOAD_ORDERS':
      return {
        ...state,
        orders: action.payload
      };
    
    default:
      return state;
  }
}

const OrderContext = createContext<{
  state: OrderState;
  addOrder: (order: Omit<Order, 'id' | 'createdAt' | 'estimatedDelivery'>) => string;
  updateOrderStatus: (id: string, status: Order['status']) => void;
  getOrderById: (id: string) => Order | undefined;
} | null>(null);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  // Load orders from localStorage on mount
  useEffect(() => {
    const savedOrders = localStorage.getItem('shopvibe_orders');
    if (savedOrders) {
      try {
        const orders = JSON.parse(savedOrders);
        dispatch({ type: 'LOAD_ORDERS', payload: orders });
      } catch (error) {
        console.error('Failed to load orders from localStorage:', error);
      }
    }
  }, []);

  // Save orders to localStorage whenever orders change
  useEffect(() => {
    localStorage.setItem('shopvibe_orders', JSON.stringify(state.orders));
  }, [state.orders]);

  const generateOrderNumber = () => {
    return 'ORD-' + Date.now().toString().slice(-8) + Math.random().toString(36).substr(2, 4).toUpperCase();
  };

  const addOrder = (orderData: Omit<Order, 'id' | 'createdAt' | 'estimatedDelivery'>) => {
    const now = new Date();
    const deliveryDate = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000); // 5 days from now
    
    const order: Order = {
      ...orderData,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      orderNumber: orderData.orderNumber || generateOrderNumber(),
      createdAt: now.toISOString(),
      estimatedDelivery: deliveryDate.toISOString(),
      status: 'pending'
    };

    dispatch({ type: 'ADD_ORDER', payload: order });
    return order.id;
  };

  const updateOrderStatus = (id: string, status: Order['status']) => {
    dispatch({ type: 'UPDATE_ORDER_STATUS', payload: { id, status } });
  };

  const getOrderById = (id: string) => {
    return state.orders.find(order => order.id === id);
  };

  return (
    <OrderContext.Provider value={{ state, addOrder, updateOrderStatus, getOrderById }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}
