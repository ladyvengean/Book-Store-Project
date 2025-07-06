import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditBook = () => {
  const [form, setForm] = useState({ title: '', author: '', publishYear: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5555/books/${id}`)
      .then(res => setForm(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5555/books/${id}`, form)
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pastelPink font-sans">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-soft border border-pastelPink w-full max-w-md">
        <h2 className="text-2xl font-semibold text-rose mb-4">Edit Book</h2>
        <label className="block mb-2 text-rose font-medium">Title</label>
        <input
          className="w-full mb-4 p-2 border border-rose-200 rounded"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <label className="block mb-2 text-rose font-medium">Author</label>
        <input
          className="w-full mb-4 p-2 border border-rose-200 rounded"
          name="author"
          value={form.author}
          onChange={handleChange}
          required
        />

        <label className="block mb-2 text-rose font-medium">Publish Year</label>
        <input
          className="w-full mb-6 p-2 border border-rose-200 rounded"
          name="publishYear"
          value={form.publishYear}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-rose text-white p-2 rounded hover:bg-rose-600"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;