import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("🔑 Attempting login with:", email);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Logged in:", userCredential.user.email);
      setError('');
      navigate('/upload'); // redirect on success
    } catch (err) {
      console.error("❌ Firebase Auth Error:", err.code, err.message);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="pt-32 max-w-md mx-auto text-center text-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-[#277DA1]">Admin Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#277DA1] text-white px-6 py-2 rounded hover:bg-[#1D3557] w-full"
        >
          Log In
        </button>
      </form>
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
}