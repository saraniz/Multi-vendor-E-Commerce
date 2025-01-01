import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, updateProfile } from '../Storage/Auth/UserAction'; // Adjust import path accordingly
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const EditProfile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(state => state.auth);

  // Local state for profile data
  const [profiledata, setProfiledata] = useState({
    fullName: '',
    profilePicture: null,
    teleNumber: '',
    address: '',
  });
  
  const [saveMessage, setSaveMessage] = useState(''); // Feedback state
  

  // Fetch user profile when the component mounts
  useEffect(() => {
    if (!user) {
      dispatch(getUserProfile()); // Fetch user data if not available
    } else {
      // Pre-populate form fields with user data
      setProfiledata({
        fullName: user.fullName || '',
        profilePicture: user.profilePicture || null,
        teleNumber: user.teleNumber || '',
        address: user.address || '',
      });
    }
  }, [dispatch, user]); // Feedback state

  // Handlers for saving data
  const handleSave = async () => {
    dispatch(updateProfile(profiledata));
    // setSaveMessage('Profile updated successfully!');
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfiledata(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl p-6 mx-auto space-y-8">
        {saveMessage && <div className="p-4 text-center text-green-600">{saveMessage}</div>}

        {/* Edit Name */}
        <div className="space-y-2">
          <h2 className="text-lg font-medium">Edit Name</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              name="fullName"
              value={profiledata.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <button
              onClick={() => handleSave('fullName', profiledata.fullName)}
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
                onChange={(e) => setProfiledata(prevData => ({
                  ...prevData,
                  profilePicture: e.target.files[0],  // Handling file input
                }))}
                className="hidden"
              />
            </label>
            <button
              onClick={() => handleSave('profilePicture', profiledata.profilePicture)}
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
              name="teleNumber"
              value={profiledata.teleNumber}
              onChange={handleChange}
              placeholder="Tele Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <button
              onClick={() => handleSave('teleNumber', profiledata.teleNumber)}
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
              name="address"
              value={profiledata.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              rows="4"
            />
            <button
              onClick={() => handleSave('address', profiledata.address)}
              className="px-4 py-2 text-sm bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
