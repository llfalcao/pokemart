export interface CartItem {
  id: number;
  name: string;
  price: string;
  images: string;
  quantity: number;
}

export default interface Cart {
  items: CartItem[];
}
