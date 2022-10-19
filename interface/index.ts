export interface Product {
  id: string;
  title: string;
  price: number;
  imagen: string;
  quantity: number;
  description?: string;
  slug: string;
}

export interface CartProduct extends Product {
  quantity: number;
}
