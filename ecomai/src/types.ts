export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  specs: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}