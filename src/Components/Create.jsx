import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
      await axios.post("https://jsonplaceholder.typicode.com/posts",{
        title,
        body,
        userId : 1
      }).then(response => {
        console.log("Post Created", response.data);
        navigate('/');
      }).catch(error => {
        console.log("Error Occured During Creating Post", error);
      })
  };

  return (
    <div className='flex justify-center mt-10'>
      <div className='bg-white w-full max-w-lg rounded-xl shadow-lg p-8 border-x-4 border-indigo-500 border-y-2 border-indigo-500'>

        <h2 className='bg-green-400 text-2xl font-bold text-gray-800  mb-6 text-center rounded-full'> Create New Post </h2>

        <div className='mb-4'>
          <label className='block text-md font-semibold text-gray-600 mb-1'>Title : </label>
          <input type='text' placeholder='Enter post title' value={title} onChange={(e) => setTitle(e.target.value)}
            className='w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </div>

        <div className='mb-6'>
          <label className='block text-md font-semibold text-gray-600 mb-1'>Body : </label>
          <textarea placeholder='Write post content here...' value={body} onChange={(e) => setBody(e.target.value)} rows={5}
            className='w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none'
          />
        </div>

        <div className='flex gap-3'>

          <button onClick={handleSubmit}
            className='flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition font-semibold'>
            Submit Post
          </button>

          <button onClick={() => navigate('/')}
            className='flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'>
            Cancel
          </button>

        </div>

      </div>
    </div>
  )
}

export default Create
