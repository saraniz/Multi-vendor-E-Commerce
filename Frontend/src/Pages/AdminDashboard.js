import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import AdminNavbar from '../Components/Body/AdminNavbar';

function AdminDashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <AdminNavbar/>
      </div>
      <Footer />
    </div>
  )
}

export default AdminDashboard;