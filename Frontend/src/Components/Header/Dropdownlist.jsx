import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiEdit, FiSettings, FiLogOut } from "react-icons/fi";

function Dropdownlist({ user, handleLogout }) {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    return (
        <div>
            <div className="relative">
                <button
                    className="flex items-center space-x-2 group focus:outline-none"
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                >
                    <div className="flex items-center justify-center overflow-hidden border-2 border-white rounded-full shadow w-9 h-9 bg-gradient-to-br from-blue-100 to-purple-100">
                        <img
                            src={
                                user?.profileImage ||
                                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDov..."
                            }
                            alt="Profile"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="hidden text-right sm:block">
                        <p className="text-sm font-medium text-gray-700 truncate max-w-[120px]">
                            {user?.fullName || user?.f_name || user?.name || "User"}
                        </p>
                    </div>

                    <FiChevronDown
                        className={`text-gray-400 transition-transform ${showProfileDropdown ? "rotate-180" : ""
                            }`}
                    />
                </button>

                {showProfileDropdown && (
                    <div className="absolute right-0 z-20 w-56 py-1 mt-2 bg-white border border-gray-100 divide-y divide-gray-100 rounded-md shadow-lg">
                        <div className="px-4 py-3">
                            <p className="text-sm font-medium text-gray-900 truncate">
                                {user?.fullName || user?.f_name || "User"}
                            </p>
                            <p className="text-xs text-gray-500 truncate">{user?.email || ""}</p>
                        </div>

                        <div className="py-1">
                            <Link
                                to="/EditProfile"
                                className="flex items-center px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                                onClick={() => setShowProfileDropdown(false)}
                            >
                                <FiEdit className="mr-3 text-gray-400" />
                                Edit Profile
                            </Link>
                        </div>

                        <div className="py-1">
                            <Link
                                to="/BusinessRegistrationForm"
                                className="flex items-center px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                                onClick={() => setShowProfileDropdown(false)}
                            >
                                <FiSettings className="mr-3 text-gray-400" />
                                Become a Seller
                            </Link>
                        </div>

                        <div className="py-1">
                            <button
                                onClick={() => {
                                    setShowProfileDropdown(false);
                                    handleLogout?.();
                                }}
                                className="flex items-center w-full px-4 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
                            >
                                <FiLogOut className="mr-3 text-red-400" />
                                Sign out
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dropdownlist;
