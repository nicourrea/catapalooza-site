import React, { useEffect, useState } from 'react';
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { motion } from 'framer-motion'; // Import framer-motion

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
    <div className="max-w-6xl mx-auto px-6 py-12 pt-32 text-gray-800">
      {/* Updated How to Adopt Section */}
      <div className="mb-20 bg-[#f0f7fb] p-8 rounded-xl shadow-md">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#1D3557]">How to Adopt</h2>
        <p className="text-lg text-[#1D3557] mb-6 text-center">
          Looking to add a furry friend to your family? Here’s how to start your journey:
        </p>
        <div className="space-y-4 text-md text-[#1D3557] leading-relaxed max-w-3xl mx-auto">
          <p>🐾 <strong>Find your match:</strong> Browse through our adoptable cats below.</p>
          <p>🔗 <strong>Learn more:</strong> Click <span className="text-[#277DA1] font-semibold">"View on Wagtopia"</span> on their card to see more photos and details.</p>
          <p>📝 <strong>Apply:</strong> If you're ready, hit the <span className="font-semibold">Adopt</span> button on Wagtopia and fill out the short application.</p>
          <p>📬 <strong>Connect:</strong> Our team will reach out to schedule a meet-and-greet and help you welcome your new companion home.</p>
        </div>
      </div>

      {/* Cat Listing Section */}
      <h1 className="text-4xl font-bold text-center mb-10 text-[#1D3557]">Meet Our Cats</h1>
      {loading ? (
        <p className="text-center">Loading cats...</p>
      ) : cats.length === 0 ? (
        <p className="text-center">No cats available right now.</p>
      ) : (
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {cats.map((cat) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="bg-white rounded-xl shadow p-4 text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={cat.imageUrl}
                alt={cat.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-1 text-[#1D3557]">{cat.name}</h2>
              {/* NEW: Bold gray line for sex – age – breed */}
              {(cat.sex || cat.age || cat.breed) && (
                <p className="text-sm font-semibold text-gray-600 mb-2">
                  {cat.sex} {cat.age && `– ${cat.age}`} {cat.breed && `– ${cat.breed}`}
                </p>
              )}
              <p className="text-sm text-gray-700 mb-3">{cat.description}</p>
              {cat.adoptLink && (
                <a
                  href={cat.adoptLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#277DA1] font-semibold hover:underline"
                >
                  View on Wagtopia →
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Cats;