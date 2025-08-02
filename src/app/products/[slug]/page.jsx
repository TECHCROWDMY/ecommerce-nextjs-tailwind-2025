import { notFound } from 'next/navigation';
import mockProducts from '@/data/mockProducts';
import ProductDetailsPage from '@/components/ProductDetailsPage';

const ProductPage = async ({ params }) => {
  const { slug } = params;

  const product = mockProducts.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailsPage product={product} />;
};

export default ProductPage;
