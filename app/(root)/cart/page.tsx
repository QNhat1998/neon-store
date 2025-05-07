import CartTable from '@/components/cart/cart-table';
import { getMyCart } from '@/lib/actions/cart.action';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Cart',
};

export default async function CartPage() {
  const cart = await getMyCart();
  return <CartTable cart={cart} />;
}
