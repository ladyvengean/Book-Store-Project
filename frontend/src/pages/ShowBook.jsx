// File: src/pages/ShowBook.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';

const ShowBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`https://book-store-project-9zfd.onrender.com/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!book) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-soft border border-pastelPink w-[90%] md:w-[500px] font-sans">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-rose text-xl font-semibold mb-1">{book.title}</h2>
            <p className="text-gray-500 text-sm mb-2">ID: {book._id}</p>
            <p className="text-rose-500 font-medium">Author: {book.author}</p>
            <p className="text-rose-400">Published in {book.publishYear}</p>
          </div>
          <button
            className="text-rose-400 hover:text-rose-600 text-xl"
            onClick={() => navigate(-1)}
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className="mt-4 text-gray-700">
          <p className="italic">No description available.</p>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;