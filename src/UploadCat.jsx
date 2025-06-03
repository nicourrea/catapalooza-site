import React, { useState, useEffect } from 'react';
import { storage, db } from './firebase';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, addDoc, Timestamp, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from 'firebase/firestore';

const UploadCat = () => {
  const [catName, setCatName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [description, setDescription] = useState('');
  const [adoptLink, setAdoptLink] = useState('');
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState('');
  const [cats, setCats] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchCats = async () => {
      const q = query(collection(db, 'cats'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const catList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCats(catList);
    };
    fetchCats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!catName || !sex || !age || !breed || !description || (!image && !editingId) || !adoptLink) {
      setStatus('Please fill out all fields.');
      return;
    }

    try {
      if (editingId) {
        const catDoc = doc(db, 'cats', editingId);
        let updateData = { name: catName, sex, age, breed, description, adoptLink };

        if (image) {
          const imageRef = ref(storage, `cats/${Date.now()}_${image.name}`);
          await uploadBytes(imageRef, image);
          const imageUrl = await getDownloadURL(imageRef);
          updateData.imageUrl = imageUrl;
          updateData.imagePath = imageRef.fullPath;
        }

        await updateDoc(catDoc, updateData);
        setStatus('✅ Cat updated successfully!');
      } else {
        const imageRef = ref(storage, `cats/${Date.now()}_${image.name}`);
        await uploadBytes(imageRef, image);
        const imageUrl = await getDownloadURL(imageRef);

        await addDoc(collection(db, 'cats'), {
          name: catName,
          sex,
          age,
          breed,
          description,
          adoptLink,
          imageUrl,
          imagePath: imageRef.fullPath,
          createdAt: Timestamp.now(),
        });
        setStatus('✅ Cat uploaded successfully!');
      }

      setCatName('');
      setSex('');
      setAge('');
      setBreed('');
      setDescription('');
      setAdoptLink('');
      setImage(null);
      setEditingId(null);

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

  const handleEdit = (cat) => {
    setCatName(cat.name);
    setSex(cat.sex);
    setAge(cat.age);
    setBreed(cat.breed);
    setDescription(cat.description);
    setAdoptLink(cat.adoptLink);
    setEditingId(cat.id);
    setStatus('Editing mode enabled. Update and submit.');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#277DA1]">
        {editingId ? 'Edit Cat' : 'Upload a Cat for Adoption'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Cat's Name"
          value={catName}
          onChange={(e) => setCatName(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />

        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input type="radio" value="Male" checked={sex === 'Male'} onChange={(e) => setSex(e.target.value)} />
            <span>Male</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" value="Female" checked={sex === 'Female'} onChange={(e) => setSex(e.target.value)} />
            <span>Female</span>
          </label>
        </div>

        <input
          type="text"
          placeholder="Age (e.g. 7 months)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />

        <input
          type="text"
          placeholder="Breed (e.g. DSH)"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 h-24"
        />

        <input
          type="url"
          placeholder="Adoption Link (Wagtopia)"
          value={adoptLink}
          onChange={(e) => setAdoptLink(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="block"
        />

        <button type="submit" className="bg-[#277DA1] text-white px-6 py-2 rounded hover:bg-[#1D3557]">
          {editingId ? 'Update Cat' : 'Upload Cat'}
        </button>

        {status && <p className="mt-4 text-sm text-center">{status}</p>}
      </form>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#1D3557]">Manage Uploaded Cats</h2>
        {cats.length === 0 ? (
          <p className="text-center text-gray-500">No cats available.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cats.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl shadow p-4 text-center">
                <img src={cat.imageUrl} alt={cat.name} className="w-full h-60 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-1 text-[#1D3557]">{cat.name}</h3>
                <p className="text-sm font-semibold text-gray-600 mb-1">
                  {cat.sex} – {cat.age} – {cat.breed}
                </p>
                <p className="text-sm mb-2 text-gray-700">{cat.description}</p>
                {cat.adoptLink && (
                  <a
                    href={cat.adoptLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#277DA1] underline text-sm block mb-3"
                  >
                    View on Wagtopia
                  </a>
                )}
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => handleEdit(cat)}
                    className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(cat.id, cat.imagePath)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadCat