import { useState } from "react";

export default function Profile() {
  // Dummy user data (Replace with API data in the future)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Student",
    profileImage: "https://via.placeholder.com/100", // Replace with real user image URL
    gpa: 3.75,
  });

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">Profile</h2>

        {/* Profile Image & Name */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-primary"
          />
          <h3 className="text-xl font-semibold mt-2">{user.name}</h3>
          <p className="text-gray-500 dark:text-gray-300">{user.email}</p>
          <span className="px-4 py-1 mt-2 text-sm bg-secondary text-white rounded-lg">
            {user.role}
          </span>
        </div>

        {/* Academic Progress */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Academic Progress</h3>
          <p className="mt-2">
            <strong>GPA:</strong> {user.gpa}
          </p>
        </div>

        {/* Edit Profile */}
        <div className="mb-6">
          <button className="w-full p-3 bg-primary text-white rounded-md hover:bg-blue-600">
            Edit Profile
          </button>
        </div>

        {/* Change Password */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Change Password</h3>
          <input
            type="password"
            placeholder="Current Password"
            className="w-full p-3 mt-2 border rounded-md focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-3 mt-2 border rounded-md focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
          />
          <button className="w-full mt-4 p-3 bg-secondary text-white rounded-md hover:bg-blue-500">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
