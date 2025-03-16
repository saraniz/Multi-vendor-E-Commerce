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
        <h1 className='text-[50px] pt-10 font-semibold pl-[120px]'>THIS PAGE IS IN UNDER CONSTRUCTION</h1>
      </div>
      <Footer />
    </div>
  )
}

export default AdminDashboard;