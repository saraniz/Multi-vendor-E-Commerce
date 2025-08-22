import React from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import about from '../Assests/about.jpg';

function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to KlOSET
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            KlOSET is a modern multi-vendor fashion eCommerce platform, 
            bringing together unique fashion brands and trends under one digital roof. 
            Shop, sell, and explore the latest styles with ease.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={about}
              alt="Fashion showcase"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-600">
              At KlOSET, our mission is to empower fashion entrepreneurs and provide customers 
              with a seamless, trendy shopping experience. We aim to bridge the gap between 
              independent sellers and fashion enthusiasts across the globe.
            </p>
            <p className="text-gray-600">
              By combining a user-friendly interface, reliable delivery system, and curated 
              collections, KlOSET ensures that every transaction is smooth and satisfying.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose KlOSET</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Diverse Fashion</h3>
              <p className="text-gray-600">
                Discover unique styles and collections from multiple sellers worldwide.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                We prioritize secure payments and reliable order tracking for a smooth experience.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Seller Empowerment</h3>
              <p className="text-gray-600">
                Tools for sellers to manage inventory, showcase products, and reach new customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <img
                src="/team1.jpg"
                alt="Founder"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Alex Johnson</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <img
                src="/team2.jpg"
                alt="CTO"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Samantha Lee</h3>
              <p className="text-gray-500">CTO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <img
                src="/team3.jpg"
                alt="Marketing"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Ravi Kumar</h3>
              <p className="text-gray-500">Marketing Head</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <img
                src="/team4.jpg"
                alt="Operations"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Leila Fernandez</h3>
              <p className="text-gray-500">Operations Manager</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Explore Fashion?
          </h2>
          <p className="text-gray-600 mb-6">
            Join KlOSET today and discover a world of style while supporting independent sellers.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Start Shopping
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;
