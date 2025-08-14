import React from "react";
import { Helmet } from "react-helmet";

const brands: string[] = ["رومانی", "فرگوسن", "مسی", "جاندیر", "فورد"];

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>فروشگاه شهریار | قطعات یدکی تراکتور</title>
        <meta
          name="description"
          content="فروش قطعات یدکی تراکتورهای قدیمی شامل رومانی، فرگوسن، مسی و... با مدیریت حاج حسین ایلیات"
        />
        <meta
          name="keywords"
          content="قطعات تراکتور, رومانی, فرگوسن, فروشگاه شهریار, حاج حسین ایلیات"
        />
        <meta name="author" content="سروش ایلیات" />
      </Helmet>

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-6 text-center rounded-xl shadow-xl mb-12 font-vazir">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          فروشگاه شهریار
        </h1>
        <p className="text-base md:text-lg font-light text-gray-200">
          ارائه‌دهنده‌ی قطعات یدکی تراکتورهای قدیمی | مدیریت: حاج حسین ایلیات
        </p>
      </section>

      <section className="mb-16 font-vazir">
        <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-6 text-center">
          برندهای موجود
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-white shadow-lg rounded-xl p-6 text-center text-blue-800 font-semibold hover:bg-blue-50 transition duration-300"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mb-20 font-vazir">
        <a
          href="tel:09121234567"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl text-lg transition duration-300 shadow-md"
        >
          تماس با ما
        </a>
      </section>
    </>
  );
};

export default Home;
