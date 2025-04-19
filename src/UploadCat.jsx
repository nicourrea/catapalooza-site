// src/UploadCat.jsx
import React, { useState, useEffect } from 'react';
import { storage, db } from './firebase';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, addDoc, Timestamp, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';

const UploadCat = () => {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [catName, setCatName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState('');
  const [cats, setCats] = useState([]);

  // Fetch cats for admin view
  useEffect(() => {
    if (authorized) {
      const fetchCats = async () => {
        const q = query(collection(db, 'cats'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const catList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCats(catList);
      };
      fetchCats();
    }
  }, [authorized]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setAuthorized(true);
      setStatus('');
    } else {
      setStatus('Incorrect password');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!catName || !description || !image) {
      setStatus('Please fill out all fields and select an image.');
      return;
    }

    try {
      const imageRef = ref(storage, `cats/${Date.now()}_${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, 'cats'), {
        name: catName,
        description,
        imageUrl,
        imagePath: imageRef.fullPath,
        createdAt: Timestamp.now(),
      });

      setStatus('✅ Cat uploaded successfully!');
      setCatName('');
      setDescription('');
      setImage(null);

      // Refresh list
      const snapshot = await getDocs(collection(db, 'cats'));
      setCats(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error('Upload failed:', error);
      setStatus('❌ Upload failed. Please try again.');
    }
  };

  const handleDelete = async (id, imagePath) => {
    try {
      await deleteDoc(doc(db, 'cats', id));
      await deleteObject(ref(storage, imagePath));
      setCats(prev => prev.filter(cat => cat.id !== id));
    } catch (err) {
      console.error('Error deleting cat:', err);
    }
  };

  if (!authorized) {
    return (
      <div className="max-w-sm mx-auto py-32 text-center text-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Admin Login</h2>
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Enter
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-red-600">{status}</p>}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 pt-32 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">
        Upload a Cat for Adoption
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Cat's Name"
          value={catName}
          onChange={(e) => setCatName(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 h-32"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="block"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
        >
          Upload Cat
        </button>
        {status && <p className="mt-4 text-sm text-center">{status}</p>}
      </form>

      {/* Admin Cat List */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Manage Uploaded Cats</h2>
        {cats.length === 0 ? (
          <p className="text-center text-gray-500">No cats available.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cats.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl shadow p-4 text-center">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-1">{cat.name}</h3>
                <p className="text-sm mb-3 text-gray-700">{cat.description}</p>
                <button
                  onClick={() => handleDelete(cat.id, cat.imagePath)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadCat;