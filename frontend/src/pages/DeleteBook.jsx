// File: src/pages/DeleteBook.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios.get(`https://book-store-project-9zfd.onrender.com/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => {
        console.error(err);
        enqueueSnackbar('Failed to fetch book.', { variant: 'error' });
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        enqueueSnackbar('Book deleted successfully.', { variant: 'success' });
        navigate('/');
      })
      .catch(err => {
        console.error(err);
        enqueueSnackbar('Failed to delete book.', { variant: 'error' });
      });
  };

  if (!book) return <div className="text-center mt-10 font-sans text-rose-500">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-pastelPink font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-soft border border-pastelPink w-full max-w-md text-center">
        <h2 className="text-2xl text-rose font-semibold mb-4">Delete Book</h2>
        <p className="text-gray-700 mb-4">Are you sure you want to delete <span className="font-bold text-rose-600">{book.title}</span>?</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleDelete}
            className="bg-rose text-white px-4 py-2 rounded hover:bg-rose-600"
          >
            Yes, Delete
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-200 text-rose px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;

