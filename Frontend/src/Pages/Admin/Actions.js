import React, { useState } from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import AdminNavbar from '../../Components/Body/AdminNavbar';

function Actions() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Kaveeee Fashion', status: '', profilePic: '/images/user1.jpg' },
    { id: 2, name: 'John Doe', status: '', profilePic: '/images/user2.jpg' },
    { id: 3, name: 'Jane Smith', status: '', profilePic: '/images/user3.jpg' },
    { id: 4, name: 'Alice Brown', status: '', profilePic: '/images/user4.jpg' },
    { id: 5, name: 'Bob Johnson', status: '', profilePic: '/images/user5.jpg' },
    { id: 6, name: 'Charlie Davis', status: '', profilePic: '/images/user6.jpg' },
  ]);

  const [selectedTab, setSelectedTab] = useState('All');

  const handleStatusChange = (id, newStatus) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, status: user.status === newStatus ? '' : newStatus } : user
    ));
  };

  const tabs = ['All', 'Warned 1 time', 'Warned 2 times', 'Warned 3 times', 'Blocked'];

  const filteredUsers = users.filter(user => {
    if (selectedTab === 'All') return true;
    if (selectedTab === 'Warned 1 time') return user.status === '01 Warn';
    if (selectedTab === 'Warned 2 times') return user.status === '02 Warn';
    if (selectedTab === 'Warned 3 times') return user.status === '03 Warn';
    if (selectedTab === 'Blocked') return user.status === 'Blocked';
    return true;
  });

  return (
    <div className="overflow-x-hidden"> {/* Prevent horizontal scrolling */}
      <Navbar />
      <div className="flex min-h-screen">
        <AdminNavbar />
        
        {/* Main Content */}
        <div className="w-full p-4">
          <h1 className="mb-4 text-2xl font-semibold">User Actions</h1>

          {/* Tabs Section */}
          <div className="flex justify-center space-x-6 border-b">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`pb-2 text-lg font-medium ${selectedTab === tab ? 'border-b-2 border-black' : 'text-gray-500'}`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table Wrapper to avoid overflow */}
          <div className="flex justify-center w-full mt-4">  
            <table className="w-3/4 border-collapse"> {/* Centered table */}
              <tbody>
                {filteredUsers.map(user => (
                  <tr key={user.id} className="border-b">
                    <td className="flex items-center p-2">
                      <img
                        src={user.profilePic}
                        alt="profile"
                        className="w-10 h-10 mr-2 rounded-full"
                      />
                      {user.name}
                    </td>
                    <td className="flex p-2 space-x-4">
                      <button className="px-4 py-1 text-white bg-blue-500 rounded" onClick={() => alert(`Contacting ${user.name}`)}>
                        Contact
                      </button>
                      {['01 Warn', '02 Warn', '03 Warn', 'Blocked'].map(status => (
                        <button
                          key={status}
                          className={`px-8 py-1 rounded ${user.status === status ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
                          onClick={() => handleStatusChange(user.id, status)}
                        >
                          {status}
                        </button>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Actions;
