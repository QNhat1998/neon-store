const base = process.env.PAYPAL_API_URL || 'https://api-m.sandbox.paypal.com';

export const paypal = {
  createOrder: async function createOrder(price: number) {
    try {
      console.log('PayPal Util: Starting createOrder with price:', price);
      const accessToken = await generateAccessToken();
      console.log('PayPal Util: Got access token');

      const url = `${base}/v2/checkout/orders`;
      console.log('PayPal Util: API URL:', url);

      // Format price to 2 decimal places
      const formattedPrice = Number(price).toFixed(2);
      console.log('PayPal Util: Formatted price:', formattedPrice);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: formattedPrice,
              },
            },
          ],
        }),
      });
      console.log('PayPal Util: API Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('PayPal Util: API Error:', errorText);
        throw new Error(`PayPal API error: ${errorText}`);
      }

      const data = await response.json();
      console.log('PayPal Util: API Response data:', data);

      if (!data.id) {
        throw new Error('PayPal order ID not received');
      }

      return data;
    } catch (error) {
      console.error('PayPal Util: Create order error:', error);
      throw error;
    }
  },
  capturePayment: async function capturePayment(orderId: string) {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders/${orderId}/capture`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
  },
};

// Generate paypal access token
async function generateAccessToken() {
  const { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET } = process.env;
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_APP_SECRET}`).toString(
    'base64'
  );

  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  if (response.ok) {
    const jsonData = await response.json();
    return jsonData.access_token;
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}

export { generateAccessToken };
