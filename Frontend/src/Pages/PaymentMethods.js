import React, { useState } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import { FaCreditCard, FaPaypal, FaMoneyBillWave } from 'react-icons/fa';

function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    paypalEmail: '',
    phoneNumber: '',
    address: '',
  });
  const [isDetailsValid, setIsDetailsValid] = useState(false);

  const paymentOptions = [
    { id: 'credit-card', name: 'Credit Card', icon: <FaCreditCard size={24} /> },
    { id: 'paypal', name: 'PayPal', icon: <FaPaypal size={24} /> },
    { id: 'cod', name: 'Cash on Delivery', icon: <FaMoneyBillWave size={24} /> },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => {
      const updatedDetails = { ...prev, [name]: value };
      validateDetails(updatedDetails);
      return updatedDetails;
    });
  };

  const validateDetails = (details) => {
    if (selectedMethod === 'credit-card') {
      setIsDetailsValid(
        details.cardNumber.length === 16 &&
        details.expiry &&
        details.cvv.length === 3
      );
    } else if (selectedMethod === 'paypal') {
      setIsDetailsValid(details.paypalEmail.includes('@'));
    } else if (selectedMethod === 'cod') {
      setIsDetailsValid(
        details.phoneNumber.length >= 10 &&
        details.address.trim() !== ''
      );
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex max-w-6xl gap-10 p-8 mx-auto mt-10 mb-20 bg-white shadow-lg rounded-2xl">
        {/* Left Side: Payment Methods */}
        <div className="w-1/3 space-y-6">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Select Payment Method
          </h2>
          {paymentOptions.map((option) => (
            <div
              key={option.id}
              className={`flex items-center gap-3 p-5 border rounded-xl cursor-pointer transition-all duration-300 ${
                selectedMethod === option.id
                  ? 'border-blue-600 bg-blue-50 shadow-sm'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => {
                setSelectedMethod(option.id);
                setPaymentDetails({
                  cardNumber: '',
                  expiry: '',
                  cvv: '',
                  paypalEmail: '',
                  phoneNumber: '',
                  address: '',
                });
                setIsDetailsValid(false);
              }}
            >
              <span
                className={`${
                  selectedMethod === option.id ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {option.icon}
              </span>
              <span
                className={`text-xl font-medium ${
                  selectedMethod === option.id ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {option.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right Side: Payment Details */}
        <div className="w-2/3 p-6 border rounded-xl bg-gray-50">
          {selectedMethod && (
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                Enter Payment Details
              </h2>
              {selectedMethod === 'credit-card' && (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    maxLength="16"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    value={paymentDetails.cardNumber}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    value={paymentDetails.expiry}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    maxLength="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    value={paymentDetails.cvv}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              {selectedMethod === 'paypal' && (
                <input
                  type="email"
                  name="paypalEmail"
                  placeholder="PayPal Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  value={paymentDetails.paypalEmail}
                  onChange={handleInputChange}
                />
              )}
              {selectedMethod === 'cod' && (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    value={paymentDetails.phoneNumber}
                    onChange={handleInputChange}
                  />
                  <textarea
                    name="address"
                    placeholder="Delivery Address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    value={paymentDetails.address}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              <button
                className={`w-full py-3 mt-6 text-white text-lg rounded-lg transition-all ${
                  isDetailsValid
                    ? 'bg-black hover:bg-gray-900 shadow-md'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={!isDetailsValid}
              >
                Pay Now
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentMethods;