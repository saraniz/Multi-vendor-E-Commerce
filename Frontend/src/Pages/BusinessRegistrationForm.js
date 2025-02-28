import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";

function BusinessRegistrationForm() {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    businessName: "",
    businessUsername: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessRegNo: "",
    contactNumber1: "",
    contactNumber2: "",
    address: ""
  });

  const handleImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div>
    <div className="flex flex-col items-center justify-center min-h-screen my-10 text-gray-800 bg-white">
        <h2 className="mb-4 text-3xl font-semibold text-blue-950">Create Your KLOSET Shop</h2>
        <p className="mb-8 text-lg font-light text-gray-600">Join the world's largest online fashion space</p>
      <div className="flex flex-col items-center mb-6">
        <label htmlFor="profileImage" className="cursor-pointer">
          <img
            src={profileImage || "https://t4.ftcdn.net/jpg/05/69/90/73/360_F_569907313_fl7W3gX7YIVw2r05B4Ij1c21ix4xRUqD.jpg"}
            alt="Profile"
            className="object-cover w-24 h-24 border-4 rounded-full border-blue-950"
          />
        </label>
        <input
          id="businessprofileImage"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <p className="mt-2 text-sm text-gray-500">Business Profile Picture</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md px-8 py-6 bg-white border border-gray-200 rounded-lg shadow-md"
      >
        {[
          { label: "Business Name", name: "businessName", type: "text" },
          { label: "Business Username", name: "businessUsername", type: "text" },
          { label: "Email", name: "businesemail", type: "email" },
          { label: "Password", name: "businesspassword", type: "password" },
          { label: "Confirm Password", name: "confirmPassword", type: "password" },
          { label: "Business Reg No", name: "businessRegNo", type: "text" },
          { label: "Contact Number 1", name: "businesscontactNumber1", type: "tel" },
          { label: "Contact Number 2", name: "businesscontactNumber2", type: "tel" }
        ].map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block mb-2 text-sm font-semibold text-gray-600">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-600">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 font-semibold text-white rounded-md bg-blue-950 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          Make Shop
        </button>
      </form>
    </div>
    <Footer />
    </div>
  );
}

export default BusinessRegistrationForm;
