import ViewAllButton from '@/components/buttons/view-all-button';
import ProductCarousel from '@/components/products/product-carousel';
import ProductList from '@/components/products/products-list';
import {
  getFeaturedProducts,
  getLatestProducts,
} from '@/lib/actions/product.action';
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Home = async () => {
  await delay(1000);

  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();
  console.log(featuredProducts, 'featuredProducts');

  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="Featured Products" limit={4} />
      <ViewAllButton />
    </>
  );
};

export default Home;
