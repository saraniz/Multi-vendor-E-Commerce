import React, { useState } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const EditProfile = () => {
  // State variables for form inputs
  const [fullName, setFullName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [teleNumber, setTeleNumber] = useState('');
  const [address, setAddress] = useState('');

  // Handlers for form submission
  const handleSaveFullName = () => {
    console.log({ fullName });
    // Replace with API call
    // fetch('/api/edit-profile', { method: 'POST', body: JSON.stringify({ fullName }) });
  };

  const handleSaveProfilePicture = () => {
    console.log({ profilePicture });
    // Replace with API call
    // Use FormData to upload the file
    const formData = new FormData();
    formData.append('profilePicture', profilePicture);
    // fetch('/api/edit-profile-picture', { method: 'POST', body: formData });
  };

  const handleSaveTeleNumber = () => {
    console.log({ teleNumber });
    // Replace with API call
    // fetch('/api/edit-profile', { method: 'POST', body: JSON.stringify({ teleNumber }) });
  };

  const handleSaveAddress = () => {
    console.log({ address });
    // Replace with API call
    // fetch('/api/edit-profile', { method: 'POST', body: JSON.stringify({ address }) });
  };

  return (
    <div>
        <Navbar/>
    <div className="max-w-2xl p-6 mx-auto space-y-8">
      {/* Edit Name */}
      <div className="space-y-2">
        <h2 className="text-lg font-medium">Edit Name</h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <button
            onClick={handleSaveFullName}
            className="px-4 py-2 text-sm bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Save
          </button>
        </div>
      </div>

      {/* Edit Profile Picture */}
      <div className="space-y-2">
        <h2 className="text-lg font-medium">Edit Profile Picture</h2>
        <div className="flex flex-col items-center">
          <label className="flex items-center justify-center w-24 h-24 bg-gray-300 rounded-full cursor-pointer">
            <span className="text-2xl font-bold">+</span>
            <input
              type="file"
              onChange={(e) => setProfilePicture(e.target.files[0])}
              className="hidden"
            />
          </label>
          <button
            onClick={handleSaveProfilePicture}
            className="px-4 py-2 mt-2 text-sm bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Save
          </button>
        </div>
      </div>

      {/* Edit Tele Number */}
      <div className="space-y-2">
        <h2 className="text-lg font-medium">Edit Tele Number</h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={teleNumber}
            onChange={(e) => setTeleNumber(e.target.value)}
            placeholder="Tele Number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <button
            onClick={handleSaveTeleNumber}
            className="px-4 py-2 text-sm bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Save
          </button>
        </div>
      </div>

      {/* Edit Address */}
      <div className="space-y-2">
        <h2 className="text-lg font-medium">Edit Address</h2>
        <div className="space-y-2">
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            rows="4"
          />
          <button
            onClick={handleSaveAddress}
            className="px-4 py-2 text-sm bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Save
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default EditProfile;
