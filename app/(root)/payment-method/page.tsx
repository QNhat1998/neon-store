import { auth } from '@/auth';
import CheckoutSteps from '@/components/checkout-step';
import PaymentMethodForm from '@/components/form/payment-method-form';
import { getUserById } from '@/lib/actions/user.action';
import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Select Payment Method',
  description: 'Payment Method',
};

const PaymentMethodPage = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw new Error('User not found');

  const user = await getUserById(userId);

  return (
    <>
      <CheckoutSteps current={2} />
      <PaymentMethodForm preferredPaymentMethod={user.paymentMethod} />
    </>
  );
};

export default PaymentMethodPage;
