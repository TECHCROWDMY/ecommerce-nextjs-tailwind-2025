// components/ProductReviews.tsx

import Review from "@/util/review";
import { Star } from 'lucide-react';

const ProductReviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
      <div className="space-y-8">
        {reviews.map(review => (
          <div key={review.id} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-600">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-lg text-gray-800">{review.author}</span>
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
            </div>
            {/* The fix is to sanitize the comment string before rendering */}
            <p className="text-gray-600 italic" dangerouslySetInnerHTML={{ __html: review.comment.replace(/'/g, '&apos;') }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;