import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response)=>{
        console.log('Post Deleted: ', response.data);
        navigate('/');
      }).catch(error=>{
         console.log('Error deleting post :', error);
      });
  }

  return (

    <div className='flex justify-center mt-10'>
      <div className='bg-white w-full max-w-lg text-center rounded-xl shadow-lg p-8 border-x-4 border-indigo-500 border-y-2 border-indigo-500'>

        <h2 className='bg-green-400 text-2xl font-bold text-gray-800  mb-6 text-center rounded-full mb-10'>Delete Post</h2>
        <p className='text-gray-600 text-md font-semibold mb-6'>Are you sure, you want to delete this post? 
          <div>Confirm your action because this action cannot be undone.</div></p>

        <div className='flex gap-3 mt-10'>

          <button onClick={handleDelete}
            className='flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'>
            Delete Post
          </button>

          <button onClick={()=>navigate('/')}
            className='flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
            Cancel
          </button>

        </div>
      </div>

    </div>

  )
}

export default Delete
