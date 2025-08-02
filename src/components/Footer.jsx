// Footer Component - A simple footer with copyright information.
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} ShopWave. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;