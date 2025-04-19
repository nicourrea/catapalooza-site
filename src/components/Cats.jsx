// src/Cats.jsx
import React, { useEffect, useState } from 'react';
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const Cats = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const q = query(collection(db, 'cats'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const catList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCats(catList);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching cats:', err);
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 pt-32 text-gray-800"> {/* pt-32 added here */}
      <h1 className="text-4xl font-bold text-center mb-10">Meet Our Cats</h1>
      {loading ? (
        <p className="text-center">Loading cats...</p>
      ) : cats.length === 0 ? (
        <p className="text-center">No cats available right now.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cats.map(cat => (
            <div key={cat.id} className="bg-white rounded-xl shadow p-4 text-center">
              <img
                src={cat.imageUrl}
                alt={cat.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{cat.name}</h2>
              <p className="text-sm text-gray-700">{cat.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cats;