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
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <CustomerNavbar />

        {/* Main Content */}
        <div className="flex-grow p-8 space-y-6 max-w-3xl mx-auto">
          {/* Edit Name */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-700">Edit Name</h2>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Edit Profile Picture */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-700">Edit Profile Picture</h2>
            <div className="flex flex-col items-center">
              <label className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition-colors">
                <span className="text-2xl font-bold text-gray-600">+</span>
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
            <h2 className="text-lg font-semibold text-gray-700">Edit Phone Number</h2>
            <input
              type="text"
              value={teleNumber}
              onChange={(e) => setTeleNumber(e.target.value)}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Edit Address */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-700">Edit Address</h2>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              rows="3"
            />
          </div>

          {/* Single Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSaveAll}
              className="px-6 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
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