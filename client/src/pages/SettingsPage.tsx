import { useState } from "react";

export default function Settings() {
  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);
  // State for notification preferences
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
  });

  return (
    <div
      className={`min-h-screen p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">Settings</h2>

        {/* Profile Settings */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Profile Settings</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mt-2 border rounded-md focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 mt-2 border rounded-md focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
          />
          <button className="w-full mt-4 p-3 bg-primary text-white rounded-md hover:bg-blue-600">
            Save Changes
          </button>
        </div>

        {/* Notifications */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={() =>
                setNotifications((prev) => ({ ...prev, email: !prev.email }))
              }
              className="h-5 w-5 text-primary"
            />
            <span>Email Notifications</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={notifications.push}
              onChange={() =>
                setNotifications((prev) => ({ ...prev, push: !prev.push }))
              }
              className="h-5 w-5 text-primary"
            />
            <span>Push Notifications</span>
          </label>
        </div>

        {/* Theme Toggle */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Appearance</h3>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full mt-2 p-3 bg-secondary text-white rounded-md hover:bg-blue-500"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        {/* Account Actions */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-red-500">
            Account Actions
          </h3>
          <button className="w-full mt-2 p-3 bg-red-600 text-white rounded-md hover:bg-red-700">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
