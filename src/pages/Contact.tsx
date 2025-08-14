import React from "react";
import { Helmet } from "react-helmet";

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>تماس با فروشگاه شهریار | قطعات تراکتور</title>
        <meta
          name="description"
          content="راه‌های ارتباط با فروشگاه شهریار شامل شماره تماس، آدرس دقیق در خیابان ناصر خسرو، و نقشه‌ی گوگل برای دسترسی آسان"
        />
      </Helmet>

      <main className="px-4 md:px-8 py-8 font-vazir">
        <section className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 md:p-10 text-gray-800">
          <h2 className="text-xl md:text-3xl font-bold text-blue-800 mb-6 text-center">
            تماس با فروشگاه شهریار
          </h2>

          <div className="mb-6 text-sm md:text-base leading-relaxed">
            <p>
              شماره تماس:{" "}
              <strong className="text-green-700">۰۹۱۲۱۲۳۴۵۶۷</strong>
            </p>
            <p className="mt-2">
              آدرس: میدان امام خمینی، خیابان ناصر خسرو، کوچه پست، پاساژ ناصر
              خسرو، طبقه ۳، پلاک ۵
            </p>
          </div>

          <div className="mb-8">
            <iframe
              src="https://www.google.com/maps?q=میدان امام خمینی خیابان ناصر خسرو کوچه پست پاساژ ناصر خسرو طبقه ۳ پلاک ۵&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              title="نقشه فروشگاه"
              className="rounded-xl shadow"
            ></iframe>
          </div>

          <form className="grid gap-4">
            <input
              type="text"
              placeholder="نام شما"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-vazir"
            />
            <input
              type="email"
              placeholder="ایمیل شما"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-vazir"
            />
            <textarea
              rows={4}
              placeholder="پیام شما"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-vazir"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-xl transition duration-300 shadow-md font-vazir"
            >
              ارسال پیام
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Contact;
