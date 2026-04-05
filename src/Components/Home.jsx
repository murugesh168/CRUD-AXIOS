import React, {useState, useEffect} from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'

function Home() {
    const[posts,setPosts] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
           setPosts(response.data)
        }).catch(error =>{
            console.log("Error fetching posts",error);
        })
    },[])

  return (
    <div>
      <h2 className='font-semibold text-center text-3xl bg-green-400 text-gray-800  mx-20 mt-20 rounded-full'>POSTS</h2>

      <div className='space-y-4 mt-4'>
        {posts.map(post =>(
            <div key={post.id} className='p-5 rounded-lg shadow-xl border-x-4 border-indigo-500 border-y-2 border-indigo-500'>
                <h3 className='text-2xl font-semibold'>{post.title}</h3>
                <i className='text-gray-700 text-lg'>{post.body}</i>

                <div className='mt-3'>
                    <Link to={`/update/${post.id}`} 
                    className='bg-blue-500 hover:bg-blue-600 px-4 py-2  text-white rounded-lg'>Update</Link>
                    <Link to={`/delete/${post.id}`} 
                    className='bg-red-500 hover:bg-red-600 px-4 py-2 m-3 text-white rounded-lg'>Delete</Link>
                </div>
            </div>
        ))}
          <div className='mt-6'>
            <Link to='/create' className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 ml-5 mt-3 rounded-lg'>Create Post</Link>
          </div>
      </div>
    </div>
  )
}

export default Home
