// data/mockReviews.ts

import Review from "@/util/review";

const mockReviews: Review[] = [
  {
    id: 1,
    author: "Jane Doe",
    rating: 5,
    // Corrected the apostrophe ' in "I've" to its HTML entity &apos;
    comment: "This is the best product I&apos;ve ever bought! Highly recommend it to everyone.",
  },
  {
    id: 2,
    author: "John Smith",
    rating: 4,
    comment: "Solid product, great quality for the price. I wish there were more color options.",
  },
  {
    id: 3,
    author: "Alice Johnson",
    rating: 5,
    comment: "Absolutely love it! The shipping was fast and the product exceeded my expectations.",
  },
];

export default mockReviews;