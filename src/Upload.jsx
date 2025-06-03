import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase";
import UploadCat from './UploadCat';
import UploadEventForm from './UploadEventForm';
import { useNavigate } from 'react-router-dom';


const Upload = () => {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('cat');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
        navigate('/login'); // 👈 redirect to login if not authenticated
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return (
      <div className="pt-32 text-center text-gray-800">
        <p className="text-xl">Redirecting to login...</p>
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