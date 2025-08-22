import React from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Privacy Policy
        </h1>

        <section className="bg-white rounded-lg shadow p-8 space-y-6">
          <p>
            At <span className="font-semibold">KlOSET</span>, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.
          </p>

          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Personal information you provide (name, email, address)</li>
            <li>Payment details when you make purchases</li>
            <li>Browsing behavior on our platform</li>
          </ul>

          <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>To process orders and manage your account</li>
            <li>To send updates, offers, and marketing communications (with your consent)</li>
            <li>To improve our website and user experience</li>
          </ul>

          <h2 className="text-2xl font-semibold">Sharing and Security</h2>
          <p>
            We do not sell your personal information. Your data is stored securely, and we may share it with trusted service providers to help deliver our services.
          </p>

          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data. You can also unsubscribe from marketing communications at any time.
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

export default PrivacyPolicy;
