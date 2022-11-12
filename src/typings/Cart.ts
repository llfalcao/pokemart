export interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

export default interface Cart {
  items: CartItem[];
}
