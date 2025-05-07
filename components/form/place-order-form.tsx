'use client';

import { useRouter } from 'next/navigation';
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { Check, Loader } from 'lucide-react';
import { createOrder } from '@/lib/actions/order.action';

const PlaceOrderForm = () => {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await createOrder();
    if (result.redirectTo) router.push(result.redirectTo);
  };

  const PlaceOrderButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full">
        {pending ? (
          <Loader className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Check className="w-4 h-4 mr-2" />
        )}
        Place Order
      </Button>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <PlaceOrderButton />
    </form>
  );
};

export default PlaceOrderForm;
