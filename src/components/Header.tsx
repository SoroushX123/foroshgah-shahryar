import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10 px-6 text-center shadow-xl font-vazir">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
        فروشگاه شهریار
      </h1>
      <p className="text-base md:text-lg font-light text-gray-200">
        قطعات یدکی تراکتورهای قدیمی | مدیریت: حاج حسین ایلیات
      </p>
    </header>
  );
};

export default Header;
