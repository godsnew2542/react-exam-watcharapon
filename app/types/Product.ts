export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'electronics' | 'clothing' | 'books' | 'home';
}