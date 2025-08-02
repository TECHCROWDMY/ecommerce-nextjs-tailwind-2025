import Product from "@/util/product";
import ProductGallery from "@/components/ProductGallery";
import ProductDetailsSection from "@/components/ProductDetailsSection";
import ProductReviews from "@/components/ProductReviews";
import mockReviews from "@/data/mockReviews";

// Product Details Page Layout
const ProductDetailsPage = ({ product }: { product: Product }) => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <ProductGallery product={product} />
        <ProductDetailsSection product={product}   />
      </div>
      <ProductReviews reviews={mockReviews} />
    </div>
  );
};

export default ProductDetailsPage;
