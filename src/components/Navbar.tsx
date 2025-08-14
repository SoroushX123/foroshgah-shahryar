import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-800 text-white py-4 px-6 flex justify-center gap-6 text-sm md:text-base font-medium shadow font-vazir">
      <Link to="/" className="hover:text-yellow-300 transition">
        صفحه اصلی
      </Link>
      <Link to="/about" className="hover:text-yellow-300 transition">
        درباره‌ی ما
      </Link>
      <Link to="/contact" className="hover:text-yellow-300 transition">
        تماس با ما
      </Link>
    </nav>
  );
};

export default Navbar;
