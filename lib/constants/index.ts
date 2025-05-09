export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION;

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const LATEST_PRODUCTS_LIMIT = 6;

export const signInDefaultValues = {
  email: '',
  password: '',
};

export const signUpDefaultValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const shippingAddressDefaultValues = {
  fullName: 'John Doe',
  streetAddress: '123 Main st',
  city: 'Anytown',
  postalCode: '12345',
  country: 'USA',
};

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(', ')
  : ['PayPal', 'Stripe', 'CashOnDelivery'];

export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || 'PayPal';

export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 4;

export const productDefaultValues = {
  name: '',
  slug: '',
  category: '',
  images: [],
  brand: '',
  description: '',
  price: '0',
  stock: 0,
  rating: '0',
  numReviews: '0',
  isFeatured: false,
  banner: null,
};

export const USER_ROLES = process.env.USER_ROLES
  ? process.env.USER_ROLES.split(', ')
  : ['admin', 'user'];

  export const reviewFormDefaultValues = {
    title: '',
    comment: '',
    rating: 0,
  };
