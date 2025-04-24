import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  Timestamp,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

const UploadEventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const q = query(collection(db, "Events"), orderBy("date", "asc"));
      const snapshot = await getDocs(q);
      setEvents(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchEvents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !location || !time || !date) {
      setStatus("Please fill out all fields.");
      return;
    }

    try {
      const startTime = time.split("-")[0].trim();
      const [hour, minutePart] = startTime.split(":");
      const minute = minutePart.match(/\d+/)[0];
      const isPM = startTime.toLowerCase().includes("pm");
      const hour24 = (parseInt(hour) % 12) + (isPM ? 12 : 0);

      const eventDate = new Date(date);
      eventDate.setHours(hour24);
      eventDate.setMinutes(parseInt(minute));
      eventDate.setSeconds(0);

      if (isNaN(eventDate.getTime())) {
        throw new Error("Invalid date");
      }

      const dateTimestamp = Timestamp.fromDate(eventDate);

      if (editingId) {
        await updateDoc(doc(db, "Events", editingId), {
          title,
          description,
          location,
          time,
          date: dateTimestamp,
        });
        setStatus("✅ Event updated successfully!");
        setEditingId(null);
      } else {
        await addDoc(collection(db, "Events"), {
          title,
          description,
          location,
          time,
          date: dateTimestamp,
        });
        setStatus("✅ Event uploaded successfully!");
      }

      setTitle("");
      setDescription("");
      setLocation("");
      setTime("");
      setDate("");

      const snapshot = await getDocs(collection(db, "Events"));
      setEvents(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Event upload failed:", error);
      setStatus("❌ Upload failed. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Events", id));
      setEvents((prev) => prev.filter((event) => event.id !== id));
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  const handleEdit = (event) => {
    setEditingId(event.id);
    setTitle(event.title);
    setDescription(event.description);
    setLocation(event.location);
    setTime(event.time);
    setDate(new Date(event.date.seconds * 1000).toISOString().split("T")[0]);
  };

  return (
    <div className="mt-10 text-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#277DA1]">Upload an Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 h-24"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="text"
          placeholder="Time (e.g. 5:00 PM - 8:00 PM)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <div className="flex items-center gap-4">
          <button type="submit" className="bg-[#277DA1] text-white px-6 py-2 rounded hover:bg-[#1D3557]">
            {editingId ? "Update Event" : "Upload Event"}
          </button>
          {editingId && (
            <button
              onClick={() => {
                setEditingId(null);
                setTitle("");
                setDescription("");
                setLocation("");
                setTime("");
                setDate("");
              }}
              type="button"
              className="text-sm text-red-600 underline"
            >
              Cancel Edit
            </button>
          )}
        </div>
        {status && <p className="mt-4 text-sm text-center">{status}</p>}
      </form>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#1D3557]">Manage Uploaded Events</h2>
        {events.length === 0 ? (
          <p className="text-center text-gray-500">No events available.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow p-4 text-center">
                <h3 className="text-xl font-bold mb-1 text-[#1D3557]">{event.title}</h3>
                <p className="text-sm font-semibold text-gray-600 mb-1">
                  {event.location} – {event.time}
                </p>
                <p className="text-sm mb-2 text-gray-700">{event.description}</p>
                <p className="text-xs text-gray-500">
                  {new Date(event.date.seconds * 1000).toLocaleDateString()}
                </p>
                <div className="flex justify-center gap-2 mt-3">
                  <button
                    onClick={() => handleEdit(event)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
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

export default UploadEventForm;
