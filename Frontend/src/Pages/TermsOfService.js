import React from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";

function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Terms of Service
        </h1>

        <section className="bg-white rounded-lg shadow p-8 space-y-6">
          <p>
            Welcome to <span className="font-semibold">KlOSET</span>. By using our platform, you agree to comply with the following Terms of Service:
          </p>

          <h2 className="text-2xl font-semibold">User Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Provide accurate information when creating an account</li>
            <li>Use our platform for lawful purposes only</li>
            <li>Respect other users and sellers</li>
          </ul>

          <h2 className="text-2xl font-semibold">Intellectual Property</h2>
          <p>
            All content on KlOSET, including product images, text, and logos, is owned by us or our sellers and is protected by copyright laws.
          </p>

          <h2 className="text-2xl font-semibold">Payments and Orders</h2>
          <p>
            All purchases made on KlOSET are final unless otherwise stated in our Return Policy. Prices are subject to change, and taxes may apply.
          </p>

          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p>
            KlOSET is not responsible for any damages resulting from the use of the platform. We strive for accuracy but do not guarantee complete correctness of product information.
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

export default TermsOfService;
