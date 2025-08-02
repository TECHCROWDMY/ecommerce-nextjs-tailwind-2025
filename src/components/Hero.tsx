const Hero = () => {
  return (
    <div className="bg-indigo-600 text-white py-20 md:py-32 rounded-b-3xl">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">
          Shop the Latest Trends
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 animate-fade-in-up delay-100">
          Discover a collection of unique products and modern designs.
        </p>
        <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
          Explore Collection
        </button>
      </div>
    </div>
  );
};

export default Hero;