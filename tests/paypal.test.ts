const { generateAccessToken, paypal } = require('@/lib/paypal');

// test('generateAccessToken', async () => {
//   const token = await generateAccessToken();
//   console.log(token);
//   expect(typeof token).toBe('string');
//   expect(token.length).toBeGreaterThan(0);
// });

test('createOrder', async () => {
  const token = await generateAccessToken();
  const order = await paypal.createOrder(100.0);
  console.log(order);
  expect(order).toHaveProperty('id');
  expect(order).toHaveProperty('status');
  expect(order.status).toBe('CREATED');
});

// Test to capture payment with mock order
test('simulate capturing a payment from an order', async () => {
  const orderId = '100';

  const mockCapturePayment = jest
    .spyOn(paypal, 'capturePayment')
    .mockResolvedValue({
      status: 'COMPLETED',
    });

  const captureResponse = await paypal.capturePayment(orderId);
  expect(captureResponse).toHaveProperty('status', 'COMPLETED');

  mockCapturePayment.mockRestore();
});

