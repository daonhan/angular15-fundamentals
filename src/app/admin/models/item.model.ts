export interface Item {
  id?: string;
  name: string;
  icon: string;
  price: number,
  promo?: 'new' | 'limited';
  description: string
}
