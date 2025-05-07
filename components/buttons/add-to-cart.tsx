'use client';

import { Cart, CartItem } from '@/types';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { addItemToCart, removeItemFromCart } from '@/lib/actions/cart.action';
import { Loader, Minus, Plus } from 'lucide-react';
import { useTransition } from 'react';

interface AddToCartProps {
  item: CartItem;
  cart?: Cart;
}

const AddToCart = ({ item, cart }: AddToCartProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const handleAddToCart = async () => {
    startTransition(async () => {
      const res = await addItemToCart(item);
      if (!res?.success) {
        toast.error(res?.message);
        return;
      }
      toast.success('Item added to cart');
    });
  };

  const handleRemoveFromCart = async () => {
    startTransition(async () => {
      const res = await removeItemFromCart(item.productId);
      if (!res?.success) {
        toast.error(res?.message);
        return;
      }
      toast.success(res?.message);
    });
  };

  // Check if item is in cart
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button type="button" variant="outline" onClick={handleRemoveFromCart}>
        {isPending ? (
          <Loader className="h-4 w-4 animate-spin" />
        ) : (
          <Minus className="h-4 w-4" />
        )}
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button type="button" variant="outline" onClick={handleAddToCart}>
        {isPending ? (
          <Loader className="h-4 w-4 animate-spin" />
        ) : (
          <Plus className="h-4 w-4" />
        )}
      </Button>
    </div>
  ) : (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      {isPending ? (
        <Loader className="h-4 w-4 animate-spin" />
      ) : (
        <>
          <Plus className="h-4 w-4" /> Add to Cart
        </>
      )}
    </Button>
  );
};

export default AddToCart;
