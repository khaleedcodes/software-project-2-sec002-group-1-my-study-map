import React, { useState } from "react";

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">
        {isLogin ? "Login" : "Signup"}
      </h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button
        onClick={() => onSubmit(email, password)}
        className="w-full p-2 bg-blue-600 text-white rounded"
      >
        {isLogin ? "Login" : "Signup"}
      </button>
    </div>
  );
};

export default AuthForm;
