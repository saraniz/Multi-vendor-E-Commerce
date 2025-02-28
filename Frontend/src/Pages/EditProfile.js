import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, updateProfile } from '../Storage/Auth/UserAction'; // Adjust the path accordingly
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import CustomerNavbar from '../Components/Body/CustomerNavbar';

const EditProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  // State variables for form inputs
  const [fullName, setFullName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [teleNumber, setTeleNumber] = useState('');
  const [address, setAddress] = useState('');

  // Fetch user data on component mount
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  // Populate form fields when user data is fetched
  useEffect(() => {
    if (user) {
      setFullName(user.fullName || '');
      setTeleNumber(user.teleNumber || '');
      setAddress(user.address || '');
      // Assuming profilePicture is a URL or file path
      setProfilePicture(user.profilePicture || null);
    }
  }, [user]);

  // Handler for saving all form data
  const handleSaveAll = () => {
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('teleNumber', teleNumber);
    formData.append('address', address);
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    dispatch(updateProfile(formData));
  };

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <CustomerNavbar />

        {/* Main Content */}
        <div className="flex-grow p-6 space-y-8">
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
            </div>
          </div>

          {/* Single Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSaveAll}
              className="px-6 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Save All
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;