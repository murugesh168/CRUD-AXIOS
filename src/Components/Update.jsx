import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


function Update() {
  const {id} = useParams();
  const [title, setTitle] = useState(" ");
  const [body, setBody] = useState(" ");
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response =>{
      setTitle(response.data.title);
      setBody(response.data.body);
    }).catch(error =>{
      console.log("Error fetching Post :",error)
    })
  },[id]);
  
  const handleUpdate = async () =>{
    await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      title,
      body
    }).then(response =>{
      console.log("Post Updated :",response.data);
      navigate('/');
    }).catch(error =>{
      console.log("Error Updating Posts :", error);
    });
  }  
  return (
  <div className='flex justify-center mt-10'>
      <div className='bg-white w-full max-w-lg rounded-xl shadow-lg p-8 border-x-4 border-indigo-500 border-y-2 border-indigo-500'>

        <h2 className='bg-green-400 text-2xl font-bold text-gray-800  mb-6 text-center rounded-full'> Update Post </h2>

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

          <button onClick={handleUpdate}
            className='flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-semibold'>
            Update
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

export default Update
