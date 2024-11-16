import React, { useState } from "react";
import axios from "axios"; // Added axios for backend integration
import Footer from "../Components/Footer/Footer";

function RegistrationForm() {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNo: "",
    gender: "Male",
    address: ""
  });

  const handleImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Backend integration example using axios
      const response = await axios.post("https://localhost:2000/register", formData);
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 my-20">
      <h2 className="text-3xl font-semibold mb-4 text-blue-950">Create Your KLOSET Account</h2>
      <p className="mb-8 text-lg font-light text-gray-600">Join the world's largest online fashion space</p>

      <div className="flex flex-col items-center mb-6">
        <label htmlFor="profileImage" className="cursor-pointer">
          <img
            src={profileImage || "https://t4.ftcdn.net/jpg/05/69/90/73/360_F_569907313_fl7W3gX7YIVw2r05B4Ij1c21ix4xRUqD.jpg"}
            alt="Profile"
            className="object-cover w-24 h-24 border-4 border-blue-950 rounded-full"
          />
        </label>
        <input
          id="profileImage"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <p className="mt-2 text-sm text-gray-500">Profile Picture</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md px-8 py-8 bg-white rounded-lg shadow-lg border border-gray-200"
      >
        {[ 
          { label: "Full Name", name: "fullName", type: "text" },
          { label: "Username", name: "username", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Password", name: "password", type: "password" },
          { label: "Confirm Password", name: "confirmPassword", type: "password" },
          { label: "Mobile-No", name: "mobileNo", type: "tel" }
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
          <label className="block mb-2 text-sm font-semibold text-gray-600">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

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
          className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-950 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          Register
        </button>
      </form>

      
    </div>
    <Footer />
    </div>
  );
}

export default RegistrationForm;
