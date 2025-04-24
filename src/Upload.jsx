import React, { useState } from 'react';
import UploadCat from './UploadCat';
import UploadEventForm from './UploadEventForm';

const Upload = () => {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [view, setView] = useState('cat');
  const [status, setStatus] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setAuthorized(true);
      setStatus('');
    } else {
      setStatus('Incorrect password');
    }
  };

  if (!authorized) {
    return (
      <div className="max-w-sm mx-auto py-32 text-center text-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-[#277DA1]">Admin Login</h2>
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          <button type="submit" className="bg-[#277DA1] text-white px-6 py-2 rounded hover:bg-[#1D3557]">
            Enter
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-red-600">{status}</p>}
      </div>
    );
  }

  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setView('cat')}
          className={`px-4 py-2 rounded font-semibold transition ${
            view === 'cat' ? 'bg-[#277DA1] text-white' : 'bg-gray-200 text-[#1D3557]'
          }`}
        >
          Upload Cat
        </button>
        <button
          onClick={() => setView('event')}
          className={`px-4 py-2 rounded font-semibold transition ${
            view === 'event' ? 'bg-[#277DA1] text-white' : 'bg-gray-200 text-[#1D3557]'
          }`}
        >
          Upload Event
        </button>
      </div>

      {view === 'cat' ? <UploadCat /> : <UploadEventForm />}
    </div>
  );
};

export default Upload;