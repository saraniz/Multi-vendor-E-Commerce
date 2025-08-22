import React from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";

function ReturnPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Return & Refund Policy
        </h1>

        <section className="bg-white rounded-lg shadow p-8 space-y-6">
          <p>
            At <span className="font-semibold">KlOSET</span>, we want you to be satisfied with your purchases. Our Return & Refund Policy explains how to return items and get refunds.
          </p>

          <h2 className="text-2xl font-semibold">Eligibility for Returns</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Items must be unused and in original packaging</li>
            <li>Return requests must be made within 14 days of delivery</li>
            <li>Sale or clearance items may have different policies</li>
          </ul>

          <h2 className="text-2xl font-semibold">How to Request a Return</h2>
          <p>
            Contact our support team via the Contact Us page or email. Include your order ID and reason for the return.
          </p>

          <h2 className="text-2xl font-semibold">Refund Processing</h2>
          <p>
            Refunds will be processed within 7-10 business days after we receive the returned item. The refund will be applied to your original payment method.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Last updated: August 2025
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ReturnPolicy;
