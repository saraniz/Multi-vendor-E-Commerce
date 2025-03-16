import React, { useState } from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import AdminNavbar from '../../Components/Body/AdminNavbar';

function Customerlist() {
  // Sample data, replace with actual backend data
  const [customers, setCustomers] = useState([
    { id: 1, name: "Name 1", contact: "16546156", email: "name1@example.com", address: "Colombo", cost: "Rs. 20 000" },
    { id: 2, name: "Kavi", contact: "7657657", email: "kavi@example.com", address: "Kandy", cost: "Rs. 50 500" },
    { id: 3, name: "Adam", contact: "4637535", email: "adam@example.com", address: "Galle", cost: "Rs. 1000" },
    { id: 4, name: "John", contact: "4536445", email: "john@example.com", address: "Negombo", cost: "Rs. 10 000" },
    { id: 5, name: "Amal", contact: "7865765", email: "amal@example.com", address: "Jaffna", cost: "Rs. 0" },
    { id: 6, name: "Cathy", contact: "574634", email: "cathy@example.com", address: "Matara", cost: "Rs. 65 600" },
    
  ]);

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <AdminNavbar />

        {/* Main content */}
        <div className="flex-1 p-6">
          <h2 className="mb-4 text-2xl font-bold">Customer List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow-md">
              <thead>
                <tr className="text-left text-white bg-gray-800">
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Contact No</th>
                  <th className="px-4 py-2 border">E-mail</th>
                  <th className="px-4 py-2 border">Address</th>
                  <th className="px-4 py-2 border">Monthly Cost</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="text-center border">
                    <td className="flex items-center gap-2 px-4 py-2 border">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                      />
                      {customer.name}
                    </td>
                    <td className="px-4 py-2 border">{customer.contact}</td>
                    <td className="px-4 py-2 border">{customer.email}</td>
                    <td className="px-4 py-2 border">{customer.address}</td>
                    <td className="px-4 py-2 border">{customer.cost}</td>
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

export default Customerlist;
