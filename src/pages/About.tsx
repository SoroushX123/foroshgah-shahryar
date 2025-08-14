import React from "react";
import { Helmet } from "react-helmet";

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>درباره‌ی فروشگاه شهریار | حاج حسین ایلیات</title>
        <meta
          name="description"
          content="معرفی فروشگاه شهریار و حاج حسین ایلیات با بیش از ۲۰ سال تجربه در فروش قطعات یدکی تراکتورهای قدیمی در بازار ایران"
        />
      </Helmet>

      <main className="px-4 md:px-8 py-8 font-vazir">
        <section className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 md:p-10 text-gray-800">
          <h2 className="text-xl md:text-3xl font-bold text-blue-800 mb-6 text-center">
            درباره‌ی فروشگاه شهریار
          </h2>

          <p className="text-sm md:text-base leading-relaxed mb-4">
            فروشگاه شهریار با مدیریت حاج حسین ایلیات، بیش از ۲۰ سال است که در
            زمینه‌ی فروش قطعات یدکی تراکتورهای قدیمی فعالیت دارد. این فروشگاه با
            تمرکز بر برندهای خاص و کمیاب مانند رومانی، فرگوسن، مسی، جاندیر و
            فورد، توانسته اعتماد کشاورزان و تعمیرکاران سراسر کشور را جلب کند.
          </p>

          <p className="text-sm md:text-base leading-relaxed mb-4">
            حاج حسین با تجربه‌ی بالا و شناخت دقیق از نیازهای بازار، همیشه تلاش
            کرده تا قطعات باکیفیت و اصل را با قیمت مناسب در اختیار مشتریان قرار
            دهد.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-600">
            هدف ما از ساخت این سایت، معرفی بهتر فروشگاه، افزایش اعتماد مشتریان،
            و فراهم کردن بستری برای ارتباط سریع‌تر با کشاورزان عزیز است.
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
