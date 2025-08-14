import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white py-6 px-4 md:px-8 text-center mt-10 font-vazir">
      <div className="text-sm md:text-base leading-relaxed">
        <p>شماره تماس: ۰۹۱۲۱۲۳۴۵۶۷</p>
        <p className="mt-2">
          آدرس: میدان امام خمینی، خیابان ناصر خسرو، کوچه پست، پاساژ ناصر خسرو،
          طبقه ۳، پلاک ۵
        </p>
        <p className="mt-4 text-xs md:text-sm text-gray-300">
          © {new Date().getFullYear()} فروشگاه شهریار | طراحی توسط سروش ایلیات
        </p>
      </div>
    </footer>
  );
};

export default Footer;
